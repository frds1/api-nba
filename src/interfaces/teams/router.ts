import express from "express";
import { Teams } from "../../app/teams/app";
import { TeamRepository } from "../../infrastructure/teams/data";
const router = express.Router();
const teamRepository = new Teams(new TeamRepository());

router.get("/", async (_, res, next) => {
  try {
    res.json(await teamRepository.getAllTeams());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id: number = +req.params.id;
    res.json(await teamRepository.getTeam(id));
  } catch (err) {
    next(err);
  }
});


export default router;