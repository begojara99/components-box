import { EmptyState } from "../components/templates/emptyState";
import { Smile } from "lucide-react";
import { BaseButton } from "../components/atoms/button";

export const NoResult = () => {
  return (
    <EmptyState
      icon={<Smile />}
      title="검색 결과가 없습니다"
      description="다른 검색어를 입력해보세요."
      action={
        <BaseButton onClick={() => console.log("다시 검색")}>
          다시 검색
        </BaseButton>
      }
    />
  );
};
