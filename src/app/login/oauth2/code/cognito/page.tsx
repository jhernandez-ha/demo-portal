"use client";
// import {useRouter} from 'next/router'
import { useSession } from "next-auth/react";

export default function Cognito() {
  // const router = useRouter();
  const { update } = useSession();

  update({ code: "0f5f5617-f56a-4ff1-a564-d67363375ee3" });

  // router.push("/")

  return (
    <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <h1>Prueba</h1>
    </div>
  );
}
