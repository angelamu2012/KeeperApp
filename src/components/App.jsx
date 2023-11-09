import React from "react";
import Note from "./Note";
import NewCard from "./NewCard";
import notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [data, setData] = React.useState(notes);

  function saveData(title, content) {
    setData([...data, { title: title, content: content }]);
    console.log(data);
  }

  function removeFromList(id) {
    setData((data) => {
      return data.filter((item, index) => {
        return index !== id;
      });
    });
    console.log(data);
  }

  return (
    <div>
      <Header />

      <NewCard onAdd={saveData} />

      <dl>
        {data.map((item, index) => (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={removeFromList}
          />
        ))}
      </dl>

      <Footer />
    </div>
  );
}

export default App;
