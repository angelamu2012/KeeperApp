import React from "react";

function NewCard(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
    console.log(title);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
    console.log(content);
  }

  function saveNote(event) {
    props.onAdd(title, content);
    event.preventDefault();
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Take a note..."
          onChange={handleContentChange}
          value={content}
        ></textarea>
        {}
        <button onClick={saveNote}> Add </button>
      </form>
    </div>
  );
}

export default NewCard;
