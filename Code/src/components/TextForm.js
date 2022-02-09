import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick =() => {
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to uppercase!", "success");
    }

    const handleCapClick =() => {
        let arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        
       let newText = arr.join(" ");
        setText(newText);
        // props.showAlert("Converted to capitalize!", "success");
    }
    const handleLoClick =() => {
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("Converted to lowercase!", "success");
    }
    const handleCopy =() => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // props.showAlert("text has been copied!", "success");
    }
    const handleSpace =() => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        // props.showAlert("Extra spaces has been removed!", "success");
    }

    const handleClearClick =() => {
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    return (
<>
        <div className='container'>
           <h1>{props.heading}</h1>
            <div className="mb-3">
               
             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'? '#102542': 'white', color: props.mode==='dark'? 'white': 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-warning m-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-info m-1" onClick={handleCapClick}>Convert to Capitalize</button>
            <button className="btn btn-info m-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-info m-1" onClick={handleSpace}>Remove Extra spaces</button>
            <button className="btn btn-danger m-1" onClick={handleClearClick}>clear</button>
        </div>
        <div className='container my-4'>
<h2>Your Text Summary</h2>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes Read</p>
<h2>Preview</h2>
<p>{text.length>0? text: 'Enter something in the textbox above to preview here'}</p>
        </div>
        </>
    )
}
