import 'dotenv/config'

// Configuration interface for the database
interface DbConfig {
  host?: string // Optional host for the database
  user: string // Username for the database
  password: string // Password for the database
  dbname: string // Name of the database
}

// Configuration for the development environment
const dev: DbConfig = {
  host: process.env.DEV_DB_HOST as string, // Host obtained from environment variable
  user: process.env.DEV_DB_USER as string, // User obtained from environment variable
  password: process.env.DEV_DB_PASSWORD as string, // Password obtained from environment variable
  dbname: process.env.DEV_DB_DBNAME as string // Database name obtained from environment variable
}

// Configuration for the production environment
const pro: DbConfig = {
  host: process.env.PRO_DB_HOST as string, // Host obtained from environment variable
  user: process.env.PRO_DB_USER as string, // User obtained from environment variable
  password: process.env.PRO_DB_PASSWORD as string, // Password obtained from environment variable
  dbname: process.env.PRO_DB_DBNAME as string // Database name obtained from environment variable
}

// Mapping of environment names to their respective configurations
const config: Record<string, DbConfig> = { dev, pro }

// Determine the current environment based on the NODE_ENV environment variable, defaulting to 'dev'
const env: string = process.env.NODE_ENV || 'dev'

// Export the configuration object for the current environment
export default config[env]
