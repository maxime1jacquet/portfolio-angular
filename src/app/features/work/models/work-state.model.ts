export interface WorkState {
  entities: Array<Work>;
  loading: boolean;
  loaded: boolean;
}

export interface Work {
  id: number;
  slug: string;
  title: string;
  date: string;
  tag: string;
  porfolio: Array<any>;
}
