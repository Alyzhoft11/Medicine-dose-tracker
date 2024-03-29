"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes = require('./routes/user');
const medsRoutes = require('./routes/meds');
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(cors_1.default());
app.use('/api/user', userRoutes);
app.use('/api/meds', medsRoutes);
app.listen(4000, () => {
    console.log('Working');
});
//# sourceMappingURL=index.js.map