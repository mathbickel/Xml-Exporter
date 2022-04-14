import { Exporter } from './ExporterInterface'
import { Person } from './Person'

export class CompanyExporter implements Exporter<Person> {
    export(person: Person): Person {
        return person
    }
}
