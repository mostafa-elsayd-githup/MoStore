import { useForm } from "react-hook-form";
import type { registerForm } from "../../types/AuthTypes/AuthFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../validations/AuthSchame/AuthSchome";
import { Link } from "react-router";
import { useRegister } from "../../hooks/useRegister";
import { LoaderIcon } from "lucide-react";
function UserRegisterComponent() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<registerForm>({ resolver: zodResolver(registerSchema) });
  const { registerUser, isPending } = useRegister();
  const onSubmit = async (data: registerForm) => {
    registerUser(data);
  };
  return (
    <div className="relative z-10 w-full max-w-md p-8 bg-(--bg-glassy) backdrop-blur-md rounded-2xl shadow-2xl border border-[#b3b2ae4b]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="text-start">
          <label className="block text-sm font-medium text-white mb-1">
            الاسم كامل
          </label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="مصطفى السيد"
            className={`w-full bg-white/10 placeholder:text-[#777] text-white border ${
              errors.fullName ? "border-red-500" : "border-[#b3b2ae4b]"
            } rounded-xl px-4 py-2 focus:outline-none transition-all mb-2`}
          />
          {errors.fullName && (
            <p className="text-red-400 text-xs">{errors.fullName.message}</p>
          )}
        </div>
        <div className="text-start">
          <label className="block text-sm font-medium text-white mb-1">
            البريد الإلكترونى
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="mo@example.com"
            className={`w-full bg-white/10 placeholder:text-[#777] text-white border ${
              errors.email ? "border-red-500" : "border-[#b3b2ae4b]"
            } rounded-xl px-4 py-2 focus:outline-none transition-all mb-2`}
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="text-start">
          <label className="block text-sm font-medium text-white mb-1">
            رقم الهاتف
          </label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="01000000000"
            className={`w-full bg-white/10 placeholder:text-[#777] text-white border ${
              errors.phone ? "border-red-500" : "border-[#b3b2ae4b]"
            } rounded-xl px-4 py-2 focus:outline-none transition-all mb-2`}
          />
          {errors.phone && (
            <p className="text-red-400 text-xs ">{errors.phone.message}</p>
          )}
        </div>
        <div className="text-start">
          <label className="block text-sm font-medium text-white mb-1">
            كلمة السر
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="**********"
            className={`w-full bg-white/10 placeholder:text-[#777] text-white border ${
              errors.password ? "border-red-500" : "border-[#b3b2ae4b]"
            } rounded-xl px-4 py-2 focus:outline-none transition-all mb-2`}
          />
          {errors.password && (
            <p className="text-red-400 text-xs">{errors.password.message}</p>
          )}
        </div>
        <div className="text-start">
          <label className="block text-sm font-medium text-white mb-1">
            تأكيد كلمة السر
          </label>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="**********"
            className={`w-full bg-white/10 placeholder:text-[#777] text-white border ${
              errors.confirmPassword ? "border-red-500" : "border-[#b3b2ae4b]"
            } rounded-xl px-4 py-2 focus:outline-none transition-all mb-2`}
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-xs">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="w-full bg-black flex items-center justify-center hover:bg-gray-900 text-white font-bold py-3 rounded-xl transition-all cursor-pointer mt-2 mb-1"
        >
          {isPending ? (
            <span className="animate-spin">
              {" "}
              <LoaderIcon size={30} />
            </span>
          ) : (
            "إنشاء حساب جديد"
          )}
        </button>

        <Link to="/login" className="text-white underline hover:no-underline">
          لدى حساب بالفعل ؟
        </Link>
      </form>
    </div>
  );
}

export default UserRegisterComponent;
