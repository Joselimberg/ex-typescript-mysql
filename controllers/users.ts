import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();

    res.json({ users });
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;


    const user = await User.findByPk(id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
}

export const postUser = async (req: Request, res: Response) => {
    const { body } = req;


    try {

        const existeEmail = await User.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email' + body.email
            });
        }

        const user = User.build(body);
        await user.save();


        res.json(user);



    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }


}

export const putUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await User.findByPk(id);
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: `El usuario con el id: ${id} no existe`,
            });
        }

        await User.update(body, {
            where: {
                id,
            },
        });

        res.json({
            ok: true,
            msg: "Usuario Actualizado",
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msj: "Hable con el Administrador",
        });
    }
};

export const deleteUser = async(req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await User.findByPk(id);
    if (!usuario) {
        return res.status(400).json({
            ok: false,
            msg: `El usuario con el id: ${id} no existe`,
        });
    }

    await usuario.destroy();


    res.json(usuario);
}