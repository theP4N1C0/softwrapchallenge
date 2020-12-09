import React, { useState, useEffect } from "react";

import api from "../../services/api";

export default function User() {
  const [state, setState] = useState([]);

  useEffect(() => {
    api.get("/list").then(({data}) => {
        setState(data.users);
      }).catch(error => console.error(error))
  }, []);

  return (
    <>
      <div className="profile">
        {state.length > 0 ? (
          <ul>
            {state.map(user => (
              <li key={user.cpf}>
                <strong>Name:</strong>
                <p>{user.name}</p>
                <strong>Age:</strong>
                <p>{user.age}</p>
                <strong>Marital Status::</strong>
                <p>{user.status}</p>
                <strong>CPF:</strong>
                <p>{user.cpf}</p>
                <strong>City:</strong>
                <p>{user.city}</p>
                <strong>State:</strong>
                <p>{user.state}</p>
                <a href="/changedata"><button>Alterar Dados</button></a>
              </li>
            ))}
          </ul> 
        ) : 'API Vazia'}
      </div>
    </>
  );
}
