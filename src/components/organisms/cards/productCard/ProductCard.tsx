// components/organisms/productCard/ProductCard.tsx
import styled from "styled-components";
import { BaseLabel } from "../../../atoms/label";
import { PrimaryButton } from "../../../atoms/button";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const Card = styled.div`
  width: 300px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  background-color: #fff;
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled(BaseLabel)`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 16px;
`;

export const ProductCard = ({
  imageSrc,
  title,
  description,
  buttonText,
  onClick,
}: ProductCardProps) => {
  return (
    <Card>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <PrimaryButton onClick={onClick}>{buttonText}</PrimaryButton>
      </CardContent>
    </Card>
  );
};
