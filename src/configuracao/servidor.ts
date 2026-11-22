import express from 'express'
import { UsuarioBD } from '../infraestrutura/bd/mySQL/UsuarioBD'
import { CadastrarUsuario } from '../aplicacao/casoDeUso/usuario/CadastrarUsuario'
import { UsuarioController } from '../infraestrutura/web/UsuarioController'

const app = express()
app.use(express.json())

const usuarioRepositorio = new UsuarioBD()
const cadastrarUsuario = new CadastrarUsuario(usuarioRepositorio)
const usuarioController = new UsuarioController(cadastrarUsuario)

app.post('/usuarios', (req, res) => usuarioController.cadastrar(req, res))

app.listen(3000, () => {
    console.log('Servidor Roddar rodando na porta 3000')
})