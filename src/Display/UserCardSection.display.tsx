import { ActionCard } from "../components/organisms/cards/actionCard";

export default function UserCardSection() {
  const handleEdit = () => {
    alert("편집 클릭!");
  };

  const handleDelete = () => {
    alert("삭제 클릭!");
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <ActionCard
        title="홍길동"
        description="프론트엔드 개발자"
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
