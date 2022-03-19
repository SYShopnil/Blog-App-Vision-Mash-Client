import {
    GET_OFFICIAL_DATA,
    SUCCESS,
    FAILED,
    ERROR
} from '../actionType/ActionType'
import axios from 'axios'
import serverUrl  from '../../../../src/utils/serverUrl'
import {
    getAllOfficialData
} from '../../../GraphQL/Official/query'
import GqAPI from '../../../GraphQL/API/API.js'
const successfulToGet = (data) => {
    return {
        type: SUCCESS,
        payload: data
    }
} //if official doc successfully found

const failedToGet = () => {
    return {
        type: FAILED
    }
} //if official doc successfully found

const errorToGet = (error) => {
    return {
        type: ERROR,
        payload: error
    }
} //if official doc successfully found

const getOfficialData = () => async (dispatch, getState) => { //get all official data
    try {
        const allData = await axios.post (
            GqAPI.Official,
            getAllOfficialData()
        )
        const {
            data: {
              data: {
                getOfficialInfo: {
                  message,
                  status,
                  info
                }
              }
            }
        } = allData;
        status == 202 && dispatch(successfulToGet (info)) //if successful get the official data
        status == 406 || status == 401  && dispatch(errorToGet (message)) //if any error happen 
        status == 404 && dispatch(failedToGet () )  //if no official data have found
    }catch (err) {
        dispatch (errorToGet (err.message))
    }
}

export {
    getOfficialData
}