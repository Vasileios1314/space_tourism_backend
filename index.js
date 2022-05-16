const express = require("express");
const destinationsRouter = require("./routers/destinations");
const crewRouter = require("./routers/crew");
const technologyRouter = require("./routers/technology");

const app = express();
const PORT = 4000;
app.use(express.json());

app.use("/destinations", destinationsRouter);
app.use("/crew", crewRouter);
app.use("/technology", technologyRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
