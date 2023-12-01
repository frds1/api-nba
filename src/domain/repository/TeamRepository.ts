import { Team } from "@/domain/entity/team/model";

export interface ITeamRepository {
  getAllTeams(): Promise<Team[]>;
  getTeam(idTeam: number): Promise<Team>;
}