import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleDownclick = ()=>{
        console.log("upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const remexspaces =()=>{
        let newtx = text.split(/[ ]+/);
        setText(newtx.join(" "));
        props.showAlert("extra spaces removed", "success");
    }

    const handlecopy = ()=>{
        console.log("I am a Copy");
        var tx = document.getElementById("myBox")
        tx.select();
        navigator.clipboard.writeText(tx.value);
        props.showAlert("Text Copied", "success");
    }

    const handleOnchange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text , setText] = useState('Enter Your text here');
    // text  = "wrong way";  wrong way to change the state
    // settext("right way"); right wa y to change the state


    return (
        <>
        <div className = "conatiner my-3" style={{color: props.mode === 'dark'? 'white': '#272b41'}}>
            <h1 className = 'mb-2 my-5 mx-4'>{props.heading}</h1>
            <div className="mb-3">  
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark'? 'rgb(75, 89, 95)': 'white', color: props.mode === 'dark'? 'white': '#272b41' }} id="myBox" rows="6"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleDownclick}>Convert to Lower-Case</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>Copy Text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to Upper-Case</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={remexspaces}>Remove Extra Spaces</button>
        </div>
        
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white': '#272b41'}}>
            <h1>Text Summary of your paragraph</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words , {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} time to read this text</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somthing in the text box to preview"}</p>

        </div>
        
        </>

    )
}
