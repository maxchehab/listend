const dev = process.env.NODE_ENV !== "production";
const PORT = dev ? 3000 : 80;
module.exports = { PORT: PORT };
