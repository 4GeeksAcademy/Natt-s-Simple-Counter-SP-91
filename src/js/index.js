//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

//import your own components
import { SimpleCounter } from "./component/SimpleCounter.jsx";

//render your react application
let counter= 0;

setInterval(()=>{
    ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter seconds={counter}/>)
    counter++
},1000

);


