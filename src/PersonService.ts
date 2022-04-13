import { Person } from './Person'
import { PersonExporterFactory } from './PersonExporterFactory'

export class PersonService {
    exporter(person: Person): void {
        const exporter = PersonExporterFactory.createExporter(person)
        return exporter.export(person)
    }
}
