import Accordian from "./components/Accordians/Accordian";
// import AccordianItem from "./components/Accordians/AccordianItem";

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
  </main>)
}
export default App;
