import { Sidebar, SidebarItem } from "../components/organisms/sidebar";
import { Home, User, Settings } from "lucide-react";

const items: SidebarItem[] = [
  { label: "홈", icon: Home, onClick: () => console.log("홈 클릭") },
  { label: "내 정보", icon: User, onClick: () => console.log("내 정보 클릭") },
  { label: "설정", icon: Settings, onClick: () => console.log("설정 클릭") },
];

export default function TestSidebar() {
  return <Sidebar logo="My App" items={items} />;
}
