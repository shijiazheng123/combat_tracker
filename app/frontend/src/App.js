import logo from './logo.svg';
import './App.css';
import {CombatContainer} from "./CombatContainer";
import {server} from "./constants";
import {socket} from "./constants";
import {useState} from "react";



function App() {

    socket.on('connection', (message) => {
        console.log("received");
    })

    document.title = "Mini Combat Map";

    // const [drag, setDrag] = useState(true);



  return (
    <div className="App">
        <CombatContainer/>
    </div>
  );
}

export default App;
