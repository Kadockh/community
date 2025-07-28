import { Sidebar } from "./sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
  activeItem?: string;
}

export function AppLayout({ children, activeItem }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} />
      <main className="lg:ml-64">{children}</main>
    </div>
  );
}
