function Input({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-green-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-md border border-green-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:bg-green-100 bg-white"
        required={required}
      />
    </div>
  );
}

export default Input;
