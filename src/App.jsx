import './App.css'
import MyToogleComponent from './components/UsingHOCs/MyToogleComponent'
import MyTooltipComponent from './components/UsingHOCs/MyTooltipComponent'
import withToogle from './components/UsingHOCs/Toogle'
import withTooltip from './components/UsingHOCs/Tooltip'
import Toogle from './components/UsingRenderProps/Toogle'
import Tooltip from './components/UsingRenderProps/Tooltip'

const ToggledComponent = withToogle(MyToogleComponent);
const TooltipedComponent = withTooltip( MyTooltipComponent);

function App() {

  return (
    <div className='super-card'>

      <div className='card'>

        <h2>Using Render Props</h2>

        <Toogle>
          <p>Hola</p>
        </Toogle>

        <Tooltip text="Buen día :) ">
          <button> Pasa el mouse sobre mí </button>
        </Tooltip>

      </div>

      <div className='card'>
        <h2>Using HOCs</h2>
        <ToggledComponent>Hola</ToggledComponent>
        <TooltipedComponent text="Buen día :) "/>

      </div>
    </div>
  )
}

export default App

