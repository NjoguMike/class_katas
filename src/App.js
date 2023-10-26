import './App.css';
import ChipList from './Chiplist';


function App() {

  const chips = [
    { label: "123456" },
    { label: "1234567" },
    { label: "12345678" },
    { label: "12345" },
    { label: "123456789" }
  ]


  return (
    <div className="App">
      <div className="App-header">
        <ChipList chips={chips} maxChipsDisplayed={3} maxTextLength={6}/>
      </div>
      
    </div>
  );
}

export default App;
