"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('User', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    email_verified_at: {
        type: sequelize_1.DataTypes.DATE
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    remember_token: {
        type: sequelize_1.DataTypes.STRING
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE
    }
}, { timestamps: false });
exports.default = User;
//# sourceMappingURL=usuario.js.map