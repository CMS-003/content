export interface ResultList<T> {
  items?: T[];
  item?: T;
  total?: number;
  ended?: boolean;
}
