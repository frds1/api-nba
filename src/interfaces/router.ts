import express from "express";
import teamsRouter from './teams/router'
import gamesRouter from './games/router'
import type { ErrorRequestHandler } from "express";
const router = express.Router();

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err.message === 'Jogo não encontrado') {
        res.status(404).send(err.message);
    }
    res.status(500).send('Erro interno do servidor');
};

router.use('/teams', teamsRouter)
router.use('/games', gamesRouter)
router.use(errorHandler);

export default router