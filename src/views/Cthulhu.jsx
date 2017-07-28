import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  // proptypes
};

const defaultProps = {
  // default props
};

export default class Cthulhu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // initial state
    };
  }

  render() {
    return (
      <div>
        <div className="cthulhu">
          <div className="cthulhu_category">
            <div className="cthulhu_label">
              <input className="cthulhu_input" />
              <h3>Happy things</h3>
            </div>
            <div className="cthulhu_image sun" />
          </div>
          <div className="cthulhu_category">
            <div className="cthulhu_label">
              <input className="cthulhu_input" />
              <h3>Future risks</h3>
            </div>
            <div className="cthulhu_image monster" />
          </div>
          <div className="cthulhu_category">
            <div className="cthulhu_label">
              <input className="cthulhu_input" />
              <h3>Things making us faster</h3>
            </div>
            <div className="cthulhu_image sail" />
          </div>
          <div className="cthulhu_category">
            <div className="cthulhu_label">
              <input className="cthulhu_input" />
              <h3>Things slowing us down</h3>
            </div>
            <div className="cthulhu_image anchor" />
          </div>
        </div>
        <div className="cthulhu_buttonContainer">
          <Link to="/sticky" className="ajeel_button">Add Sticky +</Link>
        </div>
      </div>
    );
  }
}

Cthulhu.propTypes = propTypes;
Cthulhu.defaultProps = defaultProps;