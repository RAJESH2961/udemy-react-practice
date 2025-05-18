import Header from './components/Header.jsx'
import Meals from './components/Meals.jsx';
import { CartContextProvider } from './store/CartContext.jsx';
function App() {
  return (
    <>
    {/* //when we wrap the components inside the CartContextProvider the data will be shared between those components */}
    <CartContextProvider>
      <Header/>
      <Meals />
      </CartContextProvider>
    </>
  );
}

export default App;
