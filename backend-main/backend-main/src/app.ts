import express from "express";
import cors from "cors";
import speakerRoutes from "./routes/speakerRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import eventRoutes from "./routes/eventRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use(
  "/categories",
  categoryRoutes
);
app.use("/speakers", 
    speakerRoutes);
    
app.use("/events", eventRoutes);

app.use("/dashboard", dashboardRoutes);

export default app;