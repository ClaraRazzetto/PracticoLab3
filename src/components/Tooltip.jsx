import React, { Component } from 'react';

const withTooltip = (WrappedComponent, tooltipText) => {
  return class WithTooltip extends Component {
   
    state = {
      show: false,
    };

    handleMouseEnter = () => {
      this.setState({ show: true });
    };

    handleMouseLeave = () => {
      this.setState({ show: false });
    };

    render() {
      return (
        <div className='card'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <WrappedComponent {...this.props} />
          {this.state.show && (
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
