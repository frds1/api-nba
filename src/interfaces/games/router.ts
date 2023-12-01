import express from "express";
import { Games } from "../../app/games/app";
import { GameRepository } from "../../infrastructure/games/data";
const router = express.Router();
const gameRepository = new Games(new GameRepository());

router.get("/", async (_, res, next) => {
  try {
    res.json(await gameRepository.getAllGames());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id: number = +req.params.id;
    res.json(await gameRepository.getGame(id));
  } catch (err) {
    next(err);
  }
});


export default router;