import { Exporter } from './ExporterInterface'
import { Person } from './Person'

export class IndividualExporter implements Exporter<any> {
    export(person: Person): any {
        return 'INDIVIDUAL'
    }
}
