import React ,{useState} from 'react';

const Checkbox = ()=>{

    const [isChecked,setIsChecked] = useState(false);
    return (
        <form className="checkBox">
            <input type="checkbox" checked={isChecked} onChange={(e)=>{setIsChecked(e.target.checked)}}/>
            <label>Godkänner villkoren</label>
            
        </form>
    )
}

export default Checkbox;