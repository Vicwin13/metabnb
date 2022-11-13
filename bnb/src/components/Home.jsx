import "../App.css";

import Adventure from "./Adventure";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
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
        <Header />
      </div>
      <Adventure />

      <Learn />
      <Footer />
    </>
  );
}

export default Home;
