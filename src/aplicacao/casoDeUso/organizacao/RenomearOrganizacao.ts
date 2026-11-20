import { OrganizacaoRepositorio } from '../../../dominio/interface/OrganizacaoRepositorio'
import { RenomearOrganizacaoInput, RenomearOrganizacaoOutput } from '../../dto/organizacao/RenomearOrganizacaoDTO'

export class RenomearOrganizacao {
    constructor(
        private readonly organizacaoRepo : OrganizacaoRepositorio
    ){} 

    public async executar(input : RenomearOrganizacaoInput) : Promise<RenomearOrganizacaoOutput> {
        
        const organizacao = await this.organizacaoRepo.buscarPorId(input.id)

        if( !organizacao ) {
            throw new Error("Organização não encontrada! ")
        }

        organizacao.renomear(input.nome)

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