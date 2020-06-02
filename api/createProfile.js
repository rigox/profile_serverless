const  colors =  require("colors")
const { createProfile}   = require('../controllers/profile')

const db =   require("../config/db")

//@Desc  creates a profile
//@Route POST profile/
//@Access private

exports.handler =  async (event,context,cb) =>{
    db();

     try {
       const data =  event.body
       const profile = await createProfile(data)
       const response = {
             statusCode:201,
             body:JSON.stringify(profile)
       }
       cb(null,response)
     } catch (err) {
            console.log(err)
            throw(err)
     }
     

}
