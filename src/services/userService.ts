/**
 * User service module for handling API calls related to users.
 * Provides type definitions and methods for fetching user data from JSONPlaceholder API.
 */

/**
 * Represents a user in the system with all their information
 */
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

/** API endpoint for users - proxied through Vite */
const API_URL = '/api/users';

/** Cache storage for user data */
let cachedUsers: User[] | null = null;
/** Timestamp of when cache was last updated */
let cacheTimestamp: number | null = null;
/** Cache expiration time in milliseconds (5 minutes) */
const CACHE_DURATION = 5 * 60 * 1000;

/**
 * Fetches all users from the API with caching
 * Uses cached data if available and not expired
 * @returns Promise containing array of User objects
 * @throws Error if the API request fails
 * @example
 * const users = await fetchUsers();
 */
export const fetchUsers = async (): Promise<User[]> => {
  // Check if cache is valid (exists and not expired)
  const now = Date.now();
  if (cachedUsers && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
    console.log('Returning cached users');
    return cachedUsers;
  }

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    
    // Update cache
    cachedUsers = data;
    cacheTimestamp = Date.now();
    console.log('Users fetched from API and cached');
    
    return data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

/**
 * Clears the user data cache
 * @example
 * clearUserCache();
 */
export const clearUserCache = (): void => {
  cachedUsers = null;
  cacheTimestamp = null;
  console.log('User cache cleared');
};