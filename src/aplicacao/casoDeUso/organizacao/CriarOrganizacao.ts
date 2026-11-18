export class CriarOrganizacao {

    // PUXANDO AS INTERFACES 
    constructor(
        private readonly usuarioRepo: UsuarioRepositorio,
        private readonly OrganizacaoRepo: OrganizacaoRepositorio,  
    ) {}

    public async executar(input: CriarOrganizacaoInput) : Promise<CriarOrganizacaoOutput> {
        
        
        const usuario = await this.usuarioRepo.buscarPorId(input.usuarioId)
        
        if(!usuario)
    }
}