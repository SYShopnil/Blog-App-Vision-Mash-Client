const {
    SUCCESS,
    FAILED,
    ERROR
} = require('../actionType/ActionType')

const initialState = {
    officialData : {
        companyName: "",
        navbarSelectCategory: [],
        selectSocialMedia : [],
        subCategory: [],
        logo: "",
        email: "",
        phone: "",
        address: "",
        availableCategories : [],
        availableSocialMedia: []
    },
    isLoading: true,
    message: ""
}


const officialReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS : {
            const {
                controller: {
                    navbarSelectCategory,
                    selectSocialMedia
                } ,
                availableOption: {
                    subCategory,
                    mainCategory,
                    socialMedia
                },
                companyName,
                logo,
                contactInfo: {
                    email,
                    phone,
                    address
                }
            } = action.payload //get the response data
            return {
                ...state,
                officialData: {
                    ...state.officialData,
                    companyName,
                    navbarSelectCategory,
                    selectSocialMedia,
                    subCategory,
                    logo,
                    email,
                    phone,
                    address,
                    availableCategories: mainCategory,
                    availableSocialMedia: socialMedia
                },
                isLoading: false,
                message: "Successfully to get official data"
            }
        }
        case FAILED : {
            return {
                ...state,
                officialData: null,
                isLoading: false,
                message: "Failed to get official data"
            }
        }
        case ERROR : {
            return {
                ...state,
                officialData: null,
                isLoading: false,
                message : aciton.payload
            }
        }
        default : {
            return state
        }
    }
}

export default officialReducer