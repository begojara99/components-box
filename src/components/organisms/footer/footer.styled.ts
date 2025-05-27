import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f3f4f6;
  padding: 20px;
  text-align: center;
`;

export const FooterText = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 8px 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 8px;

  a {
    color: #374151;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
