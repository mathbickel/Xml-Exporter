import { Person } from './Person'
import { XmlExporter } from './XmlExporter'

export class IndividualExporter extends XmlExporter {
    constructor(person: Person) {
        super()
    }

    printIndividual(finalPerson: Person): Person {
        return finalPerson
    }
}
