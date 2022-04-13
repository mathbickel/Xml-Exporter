import { Person } from './Person'
import { PersonTypeEnum } from './PersonTypeEnum'

export class CompanyPerson extends Person {
    constructor(
        id: number,
        name: string,
        protected fantasyNane: string,
        protected cnpj: string
    ) {
        super(id, name, PersonTypeEnum.COMPANY)
    }

    getFantasyName(): string {
        return this.fantasyNane
    }

    getDoc(): string {
        return this.cnpj
    }
}
