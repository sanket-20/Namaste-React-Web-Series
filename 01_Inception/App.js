// const heading = React.createElement(
//     'h1',
//      { id: "heading", xyz: "abc" }, 
//      'Hello World from React!'
// );

// console.log(heading); //return object

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading); 



/* ----------------------------------------------------- */


/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *      </div>
 * </div>
 * 
 */


// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         [
//             React.createElement(
//                 "h1", 
//                 {}, 
//                 "I'm h1 tag"
//             ),
//             React.createElement(
//                 "h2", 
//                 {}, 
//                 "I'm h2 tag"
//             )
//         ]
//     )
// );

// console.log(parent); // object => react element

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent);




/* ----------------------------------------------------- */



const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement(
                "h1", 
                {}, 
                "I'm h1 tag"
            ),
            React.createElement(
                "h2", 
                {}, 
                "I'm h2 tag"
            )
        ]
    ),

    React.createElement(
        "div",
        { id: "child2" },
        [
            React.createElement(
                "h1", 
                {}, 
                "I'm h1 tag"
            ),
            React.createElement(
                "h2", 
                {}, 
                "I'm h2 tag"
            )
        ]
    )
);

//JSX

console.log(parent); // object => react element

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);


