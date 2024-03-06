import { Router } from "express";
import filmesController from "../controllers/filmesController.js";

const router = Router();

router.get("/filmes", filmesController.index);
router.post("/filmes", filmesController.create);


router.get("/filmes/:id", filmesController.show);
router.put("/filmes/:id", filmesController.update);
router.delete("/filmes/:id", filmesController.destroy);

export default router;