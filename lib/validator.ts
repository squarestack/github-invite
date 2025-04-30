import { z } from "zod";

export const githubUsernameSchema = z.object({
 username: z
  .string()
  .min(1, { message: "Github username is required!" })
  .max(38, { message: "Github username is too long!" })
  .regex(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, { message: "Github username is invalid!" }),
});
