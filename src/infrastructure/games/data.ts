const axios = require("axios");
import { IGameRepository } from "../../domain/repository/GameRepository";
import { Game } from "../../domain/entity/game/model";

  

export class GameRepository implements IGameRepository {
    constructor() { }

    public async getAllGames(): Promise<Game[]> {
        const gamesData = await axios.get('https://www.balldontlie.io/api/v1/games');
        if (gamesData && gamesData.data.length != 0) {
            const games: Game[] = [];
            for (const gameData of gamesData.data.data) {
                games.push(
                    new Game(
                        gameData.id,
                        gameData.name,
                    )
                );
            }

            return games;
        } else {
            throw new Error('Não foi possível encontrar nenhum dado.');
        }
    }

    public async getGame(idGame: number): Promise<Game> {
        const gameData = await axios.get('https://www.balldontlie.io/api/v1/games/'+idGame);
        if (gameData.data && gameData.length != 0) {
            return new Game(
                gameData.data.id,
                gameData.data.name,
            );
        } else {
            throw new Error('Nenhum dado encontrado para o ID do jogo fornecido.');
        }
    }
}