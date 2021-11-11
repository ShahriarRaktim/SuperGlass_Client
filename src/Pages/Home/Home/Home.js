import React from "react";
import { Row } from "react-bootstrap";
import Banar from "../Banar/Banar";
import HomeProducts from "../HomeProducts/HomeProducts";
import Reason from "../Reason/Reason";
import Review from "../Review/Review";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banar></Banar>

      <section>
        <div className="services">
          <h1>SuperGlass</h1>
          <h2>Our Best Collection</h2>
          <p>
            As you continue to keep tabs on the <span>SuperGlass</span>{" "}
            industry, don’t forget to prioritize the deep-seated passion you’ve
            been feeling to propel your career forward.
          </p>
        </div>
        {/* <Row xs={1} md={2} lg={3} className="m-0 g-4">
          {products.map((product) => (
            <HomeProducts key={product.id} product={product}></HomeProducts>
          ))}
        </Row> */}
      </section>
      <Reason></Reason>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
