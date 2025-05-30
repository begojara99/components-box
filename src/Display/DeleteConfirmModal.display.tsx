import { useState } from "react";
import { Modal } from "../components/templates/modal";

export default function DeleteConfirmModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>삭제</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="삭제 확인">
        <p>정말 삭제하시겠습니까?</p>
        <button onClick={() => alert("삭제됨")}>확인</button>
        <button onClick={() => setIsOpen(false)}>취소</button>
      </Modal>
    </>
  );
}
