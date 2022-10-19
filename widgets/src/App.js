import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: 'What is React',
    content: 'React is a front end JavaScript framework'
  },
  {
    title: 'Why use React',
    content: 'React is a favourite JS library amonst engineers'
  },
  {
    title: 'How to use React',
    content: 'You use React by creating components'
  }
]

function App() {
  return (
   <div>
     {/* <Accordion items={items} /> */}
     <Search />
   </div>
  );
}

export default App;
