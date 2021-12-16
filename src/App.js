import "./App.css";
import BaseText from "./components/BaseText";
import H1 from "./components/H1";
import Header from "./components/Header";
import Label from "./components/Label";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <H1 text="I'm Abdurrahman Sogbesan" />
        <span>
          <BaseText text="Frontend developer, UX architect and Javascript engineer," />{" "}
          <Label text="Photochromic Lens" />{" "}
          <BaseText text="enthusiast, practicing minimalist, and " />
          <Label text="Pop Music & Jazz lover" />
          <BaseText text=" in search of flow." />
        </span>
      </div>
    </div>
  );
}

export default App;
