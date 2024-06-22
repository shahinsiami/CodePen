import GitHeader from "./component/shahin_codepen/js/GitHeader.js";
import GitFooter from "./component/shahin_codepen/js/GitFooter.js";
// import Accordion from "./component/element/accordion/Accordion.js";
// import ShowPassword from "./component/element/show_password/ShowPassword.js";
import NavbarOne from "./component/element/navbar/NavbarOne/Navbar.js";
import NavbarTwo from "./component/element/navbar/NavbarTwo/Navbar.js";
import "./component/master_css/Main.scss";

function App() {
  return (
    <div>
      <GitHeader />
      <NavbarOne />
      <br></br>
      <br></br>
      <NavbarTwo />
      {/* <ShowPassword /> */}
      {/* <Accordion /> */}
      <GitFooter />
    </div>
  );
}

export default App;
