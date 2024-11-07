import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api";
import '../../styles/CompanyDetail.css'
import JobList from "../job/JobList";

const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await JoblyApi.getCompany(handle);
        setCompany(res);
        setIsLoading(false);
      } catch (e) {
        setErr(e);
      }
    }
    getData();
  }, [handle]);

  if (err) {
    return (
      <div>
        {err}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className="company-detail">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <div>
        <JobList jobs={company.jobs} />
      </div>
    </div>
  )
}

export default CompanyDetail;