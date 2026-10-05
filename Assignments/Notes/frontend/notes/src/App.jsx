import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const documents = [
    {
      name: "FSD",
      file: "FSD_Node.pdf",
    },
    {
      name: "Assignment-1",
      file: "Assignment-1.pdf",
    },
    {
      name: "Final Stack Version",
      file: "Final_Stack_Version-11-august 7 AM.pdf",
    },
    {
      name: "Recursion",
      file: "Grammerly-Recursion 01.9.2021 10.30 PM.pdf",
    },
    {
      name: "Queue",
      file: "Queue 27.8.2021 6.30 PM.edited.pdf",
    },
  ];

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="notes-app">

      <div className="header">
        <h1>📚 My Notes</h1>
        <p>Search, view and download your study material</p>
      </div>

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="🔍 Search your notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="documents">

        {filteredDocuments.length > 0 ? (

          filteredDocuments.map((doc) => (

            <div className="document-card" key={doc.file}>

              <div className="document-icon">
                📄
              </div>

              <h3>{doc.name}</h3>

              <p>{doc.file}</p>

              <div className="document-actions">

                <a
                  className="view-btn"
                  href={`http://localhost:5000/${doc.file}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  👀 View
                </a>

                <a
                  className="download-btn"
                  href={`http://localhost:5000/${doc.file}`}
                  download
                >
                  📥 Download
                </a>

              </div>

            </div>

          ))

        ) : (

          <div className="no-results">
            No notes found 🔍
          </div>

        )}

      </div>

    </div>
  );
};

export default App;

