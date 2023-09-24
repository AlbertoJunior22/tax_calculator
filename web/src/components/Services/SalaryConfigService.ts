import { Application } from "../../ApplicationConstants";
import { SalaryConfig, SalaryItem } from "../../model/salary.config.models";

export class SalaryConfigService {

    saveSalariesConfigFromForm(salaries: Array<SalaryItem>) {
        const config: SalaryConfig = {
            salaries: salaries
        }
        localStorage.setItem(Application.SALARY_CONFIGURATION_STORAGE, JSON.stringify(config))
    }

    getSalariesConfig(): SalaryConfig | undefined {
        const json = localStorage.getItem(Application.SALARY_CONFIGURATION_STORAGE)
        if (json)
            return (JSON.parse(json) as SalaryConfig)
    }

}