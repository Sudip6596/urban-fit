import "./App.css";
import Header from "./Components/Header";
import WHYURBAN from "./Components/WHYURBAN";
import Marketing from "./Components/Marketing";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import FooterLinks from "./Components/FooterLinks";

function App() {
  return (
    <div className="App">
      <Header />
      <WHYURBAN />
      <Marketing />
      <Form />
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default App;
