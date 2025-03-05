function UserCard({ user, repos }) {
  return (
    <div className="user-card">
      <div className="left">
        <img src={user.avatar_url} alt={user.login} className="avatar" />
        <h2>{user.name || user.login}</h2>
        <p align="center">{user.bio || "No bio available"}</p>
        <br/>
        <p><strong>Followers:</strong> {user.followers} | <strong>Following:</strong> {user.following}</p>
        <p><strong>Public Repos:</strong> {user.public_repos}</p>
        <p><strong>Location:</strong> {user.location || "N/A"}</p>
        <p><strong>Company:</strong> {user.company || "N/A"}</p>
        <button className="github-button" onClick={() => window.open(user.html_url, "_blank")}>
          Visit GitHub Profile
        </button>
      </div>
      <div className="right">
        <h3>Repositories:</h3>
        <ul className="repo-list">
          {repos.length > 0 ? (
            repos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))
          ) : (
            <p>No public repositories found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
