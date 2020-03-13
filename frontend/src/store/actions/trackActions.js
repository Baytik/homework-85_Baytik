import axiosAPI from "../../axiosAPI";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const fetchTrackSuccess = (tracks) => ({type: FETCH_TRACKS_SUCCESS, tracks});
export const errorMessage = (error) => ({type: ERROR_MESSAGE, error});

export const fetchTrack = (id) => {
    return async (dispatch) => {
        try {
            const response =  await axiosAPI.get(`/tracks?album=${id}`);
            dispatch(fetchTrackSuccess(response.data));
        } catch (e) {
            dispatch(errorMessage(e))
        }
    }
};