import React, { useEffect, useState } from "react";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [sub, setSub] = useState("");
  const [notes, setNotes] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://lime-encouraging-walkingstick.cyclic.app/notes",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const data = await res.json();
      setNotes(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAdd = () => {
    const payload = {
      title,
      description: desc,
      subject: sub,
    };
    setNotes([...notes, payload]);
    fetch("https://lime-encouraging-walkingstick.cyclic.app/notes/add", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleDelete = (el) => {
    const arr = notes.filter((x) => x._id !== el._id);
    setNotes([...arr]);
    fetch(
      `https://lime-encouraging-walkingstick.cyclic.app/notes/delete/${el._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <input
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={desc}
          placeholder="description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          value={sub}
          placeholder="subject"
          onChange={(e) => setSub(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
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
    </>
  );
};

export default React.memo(Notes);
