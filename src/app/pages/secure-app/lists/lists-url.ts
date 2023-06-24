import { environment } from "src/environments/environment";

export const LISTS_URL = {
    /** Get All Lists Data URL */
    GET: environment.SECURE_API_URL + 'your-lists',
    UPDATE_MARK: environment.SECURE_API_URL + 'your-lists/status/update-mark'
};

export const DELETE_LISTS_URL = {
    /** Delete Lists (Main) */
    DELETE: environment.SECURE_API_URL + 'your-lists/delete'
};