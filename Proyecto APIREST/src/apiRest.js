const app = require("./app");
const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Server listen on port " + port);
});
// node apiRst.js parq eur corra 