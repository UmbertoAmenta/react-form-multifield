import { useState } from "react";

export default function App() {
  const [postTitle, setPostTitle] = useState("");
  const [list, setList] = useState([]);

  const addTitle = (event) => {
    event.preventDefault();
    const currentList = [...list, postTitle];
    setList(currentList);

    // alternative
    // setList([...list, postTitle])
    // setList((current) => [...current, postTitle]);

    setPostTitle("");
  };

  const deleteList = (index) => setList([]);

  const deleteTitle = (index) => {
    setList((current) => {
      return current.filter((postTitle, postIndex) => postIndex !== index);
    });
  };

  return (
    <div className="container">
      <h2>Blog in costruzione</h2>
      <ul>
        {list.map((title, index) => {
          return (
            <li key={index}>
              {title}
              <button onClick={() => deleteTitle(index)}>🗑️</button>
            </li>
          );
        })}
      </ul>
      <form onSubmit={addTitle}>
        <input
          type="text"
          placeholder="Digita Titolo da aggiungere"
          value={postTitle}
          onChange={(event) => {
            setPostTitle(event.target.value);
          }}
        />
        <button type="submit">
          <strong>+</strong> Nuovo titolo
        </button>
        <button type="button" onClick={deleteList}>
          Svuota lista
        </button>
      </form>
    </div>
  );
}
