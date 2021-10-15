import React from 'react';
import './App.css';

function App() {
      const inventory = [
        { id: 1, name: "apples", quantity: 2 },
        { id: 2, name: "bananas", quantity: 0 },
        { id: 3, name: "cherries", quantity: 5 },
    ];

    const handleClick = (id) => {
        const result = inventory.find((idx) => idx.id === id);

        console.log(result);
    };

    return (
        <>
            {inventory.map((item, i) => (
                <>
                    <h4>{item.name}</h4>
                    <button onClick={() => handleClick(item.id)}>Click</button>
                </>
            ))}
        </>
    );

}

export default App;

