import { Octokit } from "@octokit/rest";
const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

export default async function handler(request, res) {
 const { username } = request.body;
 if (!username) {
  return res.status(400).json({ message: "Github username is required!" });
 }

 if (typeof username !== "string") {
  return res.status(400).json({ message: "Github username must be a string!" });
 }

 if (username.length >= 39) {
  return res.status(400).json({ message: "Github username is too long!" });
 }

 if (!regex.test(username)) {
  return res.status(400).json({ message: "Github username is invaild!" });
 }

 const client = new Octokit({
  auth: process.env.GITHUB_TOKEN,
 });

 await client.orgs
  .get({
   org: process.env.ORGANIZATION,
  })
  .then((data) => {
   if (data.status !== 200) {
    return res.status(400).json({ message: "Github organization not found!" });
   }
  })
  .catch(() => {
   return res.status(500).json({ message: "Internal Server Error! Please try again later!" });
  });

 await client.users
  .getByUsername({
   username,
  })
  .then((data) => {
   if (data.status !== 200) {
    return res.json({ message: "Github user not found!" });
   }
   const userData = data.data;
   if (!userData.id) {
    return res.status(400).json({ message: "Github user not found!" });
   }
   client.orgs
    .createInvitation({
     org: process.env.ORGANIZATION,
     invitee_id: userData.id,
     role: "direct_member",
     team_ids: [parseInt(process.env.TEAM_ID)],
    })
    .then((t) => {
     console.log(t);
     return res.status(200).json({ message: "Invitation sent!" });
    })
    .catch((error) => {
     if (typeof error.response.data.errors === "object") {
      const errorMessage = JSON.parse(JSON.stringify(error.response.data.errors[0].message));
      return res.status(400).json({ message: errorMessage.replaceAll("Invitee", "User") });
     } else {
      const errorMessage = JSON.parse(JSON.stringify(error.response.data.message));
      return res.status(400).json({ message: errorMessage.replaceAll("Invitee", "User") });
     }
    });
  })
  .catch((error) => {
   if (error.status === 404) {
    return res.status(400).json({ message: "User not found!" });
   }
   if (error.response && typeof error.response.data === "object") {
    return res.status(400).json({ message: "User not found!" });
   }
   return res.status(400).json({ message: "User not found!" });
  });
}
