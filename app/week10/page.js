"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context";

import Link from 'next/link'

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // user is an object with the following properties:
  // displayName, email, emailVerified, photoURL, uid, phoneNumber, providerData

  async function handleSignIn() {
    try {
      await gitHubSignIn();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  return (
    <div className="text-lg">
      {user ? (
        <div>
          <p>{user.displayName} | {user.email}</p>
          <img src={user.photoURL} alt="user avatar" className="w-8 h-8" />
          <p>Your user id is: {user.uid}</p>
          <button
            onClick={handleSignOut}
            className="text-lg m-2 hover:underline"
          >
            Sign Out
          </button>
          <Link href="./week10/component" className="block text-blue-500 hover:underline mb-2">
          Link to Shopping List
        </Link>
        </div>
      ) : (
        <button onClick={handleSignIn} className="text-lg m-2 hover:underline">
          Sign In
        </button>
      )}
    </div>
  );
}

