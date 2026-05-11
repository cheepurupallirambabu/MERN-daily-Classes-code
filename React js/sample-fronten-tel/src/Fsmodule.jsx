import { useState } from 'react';


function Fsmodule() {
  const [inputValue, setInputValue] = useState("");
  const [inputValues, setInputValues] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleChanges = (event) => {
    setInputValues(event.target.value);
  };

const file= inputValue+inputValues;

  const fileName =()=> {
    const file= inputValue+inputValues;
    console.log(file);
    
  }

   const [inputValuea, setInputValuea] = useState("");

  const handleChangea = (event) => {
    setInputValuea(event.target.value);
  };


 const filea= inputValuea;
  const fileNamea =()=> {
    const filea= inputValuea;
    console.log(filea); 
  }

  return (

    <>

    <div className='h-100 w-180 border border-amber-950 m-5'>
            <div><input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Enter file name..."
      />
                <select name="cars" id="cars" value={inputValue} 
        onChange={handleChanges}>
                    <option >Choose a file type</option>
                    <option value=".txt">.txt</option>
                    <option value=".pdf">.pdf</option>
                    <option value=".doc">=.doc</option>
                </select>
                <button onClick={fileName}>Create File</button>
            </div>

            <div><input type="text" placeholder='Enter text' value={inputValuea} 
        onChange={handleChangea}/>
                <input type="file" id="myFile" name="filename" className='s' />
                <button onClick={fileNamea}>Append File</button>
            </div>

            <div>
                <label>Choose a to delete:</label>
                <input type="file" id="myFile" name="filename" className='s'/>
                <button>Delete</button>

                {inputValue}
            </div>
        </div>
    </>


  );
}

export default Fsmodule;