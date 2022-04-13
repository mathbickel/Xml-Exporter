import { Person } from './Person'
import { XmlExporter } from './XmlExporter'

export class CompanyExporter extends XmlExporter {
    constructor(person: Person) {
        super()
    }

    printCompany(finalPerson: Person): Person {
        return finalPerson
    }
}
