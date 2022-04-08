export interface ResultList<T> {
  items: T[];
  total?: number;
  ended?: boolean;
}
