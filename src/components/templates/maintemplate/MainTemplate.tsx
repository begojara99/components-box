import styled from "styled-components";
import { MainTemplateProps } from "./mainTemplateTypes";
import { Header } from "../../organisms/header";
import { Sidebar } from "../../organisms/sidebar";
import { LayoutDashboard, Settings } from "lucide-react";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  background-color: #f9fafb;
`;

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <Layout>
      <Header />
      <ContentWrapper>
        <Sidebar
          logo={<img src="/logo.svg" alt="Logo" />}
          items={[
            {
              label: "대시보드",
              icon: LayoutDashboard,
              onClick: () => console.log("Dashboard"),
            },
            {
              label: "설정",
              icon: Settings,
              onClick: () => console.log("Settings"),
            },
          ]}
        />

        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </Layout>
  );
};
