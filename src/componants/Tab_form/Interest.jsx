import React from 'react'

const Interest = ({data, setData}) => {
  const  {interest} = data;

  const handelOnChange = (e, name)=>{
    setData((prev)=>({
      ...prev,
      interest : e.target.checked
      ? [prev.interest, e.target.name]
      : prev.interest.filter((i)=> i !== e.target.name),
    }));
  };
  console.log(interest)
  return (
    <div className='flex flex-col gap-5 items-start'>
      <label>
        <input type="checkbox" name='coding' checked = {interest.includes("coding")}  onChange={handelOnChange}/>
        Coding
      </label>
      <label>
        <input type="checkbox" name='music' checked = {interest.includes("music")}  onChange={handelOnChange}/>
        Music
      </label>
      <label>
        <input type="checkbox" name='drawing' checked = {interest.includes("drawing")} onChange={handelOnChange}/>
        Drawing
      </label>
    </div>
  ) 
}

export default Interest
