/* Import components, arrays and useState (Changing Whats Displayed) from correct folders */
import { LAKES_INFO } from './data.js';
import Header from './components/Header/Header.jsx';
import LakesInformation from './components/LakesInformation.jsx';
import { EXAMPLES } from './data.js';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  /* useState array takes two arguments from TabButton (selectedTopic) and sets the name of (setSelectedTopic) to the name of the button that was pressed using the handleSelect function */
  const [selectedTopic, setSelectedTopic ] = useState();

  /* Takes in the selectedButton name and sets it to SetSelectedTopic */
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = null;

  /* If selectedTopic matches name of the button, output the information from the TabButton (Stored in data.js) */
  if (selectedTopic) {
    tabContent = (
    <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    </div>
    )
  };

  return (
    <div>

      <Header/>

      <main>
        <section id="lakes-info">
          <h2>Lakes, Paddleboards and Weather Information</h2>

          <ul>
            {LAKES_INFO.map((lakesInfo) => (
              <LakesInformation key={lakesInfo.title} {...lakesInfo}/>
            ))}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples (Please select a topic)</h2>

          <menu>
            <TabButton isSelected={selectedTopic === 'lakes'} onSelect={() => handleSelect('lakes')}>Lakes</TabButton>
            <TabButton isSelected={selectedTopic === 'paddleboards'} onSelect={() => handleSelect('paddleboards')}>Paddleboards</TabButton>
            <TabButton isSelected={selectedTopic === 'weatherInformation'} onSelect={() => handleSelect('weatherInformation')}>Weather Information</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>

    </div>
  );
}

export default App;
