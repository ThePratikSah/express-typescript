import express from "express";
// import your routes here
import homeRoutes from "./routes";

const app = express();

app.use("/", homeRoutes);

app.listen(3000, () => {
  console.log("Server listening");
});
