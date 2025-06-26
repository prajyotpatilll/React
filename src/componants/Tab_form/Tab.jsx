import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

const Tab = () => {
    const [data, setData] = useState({
        name: "prajyot",
        email: "proz@gmail.com",
        age: "21",
        interest : ["coding","music"],
        theme : "dark"
    })
  const [activeTab, setactiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      Component: Profile,
    },
    {
      name: "Interest",
      Component: Interest,
    },
    {
      name: "Settings",
      Component: Settings,
    },
  ];

  const onsubmit = ()=>{
    console.log(data.name,data.email,data.age,data.theme)
    const arr =  data.interest.length()
    console.log(arr)
  }

  const ActiveTabComponant = tabs[activeTab].Component;
  return (
    <div className="border p-3">
      <div className="flex gap-5 p-2 border items-center justify-around">
        {
            tabs.map((t, index)=>(
                <div key={index} className="border p-2" onClick={()=>setactiveTab(index)}>
                    {t.name}
                </div>
            ))
        }
      </div>
      <div>
        <ActiveTabComponant data={data} setData={setData}/>
      </div>
      <div>
        {activeTab === tabs.length - 1 && <button onClick={onsubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default Tab;
