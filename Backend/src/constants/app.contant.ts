enum Enviornment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

enum Color {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
  MAGENTA = 'magenta',
  WHITE = 'white',
}

enum Level {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  HTTP = 'http',
  DEBUG = 'debug',
}

const Boolean = {
  TRUE: true,
  FALSE: false,
};

enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ARCHIVED = 'archived',
}

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

const JWT_EXPIRATION = '1d';

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

export {
  Enviornment,
  Color,
  Level,
  Boolean,
  UserStatus,
  Gender,
  JWT_EXPIRATION,
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE,
};
