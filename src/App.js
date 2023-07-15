import Home from "./components/Home";
import Counter from "./components/Counter";
import { useState } from "react";
import SampleComponent from "./components/SampleComponent";
import Shopping from "./components/Shopping";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  const [sampleData, setsampleData] = useState(5);
  return (
    <div className="wrapper">
    {/* <Shopping /> */}
    {/* <h1>Sample data value is: {sampleData}</h1>
    { <SampleComponent data = {sampleData}/> } */}
    <Routes>
      <Route path = "/" element  = {<Home />}></Route>
      <Route path = "/counter" element  = {<Counter />}></Route>
      <Route path = "/Shopping" element  = {<Shopping />}></Route>
    </Routes>
    </div>
  );
}

export default App;
