import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { disconnect } from "process";

import { api } from "~/utils/api";

export default function Home() {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div>
          {!user.isSignedIn && <SignInButton />}
          {user.isSignedIn && <SignOutButton />}
        </div>
        <div>
          {data?.map((post) => (
            <div key={post.id}>
              {post.content} by author: {post.authorId}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
