import valuesConfig from './config.json'
import salary from './salary.config.json'
import { SalaryConfig } from './model/salary.config.models'
import { Config } from './model/config.models'

export const salariesConf: SalaryConfig = salary 
export const configs: Config = valuesConfig

export const Application = {
    SALARY_CONFIGURATION_STORAGE: 'salary_configuration'
}