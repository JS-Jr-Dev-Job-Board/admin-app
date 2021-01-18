import React, { useState } from "react";
import PotentialJob from "./PotentialJob/PotentialJob";
import { v4 as uuidv4 } from "uuid";

const dummydata = [
  {
    company: "a",
    salary: "$44,444",
    source: "craigslist.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
    title: "Jr. JavaScript Developer",
  },
  {
    company: "b",
    salary: "$55,555",
    source: "linkedin.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
    title: "Jr. JavaScript Developer",
  },
  {
    company: "c",
    salary: "$66,666",
    source: "monster.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
    title: "Jr. JavaScript Developer",
  },
  {
    company: "d",
    salary: "$77,777",
    source: "angel.co",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
    title: "Jr. JavaScript Developer",
  },
];

const EndpointPage = (props) => {
  const [selectedListings, setSelectedListings] = useState({});
  console.log(selectedListings);

  const selectedJobHandler = (e) => {
    setSelectedListings({ ...selectedListings, [e.target.id]: "approved" });
    console.log(e.target);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("You have selected the following jobs:", selectedListings);
  };

  const potentialJobs = dummydata.map((job) => {
    return (
      <PotentialJob
        data={job}
        key={uuidv4()}
        id={job.company}
        onChange={selectedJobHandler}
        checked={false}
      />
    );
  });

  return (
    <div>
      <div className="EndpointPageTop">
        <h1>GitHub</h1> {/*props.site*/}
        <button className="EndpointPageFireBtn">FIRE AWAY!</button>
      </div>
      <form className="EndpointPagePotentialListings" onSubmit={submitHandler}>
        {potentialJobs}

        <div className="EndpointPageFooter">
          <button className="EndpointPageSubmitBtn" >
            Add selected jobs to database
          </button>
        </div>
      </form>
    </div>
  );
};

export default EndpointPage;
