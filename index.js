import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/UserRoute";
import adminRoute from "./routes/AdminRoute";

const app = express();
const port = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/mern_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("database connected");
});

app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(adminRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
