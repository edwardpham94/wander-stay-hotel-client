import mongoose from 'mongoose'
import config from '~/configs/config.mongo'
import { checkOverload } from '~/helpers/check.connect'

const uri =
  `mongodb+srv://${config.user}:${config.password}@${config.host}/` + `${config.dbname}?retryWrites=true&w=majority`

class Database {
  private static instance: Database
  private uri: string
  /**
   * Initializes the class and establishes a connection.
   * @param uri - The URI to connect to.
   */
  constructor(uri: string) {
    this.uri = uri // Set the URI
    this.connect() // Establish the connection
  }

  /**
   * Connects to the MongoDB database using the provided URI.
   */
  async connect() {
    try {
      // Connect to MongoDB using the provided URI
      await mongoose.connect(this.uri, {
        maxPoolSize: 50
      })

      // Log success message and the URI used for connection
      console.log(`[DB]:::Connect to MongoDB successfully`)
      checkOverload()
    } catch (err) {
      // Log error message if connection fails
      console.log(`Error Connect!`)
    }
  }

  /**
   * Returns the singleton instance of the Database class.
   * If an instance does not exist, creates a new one and returns it.
   * @param {string} uri - The URI of the database.
   * @returns {Database} The singleton instance of the Database class.
   */
  public static getInstance(uri: string): Database {
    // Check if an instance already exists
    if (!Database.instance) {
      // If not, create a new instance
      Database.instance = new Database(uri)
    }

    // Return the instance
    return Database.instance
  }
}

const databaseInstance = Database.getInstance(uri)

export default databaseInstance
