import { Person } from './Person'
import { PersonTypeEnum } from './PersonTypeEnum'

export class IndividualPerson extends Person {
    constructor(
        id: number,
        name: string,
        protected birthday: Date,
        protected cpf: string
    ) {
        super(id, name, PersonTypeEnum.INDIVIDUAL)
    }

    getBirthday(): Date {
        return this.birthday
    }

    getDoc(): string {
        return this.cpf
    }
}
