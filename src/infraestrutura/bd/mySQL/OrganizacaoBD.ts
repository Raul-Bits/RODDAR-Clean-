import { RowDataPacket } from 'mysql2/promise'
import { Organizacao, OrganizacaoProps } from "../../../dominio/entidade/Organizacao";
import { OrganizacaoRepositorio } from "../../../dominio/interface/OrganizacaoRepositorio";
import { conexao } from "./ConexaoMySQL";

export class OrganizacaoBD implements OrganizacaoRepositorio {

    public async salvar (organizacao: Organizacao): Promise<void> {
        try {
            await conexao.query(
                "INSERT INTO organizacao (id, usuarioId, nome, tipo, ativa, criadoEm) VALUES(?, ?, ?, ?, ?, ?)",
                [organizacao.id, organizacao.usuarioId, organizacao.nome, organizacao.tipo, organizacao.ativa, organizacao.criadoEm]
            );
        } catch(error) {
            throw Error("Erro ao salvar a organização " + organizacao.nome)
        }
    }

    public async buscarPorId(id: string): Promise<Organizacao | null> {
        try{
            const [rows] = await conexao.query<(OrganizacaoProps & RowDataPacket)[]>(
                "SELECT * FROM organizacao WHERE id=?", [id]
            )

            const result = rows[0]

            if (!result) {
                return null 
            } 

            return Organizacao.recriar({
                id: result.id,
                usuarioId: result.usuarioId,
                nome: result.nome,
                tipo: result.tipo,
                ativa: Boolean(result.ativa),
                criadoEm: result.criadoEm,
            })
        } catch (error) {
            throw new Error("Erro ao buscar organizacao")
        }
    }

    public async listarPorUsuario(usuarioId: string): Promise<Organizacao[]> {
        try{
            const [rows] = await conexao.query<(OrganizacaoProps & RowDataPacket)[]>(
                "SELECT * FROM organizacao WHERE usuarioId = ?", [usuarioId]
            )

            return rows.map((row) => 
                Organizacao.recriar({
                    id: row.id,
                    usuarioId: row.usuarioId,
                    nome: row.nome,
                    tipo: row.tipo,
                    ativa: Boolean(row.ativa),
                    criadoEm: row.criadoEm,
                })
            )

        } catch ( error ) {
            throw new Error("Erro ao listar organizações")
        }
    }

}