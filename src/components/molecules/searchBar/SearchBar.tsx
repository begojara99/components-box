import { SearchBarProps } from "./searchBarTypes";
import styled from "styled-components";
import { IconButton } from "../../atoms/button";
import { Search } from "lucide-react";
import { PrimaryInput } from "../../atoms/input";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder = "검색어를 입력하세요",
}: SearchBarProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <Container>
      <PrimaryInput
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
      />
      <IconButton onClick={onSearch}>
        <Search size={16} />
      </IconButton>
    </Container>
  );
};
