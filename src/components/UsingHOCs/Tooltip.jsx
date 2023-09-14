import { useState } from 'react';

const withTooltip = (WrappedComponent) => {

  return function TooltipWrapper(props) {

    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const showTooltip = () => {
      setIsTooltipVisible(true);
    };

    const hideTooltip = () => {
      setIsTooltipVisible(false);
    };



    return (
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip} >
        <WrappedComponent {...props} />
        {isTooltipVisible && (
          <div>
            {props.text}
          </div>
        )}
      </div>

    );
  }
};

export default withTooltip;
