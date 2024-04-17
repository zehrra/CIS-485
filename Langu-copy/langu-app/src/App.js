import React from 'react';
import Login from './login'; // Assuming the Login component is in a file named Login.js
// import api from "./api";

// export default function App() { 
/* {

  useEffect(() => {
    api
      .get("/YOUR ENDPOINT")
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("error" + err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
 
  );
}
*/
/* const Sm = () => {
  return (
    <div>
      <h1>Your Language Learning App</h1>
      <Login /> 
      {/* Other components can go here */ /* }
    </div>
  );
}; 

*/

// import React from 'react';
// import Login from './Login'; // Assuming the Login component is in a file named Login.js

const App = () => {
  console.log("route hit");
  return (
    <div>
      <h1>App</h1>
      <Login/>
      {}
    </div>
  );
};

export default App;
