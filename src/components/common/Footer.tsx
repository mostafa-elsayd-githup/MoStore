import { NavLink } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import type {
  RoutList,
  sportType,
  supportList,
} from "../../types/FooterTypes/RouteFooterType";
function Footer() {
  const productList: RoutList[] = [
    {
      id: 1,
      pageName: "أحذية",
      path: "/",
    },
    {
      id: 2,
      pageName: "الملابس",
      path: "/",
    },
    {
      id: 3,
      pageName: "مُكَمِّلات",
      path: "/",
    },
    {
      id: 4,
      pageName: "وصل حديثاً",
      path: "/",
    },
  ];
  const sportList: sportType[] = [
    {
      id: 1,
      pageName: "الجرى",
      path: "/",
    },
    {
      id: 2,
      pageName: "كره القدم",
      path: "/",
    },
    {
      id: 3,
      pageName: "تنس الطاوله",
      path: "/",
    },
    {
      id: 4,
      pageName: "فى الهواء الطلق",
      path: "/",
    },
  ];
  const supportList: supportList[] = [
    {
      id: 1,
      pageName: "المساعده",
      path: "/",
    },
    {
      id: 2,
      pageName: "الإرجاع واسترداد الأموال",
      path: "/",
    },
    {
      id: 3,
      pageName: "دليل المقاسات",
      path: "/",
    },
    {
      id: 4,
      pageName: "تواصل معنا",
      path: "/",
    },
  ];
  const FotterSection = [
    {
      id: 1,
      title: "المنتجات",
      Links: productList,
    },
    {
      id: 2,
      title: "الرياضات",
      Links: sportList,
    },
    {
      id: 3,
      title: "الدعم",
      Links: supportList,
    },
  ];
  return (
 <section className="py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center items-start">
      {FotterSection.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <h2 className="mb-3 font-bold text-lg text-(--text-h)">
            {item.title}
          </h2>
          <ul className="space-y-2 text-md text-(--text-normal)">
            {item.Links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path || "#"}
                  className="hover:text-(--text-h) transition-colors block py-0.5"
                >
                  {link.pageName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-col items-center">
        <h2 className="mb-3 font-bold text-lg text-(--text-h)">تابعنا</h2>
        <ul className="flex items-center justify-center gap-4 mt-2">
          <li>
            <NavLink
              title="FaceBook"
              to="https://www.facebook.com/mostafa.elsayd.716"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity p-1 block"
            >
              <FaFacebookF size={20} />
            </NavLink>
          </li>
          <li>
            <NavLink
              title="Instagram"
              to="#"
              className="hover:opacity-80 transition-opacity p-1 block"
            >
              <FaInstagram size={20} />
            </NavLink>
          </li>
          <li>
            <NavLink
              title="Twitter"
              to="#"
              className="hover:opacity-80 transition-opacity p-1 block"
            >
              <FaTwitter size={20} />
            </NavLink>
          </li>
          <li>
            <NavLink
              title="YouTube"
              to="#"
              className="hover:opacity-80 transition-opacity p-1 block"
            >
              <FaYoutube size={20} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
}

export default Footer;
