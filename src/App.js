import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState({});

  function handleSearch() {
    console.log(user);
    // useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    // }, [user]);
  }

  return (
    <div className="App">
      <h1>GitHub Account Finder</h1>'
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h1>{data.login}</h1>
        <p>{data.bio}</p>
        <img src={data.avatar_url} alt={data.login} />
      </div>
    </div>
  );
}

export default App;
