import { Observable } from "rxjs";
import { ListsDeleteResponse, ListsGetResponse, ListsUpdateMarkResponse } from "../response/lists-get-response.contract";
import { ListsSetFilter } from "../../request/lists-get-request.contract";

export interface ListsApiFoundation {
    /**
     * Get all lists provided in database
     */
    get(filter: ListsSetFilter): Observable<ListsGetResponse>;

    /** 
     * Delete Lists Base On Their Id
     */
    delete(listId: number): Observable<ListsDeleteResponse>

    /**
     * Update Mark Status
     * @param listId 
     * @param markNameStatus 
     */
    updateMark(listId: number, markNameStatus: string, prevMarkNameStatus: string): Observable<ListsUpdateMarkResponse>;
}