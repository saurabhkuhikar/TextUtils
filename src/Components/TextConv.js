import React,{useState} from "react";


export default function TextConv(props) {
    const [text, setText] = useState("Enter the text here.");
    let capText = "Convert To Upper Text";
    
    const [textCap,setTextCap] = useState(1);

    /**
     * 
     * @param {*} event this function is use to make editable to your textbox
     */
    const ChangeValue = (event) => {
        setText(event.target.value);
    }

    /**
     * 
     * @param {*} event this function is use to clear the text box
     */
    const clearText = (event) => {
        setText("");
    }

    /**
     * this function is use to convert the text to uppwer and lower from textbox
     */
    const convertToUpper = () => {
        if (textCap === 1) {
            setText(text.toUpperCase());  
            setTextCap(2);
            document.getElementById("conv-upper-lower").innerHTML = "Convert To Lower Text";
        } else {
            setText(text.toLowerCase()); 
            setTextCap(1);
            document.getElementById("conv-upper-lower").innerHTML = "Convert To Upper Text";
        }
    }

    /**
     * this function function is use to copy the text inside the text box
     */
    const handleCopy = () => {
        var copytext = document.getElementById("inputbox");
        copytext.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(copytext.value);
    }

    /**
     * Handle extra space from text
     */
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

  return (
    <>
    <div className={`container mb-3 text-${props.mode === 'dark' ?'light':'black'}`}>
    <div className="form-group">
      <h1 htmlFor="uname">{props.heading}</h1>     
     <textarea name="inputbox" id="inputbox" cols="10" rows="5" className="form-control" value={text} onChange={ChangeValue} style={{backgroundColor : props.mode === 'dark' ? '#152593':'white', color : props.mode === 'dark' ? 'white':'black' }}></textarea>
    </div>

    <div className="form-group">
      <button type="button" className="btn btn-primary mr-3" id="conv-upper-lower" onClick={convertToUpper}>{capText}</button>
      <button type="button" className="btn btn-danger mr-3" onClick={clearText}>Clear text</button>
      <button type="button" className="btn btn-info mr-3" onClick={handleCopy}>Copy text</button>
      <button type="button" className="btn btn-primary" onClick={handleExtraSpaces}>Remove Space</button>
    </div>
    </div>
    <div className={`container mb-3 text-${props.mode === 'dark' ?'light':'black'}`}>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} word and {text.length} characters</p>
    </div>
    <div className={`container mb-3 text-${props.mode === 'dark' ?'light':'black'}`}>
        <h3>Preview</h3>
        <p>{text === "" ? "Please write some text to preview":text}</p>
    </div>
    </>
  );
}



