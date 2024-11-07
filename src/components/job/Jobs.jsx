import React, { useEffect, useState } from "react";
import JoblyApi from "../../api";
import JobList from "./JobList";
import JobSearchForm from "./JobSearchForm";
import '../../styles/Jobs.css'

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState();
  const title = '';

  const getJobs = async (title) => {
    try {
      const res = await JoblyApi.getJobs(title);
      setJobs(res);
      setIsloading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (error) {
    return (
      <div>
        {error.message}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }

  return (
    <div className="jobs">
      <JobSearchForm getJobs={getJobs} />
      <JobList jobs={jobs} />
    </div >
  )
}

export default Jobs;