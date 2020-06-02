const  colors =  require("colors")
const {updateProfile}   = require('../controllers/profile')

const db =   require("../config/db")

//@Desc  updates a profile
//@Route PUT profile/
//@Access private
exports.handler =  async(event,context,callback) =>{
     try {
        db();
         
       const id = event.pathParameters.id
       const data  = JSON.parse(event.body) 
       const updatedProfile = await  updateProfile(id,data)
       const response = {
            statusCode:200,
            body:JSON.stringify({
                 statusCode:200,
                 data:  updateProfile
            })
       }
       callback(null,response)
        
     } catch (error) {
           console.log(error)
           throw error
     }
}