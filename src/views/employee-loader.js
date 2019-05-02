import { sleep } from '../components/utils'

export const employeeLoader = [
  { id: 1,
    name: 'Daniela',
    age: 27,
    job: 'Developar'},
  { id:2,
    name: 'Miguel',
    age: 23,
    job: 'QA'},
  { id: 3,
    name: 'Ismael',
    age: 32,
    job: 'Designer'},
  { id: 4,
    name: 'Laura',
    age: 39,
    job: 'Product Manager'}
]

export async function loadEmployees() {
  await sleep(500)
  return employeeLoader
}
