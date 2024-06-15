import GitHeader from "./component/shahin_codepen/js/GitHeader.js";
import GitFooter from "./component/shahin_codepen/js/GitFooter.js";
import Accordion from "./component/element/accordion/Accordion.js";
// import ShowPassword from "./component/element/show_password/ShowPassword.js";
import "./component/master_css/Main.scss";

function App() {
  return (
    <div>
      <GitHeader />
      {/* <ShowPassword /> */}
      <Accordion />
      <GitFooter />
    </div>
  );
}

export default App;
