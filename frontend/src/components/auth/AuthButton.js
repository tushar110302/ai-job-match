import { Loader2 } from "lucide-react";

const AuthButton = ({
  loading,
  text,
}) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group relative mt-2 flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#6d5dfc] to-[#b05cff] text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-[1.01] disabled:opacity-70"
    >
      {loading ? (
        <Loader2
          className="animate-spin"
          size={20}
        />
      ) : (
        text
      )}
    </button>
  );
};

export default AuthButton;