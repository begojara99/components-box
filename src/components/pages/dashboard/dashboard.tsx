import { Main } from "../../templates/main";
import { ProfileCard } from "../../organisms/cards/profileCard";
import { StatCard } from "../../organisms/cards/statCard";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const DashboardPage = () => {
  return (
    <Main>
      <DashboardWrapper>
        <ProfileCard
          name="홍길동"
          role="프론트엔드 개발자"
          imageSrc="/images/profile.jpg"
        />
        <StatCard title="진행 중인 프로젝트" value={3} />
        <StatCard title="완료한 작업" value={12} />
        <StatCard title="알림 수" value={5} />
      </DashboardWrapper>
    </Main>
  );
};

export default DashboardPage;
