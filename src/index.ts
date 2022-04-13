import { CompanyExporter } from './CompanyExporter'
import { CompanyPerson } from './CompanyPerson'
import { IndividualPerson } from './IndividualPerson'
import { PersonService } from './PersonService'
import { XmlExporter } from './XmlExporter'

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
const personType = personService.export(company)
const exporter = new XmlExporter()
const companyExporter = new CompanyExporter(personType)
companyExporter.printCompany(personType)
console.log(companyExporter)
