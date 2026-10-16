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
import type {SportSectionProp } from "../types/HomeTypes/HomeBanner";
function ManPage() {
  const SportSection:SportSectionProp[] = [
    {
      image: alahlyClub,
      SetionName: "الاهلى",
      pathLink: "/products/alahly",
      PageTitle:"تشكيلة أطقم نادي القرن - الأهلي"
    },
    {
      image: realmadrid,
      SetionName: "ريال مدريد",
      pathLink: "/products/Real Madrid",
      PageTitle:"أطقم نادي ريال مدريد الرسمية"

    },
    {
      image: ManUnited,
      SetionName: "مانشستر يونايتد",
      pathLink: "/products/Man United",
      PageTitle:"تشكيلة نادي مانشستر يونايتد"

    },
    {
      image: liverpool,
      SetionName: "ليفربول",
      pathLink: "/products/Liverpool",
      PageTitle:"تشكيلة نادي ليفربول الرسمية"

    },
    {
      image: bayern,
      SetionName: "بايرن ميونخ",
      pathLink: "/products/Bayern Munich",
      PageTitle:"تشكيلة نادي بايرن ميونخ"

    },
    {
      image: arsenal,
      SetionName: "ارسنال",
      pathLink: "/products/ArsenalClub",
      PageTitle:"أطقم نادي أرسنال الرسمية"

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
        buttonlink="/products/Men_s_Jerseys"
        buttontext="تسوق الان"
        PageTitle="أطقم المنتخبات الرسمية للاحتفالات"
      />
      <HeroSection
        desktopimg={ManSection2ImgDeskTop}
        mobileimg={ManSection2OmgMobile}
        title="خطوات تصنع أسلوبك"
        subtitle="تصاميم كلاسيكية تناسب إطلالتك اليومية"
        buttonlink="/products/Sneakers_for_Men"
        buttontext="تسوق الان"
        PageTitle="أطقم المنتخبات الرسمية للاحتفالات"
      />
      <SportsSection
        sportList={SportSection}
        sportSectionHeader={SectionHeader}
      />
    </section>
  );
}

export default ManPage;
