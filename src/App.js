import { useState,useEffect } from "react";
import OptionBar from "./components/OptionBar"
import CardBack from './components/CardBack';
import CardFront from './components/CardFront';
import './App.css';


function App() {
  const [progress, setProgress] = useState(0);
    function start(){
      let x=0;
      let interval=setInterval(() => {
        x+=1
        setProgress(x)


        if(progress == 100){
          clearInterval(interval)
        }
      }, 1000);
    }

    useEffect(() => {
      start()
    }, [])
  return (
    <div className="App">
      <OptionBar />

      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
      <CardFront progress={progress}/>
      {/* <CardBack /> */}
    </div>
  );
}

export default App;
