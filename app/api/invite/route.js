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
    message: "Github username is invaild!",
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

 if (!client) {
  return new NextResponse(
   JSON.stringify({
    error: true,
    message: "Internal Server Error! Please try again later!",
   }),
   {
    status: 500,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 const orgData = await client.orgs
  .get({
   org: process.env.ORGANIZATION,
  })
  .catch(() => {
   return new NextResponse(
    JSON.stringify({
     error: true,
     message: "Internal Server Error! Please try again later!",
    }),
    {
     status: 500,
     headers: {
      "Content-Type": "application/json",
     },
    }
   );
  });

 if (orgData.status !== 200) {
  return new NextResponse(
   JSON.stringify({
    error: true,
    message: "Internal Server Error! Please try again later!",
   }),
   {
    status: 500,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 const user = await client.users
  .getByUsername({
   username,
  })
  .catch(() => {
   return new NextResponse(
    JSON.stringify({
     error: true,
     message: "User not found!",
    }),
    {
     status: 400,
     headers: {
      "Content-Type": "application/json",
     },
    }
   );
  });

 if (user.status !== 200) {
  return new NextResponse(
   JSON.stringify({
    error: true,
    message: "User not found!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 const userData = user.data;

 if (!userData.id) {
  return new NextResponse(
   JSON.stringify({
    error: true,
    message: "User not found!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 const invite = await client.orgs
  .createInvitation({
   org: process.env.ORGANIZATION,
   invitee_id: userData.id,
   role: "direct_member",
   team_ids: [parseInt(process.env.TEAM_ID)],
  })
  .catch((_err) => {
   return new NextResponse(
    JSON.stringify({
     error: true,
     message: "Internal Server Error! Please try again later!",
    }),
    {
     status: 400,
     headers: {
      "Content-Type": "application/json",
     },
    }
   );
  });

 if (invite.status !== 201) {
  const jsonBody = await invite.json();
  return new NextResponse(
   JSON.stringify({
    error: true,
    message: jsonBody?.message || "Internal Server Error! Please try again later!",
   }),
   {
    status: 400,
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
}
