const Input = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  error,
  min = undefined,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        min={min}
        className="w-full rounded-xl border border-gray-300 px-4 py-3"
      />

      {error && <p className="text-sm text-error mt-1">{error}</p>}
    </div>
  );
};

export default Input;
