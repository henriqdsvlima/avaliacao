import { ApiErrorType } from "./api-error-type";

export interface ApiError {
  type: ApiErrorType;
  message: string; // Descrição ou mensagem do erro
}
