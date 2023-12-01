const axios = require("axios");
import { ITeamRepository } from "../../domain/repository/TeamRepository";
import { Team } from "../../domain/entity/team/model";

  

export class TeamRepository implements ITeamRepository {
    constructor() { }

    public async getAllTeams(): Promise<Team[]> {
        const teamsData = await axios.get('https://www.balldontlie.io/api/v1/teams');

        if (teamsData && teamsData.data.length != 0) {
            const teams: Team[] = [];
            for (const teamData of teamsData.data.data) {
                teams.push(
                    new Team(
                        teamData.id,
                        teamData.name,
                    )
                );
            }

            return teams;
        } else {
            throw new Error('Não foi possível encontrar nenhum dado.');
        }
    }

    public async getTeam(idTeam: number): Promise<Team> {
        const teamData = await axios.get('https://www.balldontlie.io/api/v1/teams/'+idTeam);
        if (teamData.data && teamData.length != 0) {
            return new Team(
                teamData.data.id,
                teamData.data.name,
            );
        } else {
            throw new Error('Nenhum dado encontrado para o ID do time fornecido.');
        }
    }
}