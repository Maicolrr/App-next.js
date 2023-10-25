import { NextApiResponse, NextApiRequest } from "next"
import DB from '@database'
import enablePublicAccess from '@cors'

const idAvos = async (request: NextApiRequest, response: NextApiResponse) => {

    try {
        // Generally, you would not want this in your apps.
        // See more in 'cors.js'
        await enablePublicAccess(request, response, { methods: ['GET', 'OPTIONS'] });
    
        const db = new DB()
        const avoId = request.query.id as string
    
        const avo = await db.getById(avoId)
    
        // Notice: We're using Next.JS response helpers here :)
        // https://nextjs.org/docs/api-routes/response-helpers
        response.status(200).json(avo)
      } catch (e) {
        console.error(e)
        response.status(404).end()
      }
}

export default idAvos