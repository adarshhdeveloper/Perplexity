import "dotenv/config";
import app from "./src/app.js";
import connectToDB from "./src/config/dataBase.js";
import { testAi } from "./src/services/ai.service.js";

const PORT = process.env.PORT || 8000;

testAi();
connectToDB()
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});