/**
 * DashboardHeader - Navigation and title header for dashboard pages
 *
 * Displays page title, description, and breadcrumb navigation.
 * Uses semantic HTML with proper accessibility attributes.
 *
 * @component
 * @example
 * <DashboardHeader
 *   title="Quản lý người dùng"
 *   description="Duyệt người dùng, tìm kiếm nhanh và xem chi tiết thông tin"
 * />
 */

interface DashboardHeaderProps {
  /** Page title displayed as main heading */
  title: string;
  /** Description text displayed below title */
  description: string;
}

/**
 * Renders dashboard header with title and description
 * @param props - Component props
 * @returns Rendered header component
 */
const DashboardHeader = ({ title, description }: DashboardHeaderProps) => {
  return (
    <header className="border-b border-border bg-muted/70 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
