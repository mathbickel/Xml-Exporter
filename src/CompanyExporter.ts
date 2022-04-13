import { Exporter } from './ExporterInterface'
import { Person } from './Person'

export class CompanyExporter implements Exporter<any> {
    export(person: Person) {
        return 'COMPANY'
    }
}
