function SearchBar({ setUsername, fetchUser, username }) {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        fetchUser(username);
      }
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => fetchUser(username)}>Search</button>
      </div>
    );
  }
  
  export default SearchBar;
  