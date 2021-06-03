// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    Nameuser:string,
    idUser:number
    Tags: string,    
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let data = {Nameuser: 'John Doe',
              idUser:1,
              Tags:'[A01,1],[A02,2],[A78,3]'}
  



  res.status(200).json(data)
}
