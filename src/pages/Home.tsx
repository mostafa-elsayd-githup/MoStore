import HeroSection from "../components/features/Home/Banner";
import HeroForDeskTop from "../../public/backgroud-hero_section.webp";
import HeroForMobile from "../../public/backgroud-hero_section_for_moblie.webp";
import sportImgMobile from "../assets/Gemini_Generated_Image_4tmmaw4tmmaw4tmm.webp";
import sportImgDeskTop from "../assets/Gemini_Generated_Image_a0x8gaa0x8gaa0x8.webp";
import SportsSection from "../components/features/Home/SportsSection";
import footballImg from "../assets/football.webp";
import tenesImg from "../assets/tenes.webp";
import runImg from "../assets/run.webp";
import GymImg from "../assets/gem.webp";
import basketBallImg from "../assets/basctball.webp";
import type {  SportSectionProp } from "../types/HomeTypes/HomeBanner";
function HomePage() {
  const SportSection: SportSectionProp[] = [
    {
      image: footballImg,
      SetionName: "FootBall",
      pathLink: "/products/Football",
      PageTitle: "معدات وأزياء كرة القدم الاحترافية",
    },
    {
      image: tenesImg,
      SetionName: "Tennis",
      pathLink: "/products/tennis",
      PageTitle: "أزياء ومعدات التنس الرياضية",
    },
    {
      image: runImg,
      SetionName: "Running",
      pathLink: "/products/Running",
      PageTitle: "تشكيلة أديداس للجري",
    },
    {
      image: GymImg,
      SetionName: "Gym",
      pathLink: "/products/GEM",
      PageTitle: "ملابس وأحذية تدريبات الجيم",
    },
    {
      image: basketBallImg,
      SetionName: "BasketBall",
      pathLink: "/products/Basketball",
      PageTitle: "تشكيلة كرة السلة العصرية",
    },
  ];
  const Header = "رياضتك تبدأ من هنا...؟".split(" ");
  return (
    <div className="flex flex-col gap-5">
      <HeroSection
        desktopimg={HeroForDeskTop}
        mobileimg={HeroForMobile}
        title="طاقة تجدد حركتك"
        subtitle="احصل على أفضل المعدات الرياضية لتتجاوز أهدافك اليومية"
        buttontext="تسوق الان"
        buttonlink="/products/Running"
        PageTitle="تشكيله اديداس للجرى"
      />
      <HeroSection
        desktopimg={sportImgDeskTop}
        mobileimg={sportImgMobile}
        title="تجهّز لتدريبك القادم"
        subtitle="ملابس وأحذية تمارين الجيم المصممة لدعم حركتك وقوة تحملك"
        buttontext="تسوق الان"
        buttonlink="/products/gym"
        PageTitle="ملابس وأحذية تدريبات الجيم"
      />
      <SportsSection sportList={SportSection} sportSectionHeader={Header} />
    </div>
  );
}

export default HomePage;
