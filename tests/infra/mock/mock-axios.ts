import axios from 'axios'
import { faker } from '@faker-js/faker'

export const mockHttpResponse = (): any => ({
  data: faker.helpers.objectValue({
    name: faker.person.firstName(),
    age: faker.number.int(100),
  }),
  status: faker.number.int({min: 200, max: 500})
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse())
  return mockedAxios
}