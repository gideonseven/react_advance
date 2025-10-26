import React from "react";

function UncontrolledForm() {
    const inputRef = React.useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", inputRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Uncontrolled Form</h3>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
            {/* 👇 Notice: no live feedback */}
            <p>Live value: (React doesn’t know yet!)</p>
        </form>
    );
}

export default UncontrolledForm;
