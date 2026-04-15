/**
 * SearchBar component for filtering users by name
 * Provides a clean search interface with debounced input
 */

import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  /** Callback when search query changes */
  onSearch: (query: string) => void;
}

/**
 * SearchBar - A search input component with icon
 * Triggers onSearch callback on every keystroke (handled by debounce in parent)
 */
const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState<string>('');

  /**
   * Handles input change and propagates search query to parent
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="rounded-[1.25rem] border border-input bg-background px-4 py-3 shadow-sm shadow-muted/20">
      <label className="flex items-center gap-3 text-sm text-muted-foreground">
        <Search className="h-4 w-4 text-primary" />
        <span className="sr-only">Search users</span>
        <input
          type="text"
          placeholder="Search users by name..."
          value={query}
          onChange={handleChange}
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          aria-label="Search users by name"
        />
      </label>
    </div>
  );
};

export default SearchBar;