/**
 * Home - Main dashboard for user management
 * Fetches users from API and provides search, filtering, and detail view
 */

import { useState, useEffect } from 'react';
import { fetchUsers } from '@/services/userService';
import type { User } from '@/services/userService';
import { useDebounce } from '@/hooks/useDebounce';
import SearchBar from '@/components/molecules/SearchBar';
import UserList from '@/components/organisms/UserList';
import UserDetailModal from '@/components/organisms/UserDetailModal';
import DashboardTemplate from '@/components/templates/DashboardTemplate';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/atoms/card';
import { Button } from '@/components/atoms/button';

const SEARCH_DEBOUNCE_DELAY = 300;
const ITEMS_PER_PAGE = 5;

interface StatCardProps {
  title: string;
  subtitle: string;
  value: number | string;
}

/**
 * Displays a statistics card with title, subtitle, and value
 * @param props.title - Card title
 * @param props.subtitle - Card description
 * @param props.value - Main displayed value
 */
const StatCard = ({ title, subtitle, value }: StatCardProps) => (
  <Card className="border-border bg-card/80 shadow-sm">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{subtitle}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-3xl font-semibold text-foreground">{value}</p>
    </CardContent>
  </Card>
);

const Home = () => {
  // State management for users and search
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Debounced search query to optimize filtering
  const debouncedSearchQuery = useDebounce(searchQuery, SEARCH_DEBOUNCE_DELAY);

  // Fetch users on component mount
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load users');
        console.error('Error loading users:', err);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  // Show searching indicator when user types
  useEffect(() => {
    setIsSearching(searchQuery.length > 0);
  }, [searchQuery]);

  // Clear searching indicator when debounced query updates
  useEffect(() => {
    setIsSearching(false);
    setCurrentPage(1); // Reset to first page on new search
  }, [debouncedSearchQuery]);

  // Filter users by name
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalFilteredUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalFilteredUsers / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Calculate statistics
  const totalUsers = users.length;
  const totalCompanies = new Set(users.map((user) => user.company.name)).size;

  // Handle user selection for modal open
  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <DashboardTemplate>
      <div className="space-y-6">
        {/* Statistics cards */}
        <div className="grid gap-4 lg:grid-cols-3">
          <StatCard title="Total users" subtitle={`${totalUsers} users loaded`} value={totalUsers} />
          <StatCard title="Companies" subtitle={`${totalCompanies} unique companies`} value={totalCompanies} />
          <StatCard title="Filtered results" subtitle={debouncedSearchQuery ? `Page ${currentPage} of ${totalPages}` : 'No filters applied'} value={totalFilteredUsers} />
        </div>

        {/* Search and user list section */}
        <div className="rounded-[1.75rem] border border-border bg-background p-6 shadow-sm shadow-muted/10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar onSearch={setSearchQuery} />
            <div className="rounded-3xl border border-input bg-muted/70 px-4 py-3 text-sm text-muted-foreground shadow-sm">
              {isSearching ? 'Searching...' : `Showing ${paginatedUsers.length} of ${totalFilteredUsers} users`}
            </div>
          </div>
          {loading && <div className="text-center py-12 text-sm text-muted-foreground">Loading user data...</div>}
          {error && <div className="rounded-3xl border border-destructive/30 bg-destructive/5 p-6 text-center text-sm text-destructive">Error: {error}</div>}
          {!loading && !error && (
            <>
              <UserList users={paginatedUsers} onUserClick={handleUserClick} />
              
              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="mt-6 flex items-center justify-between gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Detail modal for selected user */}
      <UserDetailModal user={selectedUser} isOpen={isModalOpen} onClose={handleCloseModal} />
    </DashboardTemplate>
  );
};

export default Home;
