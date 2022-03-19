const getAllOfficialData = (payload) => {
    const query = `
        query getOfficialInfo {
            getOfficialInfo {
                message
                status
                info {
                    controller {
                        navbarSelectCategory
                        selectSocialMedia {
                            siteName
                            link
                        }
                    }
                    availableOption {
                        subCategory
                    }
                    companyName
                    logo
                    contactInfo {
                        email
                        phone
                        address
                    }
                }
            }
        }
    `
    return {
        query
    }
}

module.exports = {
    getAllOfficialData
}