import { IoSearch } from "react-icons/io5";

function SearchInput({
  value,
  onChange,
  placeholder = "Поиск...",
  disabled = false,
}) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <IoSearch className="w-5 h-5 text-green-500" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full pl-10 pr-4 py-4 bg-white rounded-xl border border-green-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 disabled:bg-gray-100"
      />
    </div>
  );
}

export default SearchInput;
