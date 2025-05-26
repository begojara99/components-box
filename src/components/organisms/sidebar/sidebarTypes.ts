import { LucideIcon } from "lucide-react";

export interface SidebarItem {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
}

export interface SidebarProps {
  logo?: React.ReactNode;
  items: SidebarItem[];
}
