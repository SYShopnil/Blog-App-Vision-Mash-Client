import availableDisplayTypeForBlogDisplay from "../Global/BlogOverview/BlogOverview"
import availableDisplayTypeForFetcherBlogDisplay from "../Global/FetcherPostDisplayOption/FetcherOption"
const blogDisplayType = {
    sectionOne: availableDisplayTypeForBlogDisplay.OVERLAP,
    sectionTwo: availableDisplayTypeForBlogDisplay.TOP_BOTTOM,
    sectionThree: {
        leftSide: {
            firstOne: availableDisplayTypeForBlogDisplay.OVERLAP,
            restOne: availableDisplayTypeForBlogDisplay.TOP_BOTTOM
        }
    },
    sectionFour: availableDisplayTypeForBlogDisplay.TOP_BOTTOM,
    sectionFive: {
        mostRead: availableDisplayTypeForBlogDisplay.RIGHT_LEFT
    }, 
}

const sectionsTileName = {
    sectionTwo : "Recent Posts",
    sectionThree: {
        leftSide: "",
        rightSide: {
            upper: "Most Read",
            lower: "Featured Posts"
        }
    },
    sectionFour : "Featured Posts"
}
const fetcherPostDisplay = {
    sectionThree : availableDisplayTypeForFetcherBlogDisplay.VERTICAL,
    sectionFour: availableDisplayTypeForFetcherBlogDisplay.HORIZONTAL
}

export {
    blogDisplayType,
    sectionsTileName,
    fetcherPostDisplay
}