import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://randomuser.me/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance

export class RandomUserAPI {
  /**
   * instance.get a random user
   * @returns Promise
   */
  static getRandomUser = async () => instance.get('/')

  /**
   * instance.get multiple random users
   * @param results
   * @returns Promsie
   */
  static getMultipleRandomUsers = async (results: number, seed: string = null) =>
    instance.get('/', { params: { results: results, seed: seed } })
}
