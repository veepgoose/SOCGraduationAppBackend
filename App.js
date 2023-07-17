import express from "express";
import attendeesRoutes from './routes/attendeesRoutes.js';

const app = express();
const port = 3001;
app.use(express.json());
app.use("/attendees", attendeesRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});