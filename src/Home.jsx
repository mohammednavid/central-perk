import React, { useEffect } from "react";
import "../node_modules/materialize-css/dist/css/materialize.css";
import M from "materialize-css";

const Home = () => {
  // useEffect(() => {
  document.addEventListener("DOMContentLoaded", function () {
    let elems = document.querySelectorAll(".slider");
    let instances = M.Slider.init(elems, {
      indicators: false,
      height: 535,
    });
  });

  return (
    <div class="slider">
      <ul className="slides">
        <li>
          <img src="https://img.timeoutshanghai.com/201806/20180611030210549.jpg" />
          <div className="caption center-align">
            <h1>THE CENTRAL PERK</h1>
            <h5 className="light grey-text text-lighten-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              molestias quis nobis impedit.
            </h5>
          </div>
        </li>
        <li>
          <img src="https://wallpapercave.com/wp/wp2001489.jpg" />
          {/* <div className="caption left-align">
            <h1>BREWED TO PERFECTION</h1>
            <h5 className="light grey-text text-lighten-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae sint quibusdam eveniet ea.
            </h5>
          </div> */}
        </li>
        <li>
          <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F09%2Fgettyimages-143479959-2000.jpg" />
          {/* <div className="caption right-align">
            <h1>THE HOME OF COFFEE</h1>
            <h5 className="light grey-text text-lighten-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae sint quibusdam eveniet ea.
            </h5>
          </div> */}
        </li>
      </ul>
    </div>
  );
};

export default Home;
