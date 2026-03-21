'use client';

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link"

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="font-mono text-4xl font-bold absolute top-1/3">My Shopping List</h1>

      {user && <p className="font-mono text-base text-amber-400">Welcome, {user.displayName} ({user.email}) ♥</p>}
      {user && <Link href="/week-9/shopping-list" className="font-mono text-2xl border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
      Go to Shopping List →
      </Link>}
      {user && <button className="border px-4 py-1 rounded-md hover:bg-white hover:text-black cursor-pointer absolute bottom-10" onClick={firebaseSignOut}>
        Logout
        </button>}
      {!user && <button className="border px-4 py-1 rounded-md hover:bg-white hover:text-black cursor-pointer"onClick={gitHubSignIn}>
        Login with GitHub
        </button>} 
    </main>
  );
}