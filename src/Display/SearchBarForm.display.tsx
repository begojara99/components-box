import { SearchBar } from "../components/molecules/searchBar";
import { useState } from "react";

export default function SearchBarForm() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    alert(`검색어: ${keyword}`);
  };

  return (
    <SearchBar
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      onSearch={handleSearch}
      placeholder="검색어를 입력하세요"
    />
  );
}
