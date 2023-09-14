import { useState } from 'react';

function Tooltip({ children, text }) {

    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const showTooltip = () => {
        setIsTooltipVisible(true);
    };

    const hideTooltip = () => {
        setIsTooltipVisible(false);
    };

    return (
        <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip} >
            {children}
            {isTooltipVisible && (
                <div>
                    {text}
                </div>
            )}
        </div>
    );
}

export default Tooltip;
