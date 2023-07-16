import express from "express";
import attendeesRoutes from './routes/attendeesRoutes.js';

const app = express();
const port = 3000;
app.use(express.json());
app.use(attendeesRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});