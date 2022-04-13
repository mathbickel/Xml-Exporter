import { CompanyExporter } from './CompanyExporter'
import { IndividualExporter } from './IndividualExporter'
import { Person } from './Person'
import { PersonTypeEnum } from './PersonTypeEnum'

export class PersonExporterFactory {
    static createExporter(person: Person): any {
        const type = person.getType()

        if (type === PersonTypeEnum.COMPANY) {
            return new CompanyExporter()
        }

        if (type === PersonTypeEnum.INDIVIDUAL) {
            return new IndividualExporter()
        }
    }
}
