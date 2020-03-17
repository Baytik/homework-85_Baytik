import axiosAPI from "../../axiosAPI";

export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const postRegisterSuccess = () => ({type: POST_REGISTER_SUCCESS});
export const errorMessage = (error) => ({type: ERROR_MESSAGE, error});

export const postRegister = (user) => {
    return async (dispatch) => {
        try {
            await axiosAPI.post('/users', user);
        } catch (e) {
            dispatch(errorMessage(e))
        }
    }
};