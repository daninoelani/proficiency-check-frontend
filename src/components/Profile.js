import React, { useState, useEffect } from 'react';
import PeopleForm from './AddPerson';

const People = () => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [id, setID] = useState('')

  const fetchPeople = async () => {
     fetch('http://localhost:4000')
    .then((res) => res.json())
    .then((people) => setPeople(people))
  }

  useEffect(() => {
    fetchPeople()
  }, []);

  const handleForm = (person) => {
      setName(person.name)
      setLocation(person.location)
      setStatus(person.status)
      setID(person._id)
  }
  
  const handleDelete = async id => {
    await fetch('http://localhost:4000/' + id, {
      method: 'DELETE',
    })
    window.location.reload();
  }

  const handleEdit = async (e, id) => {
    e.preventDefault()
    await fetch('http://localhost:4000/' + id, {
      method: "PUT",
      body: JSON.stringify({ name, location, status }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    fetchPeople();
    document.querySelector('.btn-secondary').click();
  }

  return (
    <div>
      <h1 className="text-center jumbotron">People</h1>
      <PeopleForm />
      {people.map((person) => (
        <div key={person._id} className="row person-box">
          {/* <div className="col">
            <img src={person.img} alt={person.first_name} />
          </div> */}
          <div className="col">
            <h3>{person.name}</h3>
            <h4>{person.location}</h4>
            <h5>{person.status}</h5>

            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal" onClick={e => handleForm(person)}>
            Change Status
          </button>

          <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">What are you doing now?</h5>
                </div>
                <div className="modal-body">
                  <form onSubmit={e => handleEdit(e, id)}>
                    <div className="form-group">
                      <label htmlFor="inputStatus">Status</label>
                      <input type="text" className="form-control" id="inputStatus" placeholder="Status" value={status} onChange={e => setStatus(e.target.value)} />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
            <button className="btn btn-danger" onClick={e => handleDelete(person._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default People;