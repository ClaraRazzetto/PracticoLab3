import React, { useState } from 'react'

const Toogle = ({children}) => {

    const [on, setOn] = useState(false);

    const buttonClickHandler = () => {
        setOn(!on);
    }

  return children ({on, buttonClickHandler});
}

export default Toogle
