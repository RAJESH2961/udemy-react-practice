import './Header.css';       // if in src/styles/Header.css

//Good Practice
const reactDescription = ['Fundamantal', 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}


//why here we used .. instead of . because we need to go two step back 
//1- components
//2- assets
import reactImg from './assets/react-core-concepts.png'

export default function Header(){
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
