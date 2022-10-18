import Accordion from "./components/Accordion";

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
     <Accordion items={items} />
   </div>
  );
}

export default App;
