# User Dashboard

A modern, fully-featured **User Dashboard** application built with React, TypeScript, and Vite.

## ✨ Features

- **User List Display**: View all users from JSONPlaceholder API with Name, Email, and Company information
- **Search Functionality**: Real-time search by user name with 300ms debounce optimization
- **User Details Modal**: Click any user to view complete information in a modal with truncated text and tooltips
- **Pagination**: Browse users with 5 items per page and intuitive navigation controls
- **Data Caching**: Intelligent caching system (5-minute TTL) to avoid unnecessary API calls
- **Loading & Error States**: Proper handling of async operations with user feedback
- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop
- **React 18** with **TypeScript** for type-safe development
- **Vite** for lightning-fast development server and optimized builds
- **Atomic Design Architecture** with modular component structure
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for accessible, pre-built UI components
- **ESLint** for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI elements (Button, Card, Dialog, Table)
│   ├── molecules/      # Composed components (SearchBar, UserList)
│   ├── organisms/      # Complex components (DashboardHeader, UserDetailModal)
│   ├── templates/      # Page layouts (DashboardTemplate)
│   └── ui/             # shadcn components
├── pages/              # Page-level components (Home.tsx)
├── services/           # API integration (userService.ts)
├── hooks/              # Custom React hooks (useDebounce.ts)
├── assets/             # Images, fonts, styles
├── lib/                # Utility functions
└── main.tsx            # Application entry point
```

## 🚀 Getting Started Locally

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **Yarn** - [Download/Install](https://yarnpkg.com/)

Check your installation:
```bash
node --version
yarn --version
```

### Installation Steps

1. **Clone the repository** and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd User-Manager-Web
   ```

2. **Install project dependencies**:
   ```bash
   yarn install
   ```

### Running the Development Server

Start the development server with hot-module replacement (HMR):

```bash
yarn dev
```

The application will be available at: **http://localhost:5173**

**What happens:**
- Vite starts a local development server on port 5173
- The browser automatically reloads when you save changes (HMR)
- API requests are proxied to JSONPlaceholder API via Vite configuration
- Open DevTools to see cache behavior and API calls (Console tab)

### Building for Production

Create an optimized production build:

```bash
yarn build
```

This runs:
1. TypeScript compiler (`tsc -b`) - Type checking and compilation
2. Vite build - Minification, bundling, and optimization

Output is saved to the `dist/` folder.

### Preview Production Build

Preview the production build locally before deployment:

```bash
yarn preview
```

The preview will be available at **http://localhost:4173**

### Code Quality

**Run ESLint** to check for code issues:
```bash
yarn lint
```

## 🎯 Key Features Explained

### Search with Debounce
- Type in the search bar to filter users by name
- Input is debounced at 300ms to optimize filtering performance
- Search resets pagination to page 1 automatically

### Pagination
- Users are displayed 5 per page
- Navigation buttons (Previous, Next) allow browsing through pages
- Current page is highlighted in the pagination control
- Search results are paginated automatically

### Data Caching
- User data is cached for 5 minutes after the first fetch
- Subsequent requests within 5 minutes return cached data
- Cache automatically refreshes after 5 minutes
- Clear cache by refreshing the page or using the cache clear function

### Responsive Design
- Statistics cards stack on mobile, display in 3 columns on desktop
- Search bar and status indicator adapt to screen size
- Table columns wrap appropriately on smaller screens
- Pagination controls remain accessible on all screen sizes

## 📋 API Integration

This application fetches user data from the **JSONPlaceholder API**:

**Base URL**: `https://jsonplaceholder.typicode.com`  
**Endpoint**: `/users`  
**Method**: GET  
**Response**: Array of 10 user objects

**Proxy Configuration**: 
Vite is configured to proxy `/api` requests to JSONPlaceholder, bypassing CORS issues. See `vite.config.ts` for details.

## 🧪 Browser DevTools Tips

1. **Check Cache Behavior**:
   - Open DevTools Console
   - Look for log messages: "Returning cached users" or "Users fetched from API and cached"
   - This shows when cache hits occur vs. fresh fetches

2. **Network Tab**:
   - First load fetches from API
   - Subsequent loads (within 5 min) use cache

3. **Application Tab**:
   - No IndexedDB is used; caching is in-memory with JavaScript variables

## 🛠️ Available Commands

All available yarn scripts:

| Command | Description |
|---------|-------------|
| `yarn dev` | Start Vite development server with HMR (http://localhost:5173) |
| `yarn build` | Type-check code and build optimized production bundle |
| `yarn preview` | Preview the production build locally (http://localhost:4173) |
| `yarn lint` | Run ESLint to check and fix code issues |

### Development Workflow

**Typical flow while developing:**

```bash
# 1. Start the dev server
yarn dev

# 2. Open browser at http://localhost:5173

# 3. Edit files and see changes instantly (HMR enabled)

# 4. Check code quality
yarn lint

# 5. When ready to deploy, build for production
yarn build

# 6. Test production build locally
yarn preview
```

## 🐛 Troubleshooting

### Common Issues and Solutions

**Issue**: Port 5173 is already in use
```bash
# Vite will automatically use the next available port
# Or specify a custom port:
yarn dev --port 3000
```

**Issue**: Dependencies not installing properly
```bash
# Clear yarn cache and reinstall
yarn cache clean
rm -rf node_modules yarn.lock
yarn install
```

**Issue**: Build fails with TypeScript errors
```bash
# Ensure all files are type-safe
yarn build  # Shows detailed error messages
```

**Issue**: Changes not reflecting in browser
```bash
# Clear browser cache (Ctrl+Shift+Del)
# Or hard refresh (Ctrl+Shift+R on Windows/Linux, Cmd+Shift+R on Mac)
# Stop dev server and restart: yarn dev
```

**Issue**: API calls failing (CORS errors)
- The project uses Vite proxy configuration to bypass CORS
- Ensure `vite.config.ts` has the `/api` proxy rule configured
- Check network tab in DevTools to see if requests are being proxied correctly

## 📞 Support & Questions

For issues or questions:
1. Check the browser console for error messages
2. Review network requests in DevTools
3. Verify all dependencies are installed: `yarn install`
4. Ensure Node.js version is v16+: `node --version`

## 📄 License

This project is provided as-is for educational and assessment purposes.

---

**Last Updated**: April 2025  
**Node Version**: v16.0.0+  
**Package Manager**: Yarn
