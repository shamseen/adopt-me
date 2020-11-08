
// creating a "rubber stamp" but not using it
const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed),
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

            React.createElement(Pet, {
                name: 'Naabi',
                animal: 'Cat',
                breed: 'Korat?'
            }),
            React.createElement(Pet, {
                name: 'Jojo',
                animal: 'Cat',
                breed: 'Himalayan'
            }),
            React.createElement(Pet, {
                name: 'Jayjay',
                animal: 'Dog',
                breed: 'Shi-tzu'
            })
        ]);
}

// rendering to div we named root - using the stamp
// render() overrides anything contained in element
ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);