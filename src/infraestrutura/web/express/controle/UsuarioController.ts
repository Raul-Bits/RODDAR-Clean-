import { Request, Response } from 'express'
import { CadastrarUsuario } from '../../../../aplicacao/casoDeUso/usuario/CadastrarUsuario'
import { AutenticarUsuario } from '../../../../aplicacao/casoDeUso/usuario/AutenticarUsuario'

export class UsuarioController {
    constructor(
        private readonly cadastrarUsuario: CadastrarUsuario,
        private readonly autenticarUsuario: AutenticarUsuario
    ) {}

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

    public async autenticar(req: Request, res: Response): Promise<Response> {
        try {
            const { email, senha } = req.body

            const output = await this.autenticarUsuario.executar({
                email,
                senha,
            })

            return res.status(200).json(output)
        } catch (error: any) {
            return res.status(401).json({ erro: error.message })
        }
    }
}