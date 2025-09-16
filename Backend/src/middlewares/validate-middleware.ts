import { ZodObject, ZodError } from 'zod';
import type { Request, Response, NextFunction } from 'express';

/**
 * Validates an Express request against a given Zod schema.
 *
 * @param {ZodObject} schema - The Zod schema to validate against.
 *
 * @returns {function} - An Express middleware function that validates the request and calls next if validation succeeds, or returns a 400 response with an error object if validation fails.
 *
 * @throws {ZodError} - If the request fails validation.
 */
const validateAsync =
  (schema: ZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: err.issues.map(e => ({
            path: e.path.join('.'),
            message: e.message,
          })),
        });
      }
      next(err);
    }
  };

export default validateAsync;
