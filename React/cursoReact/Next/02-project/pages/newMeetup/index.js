import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const router = useRouter();
  async function handleAddMeetup(enteredMeetupData) {
    const response = await fetch("/api/newMeetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>New meetup</title>
        <meta name="description" content="Add a new meetup by your own!" />
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  );
}
