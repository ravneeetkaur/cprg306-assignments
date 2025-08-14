"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        {user ? (
          <div>
            <p>
              Welcome, <strong>{user.displayName}</strong> ({user.email})
            </p>
            <button
              onClick={handleSignOut}
              className="text-lg m-2 hover:underline"
            >
              Logout
            </button>
            <br />
            <Link
              href="/week-10/shopping-list"
              className="text-lg m-2 hover:underline"
            >
              Continue to your Shopping List
            </Link>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-bold">Welcome</h1>
            <button
              onClick={handleSignIn}
              className="text-lg m-2 hover:underline"
            >
              Login with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
