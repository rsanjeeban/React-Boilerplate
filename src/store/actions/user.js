import * as api from "../api";
import { logApiLevel, serviceLog } from "../../utils/logUtil"

import {
    UPDATE_USER_PROFILE,
} from './_ActionTypes';

// eslint-disable-next-line import/prefer-default-export
export function getCustomer() {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const { token } = state.authentication;
            const response = await api.getCustomer(token);

            dispatch({
                type: UPDATE_USER_PROFILE,
                userData:response.data,
            });
        } catch (error) {
            serviceLog(error, logApiLevel.error);
        }
    };
}