//This will create a structure of particular page section's in Client site


const structure = (response) => {
    //initial data structure of section 1 (Top two categories blog of the month)
    const {
        data: {
            getTopMonthBlog: {
                message,
                status,
                blog: blogs
            }
        }
    } = response //get the api response from the api  of section 2

    let sectionOneData = {
     isBlogFound: false,
     error: "",
     blogs: [],
     message: ""
   }
   if (status == 202) { //blog found!!
        sectionOneData.isBlogFound = true
        sectionOneData.error = ""
        sectionOneData.blogs = blogs
        sectionOneData.message = `${message}!!`
   }else if (status == 404){ //blog not found
        sectionOneData.isBlogFound = false
        sectionOneData.error = message
        sectionOneData.blogs = [],
        sectionOneData.message = message
   }else if (status == 406) { //some runtime error
        sectionOneData.isBlogFound = false
        sectionOneData.error = message
        sectionOneData.blogs = [],
        sectionOneData.message = "Something went wrong"
   }
   return sectionOneData
}

export default structure