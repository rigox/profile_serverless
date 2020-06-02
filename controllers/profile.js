const  Profile =  require("../models/Profile");

//@Desc Creates a user profile
//@Route POST /dev/profiles
//@Access Private
exports.createProfile =async (data) =>{
      try{
    
     const profile =  await Profile.create(JSON.parse(data)) 
     
     return profile;

      } catch (err) {
          console.log(err)
          throw err
              }
}