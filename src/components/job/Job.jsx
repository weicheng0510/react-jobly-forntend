import React, { useContext, useEffect, useState } from "react";
import '../../styles/Job.css'
import UserContext from "../../UserContext";

const Job = ({ job }) => {
  const [applied, setApplied] = useState(false);
  const { applyJob, jobApplied } = useContext(UserContext);

  useEffect(() => {
    setApplied(jobApplied(job.id));
  }, [job.id, jobApplied]);

  // handle job apply
  const handleApply = () => {
    if (applied) return;
    applyJob(job.id);
    setApplied(true);
  }

  return (
    <div className="job">
      <div>
        <h5>{job.title}</h5>
        <p>{job.companyName}</p>
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
      </div>
      <div className="btn">
        <button onClick={handleApply} disabled={applied}>{applied ? 'Applied' : 'Apply'}</button>
      </div>
    </div>
  )
}

export default Job;