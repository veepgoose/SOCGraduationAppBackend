import express from "express";
import { formRouter } from "./routes/formRoute.js";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.use(express.json());
app.use("/", formRouter)


app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log(PORT);
app.listen(PORT, function () {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

export default app;