const express = require("express");
const app = express();
const path = require("path");
const {logger}=require("./middleware/logger")
const PORT = 3500;

app.use(logger);
app.use(express.json());

app.use("/", express.static( path.join(__dirname,"/public")));
app.use("/",require("./routes/root"))
app.use('/api',require("./routes/api"));
app.listen(PORT,()=>{console.log(`Server Running on port ${PORT}`);})
