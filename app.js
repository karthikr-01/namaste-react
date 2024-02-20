// React.createElement args -> ("HTML_Tag", {object}, child) 

// How to create a nested div
/*
<div id="parent">
    <div id="child">
        <h1> I'm a h1 tag </h1>
        <h2> I'm a h2 tag </h2>
    </div>
    <div id="child2">
        <h1> I'm a h1 tag of child2 </h1>
        <h2> I'm a h2 tag of child2 </h2>
    </div>
</div>
*/

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1" , {}, "I'm a H1 Tag"),
        React.createElement("h2" , {}, "I'm a H2 Tag"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1" , {}, "I'm a H1 Tag of child2"),
        React.createElement("h2" , {}, "I'm a H2 Tag of child2"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/*
const heading = React.createElement(
    "h1", 
    {id: "heading", xyz: "abc"},    // this are the props (or) attributes
    "Hello world from React"
    );

console.log(heading);  // This prints the react object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/