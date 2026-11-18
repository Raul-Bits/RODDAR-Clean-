import { Organizacao } from "../entidade/Organizacao"

export interface OrganizacaoRepositorio {
    salvar(organização: Organizacao) : Promise<void>
    buscarPorId(id:string): Promise <Organizacao | null>
    listarPorUsuario(usuarioId: string): Promise<Organizacao[]>
}