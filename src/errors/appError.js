export default class AppError {
  constructor(message, type = "", status = 400) {
    this.message = message;
    this.statusCode = status;
    this.type = type;
  }
}
