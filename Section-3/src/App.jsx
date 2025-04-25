// //PS create i want to display some words randomly in h1 tag instead of Fundamantals
// const reactDescription = ['Fundamantal', 'Crucial', 'Core']

// function genRandomInt(max){
//   return Math.floor(Math.random() * (max+1));
// }
// function Header(){
//   return(
//     <header>
//         <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//         <h1>React Essentials</h1>
//                <p>
//           {reactDescription[genRandomInt(2)]} React concepts you will need for almost any app you are
//           going to build!
//                </p>
//       </header>
//   )
// }


//Good Practice
const reactDescription = ['Fundamantal', 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}


//Dynamic path
import reactImg from './assets/react-core-concepts.png'
function Header(){
  //Good Practice
  const description = reactDescription[genRandomInt(2)];
  return(
    <header>
        {/* //Hard coded path we should not do we need to make an Dynamic path while deploymant the hardcoded path will ignored once the folder has been deleted */}
        {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
        <img src = {reactImg} alt='Demo Image'/>

        <h1>React Essentials</h1>
               <p>
          {description} React concepts you will need for almost any app you are
          going to build!
               </p>
      </header>
  )
}

//Making Components reusable
function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

import componentsImg from './assets/components.png'; // or the correct path

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>core Concepts</h2>
          <ul>
  <CoreConcept 
    title="Components"
    description="The core building blocks of React."
    image={componentsImg}
  />
  <CoreConcept 
    title="JSX"
    description="JS syntax for writing UI inside JavaScript."
    image={componentsImg}
  />
  <CoreConcept 
    title="Props"
    description="Way to pass data into components."
    image={componentsImg}
  />
  <CoreConcept 
    title="State"
    description="Manages dynamic data and UI updates."
    image={componentsImg}
  />
  <CoreConcept 
    title="Hooks"
    description="Functions that let you use state and other features."
    image={componentsImg}
  />
  <CoreConcept 
    title="Rendering"
    description="The process of displaying UI based on data."
    image={componentsImg}
  />
</ul>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
