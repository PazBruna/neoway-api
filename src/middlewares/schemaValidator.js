export default function validateSchema(schema) {
  return async (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      convert: true,
      stripUnknown: true,
    });

    if (error) {
      return res.status(406).send({
        error: {
          code: "@generic/invalid-payload",
          message: "Invalid Payload",
          details: error.details,
        },
      });
    }

    return next();
  };
}
