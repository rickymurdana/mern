export interface Resp<T> {
  message: string;
  data: T | null;
}
