import React, { useState } from "react";
import '../../styles/CompaniesSearchForm.css'

const CompaniesSearchForm = ({ getCompaines }) => {
  const [search, setSearch] = useState(``);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getCompaines(search);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input placeholder="Enter company name." onChange={handleChange} />
      <button>Search</button>
    </form>
  )
}

export default CompaniesSearchForm;