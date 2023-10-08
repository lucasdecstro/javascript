const { resolve, reject } = require("core-js/fn/promise");
const { async } = require("regenerator-runtime");

function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Opa");
      resolve();
    }, 2000);
  });
}

export default async function () {
  await promise();
  console.log("Finished");
}
