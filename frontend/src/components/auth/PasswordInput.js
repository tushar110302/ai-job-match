"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({ error, icon: Icon, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="mb-3 block text-sm font-medium tracking-wide text-gray-200">
        Password
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
          type={showPassword ? "text" : "password"}
          className="w-full bg-transparent text-[15px] font-medium text-white placeholder:text-gray-500 focus:outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-gray-400 hover:text-white"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default PasswordInput;
