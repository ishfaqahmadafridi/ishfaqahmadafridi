import React from "react";
import "../styles/SearchPage.css";

export default function SearchPage({ setPage }) {
  // Get the search query from the current window location
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");

  return (
    <div className="page-container">
      <main className="search-page">
        <button onClick={() => setPage('home')} className="back-button">
          ← Back to Home
        </button>
        <h1>Search Results for "{q}"</h1>
        <div className="search-results">
          {/* Search results would be rendered here */}
          <div className="no-results">
            <p>No results found for "{q}"</p>
            <p>Try different keywords or browse our categories</p>
          </div>
        </div>
      </main>
    </div>
  );
}
