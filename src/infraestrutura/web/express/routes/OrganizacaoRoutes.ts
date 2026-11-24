import { Router } from "express";
import { controles } from "../../../../configuracao/compositionRoot";

const router: Router = Router();

router.post("/organizacoes", (req, res) => {
    controles.organizacaoController.criar(req, res);
});

export default router;