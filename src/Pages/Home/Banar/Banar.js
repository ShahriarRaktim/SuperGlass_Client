import React from 'react';
import { NavLink } from 'react-router-dom';

const Banar = () => {
    return (
        <section className="banar">
        <h1>
          <span>BEST</span> Sunglassess For Your Beauty
        </h1>
        <NavLink to="/products" className="about">
          Explore <i class="fas fa-arrow-alt-circle-right"></i>
        </NavLink>
      </section>
    );
};

export default Banar;