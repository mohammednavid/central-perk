import React from "react";
import { Grid } from "@material-ui/core";
import "./CustomBase.css";
// import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";

function CustomBase() {
  return (
    <div className="custom">
      {/* <h1>  </h1> */}
      <div className="custom__header">
        <Fade big>
          <h3>CREATE YOUR OWN COMBO.</h3>
          <h2></h2>
        </Fade>
      </div>
      <div className="custom__menu">
        <Fade Bottom>
          <div className="custom__menuImg">
            <img
              src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/Grid-home-item-show-img.jpg"
              alt=""
            />
          </div>
        </Fade>
        <div className="custom__menuOne">
          <Fade left>
            <div className="custom__menuContent">
              <div>
                <h6>FRENCH TOAST</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil ut porro dolores cumque? Animi perferendis odio quam
                  deleniti!
                </p>
              </div>
              <img
                src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/Item-showcase-icon-2.png"
                alt=""
              />
            </div>
            <div className="custom__menuContent">
              <div>
                <h6>CROISSANT</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil ut porro dolores cumque? Animi perferendis odio quam
                  deleniti!
                </p>
              </div>
              <img
                src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/Item-showcase-icon-1.png"
                alt=""
              />
            </div>
            <div className="custom__menuContent">
              <div>
                <h6>PANCAKES</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil ut porro dolores cumque? Animi perferendis odio quam
                  deleniti!
                </p>
              </div>
              <img
                src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/Item-showcase-icon-3.png"
                alt=""
              />
            </div>
          </Fade>
        </div>
        <div className="custom__menuTwo">
          <Fade right>
            <div className="custom__menuContent">
              <img
                src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/Item-showcase-icon-5.png"
                alt=""
              />
              <div>
                <h6>COFFEE TO GO</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil ut porro dolores cumque? Animi perferendis odio quam
                  deleniti!
                </p>
              </div>
            </div>
            <div className="custom__menuContent">
              <img
                src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/Item-showcase-icon-4.png"
                alt=""
              />
              <div>
                <h6>TURKISH COFFEE</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil ut porro dolores cumque? Animi perferendis odio quam
                  deleniti!
                </p>
              </div>
            </div>
            <div className="custom__menuContent">
              <img
                src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/Item-showcase-icon-6.png"
                alt=""
              />
              <div>
                <h6>MORNING COFFEE</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil ut porro dolores cumque? Animi perferendis odio quam
                  deleniti!
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default CustomBase;
