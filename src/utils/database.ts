import { DataSource } from "typeorm";
import Config from "database/config";

const dataSource = new DataSource(Config);

export const initializeDatabase = async () => {
  try {
    await dataSource.initialize()
      .then((connection) => {
        console.info("Data Source has been initialized!")
        console.info(`Database: '${connection.options.database}'`)
      })
  } catch (error) {
    console.error("Error during Data Source initialization", error)

    throw new Error(error as string);
  }
}

export default dataSource;