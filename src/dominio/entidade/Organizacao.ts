
export type TipoOrganizacao = 'individual' | 'frota';

export type OrganizacaoProps = {
    id: string;
    usuarioId: string;
    nome: string;
    tipo: TipoOrganizacao;
    ativa: boolean;
    criadoEm: Date;
}

export class Organizacao {
    // CONSTRUTOR PRIVADO
    private constructor( private props: OrganizacaoProps) {}


    // GETTERS
    public get id() : string {
        return this.props.id
    }

    public get usuarioId() : string {
        return this.props.usuarioId
    }

    public get nome() : string {
        return this.props.nome
    }

    public get tipo() : TipoOrganizacao {
        return this.props.tipo
    }

    public get ativa() : boolean {
        return this.props.ativa
    }

    public get criadoEm() : Date {
        return this.props.criadoEm
    }


    // FUNCAO 1

    public static criar ( usuarioId: string, nome: string, tipo: TipoOrganizacao ): Organizacao {
        if ( !usuarioId || !nome ) {
            throw new Error("id do Usuario e nome sao obrigatórios!");
        }

        if ( nome.length > 120 ) {
            throw new Error("o nome deve ter no maximo 120 caracteres")
        }

        if (tipo !== 'individual' && tipo !== 'frota') {
            throw new Error("Tipo de organização invalida")
        }
    

        return new Organizacao ({
            id: crypto.randomUUID(),
            usuarioId,
            nome,
            tipo,
            ativa: true,
            criadoEm: new Date(),
        })
    }

    // FUNCAO 2

    public static recriar ( props : OrganizacaoProps) : Organizacao {
        return new Organizacao( props )
    }

    // FUNCAO 3

    public desativar () : void {
        if (!this.props.ativa) {
            throw new Error("Organização já está desativada")
        }

        this.props.ativa = false
    }

    // FUNCAO 4

    public renomear(novoNome: string): void {
        if (!novoNome) {
            throw new Error("Nome é obrigatório")
        }
        if (novoNome.length > 120) {
            throw new Error("o nome deve ter no maximo 120 caracteres")
        }
        this.props.nome = novoNome
    }

    // FUNCAO 5

    public ativar () : void {
        if(this.props.ativa) {
            throw new Error("Organização já está ativada")
        }

        this.props.ativa = true
    }





}