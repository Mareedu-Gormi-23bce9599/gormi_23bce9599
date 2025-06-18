// src/App.js

import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

function App() {
  const [token, setToken] = useState('');

  return (
    <div className="App">
      {!token ? (
        <div>
          <Register />
          <Login setToken={setToken} />
        </div>
      ) : (
        <div>
          <h1>Welcome!</h1>
          {/* You can add task-related functionality here */}
        </div>
      )}
    </div>
  );
}

export default App;
