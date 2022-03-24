//This will create a structure of particular page section's in Client site
const structure = (response) => {
    const {
        data: {
            blogs: {
                message,
                status,
                blogs: foundBlogs
            }
        }
    } = response //get the api response from the api  of section 2
    //initial data structure of section 2 (Get recent post)
    let sectionTwoData = {
     isBlogFound: false,
     error: "",
     blogs: [],
     message: ""
   }
   if (status == 202) { //blog found!!
        sectionTwoData.isBlogFound = true
        sectionTwoData.error = ""
        sectionTwoData.blogs = foundBlogs
        sectionTwoData.message = `${message}!!`
   }else if (status == 404){ //blog not found
        sectionTwoData.isBlogFound = false
        sectionTwoData.error = message
        sectionTwoData.blogs = [],
        sectionTwoData.message = message
   }else if (status == 406) { //some runtime error
        sectionTwoData.isBlogFound = false
        sectionTwoData.error = message
        sectionTwoData.blogs = [],
        sectionTwoData.message = "Something went wrong"
   }
   return sectionTwoData
}

export default structure

