import { Reset } from "styled-reset";
import ScrollToTop from "./ScrollToTop";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Main from "./contents/main/Main";
import Group from "./contents/group/Group";
import Recruit from "./contents/recruit/Recruit";
import HiTaxi from "./contents/hitaxi/HiTaxi";
import Dayeon from "./contents/dayeon/Dayeon";
import Customer from "./contents/customer/Customer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Fonts.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <Reset />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/그룹소개" element={<Group />}></Route>
          <Route path="/기사모집" element={<Recruit />}></Route>
          <Route path="/하이택시" element={<HiTaxi />}></Route>
          <Route path="/다연상운" element={<Dayeon />}></Route>
          <Route path="/고객마당" element={<Customer />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
