import { Request, Response } from 'express'
import { CriarOrganizacao } from "../../../../aplicacao/casoDeUso/organizacao/CriarOrganizacao";

export class OrganizacaoController {
    constructor (
        private readonly criarOrganizacao: CriarOrganizacao
    ) {}

    public async criar(req: Request, res: Response): Promise<Response> {
        try {
            const {usuarioId, nome, tipo } = req.body

            const output = await this.criarOrganizacao.executar({
                usuarioId,
                nome,
                tipo
            })

            return res.status(201).json(output)
        } catch(error: any) {
            return res.status(400).json({ erro: error.message })
        }
    }
}

