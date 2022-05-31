const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/constants");
const destinationsRouter = require("./routers/destinations");
const crewRouter = require("./routers/crew");
const technologyRouter = require("./routers/technology");

const app = express();
app.use(cors());
// const PORT = 4000;
app.use(express.json());

app.use("/destination", destinationsRouter);
app.use("/crew", crewRouter);
app.use("/technology", technologyRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
