import { CompanyPerson } from './CompanyPerson'
import { Exporter } from './ExporterInterface'
import { IndividualPerson } from './IndividualPerson'
import { Person } from './Person'
import { PersonTypeEnum } from './PersonTypeEnum'

export class PersonService implements Exporter<any> {
    export(person: Person) {
        const type = person.getType()

        if (type === PersonTypeEnum.COMPANY) {
            const companyPerson = {
                id: person.getId(),
                name: person.getName(),
                fantasyName: CompanyPerson.prototype.getFantasyName(),
                cnpj: CompanyPerson.prototype.getDoc(),
            }

            return companyPerson
        } else {
            const individualPerson = {
                id: person.getId(),
                name: person.getName(),
                birthday: IndividualPerson.prototype.getBirthday(),
                cpf: IndividualPerson.prototype.getDoc(),
            }

            return individualPerson
        }
    }
}
