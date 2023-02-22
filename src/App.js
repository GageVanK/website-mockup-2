import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import HeaderMiddle from "./components/HeaderMiddle";
import FooterCentered from "./components/FooterCenter";
import { StyledPageContainer } from "./components/StyledPageContainer";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderMiddle />

      <StyledPageContainer>
        <Routes>
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </StyledPageContainer>
      <FooterCentered />
    </BrowserRouter>
  );
}
