import { Exporter } from './ExporterInterface'
import { Person } from './Person'
import xml2js from 'xml2js'

export class IndividualExporter implements Exporter<string> {
    export(person: Person): string {
        const builder = new xml2js.Builder()
        const xml = builder.buildObject(person)

        return xml
    }
}
