const  colors =  require("colors")
const Profile =  require("../models/Profile")
const db =   require("../config/db")

//@Desc  creates a profile
//@Route POST profile/
//@Access private
exports.handler =  async(event,context,cb) => {
    
 try {
     db();
     let  profiles = await  Profile.find();
     
     
     const response  = {
           statusCode:200,
           body:JSON.stringify({
            statusCode:200,
            amount: profiles.length , 
            data : profiles
           })
     }


     cb(null,response)

 } catch (error) {
      console.log(error)
      throw err
 }

}