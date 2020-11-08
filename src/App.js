
// creating a "rubber stamp" but not using it
const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement('h1', {}, 'Naabi'),
        React.createElement('h2', {}, 'Cat'),
        React.createElement('h2', {}, 'Korat?'),
    ])
}

const App = () => {

    // stamps div containing an h1 and pet components
    // params: tag, attributes, children
    return React.createElement(
        "div",
        { id: 'logo' },
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]);
}

// rendering to div we named root - using the stamp
// render() overrides anything contained in element
ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);