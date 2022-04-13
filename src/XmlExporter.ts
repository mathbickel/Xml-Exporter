import { CompanyExporter } from './CompanyExporter'
import { IndividualExporter } from './IndividualExporter'
import { Person } from './Person'
import { PersonService } from './PersonService'
import { PersonTypeEnum } from './PersonTypeEnum'

export class XmlExporter extends PersonService {
    constructor() {
        super()
    }

    exportablePerson(finalPerson: Person): any {
        if (finalPerson.getType() === PersonTypeEnum.COMPANY) {
            const ce = new CompanyExporter(finalPerson)
        } else {
            const ie = new IndividualExporter(finalPerson)
        }
    }
}
