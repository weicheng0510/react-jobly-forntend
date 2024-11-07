import React from "react";
import Job from "./Job";

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs?.length > 0 ? jobs.map(j => (< Job key={j.id} job={j} />)) : "No results"}
    </div>
  )
}

export default JobList;