import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  CreditCard,
  ShieldCheck,
  LoaderIcon,
} from "lucide-react";
import type { CheckoutFormData } from "../../types/CheckoutTypes/FormTypesInput";
import { checkoutSchema } from "../../validations/CheckoutFormDataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSumbitForm } from "../../hooks/useOnSubmitCheckoutForm";
import { useCartStore } from "../../store/cardStore";
export default function CheckoutForm() {
  const { clearAll } = useCartStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormData>({ resolver: zodResolver(checkoutSchema) });
  const { submitOrder, isPending } = useSumbitForm();
  const onSubmit = (formData: CheckoutFormData) => {
    submitOrder(formData, {
      onSuccess: () => {
        reset();
        clearAll();
      },
    });
  };

  return (
    <div className="transition-colors duration-300">
      <form
  onSubmit={handleSubmit(onSubmit)}
  className="bg-(--bg-card) border border-(--border-color) rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 relative overflow-hidden"
>  <div className="absolute top-0 right-0 left-0 h-1 bg-linear-to-l from-(--bg-feedback) to-transparent" />
  <div>
    <h2 className="text-xl font-bold text-(--text-h) mb-4 flex items-center gap-2">
      <User className="w-5 h-5 text-(--bg-feedback)" />
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
          placeholder="مصطفى السيد"
          className={`w-full bg-(--bg-searchinput) border ${errors.fullName ? "border-red-600 outline-0" : "border-(--border-color) focus:border-(--bg-feedback) focus:ring-1 focus:ring-(--bg-feedback)"} rounded-xl px-4 py-3 text-(--text-h) focus:outline-none transition-all mb-1`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs">
            {errors.fullName.message}
          </p>
        )}
      </div>
      <div className="text-start">
        <label className="block text-sm font-medium text-(--text-normal) mb-1">
          البريد الإلكتروني (اختياري)
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-(--text-normal)">
            <Mail className="w-4 h-4" />
          </span>
          <input
            type="email"
            {...register("email")}
            placeholder="name@example.com"
            className={`w-full bg-(--bg-searchinput) border ${errors.email ? "border-red-600 outline-0" : "border-(--border-color) focus:border-(--bg-feedback) focus:ring-1 focus:ring-(--bg-feedback)"} rounded-xl pr-10 pl-4 py-3 text-(--text-h) focus:outline-none transition-all mb-1`}
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
          className={`w-full bg-(--bg-searchinput) border ${errors.phone ? "border-red-600 outline-0" : "border-(--border-color) focus:border-(--bg-feedback) focus:ring-1 focus:ring-(--bg-feedback)"} rounded-xl pr-10 pl-4 py-3 text-(--text-h) focus:outline-none transition-all mb-1`}
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
      <MapPin className="w-5 h-5 text-(--bg-feedback)" />
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
            className={`w-full bg-(--bg-searchinput) border ${errors.city ? "border-red-600 outline-0" : "border-(--border-color) focus:border-(--bg-feedback) focus:ring-1 focus:ring-(--bg-feedback)"} rounded-xl pr-10 pl-4 py-3 text-(--text-h) focus:outline-none transition-all mb-1`}
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
          className={`w-full bg-(--bg-searchinput) border ${errors.area ? "border-red-600 outline-0" : "border-(--border-color) focus:border-(--bg-feedback) focus:ring-1 focus:ring-(--bg-feedback)"} rounded-xl px-4 py-3 text-(--text-h) focus:outline-none transition-all mb-1`}
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
        className={`w-full bg-(--bg-searchinput) border ${errors.address ? "border-red-600 outline-0" : "border-(--border-color) focus:border-(--bg-feedback) focus:ring-1 focus:ring-(--bg-feedback)"} rounded-xl p-3 text-(--text-h) focus:outline-none transition-all resize-none mb-1`}
      ></textarea>
      {errors.address && (
        <p className="text-red-500 text-xs">{errors.address.message}</p>
      )}
    </div>
  </div>

  <hr className="border-(--border-color)" />
  <div>
    <h2 className="text-xl font-bold text-(--text-h) mb-4 flex items-center gap-2">
      <CreditCard className="w-5 h-5 text-(--bg-feedback)" />
      طريقة الدفع
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <label className="flex items-center gap-3 p-4 rounded-xl border border-(--border-color) bg-(--bg-searchinput) cursor-pointer hover:border-(--bg-feedback) transition-all">
        <input
          type="radio"
          value="cash"
          {...register("paymentMethod")}
          defaultChecked
          className="w-4 h-4 text-(--bg-feedback) accent-(--bg-feedback)"
        />
        <div>
          <span className="block font-semibold text-(--text-h)">
            الدفع عند الاستلام
          </span>
          <span className="text-xs text-(--text-normal)">
            ادفع كاش عند استلاستلام الطلب
          </span>
        </div>
      </label>
      <label className="flex items-center gap-3 p-4 rounded-xl border border-(--border-color) bg-(--bg-searchinput) cursor-pointer hover:border-(--bg-feedback) transition-all">
        <input
          type="radio"
          value="card"
          {...register("paymentMethod")}
          className="w-4 h-4 text-(--bg-feedback) accent-(--bg-feedback)"
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
  <div className="flex items-center gap-2 text-xs text-(--text-normal) bg-(--bg-feedback)/5 border border-(--bg-feedback)/15 p-3.5 rounded-xl">
    <ShieldCheck className="w-4 h-4 text-(--bg-feedback) shrink-0" />
    <span>
      جميع بياناتك الشخصية ومعاملات الدفع مشفرة وآمنة بنسبة 100%.
    </span>
  </div>
  <button
    disabled={isPending}
    type="submit"
    className="flex items-center justify-center w-full bg-(--bg-feedback) text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-orange-500/25 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer text-base"
  >
    {isPending ? (
      <span className="animate-spin">
        <LoaderIcon size={24} />
      </span>
    ) : (
      "تأكيد وإتمام الطلب"
    )}
  </button>
</form>
    </div>
  );
}
