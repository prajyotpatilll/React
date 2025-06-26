import React from 'react'

const Profile = ({data, setData}) => {
    const {name, email, age } = data;

    const handelDataChange = (e, item) => {
        setData((prevState)=>({
            ...prevState,
            [item] : e.target.value
        }))
    }
  return (
    <div>
      <label>Name : </label>
      <input type="text" value={name} onChange={(e)=>handelDataChange(e,"name")}/>
      <label>Email : </label>
      <input type="email" value={email} onChange={(e)=>handelDataChange(e,"email")}/>
      <label>Age : </label>
      <input type="number" value={age} onChange={(e)=>handelDataChange(e,"age")}/>
    </div>
  )
}

export default Profile
