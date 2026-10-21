import { useForm } from "react-hook-form";
import type { loginForm } from "../../types/AuthTypes/AuthFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchame } from "../../validations/AuthSchame/AuthSchome";
import { useLogin } from "../../hooks/uselogin";
import { LoaderIcon } from "lucide-react";
import { Link } from "react-router";
function UserLoginComponent() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchame) });
  const { registerUser, isPending } = useLogin();
  const onSubmit = async (dataForm: loginForm) => {
    registerUser(dataForm);
  };
  return (
    <div className="relative z-10 w-full max-w-md p-8 bg-(--bg-glassy) backdrop-blur-md rounded-2xl shadow-2xl border border-[#b3b2ae4b]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-start mb-4">
          <label className="block text-sm font-medium text-white mb-1">
            البريد الإلكترونى
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="mo@example.com"
            className="w-full bg-white/10 placeholder:text-[#777] border border-[#b3b2ae4b] rounded-xl px-4 py-2 text-white focus:outline-none transition-all mb-1"
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="text-start mb-6">
          <label className="block text-sm font-medium text-white mb-1">
            كلمة السر
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="**********"
            className="w-full bg-white/10 placeholder:text-[#777] border border-[#b3b2ae4b] rounded-xl px-4 py-2 text-white focus:outline-none transition-all mb-1"
          />
          {errors.password && (
            <p className="text-red-400 text-xs">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full flex justify-center bg-black text-white font-bold py-3 rounded-xl transition-all cursor-pointer"
        >
          {isPending ? (
            <span className="animate-spin">
              <LoaderIcon size={30} />
            </span>
          ) : (
            "تسجيل الدخول"
          )}
        </button>
        <Link to="/register" className="text-white underline hover:no-underline">انشاء حساب جديد ؟</Link>
      </form>
    </div>
  );
}

export default UserLoginComponent;
