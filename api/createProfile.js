const  colors =  require("colors")
const mongoose =  require("mongoose")


//@Desc  creates a profile
//@Route POST profile/
//@Access private

exports.handler =  async (event,context,cb) =>{
  
let   temp = {
     data : event.body
}

temp = JSON.stringify(temp)
    try {
        console.log('console.log here is the mongoose', mongoose)
        cb(temp)
    } catch (err) {
         console.log(err)
    }
     

}
