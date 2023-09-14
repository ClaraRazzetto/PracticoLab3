import { useState } from "react";

const withToogle = (WrappedComponent) => {
    
    return function ToogleWrapper(props) {
        
        const [on, setOn] = useState(false);

        const buttonClickHandler = () => {
            setOn(!on);
        }

        return (
            <div className='card'>
                <button className="mensajebutton" onClick={buttonClickHandler}>Clikea sobre mi</button>
                {on && <WrappedComponent {...props} />}
            </div>

        )
    }


}

export default withToogle
