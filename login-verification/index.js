const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDb = require("./db/config");

const PORT = process.env.PORT;

const app = express();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware
app.use(cors());
app.use(cookieParser(process.env.SECRET_KEY));

//api routes
app.use(`/api/auth`, require("./route/authRoute"));
app.use(`/api/user`, require("./route/userRoute"));
app.use(`/api/category`, require("./route/categoryRoute"));
app.use(`/api/products`, require("./route/ProductRoute"));
app.use(`/api/cart`, require("./route/cartRoute"));
app.use(`api/order`, require("./route/orderRoute"));

app.listen(PORT, () => {
  connectDb();
  console.log(`server is running on port @ http://localhost:${PORT}`);
});
