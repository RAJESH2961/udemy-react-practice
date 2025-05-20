import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import { Fragment } from 'react/jsx-runtime';

function App() {
  return (
    <Fragment>
        <Header/>
        <Auth/>
        <Counter />
    </Fragment>

  );
}

export default App;
