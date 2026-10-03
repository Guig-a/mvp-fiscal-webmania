import { config } from "dotenv";
config({ path: "apps/fiscal/.env" });
import { ensureAwsResources } from "./ensure-resources";

void ensureAwsResources().then(() => {
  console.log("aws resources ready");
});
