import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import InputSection from "./display/Input.display";
import ButtonSection from "./display/Button.display";
import LabelSection from "./display/Label.display";
import LoginForm from "./display/InputField.display";
import TestLogin from "./display/AuthForm.display";
import LabeledInputForm from "./display/LabeledInputForm.display";
import SearchBarForm from "./display/SearchBarForm.display";
import ProfileFormSection from "./display/ProfileFormSection.display";
import TestProductCard from "./display/TestProductCard.display";
import TestProfileCard from "./display/TestProfileCard.display";
import DashboardStat from "./display/DashboardStat.display";
import UserCardSection from "./display/UserCardSection.display";
import TestHeader from "./display/TestHeader.display";
import TestFooter from "./display/TestFooter.display";
import TestSidebar from "./display/TestSidebar.display";
import TestModal from "./display/TestModal.display";
import LoginTemplate from "./display/LoginTemplate.display";
import DashboardTemplate from "./display/DashboardTemplate.display";
import DeleteConfirmModal from "./display/DeleteConfirmModal.display";
import { NoResult } from "./display/NoResult.display";
import DashboardPage from "./components/pages/dashboard/dashboard";
import LoginPage from "./components/pages/login/Login";
import SignupPage from "./components/pages/signup/Signup";
import SignupCompletePage from "./components/pages/signup/SignupComplete";
import NotFoundPage from "./components/pages/notfound/NotFound";
import SettingsPage from "./components/pages/setting/setting";
import HomePage from "./pages/Home";

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
        <Route path="/" element={<HomePage />} />
        <Route path="/input" element={<InputSection />} />
        <Route path="/button" element={<ButtonSection />} />
        <Route path="/label" element={<LabelSection />} />
        <Route path="/input-form" element={<LoginForm />} />
        <Route path="/auth-page" element={<TestLogin />} />
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
        <Route path="/noresult-template" element={<NoResult />} />

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup-complete" element={<SignupCompletePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/setting" element={<SettingsPage />} />
      </Routes>
    </Root>
  );
}
export default App;
