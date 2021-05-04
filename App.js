import logo from './logo.svg';
import './App.css';
function App() {
  var text = "";
 
  const handleGetText = (event) => {
    text = event.target.value;
  }
 
  const saveInLocalStorage = () => {
    window.localStorage.setItem("value", text)
  }
 
  const getFromLocalStorage = () => {
    alert(window.localStorage.getItem("value"))
  }
 
  return (
    <div className="App">
      <input onChange={handleGetText} />
      <button onClick={saveInLocalStorage}>
        In Local Storage
      </button>
      <button onClick={getFromLocalStorage}>
        Get Local Storage
      </button>
    </div>
  );
}

export default App;
