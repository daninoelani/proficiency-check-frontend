import React from 'react';
import PeopleForm from './AddPerson';

const People = ({ people }) => {
  return (
    <div>
      <h1 className="text-center jumbotron">People</h1>
      <PeopleForm />
      {people.map((person, id) => (
        <div key={id} className="row person-box">
          {/* <div className="col">
            <img src={person.img} alt={person.first_name} />
          </div> */}
          <div className="col">
            <h3>{person.name}</h3>
            <h4>{person.location}</h4>
            <h5>{person.status}</h5>
          </div>
        </div>
      ))}
    </div>
  )
};

export default People;