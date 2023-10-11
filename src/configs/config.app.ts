import 'dotenv/config'

// Configuration interface for the application
interface AppConfig {
  port: string | number // Port on which the application will run
  apiURL?: string // URL of the API
}

// Configuration for the development environment
const dev: AppConfig = {
  port: process.env.DEV_APP_PORT as string, // Port obtained from environment variable
  apiURL: process.env.DEV_API_URL as string // API URL obtained from environment variable
}

// Configuration for the production environment
const pro: AppConfig = {
  port: process.env.PRO_APP_PORT as string, // Port obtained from environment variable
  apiURL: process.env.PRO_API_URL as string // API URL obtained from environment variable
}

// Mapping of environment names to their respective configurations
const config: Record<string, AppConfig> = { dev, pro }

// Determine the current environment based on the NODE_ENV environment variable, defaulting to 'dev'
const env: string = process.env.NODE_ENV || 'dev'

// Export the configuration object for the current environment
export default config[env]
