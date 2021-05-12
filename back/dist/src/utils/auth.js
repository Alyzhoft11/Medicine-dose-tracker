"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = exports.verifyPassword = exports.hashPassword = void 0;
const client_1 = require("@prisma/client");
const secure_password_1 = __importDefault(require("secure-password"));
const securePassword = new secure_password_1.default();
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield securePassword.hash(Buffer.from(password));
});
exports.hashPassword = hashPassword;
const verifyPassword = (password, hash) => __awaiter(void 0, void 0, void 0, function* () {
    return yield securePassword.verify(Buffer.from(password), hash);
});
exports.verifyPassword = verifyPassword;
const authenticateUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const user = yield prisma.user.findFirst({
        where: {
            email: email,
        },
    });
    if (!user || !user.hashedPassword) {
        throw new Error('Email not found');
    }
    const status = yield exports.verifyPassword(password, user.hashedPassword);
    console.log(status);
});
exports.authenticateUser = authenticateUser;
//# sourceMappingURL=auth.js.map