import { CompanyPerson } from './CompanyPerson'
import { IndividualPerson } from './IndividualPerson'
import { PersonService } from './PersonService'

const individual = new IndividualPerson(
    1,
    'Matheus Bickel',
    new Date(1994, 10, 28),
    '032.723.640-05'
)

const company = new CompanyPerson(
    2,
    'Dooca',
    'Dooca LTDA',
    '90.660.638/0001-41'
)

const personService = new PersonService()
const companyPersonExported = personService.exporter(company)
const individualPersonExported = personService.exporter(individual)
console.log(companyPersonExported)
console.log(individualPersonExported)
