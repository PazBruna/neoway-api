import AppError from "../errors/appError";

export default function (err, request, response, next) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      type: err.type,
      message: err.message,
    });
  }

  const errorResponse = {
    type: "@server/internal_server_error",
    message: err.message,
  };

  return response.status(500).send(errorResponse);
}
