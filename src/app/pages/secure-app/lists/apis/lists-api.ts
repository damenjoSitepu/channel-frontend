import { Injectable } from "@angular/core";
import { ListsApiFoundation } from "../contracts/api-foundation/lists-api-foundation.contract";
import { HttpClient } from "@angular/common/http";
import { ListsDeleteResponse, ListsGetResponse, ListsUpdateMarkResponse } from "../contracts/response/lists-get-response.contract";
import { DELETE_LISTS_URL, LISTS_URL } from "../lists-url";
import { Observable } from "rxjs";
import { ListsDeleteMapper } from "../mapper/lists-delete.mapper";
import { ListsUpdateMarkMapper } from "../mapper/lists-update-mark.mapper";
import { ListsSetFilter } from "../request/lists-get-request.contract";

@Injectable({
    providedIn: 'root'
})
export class ListsApi implements ListsApiFoundation {
    constructor(private _http: HttpClient) {}

    /**
     * Get All Lists Which Is Provided From Database
     */
    get(filter: ListsSetFilter): Observable<ListsGetResponse> {
        let params: any = {};
        if (filter.isUrgent) {
            params['isUrgent'] = filter.isUrgent;
        }
        return this._http.get<ListsGetResponse>(
            LISTS_URL.GET,
            {
                params
            }
        );
    }

    /** 
     * Delete Lists Base On Their Id
     */
    delete(listId: number = 0): Observable<ListsDeleteResponse> {
        const formData: FormData = (new ListsDeleteMapper(listId)).get();
        return this._http.post<ListsDeleteResponse>(
            DELETE_LISTS_URL.DELETE,
            formData
        );
    }

    /**
     * Update Mark Status
     * @param listId 
     * @param markNameStatus 
     */
    updateMark(listId: number, markStatus: string, prevMarkStatus: string): Observable<ListsUpdateMarkResponse> {
        const formData: FormData = (new ListsUpdateMarkMapper(listId, markStatus,prevMarkStatus)).get();
        return this._http.post<ListsUpdateMarkResponse>(
            LISTS_URL.UPDATE_MARK,
            formData
        );
    }
}