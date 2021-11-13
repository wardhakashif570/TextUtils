import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClick = (e) => {
        let Capitalize = text.toUpperCase();
        setText(Capitalize);
        e.preventDefault()
    }

    const handleClick1 = (e) => {
        let Capitalize = text.toLowerCase();
        setText(Capitalize);
        e.preventDefault()
    }

    const handleCamelCase = (e) => {
        let newtext = text.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
        setText(newtext.substr(0, 1).toLowerCase() + newtext.substr(1));
        e.preventDefault()
    }
    const handleCopy = (e) => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        e.preventDefault()
    }

    const handleExtraSpaces = (e) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        e.preventDefault()
    }
    return (
        <div>
            <form>
                <div className="container">
                    <h3>{props.heading}</h3>
                    <label for="textutils"></label>
                    <textarea name="textutils" className="form-control" cols="120" rows="15" value={text} onChange={handleOnChange}></textarea>
                    <br />
                    <button className="btn btn-primary mx-1" onClick={handleClick}>Capitalize</button>
                    <button className="btn btn-primary mx-1" onClick={handleClick1}>LowerCase</button>
                    <button className="btn btn-primary mx-1" onClick={handleCamelCase}>Camel Case</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <div className="container my-3">
                        <p>The no of words are {text.split(' ').length} and {text.length} Characters.</p>
                        <p>{0.008 * text.split(" ").length} Minutes read</p>
                        <h1>Preview</h1>
                        <p>{text}</p>
                    </div>
                </div>

            </form>
        </div>
    )
}

