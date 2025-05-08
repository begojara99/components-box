import styled from "styled-components";
import { InputProps } from "./inputTypes";
import { Search } from "lucide-react";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 8px 12px;
`;

const SearchInputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
`;

export const SearchInput = ({ value, onChange, placeholder }: InputProps) => (
  <SearchContainer>
    <Search size={16} color="#9ca3af" style={{ marginRight: "8px" }} />
    <SearchInputField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </SearchContainer>
);
