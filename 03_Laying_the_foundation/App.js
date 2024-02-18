import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement =>ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namste React");
console.log(heading);

// JSX => HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS) - PARCEL - Babel(pkg)

// How this code running:
/**
 * JSX => React.createElement => ReactElement-JS Object => HTMLElement
 */
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

console.log(jsxHeading);

/* -------------------------------------------------------------- */

/**
 * React Components - 2 types
 *  - Functional Component
 *  - Class Component
 */

// React Functional Component => a function which returns a ReactElement(piece of JSX)

// const HeadingComponent = () => {
//     return <h1 id="heading">Namaste React Functional Component</h1>
// }

const HeadingComponent2 = () => (
  <h1 id="heading">Namaste React Functional Component</h1>
); //same as above(new convension)

// fn same fn2
const fn = () => true; //shorthand

const fn2 = () => {
  return true;
};

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
)

// Component Composition

// const HeadingComponent = () => (
//     <div id="container">
//       <Title />
//       {/* <Title></Title> */}
//       {/* {Title()} */}
//       <h1 id="heading">Namaste React Functional Component</h1>
//     </div>
// );


/* -------------------------------------------------------------- */
const elem = <span>React Element</span>

const title = (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);

const number = 55;

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1>{number*10}</h1>
    {console.log("this is javascript inside JSX")}
    <h1 id="heading">Namaste React Functional Component</h1>
  </div>
);

// JSX is not a React




const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);//object convert into HTML element
// root.render(jsxHeading); //object convert into HTML element

root.render(<HeadingComponent />);
