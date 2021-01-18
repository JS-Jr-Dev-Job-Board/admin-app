import React from 'react';

const PotentialJob = props => {
  const {company, salary, description, source, title} = props.data;
console.log(props.asdf)
  return(
    <div className='PotentialJobCard'>
      <p>Company: {company}</p>
      <p>Job Title: {title}</p>
      <p>Source: {source}</p>
      <p>Salary: {salary}</p>
      <p>Description: {description}</p>
      <input type="checkbox" name="approve" id={props.id} onChange={props.onChange} checked={props.checked}/>
    </div>
  )
}

export default PotentialJob;