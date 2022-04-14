import { Exporter } from './ExporterInterface'
import { Person } from './Person'
import xml2js from 'xml2js'

export class IndividualExporter implements Exporter<any> {
    export(person: Person): any {
        const builder = new xml2js.Builder()
        const xml = builder.buildObject(person)

        return xml
    }
}
