export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  companyName: string;
  links: FooterLink[];
}
