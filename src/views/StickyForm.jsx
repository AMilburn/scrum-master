import React, { PropTypes } from 'react';

const StickyForm = () => {

  return (
    <div className="stickyForm">
      <form className="stickyForm_form">
        <select>
          <option value="positive">Sun</option>
          <option value="positive">Wind</option>
          <option value="anchors">Anchor</option>
          <option value="potential dangers">Potential Danger</option>
        </select>
        <textarea rows="4" cols="50" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default StickyForm;