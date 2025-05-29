import Accordian from "./components/Accordians/Accordian";
import SearchableList from "./components/SearchableList/SearchableList";
// import AccordianItem from "./components/Accordians/AccordianItem";

import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "./components/SearchableList/place";

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return (<main>
    <section>
      <h2>Why work with us</h2>
      <Accordian className="accordion" id="experience">
      <Accordian.Item className="accordian-item" title="we got 20 yeras of experience">
        <article>
          <p>you cant go wrong withus</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid obcaecati porro, hic repellendus quos doloribus aspernatur nobis iusto exercitationem illo?</p>
        </article>
      </Accordian.Item>
      <Accordian.Item id="local-guides" className="accordian-item" title="we got working with local guide">
        <article>
          <p>you cant go wrong withus</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid obcaecati porro, hic repellendus quos doloribus aspernatur nobis iusto exercitationem illo?</p>
        </article>
      </Accordian.Item>
      <Accordian.Item id="some-id" className="accordian-item" title="we got 20 yeras of experience">
        <article>
          <p>you cant go wrong withus</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid obcaecati porro, hic repellendus quos doloribus aspernatur nobis iusto exercitationem illo?</p>
        </article>
      </Accordian.Item>
      </Accordian>
    </section>
    <SearchableList items={PLACES} itemKeyFn={(item) => item.id} >{ (item) => <Place item={item}/>  }</SearchableList>
    <SearchableList items={['item 1', 'item 2']}>{ (item) => item}</SearchableList>
  </main>)
}
export default App;
