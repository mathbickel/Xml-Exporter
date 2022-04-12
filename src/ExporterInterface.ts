import { Person } from './Person'

export interface Exporter<T> {
    export(person: Person): T
}
