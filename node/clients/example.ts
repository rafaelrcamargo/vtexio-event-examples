import { MasterData } from '@vtex/api'

export class Example extends MasterData {
  public async getExample() {
    const resp = await this.searchDocumentsWithPaginationInfo({
      dataEntity: 'boilerplate',
      schema: 'masterdata',
      fields: ['_all'],
      pagination: {
        page: 1,
        pageSize: 1,
      },
    })

    return await resp
  }
}
