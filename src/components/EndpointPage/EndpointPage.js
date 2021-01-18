import React, {useState} from "react";
import PotentialJob from "./PotentialJob/PotentialJob";
import {v4 as uuidv4} from 'uuid';

const dummydata = [
  {
    company: "a",
    salary: "$44,444",
    source: "craigslist.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
  },
  {
    company: "b",
    salary: "$55,555",
    source: "linkedin.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
  },
  {
    company: "c",
    salary: "$66,666",
    source: "monster.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
  },
  {
    company: "d",
    salary: "$77,777",
    source: "angel.co",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
  },
];

const EndpointPage = (props) => {
  const [selectedListings, setSelectedListings] = useState();

  const selectedJobHandler = (e) => {

  }

  const potentialJobs = dummydata.map((job) => {
    return <PotentialJob data={job} key={uuidv4()}/>;
  });


  return (
    <div>
      <div className="top">
        <h1>GitHub</h1> {/*props.site*/}
        <button>FIRE AWAY!</button>
      </div>
      <div className="potentialListings"></div>
      {potentialJobs}
    </div>
  );
};

export default EndpointPage;
