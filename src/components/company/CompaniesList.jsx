import React from "react";
import Company from './Company'

const CompaniesList = ({ companies }) => {
  return (
    <div className="companies-list">
      {companies?.length > 0 ? companies.map(
        (company) => (< Company key={company.handle} company={company} />)
      ) : 'No results'}
    </div>
  )
}

export default CompaniesList;