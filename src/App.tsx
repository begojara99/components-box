import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import InputSection from "./Display/Input.display";
import ButtonSection from "./Display/Button.display";
import LabelSection from "./Display/Label.display";
import LoginForm from "./Display/InputField.display";
import LoginPage from "./Display/AuthForm.display";
import LabeledInputForm from "./Display/LabeledInputForm.display";
import SearchBarForm from "./Display/SearchBarForm.display";
import ProfileFormSection from "./Display/ProfileFormSection.display";
import TestProductCard from "./Display/TestProductCard.display";
import TestProfileCard from "./Display/TestProfileCard.display";
import DashboardStat from "./Display/DashboardStat.display";
import UserCardSection from "./Display/UserCardSection.display";
import TestHeader from "./Display/TestHeader.display";
import TestFooter from "./Display/TestFooter.display";
import TestSidebar from "./Display/TestSidebar.display";
import TestModal from "./Display/TestModal.display";
import LoginTemplate from "./Display/LoginTemplate.display";
import DashboardTemplate from "./Display/DashboardTemplate.display";
import DeleteConfirmModal from "./Display/DeleteConfirmModal.display";

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh; /* Root가 화면의 전체 높이를 차지하도록 설정 */
`;

function App() {
  return (
    <Root>
      <Routes>
        <Route path="/input" element={<InputSection />} />
        <Route path="/button" element={<ButtonSection />} />
        <Route path="/label" element={<LabelSection />} />
        <Route path="/input-form" element={<LoginForm />} />
        <Route path="/auth-page" element={<LoginPage />} />
        <Route path="/label-input-form" element={<LabeledInputForm />} />
        <Route path="/searchbar" element={<SearchBarForm />} />
        <Route path="/profile-form" element={<ProfileFormSection />} />
        <Route path="/product-card" element={<TestProductCard />} />
        <Route path="/profile-card" element={<TestProfileCard />} />
        <Route path="/dashboard-stat-card" element={<DashboardStat />} />
        <Route path="/user-card" element={<UserCardSection />} />
        <Route path="/header" element={<TestHeader />} />
        <Route path="/footer" element={<TestFooter />} />
        <Route path="/sidebar" element={<TestSidebar />} />
        <Route path="/modal" element={<TestModal />} />
        <Route path="/login-template" element={<LoginTemplate />} />
        <Route path="/dashboard-template" element={<DashboardTemplate />} />
        <Route path="/modal-template" element={<DeleteConfirmModal />} />
      </Routes>
    </Root>
  );
}
export default App;
