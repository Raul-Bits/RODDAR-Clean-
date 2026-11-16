export type UsuarioProps = {
    id: string
    nome : string
    email : string
    senhaHash : string
    criadoEm : Date
    atualizadoEm ?: Date

}

export class Usuario {
    private constructor(private props: UsuarioProps) {}

    public get id(): string {
        return this.props.id
    }

    public get nome(): string {
        return this.props.nome
    }

    public get email(): string {
        return this.props.email
    }

    public get senhaHash(): string {
        return this.props.senhaHash
    }

    public get criadoEm(): Date {
        return this.props.criadoEm
    }

    public get atualizadoEm(): Date | undefined {
        return this.props.atualizadoEm
    }

    public static criar (
    nome : string, 
    email : string,
    senhaHash : string,

    ): Usuario {

        if (!nome || !email || !senhaHash) {
            throw new Error('Nome, email e senha são obrigatórios');
            
        }

        return new Usuario({ id: crypto.randomUUID().toString(), nome, email, senhaHash, criadoEm: new Date(),})
    }

    public static recriar (props : UsuarioProps) : Usuario {
        return new Usuario (props)
    }

}
