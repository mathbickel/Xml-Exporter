import { Person } from './Person'
import { PersonExporterFactory } from './PersonExporterFactory'

export class PersonService {
    exporter(person: Person): Person {
        const exporter = PersonExporterFactory.createExporter(person)
        return exporter.export(person)
    }
}
