import SearchInput from "../../components/shared/SearchInput";

function SearchBar({ search, onSearchChange }) {
  return (
    <SearchInput
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Поиск..."
    />
  );
}

export default SearchBar;
