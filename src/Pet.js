import React from 'react';

// creating a "rubber stamp" but not using it
export default function Pet ({ name, animal, breed }) {
    return React.createElement("div", {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed),
    ]);
};
