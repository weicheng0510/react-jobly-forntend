import React, { useEffect, useState } from "react";
import JoblyApi from "../../api";
import CompaniesSearchForm from "./CompaniesSearchForm";
import CompaniesList from "./CompaniesList";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState();
  const searchName = '';

  const getCompanies = async (searchName) => {
    try {
      const res = await JoblyApi.getCompanies(searchName);
      setCompanies(res);
      setIsloading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getCompanies();
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
    <div>
      <CompaniesSearchForm getCompaines={getCompanies} />
      <CompaniesList companies={companies} />
    </div >
  )
}

export default Companies;