import React from 'react';

function NestedButtons({ innerMsg, outerMsg }) {
    // Handler for the Outer container (the div)
    const handleOuterClick = () => {
        alert(outerMsg);
    };

    // Handler for the Inner element (the button)
    const handleInnerClick = (e) => {
        // This is the core of the assignment
        e.stopPropagation();
        alert(innerMsg);
    };

    return (
        <div onClick={handleOuterClick}>
            <h2>Outer Container</h2>
            <p>Click inside the box but outside the button to trigger the outer alert.</p>

            <button onClick={handleInnerClick}>
                Inner Button
            </button>
        </div>
    );
}

export default NestedButtons;