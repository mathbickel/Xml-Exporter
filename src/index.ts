import { CompanyPerson } from './CompanyPerson'
import { IndividualPerson } from './IndividualPerson'
import { Person } from './Person'
import { PersonService } from './PersonService'
import { XmlExporter } from './XmlExporter'

type PersonExported = [
    | {
          id: number
          name: string
          fantasyName?: string
          cnpj?: string
      }
    | {
          id: number
          name: string
          birthday?: Date
          cpf?: string
      }
]

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

function toPerson(): PersonExported {
    const exported = personService.export(company)
    return exported
}
// let exportedPerson: Person =
const xmlExporter = new XmlExporter()
// xmlExporter.exportablePerson(exportedPerson)
