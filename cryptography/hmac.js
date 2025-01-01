const { createHmac } = require("crypto");
const key = "super-secret";
const message = "boo";

const hmac = createHmac("sha256", key).update(message).digest("hex");
console.log(hmac);
