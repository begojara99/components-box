import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import InputSection from "./Display/Input.display";
import ButtonSection from "./Display/Button.display";

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
      </Routes>
    </Root>
  );
}
export default App;
