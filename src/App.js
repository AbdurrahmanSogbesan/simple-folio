import "./App.css";
import BaseText from "./components/BaseText";
import H1 from "./components/H1";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <H1 text="I'm Abdurrahman Sogbesan" />
        <BaseText
          text="Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow.
"
        />
      </div>
    </div>
  );
}

export default App;
