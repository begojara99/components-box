// pages/TestProductCard.tsx
import { ProductCard } from "../components/organisms/cards/productCard";

export default function TestProductCard() {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        imageSrc="https://via.placeholder.com/300x180"
        title="카페 아메리카노"
        description="풍부한 향과 부드러운 맛의 아메리카노 커피입니다."
        buttonText="자세히 보기"
        onClick={() => alert("카드 버튼 클릭")}
      />
    </div>
  );
}
