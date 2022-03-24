//COMMON BLOG DATA QUERY  (title, titlePic, mainCategory, publishedTime)
const blogQueryOne = `
    {
        contentDetails {
            title
            titlePic
            mainCategory
        }
    publishedTime
}
`

//FOR (Landing page Section 1) 
//Get Two Top of the month blog category by viewers and then get single top blog from each category of the current month.
const getTopTwoBlogOfTheMonth = () => {
    const query = `
        query getTopMonthBlog {
            getTopMonthBlog {
                message
                category
                status
                blog ${blogQueryOne}
            }
        }
    `
    return {
        query
    }
}

//FOR landing page (Section 2) && (Section 3 Right side sub section 1)
//Get all recent blog for Section 2 (data limit will be max 6)
//Get all fetcher blog (data limit max 2)
//Get top of this month blog for Section 2 (data limit will be max 5)
const getBlogDataForSectionTwoAndThreeAndFour = (dataLimits, queryBy) => {
    const query = `
        query blogs ($queryCommand: String, $limit: String){
            blogs (
                queryBy: $queryCommand,
                dataLimit: $limit
            ) {
                message
                status
                blogs ${blogQueryOne}
            }
        }
    `
    return {
        query,
        variables: {
            queryCommand: queryBy,
            limit: dataLimits
        }
    }
}


//Section 3 Left Side upper part  
const getMostReadBlogForSectionThreeAndFive = (dataLimits, queryBy) => {
    const query = `
        query blogs ($queryCommand: String, $limit: String){
            blogs (
                queryBy: $queryCommand,
                dataLimit: $limit
            ) {
                message
                status
                blogs {
                    contentDetails {
                        title
                        titlePic
                    }
                }
            }
        }
    `
    return {
        query,
        variables: {
            queryCommand: queryBy,
            limit: dataLimits
        }
    }
}


//Section 5 Left section upper part  
const FetchAndGetTopOfTheMonthData = (dataLimits, queryBy) => {
    const query = `
        query blogs ($queryCommand: String, $limit: String){
            blogs (
                queryBy: $queryCommand,
                dataLimit: $limit
            ) {
                message
                status
                blogs {
                    contentDetails {
                        title
                        titlePic
                    }
                }
            }
        }
    `
    return {
        query,
        variables: {
            queryCommand: queryBy,
            limit: dataLimits
        }
    }
}
module.exports = {
    getTopTwoBlogOfTheMonth,
    getBlogDataForSectionTwoAndThreeAndFour,
    getMostReadBlogForSectionThreeAndFive,
    FetchAndGetTopOfTheMonthData
}