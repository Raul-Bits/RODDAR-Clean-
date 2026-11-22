import { UsuarioRepositorio } from '../../../dominio/interface/UsuarioRepositorio'
import { AutenticarUsuarioInputDTO, AutenticarUsuarioOutputDTO } from '../../dto/usuario/AutenticarUsuarioDTO'

export class AutenticarUsuario {
    constructor(private readonly usuarioRepositorio: UsuarioRepositorio) {}

    public async executar(input: AutenticarUsuarioInputDTO): Promise<AutenticarUsuarioOutputDTO> {
        if (!input.email || !input.senha) {
            throw new Error('Email e senha são obrigatórios')
        }

        const emailNormalizado = input.email.trim().toLowerCase()

        const usuario = await this.usuarioRepositorio.buscarPorEmail(emailNormalizado)

        if (!usuario || usuario.senhaHash !== input.senha) {
            throw new Error('Email ou senha inválidos')
        }

        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
        }
    }
}