import React from 'react';

const PotentialJob = props => {
  const {company, salary, description, source} = props.data;
console.log(props.asdf)
  return(
    <div>
      <p>{company}</p>
      <p>{source}</p>
      <p>{salary}</p>
      <p>{description}</p>
      <input type="checkbox" name="approve" id="approve"/>
    </div>
  )
}

export default PotentialJob;