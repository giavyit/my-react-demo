/**
 * DashboardTemplate - Page layout wrapper for dashboard pages
 *
 * Provides consistent header, main content area, and optional sidebar.
 * Uses semantic HTML and Geist font with custom color variables for theming.
 *
 * @component
 * @example
 * <DashboardTemplate
 *   headerTitle="Quản lý người dùng"
 *   headerDescription="Duyệt người dùng..."
 * >
 *   <p>Dashboard content here</p>
 * </DashboardTemplate>
 */

import type { ReactNode } from 'react';
import DashboardHeader from '@/components/organisms/DashboardHeader';

interface DashboardTemplateProps {
  /** Child components to render in main content area */
  children: ReactNode;
  /** Header title - if provided, header will be displayed */
  headerTitle?: string;
  /** Header description text */
  headerDescription?: string;
  /** Optional sidebar content (displayed on the right) */
  sidebar?: ReactNode;
}

/**
 * Renders dashboard layout with optional header and content area
 * @param props - Component props
 * @returns Rendered template component
 */
const DashboardTemplate = ({
  children,
  headerTitle = 'Quản lý người dùng',
  headerDescription = 'Duyệt người dùng, tìm kiếm nhanh và xem chi tiết thông tin ngay lập tức.',
  sidebar,
}: DashboardTemplateProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header section with title and description */}
      <DashboardHeader title={headerTitle} description={headerDescription} />

      {/* Main content area with wider layout */}
      <main className="w-full px-[5%] py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Primary content */}
          <div className="lg:col-span-2 rounded-[2rem] border border-border bg-card p-6 shadow-sm shadow-muted/10">
            {children}
          </div>

          {/* Optional sidebar */}
          {sidebar && (
            <div className="lg:col-span-1">
              {sidebar}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardTemplate;