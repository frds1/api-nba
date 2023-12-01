const teamsData = require("../../infrastructure/teams/data");
import { ITeamRepository } from "../../domain/repository/TeamRepository";

export class Teams {
  constructor(readonly teamRepository: ITeamRepository) {}

  public async getAllTeams(): Promise<any> {
    try {
      return await this.teamRepository.getAllTeams();
    } catch (error) {
      return "Erro ao buscar os times: " + error;
    }
  }

  public async getTeam(idTeam: number): Promise<any> {
    try {
      return await this.teamRepository.getTeam(idTeam);
    } catch (error) {
      return "Erro ao buscar o time: " + error;
    }
  }
}