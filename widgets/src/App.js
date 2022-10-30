import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

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
];

const options = [
  {
    label: 'The Colour Red',
    value: 'red'
  },
  {
    label: 'The Colour Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
   <div>
     {/* <Accordion items={items} /> */}
     {/* <Search /> */}
     <Dropdown 
      options={options} 
      selected={selected}
      onSelectedChange={setSelected}
    />
   </div>
  );
}

export default App;
