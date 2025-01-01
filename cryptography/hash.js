const { createHash } = require("crypto");

function hashString(input) {
  return createHash("sha256").update(input).digest("hex");
}

let password = "satyam";
const hash1 = hashString(password);
console.log(hash1);
