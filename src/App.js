import React from "react";
import Card from "./component/Card";

let data =[
  {
    plan:"FREE",
    price:"0",
    user:"single user",
    userEnabler:true,
    storage:"5GB storage",
    storageEnabler:true,
    publicprojects:"Unlimited Public projects",
    publicprojectsEnabler:true,
    communityaccess:"Community Access",
    communityaccessEnabler:false,
    privateprojects:"Unlimited private projects",
    privateprojectsEnabler:false,
    phonesupport:"Dedicated phone support",
    phonesupportEnabler:false,
    Subdomain:"free Subdomain",
    SubdomainEnabler:false,
    statusreport:"Monthly status report",
    statusreportEnabler:false
  },
  {
    plan:"PLUS",
    price:"9",
    user:"5 users",
    userEnabler:true,
    storage:"50GB storage",
    storageEnabler:true,
    publicprojects:"Unlimited Public projects",
    publicprojectsEnabler:true,
    communityaccess:"Community Access",
    communityaccessEnabler:true,
    privateprojects:"Unlimited private projects",
    privateprojectsEnabler:true,
    phonesupport:"Dedicated phone support",
    phonesupportEnabler:true,
    Subdomain:"free Subdomain",
    SubdomainEnabler:true,
    statusreport:"Monthly status report",
    statusreportEnabler:false
  
  },{
    plan:"PRO",
    price:"49",
    user:"Unlimited user",
    userEnabler:true,
    storage:"150GB storage",
    storageEnabler:true,
    publicprojects:"Unlimited Public projects",
    publicprojectsEnabler:true,
    communityaccess:"Community Access",
    communityaccessEnabler:true,
    privateprojects:"Unlimited private projects",
    privateprojectsEnabler:true,
    phonesupport:"Dedicated phone support",
    phonesupportEnabler:true,
    Subdomain:"Unlimited free Subdomain",
    SubdomainEnabler:true,
   statusreport:"Monthly status report",
    statusreportEnabler:true
}
]
function App() {
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return <Card details={e} key={i}/>
        })
      }
    </div>
  </div>
</section>
  </>
}

export default App;
