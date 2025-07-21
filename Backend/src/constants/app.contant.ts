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

export { Enviornment, Color, Level, Boolean, UserStatus, Gender };
