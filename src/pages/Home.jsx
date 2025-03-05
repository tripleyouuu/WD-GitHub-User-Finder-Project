import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import useGitHubUser from "../hooks/useGitHubUser";

function Home() {
  const [username, setUsername] = useState("");
  const { user, repos, error, loading, fetchUser } = useGitHubUser();

  return (
    <div className="main">
      <h1>GitHub User Finder</h1>
        <br/>
        <SearchBar setUsername={setUsername} fetchUser={fetchUser} username={username} />
      <div className="container">
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {user && <UserCard user={user} repos={repos} />}
      </div>
    </div>
  );
}

export default Home;
