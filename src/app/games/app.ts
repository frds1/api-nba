const gamesData = require("../../infrastructure/games/data");
import { IGameRepository } from "../../domain/repository/GameRepository";

export class Games {
  constructor(readonly gameRepository: IGameRepository) {}

  public async getAllGames(): Promise<any> {
    try {
      return await this.gameRepository.getAllGames();
    } catch (error) {
      return "Erro ao buscar os jogos: " + error;
    }
  }

  public async getGame(idGame: number): Promise<any> {
    try {
      return await this.gameRepository.getGame(idGame);
    } catch (error) {
      return "Erro ao buscar o jogo: " + error;
    }
  }
}