import { SalesModel } from '../schemas/sales-schema.js'

async function saveSalesMongo(sale) {
  const saleModel = new SalesModel({
    ...sale
  })
  await saleModel.save()
}



export { saveSalesMongo }