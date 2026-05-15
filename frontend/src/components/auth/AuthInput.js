const AuthInput = ({
  label,
  icon: Icon,
  error,
  ...props
}) => {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium tracking-wide text-gray-200">
        {label}
      </label>

      <div
        className={`group flex items-center gap-3 border-b pb-3 transition ${
          error
            ? "border-red-500"
            : "border-white/10 focus-within:border-violet-400"
        }`}
      >
        <Icon
          size={18}
          className="text-gray-400 transition group-focus-within:text-violet-300"
        />

        <input
          {...props}
          className="w-full bg-transparent text-[15px] font-medium text-white placeholder:text-gray-500 focus:outline-none"
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default AuthInput;