export class Game {
  id: number;
  date: string;
  season: number;
  status: string;
  home_team_score: number;
  home_team: {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
  };
  visitor_team_score: number;
  visitor_team: {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
  };

  constructor(game: {
    id: number,
    date: string;
    season: number;
    status: string;
    home_team_score: number;
    home_team: {
      id: number;
      abbreviation: string;
      city: string;
      conference: string;
      division: string;
      full_name: string;
      name: string;
    };
    visitor_team: {
      id: number;
      abbreviation: string;
      city: string;
      conference: string;
      division: string;
      full_name: string;
      name: string;
    };
    visitor_team_score: number;
  }) {
    this.id = game.id;
    this.date = game.date;
    this.season = game.season;
    this.status = game.status;
    this.home_team = game.home_team;
    this.home_team_score = game.home_team_score;
    this.visitor_team = game.visitor_team;
    this.visitor_team_score = game.visitor_team_score;
  }
}