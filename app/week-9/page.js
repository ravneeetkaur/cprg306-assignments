"use client";

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            // Sign in to Firebase with GitHub authentication
            await gitHubSignIn();
        } catch (error) {
            console.error("GitHub Sign-In Error:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            // Sign out of Firebase
            await firebaseSignOut();
        } catch (error) {
            console.error("Firebase Sign-Out Error:", error);
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 to-indigo-900 text-white text-center p-8">
            {!user ? (
                <>
                    <h1 className="text-4xl font-bold mb-6">Welcome to the Shopping List App</h1>
                    <p className="mb-8 text-lg">Please sign in with GitHub to continue</p>
                    <button
                        onClick={handleSignIn}
                        className="bg-white text-indigo-800 px-6 py-3 rounded-md shadow hover:bg-gray-200 font-semibold"
                    >
                        Sign in with GitHub
                    </button>
                </>
            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-4">Welcome, {user.displayName}</h1>
                    <p className="mb-6 text-lg">({user.email})</p>
                    <div className="flex gap-4">
                        <button
                            onClick={handleSignOut}
                            className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700"
                        >
                            Sign Out
                        </button>
                        <Link
                            href="/week-9/shopping-list"
                            className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600"
                        >
                            Go to Shopping List
                        </Link>
                    </div>
                </>
            )}
        </main>
    );
}