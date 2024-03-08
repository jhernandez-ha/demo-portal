"use client";

import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  console.log(status);

  if (!session) {
    console.log("entro");

    // No hay sesión activa, redirigir automáticamente a la página de inicio de sesión de Cognito
    signIn("cognito");
    return null;
  }

  return (
    <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <h1>Dashboard</h1>
    </div>
  );
}
