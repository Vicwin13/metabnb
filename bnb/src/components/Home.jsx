import "../App.css";

import Adventure from "./Adventure";
import Banner from "./Banner";
import Footer from "./Footer";
import Learn from "./Learn";
import Main from "./Main";

function Home() {
  return (
    <>
      <div className="home">
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
