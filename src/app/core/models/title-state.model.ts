export interface TitleState {
  entities: Array<Title>;
  loaded: boolean;
}

export interface Title {
  line_one: string;
  line_two: string;
}
