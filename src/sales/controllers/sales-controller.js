import { saveSalesMongo } from "../services/save-sales-mongo.js";
import { organizeSalesBySeller } from "../services/organize-sales-by-seller.js";
import { SalesModel } from "../schemas/sales-schema.js";
import axios from "axios";

const API_URL = "https://api.neopro.com.br/v1/test/sales"

async function salesBySeller(req, res) {
  try {
    const { date } = req.query
    const response = await axios.get(API_URL, {params: {month: date}});
    const allSalesBySeller = organizeSalesBySeller(response.data, date);
  
    allSalesBySeller.map(async (sale) => {
      SalesModel.find(
        { date: sale.date, seller: sale.seller, sold: sale.sold },
        async (err, result) => {
          if (err) return;
  
          if (result.length === 0) {
            await saveSalesMongo(sale);
          }
        }
      );
    });
  
    res.status(200).send(allSalesBySeller);
  } catch (e) {
    res.status(500).send({error: 'internal-error'})
  }
}

async function salesByDate(req, res) {
  try {
    const { date } = req.query
    const sales = await SalesModel.find({ date: date });
    const sellers = [];
  
    sales.map((sale) =>
      sellers.push({ seller: sale.seller, sold: sale.sold, sales: sale.sales })
    );
  
    const response = [
      {
        date,
        sellers,
      },
    ];
  
    res.status(200).send(response);
  } catch (e) {
     res.status(500).send({error: 'internal-error'})
  }
}

export { salesBySeller, salesByDate };
