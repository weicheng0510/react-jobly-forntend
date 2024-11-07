import React, { useState } from "react";

const JobSearchForm = ({ getJobs }) => {
  const [search, setSearch] = useState(``);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getJobs(search);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input placeholder="Enter job title." onChange={handleChange} />
      <button>Search</button>
    </form>
  )
}

export default JobSearchForm;