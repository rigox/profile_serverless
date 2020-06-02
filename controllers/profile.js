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

//@Desc Updates a user profile
//@Route PUT /dev/profiles/{id}
//@Access Private
exports.updateProfile =  async(id,data) =>{
       try {
          let profile =  await Profile.findById(id);
          if(!profile){
              throw(new Error('profile was not found'))
          }
          profile =  await Profile.findByIdAndUpdate(id,data,{new:true,runValidators:true});
          return   profile;
       } catch (err) {
            console.log(err);
            throw err;
       }
}



//@Desc deletes a user profile
//@Route DELETE /dev/profiles/{id}
//@Access Private
exports.deleteProfile =  async(id) =>{
    try {
        let profile =  await Profile.findById(id);
        if(!profile){
             throw('profile not found')
        }
        await profile.remove();

        return profile;

    } catch (err) {
         console.log(err)
         throw(err)
    }
}


