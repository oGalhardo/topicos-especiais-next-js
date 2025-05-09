"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    buscarUsuarios();
  }, []);

  const buscarUsuarios = async () => {
    setIsLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setUsuarios(result);
    setIsLoading(false);
  };
  return (
    <div>
      <h1>Usuários Servidor</h1>
      {isLoading && "carregando"}
      <ul>
        {usuarios.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
