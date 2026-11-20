import { OrganizacaoRepositorio } from "../../../dominio/interface/OrganizacaoRepositorio";
import { DesativarOrganizacaoInput, DesativarOrganizacaoOutput } from "../../dto/organizacao/DesativarOrganizacaoDTO";

export class DesativarOrganizacao {

    constructor (
        private readonly organizacaoRepo : OrganizacaoRepositorio
    ) {}

    public async executar (input: DesativarOrganizacaoInput) : Promise<DesativarOrganizacaoOutput> {

        const organizacao = await this.organizacaoRepo.buscarPorId(input.id)

        if(!organizacao) {
            throw new Error('Organização não encontrada! ')
        }

        organizacao.desativar()

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