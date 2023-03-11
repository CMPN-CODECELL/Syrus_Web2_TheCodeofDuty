
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import client from 'twilio';
// import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json());

//const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
//const twilioClient = client(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const accountSid = "AC74a92e6604305a918d768401fcc4ea49";
const authToken = "832c3a9f1e04242788232d0ee1936411";
//const client = new require("twilio")(accountSid, authToken);
// const twilioclient = new twilio(accountSid, authToken);

// twilioclient.messages
//   .create({ body: "Hello from Twilio", from: "+17083775191", to: "+917972960389",body: "Emergency alert: Help is needed immediately!", })
//   .then(message => console.log(message.sid));

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://edtech:edtech@cluster0.fxbkxnr.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 4001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);