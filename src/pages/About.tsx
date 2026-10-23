import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, TrendingUp, Users } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "جودة استثنائية",
      description: "نختار لك أرقى المنتجات بأعلى معايير الجودة العالمية.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "تسوق آمن وموثوق",
      description: "حماية كاملة لبياناتك وتجربة دفع سلسة وآمنة تماماً.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "تحديث مستمر",
      description: "دائماً في سباق مع الموضة وأحدث الإصدارات لتلبية تطلعاتك.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "دعم عملاء مميز",
      description:
        "فريق محترف جاهز لخدمتك والإجابة على استفساراتك على مدار الساعة.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-12 bg-(--bg-main) text-(--text-h) overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.2 }}
            className="text-sm font-semibold tracking-widest block w-fit m-auto uppercase bg-(--bg-badge) text-(--color-main) px-4 py-1.5 rounded-full mb-2"
          >
            من نحن
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight ">
            نصنع تجربة تسوق <span className="text-amber-500">استثنائية</span> لك
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            نحن نؤمن بأن التسوق ليس مجرد عملية شراء، بل هو تجربة متكاملة تعكس
            ذوقك الرفيع وتلبي احتياجاتك بأعلى مستويات الفخامة والأناقة.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                رؤيتنا هي الجمع بين الجودة العالية، التصميم العصري، والراحة
                المطلقة.
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                منذ انطلاقتنا، وضعنا هدفاً رئيسياً وهو تقديم الأفضل لعملائنا. كل
                منتج نعرضه يتم اختيار بعناية فائقة لضمان أن يليق بثقتكم، مع
                توفير بيئة تسوق رقمية سريعة، آمنة، ومتطورة.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="p-5 rounded-2xl bg-(--bg-card) border border-(--border-color) shadow-md backdrop-blur-md transition-all"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1.5 bg-linear-to-r from-(--bg-badge) to-(--nav-link-color) rounded-3xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-(--border-color) bg-(--bg-card) aspect-video flex items-center justify-center">
              <video
                src="/src/assets/8813018-sd_960_540_25fps.mp4"
                poster="/src/assets/arsenal.svg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                
              /> 
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
