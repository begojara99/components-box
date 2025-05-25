import { FooterProps } from "./footerTypes";
import { FooterContainer, FooterText, FooterLinks } from "./footer.styled";

export const Footer = ({ companyName, links }: FooterProps) => {
  return (
    <FooterContainer>
      <FooterLinks>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </FooterLinks>
      <FooterText>
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};
