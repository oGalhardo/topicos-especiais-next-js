"use client";
import { act, use, useEffect, useState } from "react";

export default function Page({ params }) {
  const [user, setUser] = useState(null);

  const buscarUsuarios = async (actualParams) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${actualParams}`
    );
    const result = await response.json();

    setUser(result);
  };
  useEffect(() => {
    buscarUsuarios(params.id);
  }, [params]);
  return <>Usuarios {user.name} </>;
}
