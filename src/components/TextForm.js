import React, {useState} from "react"; 

export default function TextForm(props) {
  const handleUpclick = ()=> {
    const newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoclick = ()=> {
    const newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnchange = (event)=> {
    setText(event.target.value)
  }
  const handleCopy = ()=> {
    const cpy=document.getElementById("exampleFormControlTextarea1");
    cpy.select();
    navigator.clipboard.writeText(cpy.value);
  }
  const handleSpace = ()=> {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleText = ()=> {
    const newText='';
    setText(newText);
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className="mb-3">
        <h1 style={{color: (props.mode==='light')?'black':'white'}}>{props.heading}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor: (props.mode==='light')?'white':'#aeacac'}}></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary m-2" onClick={handleLoclick}>Convert to Lowercase</button>
      <button className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary m-2" onClick={handleSpace}>Remove Extra Spaces</button>
      <button className="btn btn-primary m-2" onClick={handleText}>Clear Text</button>
      <div className="container my-3" style={{color: (props.mode==='light')?'black':'white'}}>
        <h2 class="mt-5">Your Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2 class="mt-5">Preview</h2>
        <p>{text.length>0?text:"Enter your text in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
