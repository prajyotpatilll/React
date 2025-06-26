import React from 'react'

const Settings = ({data, setData}) => {

  const {theme}= data;

  const handelchange = (e) =>{
    setData((prev)=> ({...prev , theme: e.target.name}))
  }
  return (
    <div className='flex flex-col gap-5 items-start'>
      <label>
        <input type="checkbox" name='dark' checked = {theme === "dark"} onChange={handelchange}/>
        Dark
      </label>
      <label>
        <input type="checkbox" name='Light' checked = {theme === "Light"} onChange={handelchange}/>
        Light
      </label>
    </div>
  )
}

export default Settings
