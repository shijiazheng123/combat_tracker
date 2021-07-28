import logo from './logo.svg';
import './App.css';
import {CombatContainer} from "./CombatContainer";
import {server} from "./constants";
import {socket} from "./constants";
import {useState} from "react";

import {Provider} from "react-redux";
import store from "./store";


function App() {

    socket.on('connection', (message) => {
        console.log("received");
    })

    document.title = "Mini Combat Map";

    // const [drag, setDrag] = useState(true);



  return (
    <Provider store={store}>
        <div className="App">
            <CombatContainer/>
        </div>
    </Provider>
  );
}

export default App;
