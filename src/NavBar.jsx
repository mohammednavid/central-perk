import React, { useEffect, useState } from "react";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../../netflix/node_modules/materialize-css/dist/js/materialize.js";
import M from "materialize-css";
import ListSharpIcon from "@material-ui/icons/ListSharp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./NavBar.css";
import { useStateContext } from "./StateProvider";
import Cart from "./Cart";
import CartTotal from "./CartTotal";

const NavBar = () => {
  const [{ cart }, dispatch] = useStateContext();
  const [cartNull, setCartNull] = useState(true);

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  });

  useEffect(() => {
    if (cart == 0) {
      setCartNull(true);
    } else setCartNull(false);
  }, [cart]);

  return (
    <>
      <Router>
        <nav className="nav">
          <div className="nav-wrapper">
            <img
              className="brand-logo"
              src="https://seeklogo.com/images/C/central-perk-logo-D29BF50A0A-seeklogo.com.png"
            />
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <ListSharpIcon className="side-icon" />
            </a>
            <ul className="right">
              <li className="header_option_basket">
                <ShoppingCartIcon />
                <span className="header_option">{cart?.length}</span>
                <div className="cart">
                  <img
                    src="https://seeklogo.com/images/C/central-perk-logo-D29BF50A0A-seeklogo.com.png"
                    alt=""
                  />
                  {cartNull ? (
                    <div className="cart__null">
                      <h1>Cart Empty</h1>
                      <p>
                        Good food is always cooking! Go ahead, order some yummy
                        items from the menu.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="cart__main">
                        {cart.map((item) => (
                          <Cart
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                          />
                        ))}
                      </div>
                      <CartTotal />
                    </>
                  )}
                </div>
              </li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link className="li" to="./home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="li" to="./custom">
                  Custom
                </Link>
              </li>
              <li>
                <Link className="li" to="./about">
                  About
                </Link>
              </li>
              <li>
                <Link className="li" to="./contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav center" id="mobile-demo">
          <li>
            <Link className="li" to="./home">
              Home
            </Link>
          </li>
          <li>
            <Link className="li" to="./custom">
              Custom
            </Link>
          </li>
          <li>
            <Link className="li" to="./about">
              About
            </Link>
          </li>
          <li>
            <Link className="li" to="./contact">
              Contact
            </Link>
          </li>
        </ul>
      </Router>
    </>
  );
};

export default NavBar;
