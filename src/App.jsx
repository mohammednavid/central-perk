import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
// import About from "./About";
import Custom from "./CustomBase";
import Gallery from "./Gallery";
import Comments from "./Comments";
import Footer from "./Footer";
import Card from "./Card";
// import Contact from "./Contact";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Home />
        <>
          <h2 className="cards__header">Menu</h2>
          <div className="cards">
            <Card
              id="11"
              img="https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              title="Chn Pasta"
              ratings="4.3"
              price={250}
            />
            <Card
              id="12"
              img="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              title="Cappuccino"
              ratings="4.5"
              price={150}
            />
            <Card
              id="13"
              img="https://images.unsplash.com/photo-1528945522327-7032b0774637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              title="French Toast"
              ratings="4.6"
              price={220}
            />
            <Card
              id="14"
              img="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              title="Chn BBQ Pizza"
              ratings="4.3"
              price={320}
            />
          </div>
        </>
        <Custom />
        <Gallery />
        <Comments />
        <Footer />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/Contact" component={Contact} />
          <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/custom" component={Custom} /> */}
        {/* </Switch> } */}
      </Router>
    </>
  );
};

export default App;
