import { useState } from "react";
import axios from "axios";

const GITHUB_API = "https://api.github.com/users";
const GITHUB_PAT = import.meta.env.VITE_GITHUB_PAT; // Securely access token

function useGitHubUser() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async (username) => {
    if (!username) return;
    setLoading(true);
    setError(null);

    try {
      const headers = {
        Authorization: `Bearer ${GITHUB_PAT}`,
        Accept: "application/vnd.github.v3+json",
      };

      const userResponse = await axios.get(`${GITHUB_API}/${username}`, { headers });
      const reposResponse = await axios.get(`${GITHUB_API}/${username}/repos?sort=updated`, { headers });

      setUser(userResponse.data);
      setRepos(reposResponse.data);
    } catch (err) {
      setUser(null);
      setRepos([]);
      setError("User not found or API limit exceeded!");
    }

    setLoading(false);
  };

  return { user, repos, error, loading, fetchUser };
}

export default useGitHubUser;
