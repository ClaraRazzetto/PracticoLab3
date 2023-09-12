
import './App.css'
import MyComponent from './components/MyComponent';
import Toogle from './components/Toogle'
import withTooltip from './components/Tooltip';

const TooltipedComponent = withTooltip(MyComponent, 'Hola :)');

function App() {

  return (
    <>
      <div className='card'>
        <Toogle>
          {({on, buttonClickHandler}) =>
          (
            <button className = "mensajebutton" onClick={buttonClickHandler}>{on ? '' : 'Clikea sobre mi para desaparecer este mensaje'}</button>
          )
          }
        </Toogle>
      </div>

      <div>
        <TooltipedComponent />
      </div>
    </>
  )
}

export default App

