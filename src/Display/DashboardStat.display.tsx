import { StatCard } from "../components/organisms/cards/statCard";
import { TrendingUp } from "lucide-react";

export default function DashboardStat() {
  return <StatCard title="총 방문자 수" value="1,294" icon={<TrendingUp />} />;
}
