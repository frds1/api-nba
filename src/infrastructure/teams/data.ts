const axios = require("axios");
import { ITeamRepository } from "../../domain/repository/TeamRepository";
import { Team } from "../../domain/entity/team/model";



export class TeamRepository implements ITeamRepository {
    constructor() { }

    public async getAllTeams(): Promise<Team[]> {
        const response = await axios.get('https://www.balldontlie.io/api/v1/teams');

        if (response && response.data.length != 0) {
            return response.data.data.map((team: Team) => {
                return new Team(team);
            });
        } else {
            throw new Error('Não foi possível encontrar nenhum dado.');
        }
    }

    public async getTeam(idTeam: number): Promise<Team> {
        const response = await axios.get('https://www.balldontlie.io/api/v1/teams/' + idTeam);
        if (response.data && response.length != 0) {
            return new Team({
                id: response.data.id,
                abbreviation: response.data.abbreviation,
                city: response.data.city,
                conference: response.data.conference,
                division: response.data.division,
                full_name: response.data.full_name,
                name: response.data.name,
            });
        } else {
            throw new Error('Nenhum dado encontrado para o ID do time fornecido.');
        }
    }
}