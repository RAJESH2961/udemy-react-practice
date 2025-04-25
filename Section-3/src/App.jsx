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


function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
