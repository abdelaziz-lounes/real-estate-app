"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// import { authMiddleware } from "./middleware/authMiddleware";
/* ROUTE IMPORT */
// import tenantRoutes from "./routes/tenantRoutes";
// import managerRoutes from "./routes/managerRoutes";
// import propertyRoutes from "./routes/propertyRoutes";
// import leaseRoutes from "./routes/leaseRoutes";
// import applicationRoutes from "./routes/applicationRoutes";
/* CONFIGURATIONS */
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
/* ROUTES */
app.get("/", (req, res) => {
    res.send("This is home route");
});
// app.use("/applications", applicationRoutes);
// app.use("/properties", propertyRoutes);
// app.use("/leases", leaseRoutes);
// app.use("/tenants", authMiddleware(["tenant"]), tenantRoutes);
// app.use("/managers", authMiddleware(["manager"]), managerRoutes);
/* SERVER */
const port = parseInt(process.env.PORT || "3002", 10); // Ensure port is a number
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
