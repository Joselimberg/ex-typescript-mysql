import { DataTypes } from "sequelize";
import db from "../db/connection";

const User = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    email_verified_at: {
        type: DataTypes.DATE
    },
    password: {
        type: DataTypes.STRING
    },
    remember_token: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    }
},{timestamps: false});

export default User;