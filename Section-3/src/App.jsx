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

//we created seperate component for CoreConcept so we need to import 
import CoreConcept from './components/CoreConcept.jsx';

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




import componentsImg from './assets/components.png'; // or the correct path

//Getting data from External FIle
import { CORE_CONCEPTS } from './data.js';



function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>core Concepts</h2>
          {/* <ul> */}
  {/* <CoreConcept 
    title={CORE_CONCEPTS[0].title}
    description={CORE_CONCEPTS[0].description}
    image={CORE_CONCEPTS[0].image}
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
  /> */}
{/* </ul> */}

{/* we can also iterate through all elemants */}
<ul>
  {CORE_CONCEPTS.map((concept, index) => (
    <CoreConcept
      key={index}
      title={concept.title}
      description={concept.description}
      image={concept.image}
    />
  ))}
{/* //We can display it using 3 ways */}
{/* //using method-1  */}
<CoreConcept 
    title={CORE_CONCEPTS[0].title}
    description={CORE_CONCEPTS[0].description}
    image={CORE_CONCEPTS[0].image}
  />
  {/* method-2 hard coded value passing props */}
  <CoreConcept 
    title="JSX"
    description="JS syntax for writing UI inside JavaScript."
    image={componentsImg}
  />
  {/* method-3 spread operators */}
  <CoreConcept {...CORE_CONCEPTS[0]}/>
  <CoreConcept {...CORE_CONCEPTS[0]}/>

</ul>


        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
