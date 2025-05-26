import { Header } from "../components/organisms/header";
import { Search } from "lucide-react";
import { IconWrapper } from "../components/atoms/icon/IconWrapper";

export default function TestHeader() {
  return (
    <Header
      logo={<span style={{ fontWeight: "bold" }}>Koala</span>}
      rightContent={
        <>
          <IconWrapper>
            <Search size={20} />
          </IconWrapper>
        </>
      }
    />
  );
}
