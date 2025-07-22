import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { config } from '../config/env.config';
import { JWT_EXPIRATION } from '../constants/app.contant';

/**
 *
 * @param password - The password to be hashed
 * @returns - Returns a hashed password using argon2
 */
export const encrypt = async (password: string): Promise<string> => {
  return await argon2.hash(password);
};

/**
 *
 * @param password - The plain text password to be compared
 * @param hash - The hashed password to compare against
 * @returns - Returns true if the passwords match, false otherwise
 */
export const decrypt = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await argon2.verify(hash, password);
};

/**
 * Generates a JWT token with the provided data.
 *
 * @param data - The payload to be included in the token.
 * @returns - A signed JWT token.
 */
export const getToken = (data: Record<string, any>): string => {
  return jwt.sign(data, config.JWT_SECRET, {
    expiresIn: JWT_EXPIRATION,
  });
};

/**
 * Verifies a JWT token and returns the decoded data.
 *
 * @param token - The JWT token to verify.
 * @returns - The decoded data from the token.
 * @throws - Throws an error if the token is invalid or expired.
 */
export const verifyToken = (token: string): Record<string, any> => {
  return jwt.verify(token, config.JWT_SECRET) as Record<string, any>;
};
