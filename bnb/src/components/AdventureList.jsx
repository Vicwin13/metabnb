const AdventureList = ({ lists, title }) => {
  return (
    <>
      {lists.map((list) => (
        <div className="ad-container" key={list.id}>
          <div className="frame-pics">
            <img src={list.frames} alt="" />
          </div>
          <div className="sep">
            <p>{list.first}</p>
            <p>{list.second}</p>
          </div>
          <div className="sep">
            <p>{list.third}</p>
            <p>{list.fourth}</p>
          </div>
          <div className="stars">
            <img src={list.star} alt="feedback stars" />
            <img src={list.star} alt="feedback stars" />
            <img src={list.star} alt="feedback stars" />
            <img src={list.star} alt="feedback stars" />
            <img src={list.star} alt="feedback stars" />
          </div>
        </div>
      ))}
    </>
  );
};

export default AdventureList;
