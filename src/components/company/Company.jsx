import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/Company.css'

const Company = ({ company }) => {
  return (
    <div className="company">
      <NavLink to={company.handle}>
        <p><b>{company.name}</b></p>
        <p>{company.description}</p>
      </NavLink>
    </div>
  )
}

export default Company;