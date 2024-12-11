import { createClient } from "contentful";

const spaceId = "8b30oz6ewy5i";
const accessToken = "shuZJ0RHQYm5FhPWoRxYi6fR_h04zTFSREGiSNWhZ_o";

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});
