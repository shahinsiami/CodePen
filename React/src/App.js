import GitHeader from "./component/ShahinCodepen/js/GitHeader.js";
import GitFooter from "./component/ShahinCodepen/js/GitFooter.js";
import Accordion from "./component/Element/Accordion/Accordion.js";
import ShowPassword from "./component/Element/ShowPassword/ShowPassword.js";
import NavbarOne from "./component/Element/Navbar/NavbarOne/Navbar.js";
import NavbarTwo from "./component/Element/Navbar/NavbarTwo/Navbar.js";
import SlideShowOne from "./component/Element/slideshow/SlideShowOne/SlideShowOne.js";
import ProgressBar from "./component/Element/ProbressBar/ProgressBar.js";
import "./component/MasterCss/Main.scss";

function App() {
  return (
    <div>
      <GitHeader />
      <br></br>
      <br></br>
      {/* <NavbarOne />
      <NavbarTwo />
      <ShowPassword />
      <Accordion />
      <SlideShowOne />  */}
      <ProgressBar />
      <br></br>
      <br></br>
      <GitFooter />
    </div>
  );
}

export default App;
