import { useState } from 'react'

const Toogle = ({ children }) => {

  const [on, setOn] = useState(false);

  const buttonClickHandler = () => {
    setOn(!on);
  }

  return ( 
    <div className='card'>
      <button className="mensajebutton" onClick={buttonClickHandler}>Clikea sobre mi</button>
      {on && children}
    </div>
  )
}

export default Toogle
