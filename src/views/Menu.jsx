import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__item ssk">
        <div className="menu__label">
          Start, Stop, Keep
        </div>
      </div>
      <Link to="/cthulhu" className="menu__item cthulhuGame">
        <div className="menu__label">
          Cthulhu
        </div>
      </Link>
      <div className="menu__item apples">
        <div className="menu__label">
          Apples to Apples
        </div>
      </div>
      <div className="menu__item leanUx">
        <div className="menu__label">
          Lean UX
        </div>
      </div>
    </div>
  );
}

export default Menu;