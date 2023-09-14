import React, { useState, Component } from 'react';

const withTooltip = (WrappedComponent, tooltipText) => {
  return function WithTooltip (props) {

    const [show, setShow] = useState(false);

    handleMouseEnter = () => {
     setShow(true);
    };

    handleMouseLeave = () => {
     setShow(false);
    };

    render() {
      return (
        <div className='card'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <WrappedComponent {...props} />
          {show && (
            <div className='card'>
              {tooltipText}
            </div>
          )}
        </div>
      );
    }
  };
};

export default withTooltip;
