import { Router } from "express";
import { controles } from "../../../../configuracao/compositionRoot";
const router: Router = Router();

router.post("/usuarios", (req, res) => {
    controles.usuarioController.cadastrar(req, res);
});
router.post("/login", (req, res) => {
    controles.usuarioController.autenticar(req, res);
});

export default router;