import { Person } from './Person'
import { PersonTypeEnum } from './PersonTypeEnum'

export class CompanyPerson extends Person {
    constructor(
        id: number,
        name: string,
        doc: string,
        protected fantasyNane: string
    ) {
        super(id, name, PersonTypeEnum.COMPANY)
    }

    getDoc(): void {
        throw new Error('Method not implemented.')
    }
}
