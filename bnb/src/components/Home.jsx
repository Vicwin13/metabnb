import "../App.css";

import Adventure from "./Adventure";
import Banner from "./Banner";
import Footer from "./Footer";
import Learn from "./Learn";
import Main from "./Main";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Main />
      </div>
      <Banner />
      <div className="home">
        <Adventure />
      </div>
      <Learn />
      <Footer />
    </>
  );
}

export default Home;
