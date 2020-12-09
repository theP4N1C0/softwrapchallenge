import React, { useState, useEffect } from "react";

import api from "../../services/api";

export default function Change() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");

    async function handleRegister(e) {
        e.preventDefault();
    
        const data = { name, email, whatsapp, city, uf };
    
        try {
          const response = await api.put("user/list", data);

          alert(`Seu ID de acesso ${response.data.id}`);
        } catch (error) {
          alert("Errou no cadastro, tente novamente.");
        }
      }
    return(
        <>
            <form onSubmit={handleRegister}>
                <label>Name:</label>
                <input type="text"></input>

                <label>Age:</label>
                <input type="text"></input>

                <label>Marital Status:</label>
                <input type="text"></input>

                <label>CPF:</label>
                <input type="text"></input>

                <label>City:</label>
                <input type="text"></input>

                <label>State:</label>
                <input type="text"></input>
            </form>
        </>
    )
}