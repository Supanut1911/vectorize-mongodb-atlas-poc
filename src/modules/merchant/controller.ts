import { Request, Response } from "express"
import Merchant  from '../../models/merchant'

export const createMerchant = async(req: Request, res: Response) => {
    const{name} = req.body
    try {
      const merchant = new Merchant({name})
      const saveMerchant = await merchant.save()
      res.status(201).json(saveMerchant)
    } catch (error: any) {
      console.log(error);
      res.status(400).json(error)
    }

}