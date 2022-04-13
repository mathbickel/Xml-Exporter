import { CompanyExporter } from './CompanyExporter'
import { IndividualExporter } from './IndividualExporter'
import { Person } from './Person'

export class XmlExporter {
    cnpj!: string

    exportablePerson(person: Person): any {
        if (person.getDoc() === this.cnpj) {
            const ce = new CompanyExporter(person)
        } else {
            const ie = new IndividualExporter(person)
        }
    }
}
