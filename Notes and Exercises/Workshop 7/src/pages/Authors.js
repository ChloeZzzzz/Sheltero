import React, { useState } from "react";
import { useAuthors, updateAuthor, deleteAuthor } from "../api";

import Button from "../components/Button";

export default function Authors() {
  const { loading, authors, error } = useAuthors();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  // use this to make sure you are getting the right data
  console.log(authors);

  // Display a list of the authors
  return (
    <div>
      <h1>Authors List</h1>
      {authors.map(author => (
        <Author key={author._id} {...author}/>
      ))}
    </div>
  );
}

function Author(author) {
  const {_id, first_name, last_name } = author;
  const [showUpdate, setShowUpdate] = useState(false);

  return (
    <div className={`author author-${_id}`} key={_id}>
      <div className="info">
        ({_id}) {first_name} {last_name}
        <Button className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
          {showUpdate ? "-" : "+"}
        </Button>
      </div>
      <AuthorExtended {...author} showUpdate={showUpdate} />
    </div>
  );
}

function AuthorExtended(props) {
  const { _id, first_name, last_name, showUpdate } = props;

   const [id_input, setId] = useState(_id);
   const [fn_input, setFirstName] = useState(first_name);
   const [ln_input, setLastName] = useState(last_name);

  function onSubmit() {
    // call upate author function
    updateAuthor({
      _id: id_input,
      first_name: fn_input,
      last_name: ln_input
    });
  }

  return (
    <div className={`author-expand ${showUpdate ? "show" : ""}`}>
      <form>
        {/* TODO - add value and onChange properties to inputs */}
        <input type="text" name="_id" value={id_input} onChange={event => {setId(event.target.value)}}/>
        <input type="text" name="first_name" value={fn_input} onChange={event => {setFirstName(event.target.value)}}/>
        <input type="text" name="last_name" value={ln_input} onChange={event => {setLastName(event.target.value)}}/>
        <Button className={"btn-warning"} onClick={onSubmit}>
          Update
        </Button>
      </form>
      <Button className={"btn-danger"} onClick={() => deleteAuthor(_id)}>
        Delete
      </Button>
    </div>
  );
}
