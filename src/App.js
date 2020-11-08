// creating a "rubber stamp" but not using it
const App = () => {

    // stamps div containing an h1
    // params: tag, attributes, children
    return React.createElement(
        "div",
        { id: 'logo' },
        React.createElement("h1", {}, "Adopt Me!")
    );
}

// rendering to div we named root - using the stamp
// render() overrides anything contained in element
ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);