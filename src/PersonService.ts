import { Exporter } from './ExporterInterface'
import { Person } from './Person'

export class PersonService implements Exporter<any> {
    export(person: Person) {
        const finalPerson = person

        return finalPerson
    }
}
