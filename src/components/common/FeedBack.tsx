import { useForm } from "react-hook-form";
import { useState } from "react";
import type { formDataType } from "../../types/RetingSection/RatingType";
import {
  Loader,
  MessageCircle,
  SendHorizonal,
  ShieldAlert,
  X,
} from "lucide-react";
import { useRatingHook } from "../../hooks/useratingForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { RatingDataValidation } from "../../validations/Rating";
import { motion, type Variants } from "framer-motion";
import { slideInRight } from "../../animations/variants";
function FeedBack() {
  const [rating, setiSReting] = useState<number>(0);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<formDataType>({ resolver: zodResolver(RatingDataValidation) });
  const { RatingFormResPons, isPending } = useRatingHook();
  const onSubmit = (ratingForm: formDataType) => {
    if (rating === 0) {
      setShowErrorMessage(true);
      return;
    }
    RatingFormResPons(ratingForm);
    reset();
    setiSReting(0);
    setShowErrorMessage(false);
  };
  const ToggleSize = (starValue: number) => {
    if (rating === starValue) {
      setiSReting(0);
    } else {
      setShowErrorMessage(false);
      setiSReting(starValue);
    }
  };
  return (
 <section className="fixed bottom-5 right-5 z-50">
  {!isOpen && (
    <button
      className="flex items-center justify-center bg-(--bg-feedback) text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      <MessageCircle size={28} />
    </button>
  )}
  {isOpen && (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideInRight as Variants}
      viewport={{ once: true }}
      className="fixed right-5 bottom-5 w-80 sm:w-96 p-5 z-50 rounded-2xl shadow-2xl bg-zinc-900/95 border border-white/10 backdrop-blur-xl text-white"
    >
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <span className="font-bold text-base flex items-center gap-2 text-(--bg-feedback)">
          <MessageCircle size={20} /> أترك لنا تقييمك
        </span>
        <button
          type="button"
          className="text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 p-1.5 rounded-full transition-all cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <X size={18} />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <textarea
          {...register("message")}
          placeholder="اكتب رأيك أو ملاحظتك عن التجربة..."
          rows={3}
          className="w-full p-3 text-sm rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-(--bg-feedback) resize-none transition-all placeholder:text-zinc-500 text-white"
        ></textarea>
        {errors.message && (
          <span className="text-red-400 text-xs font-bold">
            {errors.message?.message}
          </span>
        )}
        <div className="flex items-center justify-center gap-2 py-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`transition-all flex items-center justify-center hover:scale-110 focus:outline-none cursor-pointer w-8 h-8 rounded-full text-xs font-bold shadow-sm ${
                star === rating
                  ? "bg-(--bg-feedback) text-white ring-2 ring-white/20 scale-105"
                : "bg-white/10 text-zinc-300 hover:bg-white/20"
              }`}
              onClick={() => ToggleSize(star)}
            >
              {star}
            </button>
          ))}
        </div>
        {showErrorMessage && (
          <span className="flex items-center justify-center gap-1.5 w-full py-1 bg-red-500/20 border border-red-500/30 text-red-300 text-xs rounded-xl">
            <ShieldAlert size={14} /> اختر تقييماً من فضلك
          </span>
        )}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-medium bg-(--bg-feedback) text-white shadow-lg shadow-orange-500/20 hover:opacity-90 active:scale-95 transition-all cursor-pointer text-sm mt-1"
        >
          {isPending ? (
            <Loader className="animate-spin" size={20} />
          ) : (
            <>
              <SendHorizonal size={18} />
              <span>إرسال التقييم</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  )}
</section>
  );
}

export default FeedBack;
