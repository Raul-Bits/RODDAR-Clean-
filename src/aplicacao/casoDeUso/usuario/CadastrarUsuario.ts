import { Usuario } from '../../../dominio/entidade/Usuario'
import { UsuarioRepositorio } from '../../../dominio/interface/UsuarioRepositorio'
import { CadastrarUsuarioInputDTO, CadastrarUsuarioOutputDTO } from '../../dto/usuario/CadastrarUsuarioDTO'

export class CadastrarUsuario {
    constructor(private readonly usuarioRepositorio: UsuarioRepositorio) {}

    public async executar(input: CadastrarUsuarioInputDTO): Promise<CadastrarUsuarioOutputDTO> {
        const emailNormalizado = input.email.trim().toLowerCase()

        const usuarioExistente = await this.usuarioRepositorio.buscarPorEmail(emailNormalizado)

        if (usuarioExistente) {
            throw new Error('Já existe um usuário cadastrado com este email')
        }

    const usuario = Usuario.criar(
            input.nome,
            emailNormalizado,
            input.senha,
        )

        await this.usuarioRepositorio.salvar(usuario)

        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            criadoEm: usuario.criadoEm,
        }
    }
}