import HeroSection from "../components/features/Home/Banner";
import HeroForDeskTop from "../assets/backgroud-hero_section.svg";
import HeroForMobile from "../assets/backgroud-hero_section_for_moblie.svg";
import sportImgMobile from "../assets/Gemini_Generated_Image_4tmmaw4tmmaw4tmm.svg";
import sportImgDeskTop from "../assets/Gemini_Generated_Image_a0x8gaa0x8gaa0x8.svg";
import SportsSection from "../components/features/Home/SportsSection";
import footballImg from "../assets/football.svg";
import tenesImg from "../assets/tenes.svg";
import runImg from "../assets/run.svg";
import GymImg from "../assets/gem.svg";
import basketBallImg from "../assets/basctball.svg";
import type { SportSectionProp } from "../types/HomeTypes/HmeBanner";
function HomePage() {
  const SportSection: SportSectionProp[] = [
    {
      image: footballImg,
      SetionName: "FootBall",
      pathLink: "/products",
    },
    {
      image: tenesImg,
      SetionName: "Tennis",
      pathLink: "/products",
    },
    {
      image: runImg,
      SetionName: "Running",
      pathLink: "/products",
    },
    {
      image: GymImg,
      SetionName: "Gym",
      pathLink: "/products",
    },
    {
      image: basketBallImg,
      SetionName: "BasketBall",
      pathLink: "/products",
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
        buttonlink="/products"
      />
      <HeroSection
        desktopimg={sportImgDeskTop}
        mobileimg={sportImgMobile}
        title="تجهّز لتدريبك القادم"
        subtitle="ملابس وأحذية تمارين الجيم المصممة لدعم حركتك وقوة تحملك"
        buttontext="تسوق الان"
        buttonlink="/products"
      />
      <SportsSection
        sportList={SportSection}
        sportSectionHeader={Header}
      />
    </div>
  );
}

export default HomePage;
