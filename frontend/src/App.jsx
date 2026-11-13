import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Fetch data from Spring Boot API
    console.log("Component mounted. Ready to fetch data.");
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Market Sentiment Dashboard</h1>
      </header>
      <main>
        <p>Loading sentiment data...</p>
      </main>
    </div>
  );
}

export default App;
