import { useState } from "react";
import { Modal } from "../components/organisms/modal";

export default function TestModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>모달 열기</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>모달 내용입니다</h2>
        <p>이곳에 다양한 정보를 넣을 수 있어요.</p>
      </Modal>
    </>
  );
}
