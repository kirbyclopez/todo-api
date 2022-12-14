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
exports.listRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.listRouter = express_1.default.Router();
exports.listRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send({ msg: "GET Lists" });
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
exports.listRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({ msg: "GET List by ID" });
}));
exports.listRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({ msg: "POST List" });
}));
exports.listRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({ msg: "PUT List by ID" });
}));
exports.listRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({ msg: "PATCH List by ID" });
}));
exports.listRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({ msg: "DELETE List by ID" });
}));
