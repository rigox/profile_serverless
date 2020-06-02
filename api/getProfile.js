const  colors =  require("colors")
const Profile =  require("../models/Profile")
const db =   require("../config/db")

//@Desc  gets a profile
//@Route get profile/{id}
//@Access public
exports.handler =  async(event,context,cb) => {
    
 try {
     db();
     const id = event.pathParameters.id
     const profile =  await Profile.findById(id)
     if(!profile){
          throw(`no profile with id of ${id} was found`)
     }
         
     const response  = {
           statusCode:200,
           body:JSON.stringify({
            statusCode:200,
            data : profile
           })
     }


     cb(null,response)

 } catch (error) {
      console.log(error)
      throw err
 }

}