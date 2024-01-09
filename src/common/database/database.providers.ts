import { DataSource, DataSourceOptions } from 'typeorm';
import { getConfig } from 'src/utils/index'
const path = require('path');

// 设置数据库类型
const databaseType: DataSourceOptions['type'] = 'mysql';
const { MYSQL_CONFIG } = getConfig()

const MYSQL_DATABASE_CONFIG = {
  ...MYSQL_CONFIG,
  type: databaseType,
  entities: [path.join(__dirname, `../../**/*.${MYSQL_CONFIG.entities}.entity{.ts,.js}`)],
}

const MYSQL_DATA_SOURCE = new DataSource(MYSQL_DATABASE_CONFIG)
console.log("🚀 ~ MYSQL_DATA_SOURCE:", MYSQL_DATA_SOURCE)

// 数据库注入
export const DatabaseProviders = [
  {
    provide: 'MYSQL_DATA_SOURCE',
    useFactory: async () => {
      await MYSQL_DATA_SOURCE.initialize()
      return MYSQL_DATA_SOURCE
    }
  }
];
