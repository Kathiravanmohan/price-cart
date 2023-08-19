import React from 'react'

function Card({details}) {
    console.log(details)
  return <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
            <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul"> 
              <li className={details.userEnabler?"":"text-muted"}><span classNameName="fa-li"><i className={details.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.user}</li>
              <li className={details.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={details.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.storage}</li>
              <li className={details.publicprojectsEnabler?"":"text-muted"}><span className="fa-li"><i className={details.publicprojectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.publicprojects}</li>
              <li className={details.communityaccessEnabler?"":"text-muted"}><span className="fa-li"><i className={details.communityaccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.communityaccess}</li>
              <li className={details.privateprojectsEnabler?"":"text-muted"}><span className="fa-li"><i className={details.privateprojectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.privateprojects}</li>
              <li className={details.phonesupportEnabler?"":"text-muted"}><span className="fa-li"><i className={details.phonesupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.phonesupport}</li>
              <li className={details.SubdomainEnabler?"":"text-muted"}><span className="fa-li"><i className={details.SubdomainEnabler?"fas fa-check":"fas fa-times"}></i></span>
              {details.Subdomain}</li>
              <li className={details.statusreportEnabler?"":"text-muted"}><span className="fa-li"><i className={details.statusreportEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.statusreport}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Card