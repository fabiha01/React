import { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

const path = window.location.pathname;

const showAccordion = () => {
  if (path === '/') {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (path === '/list') {
    return <Search />;
  }
};

const showDropdown = () => {
  if (path === '/dropdown') {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (path === '/translate') {
    return <Translate />;
  }
};

function App() {
  // const [selected, setSelected] = useState(options[0]);

  return (
   <div>
     {showAccordion()}
     {showDropdown()}
     {showList()}
     {showTranslate()}
   </div>
  );
}

export default App;
