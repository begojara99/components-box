import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Display/Input.display";

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
        <Route path="/" element={<LoginForm />} />
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </Root>
  );
}
export default App;
