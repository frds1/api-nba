const axios = require("axios");
import { IGameRepository } from "../../domain/repository/GameRepository";
import { Game } from "../../domain/entity/game/model";



export class GameRepository implements IGameRepository {
    constructor() { }

    public async getAllGames(): Promise<Game[]> {
        const response = await axios.get('https://www.balldontlie.io/api/v1/games');
        if (response && response.data.length != 0) {
            return response.data.data.map((game: Game) => {
                return new Game(game);
            });
        } else {
            throw new Error('Não foi possível encontrar nenhum dado.');
        }
    }


    public async getGame(idGame: number): Promise<Game> {
        const response = await axios.get('https://www.balldontlie.io/api/v1/games/' + idGame);
        if (response.data && response.length != 0) {
            return new Game({
                id: response.data.id,
                date: response.data.date,
                season: response.data.season,
                status: response.data.status,
                home_team: response.data.home_team,
                home_team_score: response.data.home_team_score,
                visitor_team: response.data.visitor_team,
                visitor_team_score: response.data.visitor_team_score,
            });
        } else {
            throw new Error('Nenhum dado encontrado para o ID do jogo fornecido.');
        }
    }
}