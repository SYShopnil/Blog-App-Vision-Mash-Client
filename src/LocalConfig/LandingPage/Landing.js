import availableDisplayType from "../Global/BlogOverview/BlogOverview"
const blogDisplayType = {
    sectionOne: availableDisplayType.OVERLAP,
    sectionTwo: availableDisplayType.TOP_BOTTOM,
    sectionThree: {
        firstOne: availableDisplayType.OVERLAP,
        restOne: availableDisplayType.TOP_BOTTOM
    },
    sectionFour: availableDisplayType.TOP_BOTTOM,
    sectionFive: {
        mostRead: availableDisplayType.RIGHT_LEFT
    }, 
}

const sectionsTileName = {
    sectionTwo : "Recent Posts"
}

export {
    blogDisplayType,
    sectionsTileName
}