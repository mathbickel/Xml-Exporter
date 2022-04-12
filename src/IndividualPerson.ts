import { Person } from './Person'
import { PersonTypeEnum } from './PersonTypeEnum'

export class IndividualPerson extends Person {
    constructor(
        id: number,
        name: string,
        doc: string,
        protected birthday: Date
    ) {
        super(id, name, PersonTypeEnum.INDIVIDUAL)
    }

    getDoc(): void {
        throw new Error('Method not implemented.')
    }
}
