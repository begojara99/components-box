import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  padding: 40px;
`;

const NavCard = styled.button`
  background-color: #f3f4f6;
  border: none;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: #e5e7eb;
  }
`;

const routes = [
  { path: "/login", label: "로그인" },
  { path: "/signup", label: "회원가입" },
  { path: "/dashboard", label: "대시보드" },
  { path: "/setting", label: "설정" },
  { path: "/help", label: "도움말" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Grid>
      {routes.map(({ path, label }) => (
        <NavCard key={path} onClick={() => navigate(path)}>
          {label}
        </NavCard>
      ))}
    </Grid>
  );
}
