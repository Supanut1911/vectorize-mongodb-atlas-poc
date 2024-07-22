import { Request, Response } from "express"
import Product from '../../models/product'

export const createProduct = async(req: Request, res: Response) => {
    const {name, price, detail, category, amount, merchant} = req.body
    try {
        const product = new Product({name, price, detail, category, amount, merchant})
        const saveProduct = await product.save()
        res.status(201).json(saveProduct)
    } catch (error: any) {
        console.log(error);
        res.status(400).json(error)
    }

}