{/* <div id="parent">
    <div id="child1">
        <h1>I am H1 TAG</h1>
        <h2>I am H2 Tag</h2>
    </div>
     <div id="child2">
        <h1>I am H1 TAG</h1>
        <h2>I am H2 Tag</h2>
    </div>
</div> */}

// ReactElement (object) = HTML (Browser understands)

const parent = React.createElement(
    "div", { id: "parent" },[
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")
    ]), React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am H11 Tag"),
        React.createElement("h2", {}, "I am H12 Tag")
    ])
]);

const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
console.log("parent", parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);