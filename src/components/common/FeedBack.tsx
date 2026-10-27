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
      <button
        className="bg-linear-to-tr from-black to-zinc-200 text-white p-3 rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={50} />
      </button>
      {isOpen && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInRight as Variants}
          className="fixed right-5 bottom-5 w-80 sm:w-96 p-5 z-50 rounded-2xl shadow-2xl bg-linear-to-tr from-black to-zinc-200 backdrop-blur-md"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-sm text-black flex items-center gap-2">
              <MessageCircle /> أترك لنا تقييمك
            </span>
            <X
              className="text-white bg-black rounded-full cursor-pointer"
              size={20}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-1 flex-col gap-3"
          >
            <textarea
              {...register("message")}
              placeholder="اكتب رأيك أو ملاحظتك عن التجربة..."
              rows={3}
              className="w-full p-3 text-sm rounded-xl  bg-white/10 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-(--color-main) resize-none transition-all placeholder:text-(--color-primary)"
            ></textarea>
            {errors.message && (
              <span className="text-red-800 text-xs font-extrabold">
                {errors.message?.message}
              </span>
            )}

            <div className={`flex items-center justify-center gap-2  `}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`transition-all flex items-center justify-center hover:scale-110 focus:outline-none cursor-pointer w-7 h-7 rounded-full text-xs font-bold
                   ${star === rating ? "bg-black text-white" : "bg-white"}`}
                  onClick={() => ToggleSize(star)}
                >
                  {star}
                </button>
              ))}
            </div>
            {showErrorMessage && (
              <span className="flex items-center w-fit m-auto py-0.5 px-2 bg-(--color-sale) text-white text-xs rounded-2xl">
                <ShieldAlert size={12} /> اختر تقيما{" "}
              </span>
            )}
            <button
              type="submit"
              className="flex items-center justify-center group: gap-4 w-full py-2.5 px-4 rounded-xl font-medium bg-(--color-main) text-(--bg-badge) shadow-md hover:opacity-90 active:scale-95 transition-all cursor-pointer text-sm"
            >
              {isPending ? (
                <Loader className="animate-spin" size={25} />
              ) : (
                <>
                  <SendHorizonal />
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
