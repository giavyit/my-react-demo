/**
 * UserList component - displays users in a table format
 * Provides an admin-like interface for managing and viewing user information
 */

import type { User } from '@/services/userService';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/atoms/table';
import { Button } from '@/components/atoms/button';

interface UserListProps {
  /** Array of users to display */
  users: User[];
  /** Callback when a user is selected for more details */
  onUserClick: (user: User) => void;
}

/**
 * UserList - Table component for displaying multiple users
 * Shows key user info (name, email, company) with action button
 */
const UserList = ({ users, onUserClick }: UserListProps) => {
  // Show empty state when no users match the search
  if (users.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-muted/60 bg-muted/10 p-10 text-center text-sm text-muted-foreground">
        No users found. Try a different search term.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-muted/50">
            <TableHead className="w-48">Name</TableHead>
            <TableHead className="min-w-64">Email</TableHead>
            <TableHead className="min-w-48">Company</TableHead>
            <TableHead className="w-32 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-muted/70 cursor-pointer">
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="text-muted-foreground">{user.email}</TableCell>
              <TableCell className="text-muted-foreground">{user.company.name}</TableCell>
              <TableCell className="text-center">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onUserClick(user)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserList;