const  colors =  require("colors")
const {deleteProfile}   = require('../controllers/profile')

const db =   require("../config/db")

//@Desc  updates a profile
//@Route PUT profile/
//@Access private
exports.handler =  async(event,context,callback) =>{
     try {
        db();
         
       const id = event.pathParameters.id
       const profile = await  deleteProfile(id)
       const response = {
            statusCode:200,
            body:JSON.stringify({
                 statusCode:200,
                 data:{}
            })
       }
       callback(null,response)
        
     } catch(error) {
           console.log(error)
           throw error
     }
}