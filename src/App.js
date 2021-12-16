import "./App.css";
import H1 from "./components/H1";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <H1 text="I'm Abdurrahman Sogbesan" />
        <p>
          Frontend developer, UX architect and Javascript engineer, Photochromic
          Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in
          search of flow. <br /> <br /> Working with my hands to make magic
          happen on the internet. View my Projects, Articles, Resumé, Contact
          Me, or send me an email at hellocodewonders@gmail.com. <br /> <br />
          See More About Me
        </p>
      </div>
    </div>
  );
}

export default App;
