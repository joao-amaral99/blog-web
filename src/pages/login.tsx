import { FormEvent, useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { api } from "../lib/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(event: FormEvent) {
    event.preventDefault();

    console.log(email, password);
  }

  return (
    <main className=" flex flex-col justify-center items-center h-screen mx-auto rounded-md">
      <div className="h-3/6 bg-gray-500 w-1/4 flex flex-col justify-center items-center rounded-xl">
        <h1 className="text-white mt-5 text-2xl">Painel Administrativo</h1>
        <form onSubmit={login} className="my-6 flex flex-col gap-6">
          <div className="flex items-center relative">
            <div className="absolute left-2">
              <MdEmail className="text-gray-100" />
            </div>
            <input
              className="rounded w-72 h-11 px-8 text-sm bg-gray-900 text-gray-200 placeholder-primary"
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex items-center relative">
            <div className="absolute left-2 ">
              <MdLock className="text-gray-100" />
            </div>
            <input
              className="rounded  w-72 h-11 px-8 bg-gray-900 text-gray-200 text-sm placeholder-primary"
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="uppercase bg-violet-500 rounded h-11 text-white font-bold tracking-wider"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
