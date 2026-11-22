import { Request, Response } from 'express'
import { CadastrarUsuario } from '../../aplicacao/casoDeUso/usuario/CadastrarUsuario'

export class UsuarioController {
    constructor(private readonly cadastrarUsuario: CadastrarUsuario) {}

    public async cadastrar(req: Request, res: Response): Promise<Response> {
        try {
            const { nome, email, senha } = req.body

            const output = await this.cadastrarUsuario.executar({
                nome,
                email,
                senha,
            })

            return res.status(201).json(output)
        } catch (error: any) {
            return res.status(400).json({ erro: error.message })
        }
    }
}