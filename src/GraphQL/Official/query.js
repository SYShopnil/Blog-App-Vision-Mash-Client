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
                        mainCategory{
                            name
                            color
                        }
                        subCategory,
                        socialMedia {
                            siteName
                            logo
                        }
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