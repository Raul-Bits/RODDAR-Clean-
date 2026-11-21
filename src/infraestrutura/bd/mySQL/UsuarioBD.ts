import { RowDataPacket } from 'mysql2/promise'
import { Usuario, UsuarioProps } from '../../../dominio/entidade/Usuario'
import { UsuarioRepositorio } from '../../../dominio/interface/UsuarioRepositorio'
import { conexao } from './ConexaoMySQL'


export class UsuarioBD implements UsuarioRepositorio {
    public async salvar(usuario: Usuario): Promise<void> {
        try {
            await conexao.query(
                'INSERT INTO usuario (id, nome, email, senhaHash, criadoEm, atualizadoEm) VALUES (?, ?, ?, ?, ?, ?)',
                [usuario.id, usuario.nome, usuario.email, usuario.senhaHash, usuario.criadoEm, usuario.atualizadoEm ?? null]
            )
        } catch (error) {
            throw new Error('Erro ao salvar o usuário ' + usuario.nome)
        }
    }

    public async buscarPorEmail(email: string): Promise<Usuario | null> {
        try {
            const [rows] = await conexao.query<(UsuarioProps & RowDataPacket)[]>(
                'SELECT * FROM usuario WHERE email = ?',
                [email]
            )

            const result = rows[0]

            if (!result) {
                return null
            }

            return Usuario.recriar({
                id: result.id,
                nome: result.nome,
                email: result.email,
                senhaHash: result.senhaHash,
                criadoEm: result.criadoEm,
                atualizadoEm: result.atualizadoEm,
            })
        } catch (error) {
            throw new Error('Erro ao buscar usuário por email')
        }
    }

    public async buscarPorId(id: string): Promise<Usuario | null> {
        try {
            const [rows] = await conexao.query<(UsuarioProps & RowDataPacket)[]>(
                'SELECT * FROM usuario WHERE id = ?',
                [id]
            )

            const result = rows[0]

            if (!result) {
                return null
            }

            return Usuario.recriar({
                id: result.id,
                nome: result.nome,
                email: result.email,
                senhaHash: result.senhaHash,
                criadoEm: result.criadoEm,
                atualizadoEm: result.atualizadoEm,
            })
        } catch (error) {
            throw new Error('Erro ao buscar usuário por id')
        }
    }
}
