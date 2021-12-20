import "./App.css";
import BaseText from "./components/BaseText";
import Footer from "./components/Footer";
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
        <br/>
        <span>
          <BaseText text="Working with my hands to make magic happen on the internet. View my " />
          <Label text="Projects" />
          <BaseText text=", " />
          <Label text="Articles" />
          <BaseText text=", " />
          <Label text="Resume" />
          <BaseText text=", " />
          <Label text="Contact Me" />
          <BaseText text=", or send me an email at " />
          <Label text="abdurrahman0803@gmail.com" />
          <BaseText text="." />
        </span>
        <Footer linkText="See More About Me" />
      </div>
    </div>
  );
}

export default App;
