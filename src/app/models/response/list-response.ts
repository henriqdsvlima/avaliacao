
export interface ListResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
