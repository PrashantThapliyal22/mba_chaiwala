import IntroVideo from "./components/IntroVideo";
import "./styles/App.scss";
import freshTopicImg from "./assets/academy.png";
import Section from "./components/Section";
import "./styles/intro.scss";
import "./styles/section.scss";
import data from "./data/data.json";
const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";
function App() {
  const { freshTopic } = data;
  return (
    <>
      <IntroVideo />
      {/*  freshTopic */}
      <Section
        h3={"freshTopic.heading"}
        text={"freshTopic.text"}
        btnTxt={"freshTopic.btnTxt"}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={white}
      />
    </>
  );
}

export default App;
