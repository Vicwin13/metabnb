import "./styled/place.css";

import Adventure from "./Adventure";
import AdventureList from "./AdventureList";
import CatalogueList from "./CatalogueLists";
import Footer from "./Footer";
import Options from "./Options";

const Place = ({ lists }) => {
  return (
    <main>
      <div className="home">
        <Options />
      </div>
      <CatalogueList />
      <Adventure />
      <Footer />
    </main>
  );
};

export default Place;
