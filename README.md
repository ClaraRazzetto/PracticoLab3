1. ¿Qué es un High Order Component (HOC) en React y cuál es su propósito principal en la construcción de componentes?

   Un componente de orden superior (HOC por las siglas en inglés de higher-order component) es una técnica avanzada en React para el reuso de la lógica de componentes.
   En concreto un HOC es una función que recibe un componente como párametro y devuelve un nuevo componente. 
   Su propósito princial es encapsular una funcionalidad común y hacerla reutilizable.

2. ¿Cuál es la ventaja de utilizar Render Props en lugar de HOCs o componentes de clase para compartir lógica en React? Proporciona un ejemplo de uso de Render Props.
   * No hay problemas de naming collision para props, estados o métodos.
   * Mejor lectura del código, se conoce con claridad que componente estamos llamando 
   * Se pueden anidar multiples componentes de render props
   * Evita problemas de props drilling 
   * El renderizado del componente final depende de nosotros y no del HOC
   * Se pueden implementar la mayoría de los componentes de orden superior (HOC) utilizando un componente regular con una render prop.

Ejemplo:

      const FormLogin = () => {
       const submitHandler = (e) => {
          e.preventDefault();
          alert('Inicio de sesion exitoso'); 
       }
       return (
          <div className='formLogin-container'>
            <p className='title-formLogin'>Iniciar sesión</p>
            <form className='formLogin-box'>
      	//…
         </form>
         <BasicButton 
            buttonName={"Iniciar sesión"}   
            buttonHandler={submitHandler}
         />
             </div>
           )
      }
      
      
      export default FormLogin;
      import './basicButton.css'
       const BasicButton = ({buttonName, buttonHandler}) => {
        return (
          <button className="button" onClick={buttonHandler}>
             {buttonName}
          </button>
        )
       }
       export default BasicButton



3. En la práctica, ¿cuáles son las diferencias clave entre el patrón HOC y el patrón Render Props en cuanto a su implementación y cuándo se prefiere uno sobre el otro?

   En cuanto a su implementación, los HOCs, son funciones que reciben un componente como párametro y devuelve un nuevo componente agregando props adicionales o lógica al componente devuelto. 
   Por otro lado las render props, es una prop que recibe una función que un componente utiliza para saber qué renderizar. El componente que recibe el render prop decide cómo y dónde utilizarlo. 
  
   HOCs es util para compartir lógica común entre multiple componente de manera fácil cuando la relación entre la funcionalidad agregada y el componente es directa.
   Render Props es más util cuando la personalización y la composición son importantes. Esto es porque se los componentes consumidores tienen más control sobre el renderizado del contenido dentro de ellos.

5. ¿Cómo puedes evitar problemas comunes relacionados con la renderización innecesaria al utilizar HOCs o Render Props en React? Menciona algunas técnicas para mejorar el rendimiento.
    * Evitar anidar muchos componentes.
    * Realizar pruebas de rendimiento
    * Utilizar componentes funcionales o Hooks
    * Utilizar herramientas como hightlifht updates de React dev tools
    * Evitar la creación innecesario de nuevas instancias de funciones
    * Utilizar React.memo, shouldComponentUpdate, React.PureComponent

6. Ejercicio Práctico:

   Ejercicio de Composición de Componentes:
   Diseña dos componentes funcionales en React: Toggle y Tooltip.
   El componente Toggle debe ser capaz de alternar entre mostrar y ocultar su contenido al hacer clic en él. Debería aceptar children como prop y renderizarlo cuando esté visible.
   El componente Tooltip debe envolver a otro componente y mostrar un mensaje de información cuando el usuario pase el cursor sobre él.
   Implementa Toggle y Tooltip utilizando tanto HOC como Render Props para componer su funcionalidad adicional.
   Crea un tercer componente llamado App que utilice tanto Toggle como Tooltip para demostrar cómo puedes componer estos componentes de diferentes maneras.
