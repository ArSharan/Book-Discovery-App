import { useState } from "react";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 Book Discovery App</h2>
      {!selectedBook ? (
        <Search onSelect={setSelectedBook} />
      ) : (
        <BookDetails id={selectedBook} onBack={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default App;
