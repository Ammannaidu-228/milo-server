import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;
app.use(cookieParser());
app.use(express.json({ limit: "5mb" })); // req.body
// app.use(cors());
app.use(cors(
  { origin: ENV.CLIENT_URL, 
    credentials: true })
  );


app.get("/hello",(req,res)=>{
  res.json({message:"Server is running"})
});


app.use("/auth", authRoutes);
app.use("/messages", messageRoutes);

// make ready for deployment
// Serve the built client from the `client/dist` folder (was referencing ../frontend which doesn't exist)
// if (ENV.NODE_ENV === "production") {
//   const clientDistPath = path.join(__dirname, "../client/dist");
//   app.use(express.static(clientDistPath));

//   app.get("*", (_, res) => {
//     res.sendFile(path.join(clientDistPath, "index.html"));
//   });
// }

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/hello`);
  connectDB();
});
