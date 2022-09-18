import { AutoRc } from "auto";

// https://intuit.github.io/auto/docs/configuration/autorc
export default function rc(): AutoRc {
  return {
    "onlyPublishWithReleaseLabel": true,
    "baseBranch": "main",
    "prereleaseBranches": ["next"]
  }
}
