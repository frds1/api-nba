import { Game } from "@/domain/entity/game/model";

export interface IGameRepository {
  getAllGames(): Promise<Game[]>;
  getGame(idGame: number): Promise<Game>;
}