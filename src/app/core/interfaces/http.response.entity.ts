export interface HttpResponseEntity<T> {
  message: string;
  statusCode: number;
  data: T;
}
