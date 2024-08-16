import { useState } from 'react'; 
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js'


const reactDescriptions = ['Fundamental', 'Crucial', 'Core','Nitesh Shukla'];
function genRandomInt(max)
{
  return Math.floor(Math.random() * (max + 1));
}

function App() {
 //call useState hooks 
  const [ selectedTopic, setSelectedTopic ] =  useState();


  function handleSelect(selectedButton) {
    // selectedButton => 'components','JSX','propes','state'
    //console.log(selectedButton);
    setSelectedTopic(selectedButton);
   // tabContent = selectedButton;
   // console.log(selectedTopic);
}
console.log('App component Executing!');

  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(3)]} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* This is sorted way to fatch the dynamicly i from the screen */}
          {/* {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem}/>)}  */}
          <CoreConcept 
          title = {CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}/> 
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>

        </section>

        <section id = "examples">
            <h2>Example</h2>
            <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() =>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() =>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() =>handleSelect('state')}>State</TabButton> 
            </menu>
          {selectedTopic}
          {!selectedTopic && <p>Please select a topic</p>}

          {selectedTopic && (
          <div id = "tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          )}
        </section>
        
      </main>
    </div>
  );
}

export default App;
