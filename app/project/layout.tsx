"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Database,
  NotebookTextIcon,
  Dumbbell,
  SettingsIcon,
  ZapIcon,
  User2Icon,
  Users2Icon,
  FolderOpenIcon,
  Plus,
  Search,
  Menu,
  X,
  Sun,
  Moon,
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
        <span className="flex-1 text-left">{label}</span>
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
    { id: 1, label: "Projects", icon: FolderOpenIcon, path: "/project" },
    { id: 2, label: "Templates", icon: NotebookTextIcon, path: "/templates" },
    { id: 3, label: "Template APIs", icon: ZapIcon, badge: "New", path: "/apis" },
    { id: 4, label: "Plugin Manager", icon: Dumbbell, badge: "Admin", path: "/plugin-manager" },
    { id: 5, label: "Setting", icon: SettingsIcon, path: "/setting" },
  ];

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

              {/* Logo/Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <Label className="text-base font-semibold">Template Editor</Label>
                    <p className="text-xs text-muted-foreground">Acme Corporation</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex-1 p-3 space-y-1">
                {sidebarMenu.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <NavItem
                      key={item.id}
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
                <NavItem
                  icon={User2Icon}
                  label="arkarmoe.dev@gmail.com"
                  active={pathname.startsWith("/profile")}
                  path="/profile"
                />
                <NavItem
                  icon={Users2Icon}
                  label="Team"
                  active={pathname.startsWith("/team")}
                  path="/team"
                />
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
                  <h1 className="text-2xl">Welcome back, Ar Kar</h1>
                  <p className="text-sm text-gray-500">Manage your templates and projects</p>
                </div>

                {/* ACTIONS (THEME + NEW TEMPLATE) */}
                <div className="items-center gap-3 hidden md:flex">
                  {/* THEME TOGGLE */}
                  <Button variant="ghost" onClick={toggleTheme}>
                    {theme === "light" ? (
                      <Moon className="w-5 h-5" />
                    ) : (
                      <Sun className="w-5 h-5" />
                    )}
                  </Button>

                  <Button color="brand">
                    <Plus className="w-4 h-4 mr-2" />
                    New Template
                  </Button>
                </div>
            </div>
            
              <div className="relative">
                <Input
                  placeholder="Search projects and templates..."
                  className="pl-10"
                  startIcon={<Search />}
                />
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
