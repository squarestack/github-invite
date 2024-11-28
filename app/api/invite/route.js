import { Octokit } from "@octokit/rest";
const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
import { NextResponse } from "next/server";

export async function POST(request) {
 const clonedStream = request.clone();
 const { username } = await clonedStream.json();

 if (!username) {
  return new NextResponse(
   JSON.stringify({
    error: true,
    message: "Github username is required!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 if (typeof username !== "string") {
  return new NextResponse(
   JSON.stringify({
    error: true,
    message: "Github username must be a string!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 if (username.length >= 39) {
  return new NextResponse(
   JSON.stringify({
    error: true,
    message: "Github username is too long!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 if (!regex.test(username)) {
  return new NextResponse(
   JSON.stringify({
    error: true,
    message: "Github username is invalid!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 const client = new Octokit({
  auth: process.env.GITHUB_TOKEN,
 });

 try {
  const orgData = await client.orgs.get({
   org: process.env.ORGANIZATION,
  });

  const user = await client.users.getByUsername({
   username,
  });

  if (!user?.data?.id) {
   return new NextResponse(
    JSON.stringify({
     error: true,
     message: "User not found!",
    }),
    {
     status: 404,
     headers: {
      "Content-Type": "application/json",
     },
    }
   );
  }

  const invite = await client.orgs.createInvitation({
   org: process.env.ORGANIZATION,
   invitee_id: user.data.id,
   role: "direct_member",
   team_ids: [parseInt(process.env.TEAM_ID)],
  });

  if (invite.status !== 201) {
   return new NextResponse(
    JSON.stringify({
     error: true,
     message: invite.data?.message || "Failed to send invitation!",
    }),
    {
     status: invite.status || 400,
     headers: {
      "Content-Type": "application/json",
     },
    }
   );
  }

  return new NextResponse(
   JSON.stringify({
    error: false,
    message: "User invited successfully!",
   }),
   {
    status: 200,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 } catch (error) {
  const apiErrorMessage = error?.response?.data?.message || "Internal Server Error!";
  const statusCode = error?.response?.status || 500;

  return new NextResponse(
   JSON.stringify({
    error: true,
    message: apiErrorMessage,
   }),
   {
    status: statusCode,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }
}
