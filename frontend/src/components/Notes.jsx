import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const getData = async () => {
    await fetch("https://gorgeous-slug-robe.cyclic.app/notes", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => setNotes(res))
      .catch((err) => console.log(err));
  };
  const handleDelete = async (x) => {
    const arr = notes.filter((el) => el._id !== x._id);
    setNotes(arr);
    await fetch(`https://gorgeous-slug-robe.cyclic.app/notes/delete/${x._id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "50px",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "30px",
      }}
    >
      {notes.map((el) => (
        <div
          style={{
            margin: "auto",
            border: "solid 1px black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "300px",
          }}
          key={el._id}
        >
          <h1>{el.title}</h1>
          <p>{el.description}</p>
          <h2>{el.subject}</h2>
          <button onClick={() => handleDelete(el)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Notes;
