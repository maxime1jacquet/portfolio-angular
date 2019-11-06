import { EntityState } from '@ngrx/entity';

export interface WorkState extends EntityState<Work> {
  loading: boolean;
  loaded: boolean;
}

export interface Work {
  id: number;
  slug: string;
  title: string;
  date: string;
  tag: string;
  image: string;
  porfolio: Array<any>;
}
