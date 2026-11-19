import { OrganizacaoRepositorio } from '../../../dominio/interface/OrganizacaoRepositorio'
import { UsuarioRepositorio } from '../../../dominio/interface/UsuarioRepositorio'
import { Organizacao } from "../../../dominio/entidade/Organizacao"
import { RenomearOrganizacaoInput, RenomearOrganizacaoOutput } from '../../dto/organizacao/RenomearOrganizacaoDTO'

export class RenomearOrganizacao {
    constructor(
        private readonly usuarioRepo : UsuarioRepositorio,
        private readonly organizacaoRepo : OrganizacaoRepositorio
    ){} 

    public async executar(input : RenomearOrganizacaoInput) : Promise<RenomearOrganizacaoOutput> {
        
    }
}