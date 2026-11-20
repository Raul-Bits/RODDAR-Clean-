import { OrganizacaoRepositorio } from '../../../dominio/interface/OrganizacaoRepositorio'
import { AtivarOrganizacaoInput, AtivarOrganizacaoOutput } from '../../dto/organizacao/AtivarOrganizacaoDTO'

export class AtivarOrganizacao {

    constructor (
        private readonly organizacaoRepo : OrganizacaoRepositorio
    ) {}

    public async executar (input: AtivarOrganizacaoInput) : Promise<AtivarOrganizacaoOutput> {
        const organizacao = await this.organizacaoRepo.buscarPorId(input.id)

        if( !organizacao ) {
            throw new Error("Organização não encontrada! ")
        }

        organizacao.ativar()

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