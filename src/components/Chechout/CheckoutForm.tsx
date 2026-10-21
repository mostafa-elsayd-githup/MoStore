import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import type { CheckoutFormData } from "../../types/CheckoutTypes/FormTypesInput";
import { checkoutForm } from "../../services/CheckoutForm";
import { checkoutSchema } from "../../validations/CheckoutFormDataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({ resolver: zodResolver(checkoutSchema) });

  const onSubmit = (dataForm: CheckoutFormData) => {
    const x = checkoutForm({ dataForm });
    console.log(x);
  };

  return (
    <div className=" px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-(--bg-card) border border-(--border-color) rounded-2xl p-6 sm:p-8 shadow-(--shadow) space-y-6"
      >
        <div>
          <h2 className="text-xl font-bold text-(--text-h) mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-(--color-primary)" />
            البيانات الشخصية
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-start">
              <label className="block text-sm font-medium text-(--text-normal) mb-1">
                الاسم الكامل
              </label>
              <input
                type="text"
                {...register("fullName")}
                placeholder="محمد أحمد"
                className={`w-full bg-(--bg-searchinput) border ${errors.fullName ? " border-red-600 outline-0 " : "border-(--border-color) "} rounded-xl px-4 py-3 text-(--text-h) focus:outline-none transition-all mb-1`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="text-start">
              <label className="block text-sm font-medium text-(--text-normal) mb-1">
                البريد الإلكتروني
              </label>
              <div className="relative ">
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-(--text-normal)">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="name@example.com"
                  className={`w-full bg-(--bg-searchinput) border ${errors.email ? " border-red-600 outline-0 " : "border-(--border-color) "} rounded-xl pr-10 pl-4 py-3 text-(--text-h) focus:outline-none transition-all mb-1`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 text-start">
            <label className="block text-sm font-medium text-(--text-normal) mb-1">
              رقم الهاتف
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-(--text-normal)">
                <Phone className="w-4 h-4" />
              </span>
              <input
                type="tel"
                {...register("phone")}
                placeholder="01000000000"
                className={`w-full bg-(--bg-searchinput) border  ${errors.phone ? " border-red-600 outline-0 " : "border-(--border-color) "} rounded-xl pr-10 pl-4 py-3 text-(--text-h) focus:outline-none transition-all mb-1`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>
        <hr className="border-(--border-color)" />
        <div>
          <h2 className="text-xl font-bold text-(--text-h) mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-(--color-primary)" />
            عنوان الشحن
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="text-start">
              <label className="block text-sm font-medium text-(--text-normal) mb-1">
                المحافظة / المدينة
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-(--text-normal)">
                  <Building className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  {...register("city")}
                  placeholder="القاهرة، الجيزة..."
                  className={`w-full bg-(--bg-searchinput) border ${errors.city ? " border-red-600 outline-0 " : "border-(--border-color) "} rounded-xl pr-10 pl-4 py-3 text-(--text-h) focus:outline-none transition-all mb-1`}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs">{errors.city.message}</p>
                )}
              </div>
            </div>
            <div className="text-start">
              <label className="block text-sm font-medium text-(--text-normal) mb-1">
                المنطقة / الحي
              </label>
              <input
                type="text"
                {...register("area")}
                placeholder="المعادي، التجمع الخامس..."
                className={`w-full bg-(--bg-searchinput) border ${errors.area ? " border-red-600 outline-0 " : "border-(--border-color)"} rounded-xl px-4 py-3 text-(--text-h) focus:outline-none transition-all mb-1`}
              />
              {errors.area && (
                <p className="text-red-500 text-xs">{errors.area.message}</p>
              )}
            </div>
          </div>
          <div className="text-start">
            <label className="block text-sm font-medium text-(--text-normal) mb-1">
              العنوان بالتفصيل (اسم الشارع، رقم العلامة، الشقة)
            </label>
            <textarea
              rows={3}
              {...register("address")}
              placeholder="شارع التسعين، عقار رقم 12، الدور الثالث..."
              className={`w-full bg-(--bg-searchinput) border ${errors.address ? " border-red-600 outline-0 " : "border-(--border-color) "} rounded-xl p-3 text-(--text-h) focus:outline-none transition-all resize-none mb-1`}
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address.message}</p>
            )}
          </div>
        </div>
        <hr className="border-(--border-color)" />
        <div>
          <h2 className="text-xl font-bold text-(--text-h) mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-(--color-primary)" />
            طريقة الدفع
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex items-center gap-3 p-4 rounded-xl border border-(--border-color) bg-(--bg-searchinput) cursor-pointer hover:border-(--color-primary) transition-all">
              <input
                type="radio"
                value="cash"
                {...register("paymentMethod")}
                defaultChecked
                className="w-4 h-4 accent-(--color-primary)"
              />
              <div>
                <span className="block font-semibold text-(--text-h)">
                  الدفع عند الاستلام
                </span>
                <span className="text-xs text-(--text-normal)">
                  ادفع كاش عند استلام الطلب
                </span>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 rounded-xl border border-(--border-color) bg-(--bg-searchinput) cursor-pointer hover:border-(--color-primary) transition-all">
              <input
                type="radio"
                value="card"
                {...register("paymentMethod")}
                className="w-4 h-4 accent-(--color-primary)"
              />
              <div>
                <span className="block font-semibold text-(--text-h)">
                  بطاقة ائتمانية
                </span>
                <span className="text-xs text-(--text-normal)">
                  فيزا / ماستركارد آمنة
                </span>
              </div>
            </label>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-(--text-normal) bg-(--bg-searchinput) p-3 rounded-lg">
          <ShieldCheck className="w-4 h-4 text-(--rating-color) shrink-0" />
          <span>
            جميع بياناتك الشخصية ومعاملات الدفع مشفرة وآمنة بنسبة 100%.
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-(--color-primary) text-(--bg-main) font-bold py-4 rounded-xl shadow-lg hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
        >
          تأكيد وإتمام الطلب
        </button>
      </form>
    </div>
  );
}
