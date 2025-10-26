import React from "react";

function ControlledForm() {
    const [value, setValue] = React.useState("");

    const handleChange = (e) => setValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Controlled Form</h3>
            <input type="text" value={value} onChange={handleChange} />
            <button type="submit">Submit</button>
            <p>Live value (React state): {value}</p>
        </form>
    );
}

export default ControlledForm;
