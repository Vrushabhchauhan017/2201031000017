import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone1415ProMax from "./pages/i-phone1415-pro-max";
import IPhone1415ProMax1 from "./pages/i-phone1415-pro-max1";
import IPhone1415ProMax2 from "./pages/i-phone1415-pro-max2";
import IPhone1415ProMax3 from "./pages/i-phone1415-pro-max3";
import IPhone1415ProMax4 from "./pages/i-phone1415-pro-max4";
import IPhone1415ProMax5 from "./pages/i-phone1415-pro-max5";
import IPhone1415ProMax6 from "./pages/i-phone1415-pro-max6";
import IPhone1415ProMax7 from "./pages/i-phone1415-pro-max7";
import IPhone1415ProMax8 from "./pages/i-phone1415-pro-max8";
import IPhone1415ProMax9 from "./pages/i-phone1415-pro-max9";
import IPhone1415ProMax10 from "./pages/i-phone1415-pro-max10";
import IPhone1415ProMax11 from "./pages/i-phone1415-pro-max11";
import IPhone1415ProMax12 from "./pages/i-phone1415-pro-max12";
import IPhone1415ProMax13 from "./pages/i-phone1415-pro-max13";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-2":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-3":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-5":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-6":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-7":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-8":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-9":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-10":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-11":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-12":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-13":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-14":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-15":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhone1415ProMax />} />
      <Route path="/iphone-14-15-pro-max-2" element={<IPhone1415ProMax1 />} />
      <Route path="/iphone-14-15-pro-max-3" element={<IPhone1415ProMax2 />} />
      <Route path="/iphone-14-15-pro-max-5" element={<IPhone1415ProMax3 />} />
      <Route path="/iphone-14-15-pro-max-6" element={<IPhone1415ProMax4 />} />
      <Route path="/iphone-14-15-pro-max-7" element={<IPhone1415ProMax5 />} />
      <Route path="/iphone-14-15-pro-max-8" element={<IPhone1415ProMax6 />} />
      <Route path="/iphone-14-15-pro-max-9" element={<IPhone1415ProMax7 />} />
      <Route path="/iphone-14-15-pro-max-10" element={<IPhone1415ProMax8 />} />
      <Route path="/iphone-14-15-pro-max-11" element={<IPhone1415ProMax9 />} />
      <Route path="/iphone-14-15-pro-max-12" element={<IPhone1415ProMax10 />} />
      <Route path="/iphone-14-15-pro-max-13" element={<IPhone1415ProMax11 />} />
      <Route path="/iphone-14-15-pro-max-14" element={<IPhone1415ProMax12 />} />
      <Route path="/iphone-14-15-pro-max-15" element={<IPhone1415ProMax13 />} />
    </Routes>
  );
}
export default App;
