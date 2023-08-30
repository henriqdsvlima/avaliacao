export interface SingleResponse<T> {
  data: T;
  status: string;   // pode ser usado para indicar o status da resposta, como "success", "error" etc.
  message?: string; // uma mensagem opcional, pode ser usada para erros ou informações adicionais
}
