import React from "react";
import { useState } from "react";

// export default function Authenticate({token}) {
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);
//   const [userData, setUserData] = useState(null);

//   async function handleClick() {
//     try {
//         console.log(token)
//       const response = await fetch(
//         "https://fsa-jwt-practice.herokuapp.com/authenticate",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // format we use to pass token in the Authorization header
//           },
//         }
//       );
//       const result = await response.json();
//       setSuccessMessage(result.message);
//     //   setUserData(result.data.username); confused about this one, trying to create
//     //   setToken(data.token); this wasnt in the answer
//     console.log(result)
//     } catch (error) {
//       setError(error.message);
//     }
//   }

//   return (
//     <>
//         <h2>Authenticate</h2>
//         {userData && <p>Logged in as: {userData}</p>}
//         {successMessage && <p>This is the message: {successMessage}</p>}
//         {error && <p>{error}</p>}
//         <button onClick={handleClick}>Authenticate Token!</button>
//     </>
//   );
// }

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
          
    </div>
  );
}