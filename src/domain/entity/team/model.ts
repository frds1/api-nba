export class Team {
    id: number;
    name: string;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
  
    constructor(team: {
      id: number,
      name: string,
      abbreviation: string,
      city: string,
      conference: string,
      division: string,
      full_name: string,
    }) {
      this.id = team.id;
      this.name = team.name;
      this.abbreviation = team.abbreviation;
      this.city = team.city;
      this.conference = team.conference;
      this.division = team.division;
      this.full_name = team.full_name;
    }
  }