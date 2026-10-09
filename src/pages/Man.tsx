import HeroSection from "../components/features/Home/Banner";
import ManSection1ImgDeskTop from "../assets/man-collicionback.svg";
import ManSection1OmgMobile from "../assets/media_background_section1.svg";
import ManSection2ImgDeskTop from "../assets/adidas_.svg";
import ManSection2OmgMobile from "../assets/media_background_ForMobile.svg";
import SportsSection from "../components/features/Home/SportsSection";
import alahlyClub from "../assets/alahly_fc.svg";
import realmadrid from "../assets/real-madrid.svg";
import ManUnited from "../assets/manutd.svg";
import liverpool from "../assets/liverPool.svg";
import bayern from "../assets/bayern.svg";
import arsenal from "../assets/arsenal.svg";
function ManPage() {
  const SportSection = [
    {
      image: alahlyClub,
      SetionName: "الاهلى",
      pathLink: "/products",
    },
    {
      image: realmadrid,
      SetionName: "ريال مدريد",
      pathLink: "/products",
    },
    {
      image: ManUnited,
      SetionName: "مانشستر يونايتد",
      pathLink: "/products",
    },
    {
      image: liverpool,
      SetionName: "ليفربول",
      pathLink: "/products",
    },
    {
      image: bayern,
      SetionName: "بايرن ميونخ",
      pathLink: "/products",
    },
    {
      image:arsenal,
      SetionName: "ارسنال",
      pathLink: "/products",
    },
  ];
  const SectionHeader = "نداء إلى جميع عشاق كرة القدم".split(" ");
  return (
    <section className="flex flex-col gap-5">
      <HeroSection
        desktopimg={ManSection1ImgDeskTop}
        mobileimg={ManSection1OmgMobile}
        title="واصلوا الاحتفالات"
        subtitle="اكتشف أطقم المنتخبات الرسمية واحتفل بكل لحظة فوز بنفس روح أبطالك"
        buttonlink="/products"
        buttontext="تسوق الان"
      />
      <HeroSection
        desktopimg={ManSection2ImgDeskTop}
        mobileimg={ManSection2OmgMobile}
        title="خطوات تصنع أسلوبك"
        subtitle="تصاميم كلاسيكية تناسب إطلالتك اليومية"
        buttonlink="/products"
        buttontext="تسوق الان"
      />
      <SportsSection
        sportList={SportSection}
        sportSectionHeader={SectionHeader}
      />
    </section>
  );
}

export default ManPage;
