#!/usr/bin/env zx

if (argv._[0] === "aws") {
  await $`cp ~/.metaflowconfig/config-aws.json ~/.metaflowconfig/config.json`;
} else if (argv._[0] === "local") {
  await $`rm ~/.metaflowconfig/config.json`;
} else {
  console.log("Usage: metaflow.mjs <local|aws>");
}
