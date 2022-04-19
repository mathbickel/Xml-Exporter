import { CompanyExporter } from './CompanyExporter'
import { Exporter } from './ExporterInterface'
import { IndividualExporter } from './IndividualExporter'
import { Person } from './Person'
import { PersonTypeEnum } from './PersonTypeEnum'

export class PersonExporterFactory {
    static createExporter(person: Person): Exporter<Object> {
        const type = person.getType()

        if (type === PersonTypeEnum.COMPANY) {
            return new CompanyExporter()
        } else {
            return new IndividualExporter()
        }
    }
}
