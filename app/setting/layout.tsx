"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Database,
  Dumbbell,
  SettingsIcon,
  ZapIcon,
  User2Icon,
  Users2Icon,
  Plus,
  Search,
  Menu,
  X,
  Sun,
  Moon,
  SlidersVerticalIcon,
  PaletteIcon,
  ArrowLeftIcon,
  LockKeyholeIcon,
  Bell,
  Wallet2Icon,
  Plug2Icon,
} from "lucide-react";

import { Badge, Button, Input, Label } from "@mijn-ui/react";

// -----------------------------
// Reusable NavItem Component
// -----------------------------
function NavItem({
  icon: Icon,
  label,
  active = false,
  badge,
  path,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
  path?: string;
}) {
  return (
    <Link href={path || ""}>
      <Button
        variant={active ? "filled" : "ghost"}
        color={active ? "secondary" : "default"}
        className="w-full flex items-center justify-start gap-3 p-2 rounded-md font-medium mb-1"
      >
        <Icon size={20} />
        <Label className="flex-1 text-left">{label}</Label>
        {badge && (
          <Badge size="sm" variant={active ? "filled" : "subtle"}>
            {badge}
          </Badge>
        )}
      </Button>
    </Link>
  );
}

// -----------------------------
// Main Layout
// -----------------------------
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // -----------------------------
  // THEME HANDLING
  // -----------------------------
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;

    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      // Default: light mode
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const sidebarMenu = [
    { id: 1, label: "General", icon: SlidersVerticalIcon, path: "/setting", title: "General Setting" , description: "Manage your workspace and regional preferences" },
    { id: 2, label: "Appearance", icon: PaletteIcon, path: "/setting/appearance", description: "Customize the look and feel of your workspace" },
    { id: 3, label: "Notifications", icon: Bell, path: "/setting/notification", description: "Configure how you receive notifications" },
    { id: 4, label: "Security", icon: LockKeyholeIcon, path: "/setting/security", title: 'Security & Privacy' , description: "Manage your account security and authentication" },
    { id: 5, label: "Billing & Plans", icon: Wallet2Icon, badge: "Pro", path: "/setting/billing-plan", description: "View and manage your subscription and billing" },
    { id: 5, label: "Integrations", icon: Plug2Icon, path: "/setting/integration", description: "Connect third-party services and manage API access"},
    { id: 5, label: "Advanced", icon: ZapIcon, path: "/setting/advanced", title: "Advanced Settings", description: "Advanced configuration and developer tools" }, 
  ];

  const activeMenu = sidebarMenu.find((menu) => menu.path === pathname);

  return (
    <>
        {/* BACKDROP OVERLAY (Mobile) */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}

        <div className="flex h-screen w-full">

          {/* -------------------------------------- */}
          {/* SIDEBAR */}
          {/* -------------------------------------- */}
          <div
            className={`
              fixed inset-y-0 left-0 z-40 w-64 border-r border-border bg-background
              transform transition-transform duration-200
              ${open ? "translate-x-0" : "-translate-x-full"}
              md:translate-x-0 md:relative md:flex
            `}
          >
            {/* CLOSE BUTTON (Mobile only) */}
            <button
              className="absolute top-4 right-4 md:hidden"
              onClick={() => setOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col h-full overflow-y-auto">

            <Link href={'/project'} className="px-4 pt-2">
              <Button variant="ghost" className="flex gap-5">
                <ArrowLeftIcon size={20} />
                <Label>Back To Dashboard</Label>
              </Button>
            </Link>
            
              {/* Logo/Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-300 rounded-lg flex items-center justify-center">
                    <SettingsIcon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <Label className="text-base font-semibold">Settings</Label>
                    <p className="text-xs text-gray-500">Configure your workspace</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex-1 p-3 space-y-1">
                {sidebarMenu.map((item,index) => {
                  const isActive = pathname === item.path;
                  return (
                    <NavItem
                      key={index}
                      icon={item.icon}
                      label={item.label}
                      active={isActive}
                      badge={item.badge}
                      path={item.path}
                    />
                  );
                })}
              </nav>

              {/* User Section */}
              <div className="p-3 border-t border-border space-y-1">
                  <div className="flex  items-center flex-end justify-between"> 
                      <Label className="text-left">version</Label>
                      <Label className="text-gray-500">0.0.1</Label>
                  </div>
               <div className="flex items-center flex-end justify-between"> 
                    <Label className="text-left">Last updated</Label>
                    <Label className="text-gray-500">Dec 12 2025</Label>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------- */}
          {/* MAIN AREA */}
          {/* -------------------------------------- */}
          <div className="flex-1 flex flex-col overflow-hidden">

            {/* Header */}
            <div className="p-4 border-b border-border flex flex-col bg-card">
              <div className="flex md:justify-between mb-3 md:items-center">

                {/* MOBILE MENU BUTTON */}
                <Button
                  variant="ghost"
                  className="md:hidden mr-2"
                  onClick={() => setOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </Button>

                <div>
                <h1 className="text-2xl">{ activeMenu?.title ?? activeMenu?.label }</h1>
                  <p className="text-sm text-gray-500">{ activeMenu?.description }</p>
                </div>
            </div>
            
            </div>

            {/* Main Scrollable Content */}
            <main className="flex-1 overflow-auto p-8 space-y-8">
              {children}
            </main>
          </div>
        </div>
    </>
  );
}
