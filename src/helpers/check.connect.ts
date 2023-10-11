import mongoose from 'mongoose'
import os from 'os'

const SECOND = 30000 // 30 seconds

/**
 * Counts the number of active database connections.
 *
 * @return {number} The number of active database connections.
 */
export const countConnection = () => {
  const numConnection = mongoose.connections.length
  console.log(`[DB]:::Current number connection: ${numConnection}`)
  return numConnection
}

/**
 * This function checks for connection overload at regular intervals. It retrieves the current number of
 * active connections, the number of CPU cores, and the memory usage. If the number of active connections
 * exceeds a certain threshold based on the number of CPU cores, it logs a message indicating a connection
 * overload.
 *
 * @return {void} This function does not return a value.
 */
export const checkOverload = () => {
  setInterval(() => {
    const numConnection = countConnection()
    const numCore = os.cpus().length
    const memoryUsage = process.memoryUsage().rss

    console.log(`[DB]:::Current memory usage: ${(memoryUsage / (1024 * 1024)).toFixed(3)} MB`)

    const connectionLimit = numCore * 5

    if (numConnection > connectionLimit) {
      console.log(`[DB]:::Connection overload detected!`)
    }
  }, SECOND)
}
