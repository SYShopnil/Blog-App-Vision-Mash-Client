//navbar part handler
const navBarStyle = {
    border_width: "3px ",
    border_type : "solid"
}

//section 2 part handler 
const sectionTwoController  = {
    dataLimit: "6", //it has to be string
    queryBy: "recent" //it has to be string
}

//section 3 handler 
const sectionThreeController  = {
    // Right side sub section 1 part 
    rightSubSectionOne: {
        dataLimit: "5", //it has to be string
        queryBy: "topMonth”" //it has to be string
    },
    leftSide: {
        upperPart: {
            dataLimit: "4", //it has to be string
            queryBy: "mostRead”" //it has to be string
        },
        lowerPart: {
            dataLimit: "2", //it has to be string
            queryBy: "featured”" //it has to be string
        }
    }
}

//section 4 part handler 
const sectionFourController  = {
    dataLimit: "3", //it has to be string
    queryBy: "featured”" //it has to be string
}

//section 5 part handler 
const sectionFiveController = {
    rightSide : {
        dataLimit: "4", //it has to be string
        queryBy: "mostRead”" //it has to be string
    },
    leftSide: {
        upperPart: {
            dataLimit: "4", //it has to be string
            queryBy: "topMonth”" //it has to be string
        }
    }
}

export  {
    navBarStyle,
    sectionTwoController,
    sectionThreeController,
    sectionFourController,
    sectionFiveController
};