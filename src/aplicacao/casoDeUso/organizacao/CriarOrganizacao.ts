import { Organizacao } from '../../../dominio/entidade/Organizacao'
import { OrganizacaoRepositorio } from '../../../dominio/interface/OrganizacaoRepositorio'
import { UsuarioRepositorio } from '../../../dominio/interface/UsuarioRepositorio'
import { CriarOrganizacaoInput, CriarOrganizacaoOutput } from '../../dto/organizacao/CriarOrganizacaoDTO'

export class CriarOrganizacao {

    // PUXANDO AS INTERFACES 
    constructor(
        private readonly usuarioRepo: UsuarioRepositorio,
        private readonly organizacaoRepo: OrganizacaoRepositorio,  
    ) {}

    public async executar(input: CriarOrganizacaoInput) : Promise<CriarOrganizacaoOutput> {
        
        //usa interface porque existe no banco 
        const usuario = await this.usuarioRepo.buscarPorId(input.usuarioId)
        
        if(!usuario) {
            throw new Error("Usuario não encontrado!")
        }

        
        const organizacao = Organizacao.criar(input.usuarioId, input.nome, input.tipo)

        await this.organizacaoRepo.salvar(organizacao)


        return {
            id: organizacao.id,
            usuarioId: organizacao.usuarioId,
            nome: organizacao.nome,
            tipo: organizacao.tipo,
            ativa: organizacao.ativa,
            criadoEm: organizacao.criadoEm
        }
    }
}