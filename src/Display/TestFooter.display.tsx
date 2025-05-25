import { Footer } from "../components/organisms/footer";

const footerLinks = [
  { label: "이용약관", href: "/terms" },
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "고객센터", href: "/support" },
];

export default function TestFooter() {
  return (
    <div>
      {/* ...다른 페이지 컴포넌트 */}
      <Footer companyName="MyCompany" links={footerLinks} />
    </div>
  );
}
