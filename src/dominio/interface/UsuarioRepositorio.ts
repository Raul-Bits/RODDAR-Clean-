import { Usuario } from '../entidade/Usuario'

export interface UsuarioRepositorio {
    salvar(usuario: Usuario): Promise<void>
    buscarPorEmail(email: string): Promise<Usuario | null>
    buscarPorId(id: string): Promise<Usuario | null>
}