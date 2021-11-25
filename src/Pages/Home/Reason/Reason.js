import React from "react";
import { NavLink } from "react-router-dom";
import glass from '../../../image/Glassy.png'

const Reason = () => {
  return (
    <section className="doc-team">
        <div className="mt-5">
          <img className="mt-5" src={glass} alt="" />
        </div>
        <div>
          <div className="information">
            <h1>SuperGlass</h1>
            <h2>We have the best Collections of Your needed Sun Glass.</h2>
            <p>
              We treatment in a simple way so that you all can understand a
              particular illness or disease in a better way, get treated in a
              proper way by consulting your family healthcare physician.
            </p>
            <div className="all-info">
              <div className="info">
                <h3>
                <i class="fab fa-superpowers"></i>
                </h3>
                <div>
                  <h4>Quality of Glasses</h4>
                  <p>
                    Human compassion can be a profession. PSU’s 14 pre-health
                    tracks show you how.
                  </p>
                </div>
              </div>

              <div className="info">
                <h3>
                <i class="fas fa-bullhorn"></i>
                </h3>
                <div>
                  <h4>Why our Glasses</h4>
                  <p>
                    Become a next-generation leader. Earn your Master's in
                    Public Service Leadership
                  </p>
                </div>
              </div>

              <div className="info">
                <h3>
                  <i class="fas fa-clock"></i>
                </h3>

                <div>
                  <h4>24/7 Delivery Time</h4>
                  <p>
                    Time is the continued sequence of existence and events that
                    occurs in an apparently irreversible succession from the
                    past, through the present
                  </p>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/" className="contact">
            Contact Us <i class="fas fa-arrow-alt-circle-right"></i>
          </NavLink>
        </div>
      </section>
  );
};

export default Reason;
