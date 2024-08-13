import React from "react"; //coming from node_modules
import ReactDOM from "react-dom/client";

//React.createElement => gives ReactElement- JS object => when we render this element/object on DOM it gives HTML element

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

//JSX(transpiled before it reaches js engine) - Parcel - Babel

// JSX => React.createElement => ReactElement - JS object => HTML element(render)
//if we are writing our jsx code in multiple lines then it is mandatory to wrap it in round brackets 
const jsxHeading = <h1 id="heading">Namaste react using jsx</h1>

const Title = () => (
    
    
    <h1 className="head">Hello react</h1>
);

//component composition => component inside component
const HeadingComponent = () => (
    <div id="contanier">
        <Title/>
        <h1 className="heading">Hello react functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
  