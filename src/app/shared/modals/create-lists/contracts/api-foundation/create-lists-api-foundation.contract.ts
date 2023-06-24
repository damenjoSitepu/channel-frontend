import { Observable } from "rxjs";
import { CreateListsResponse } from "../response/create-lists-response.contract";
import { CreateListsRequest } from "../../create-lists.interface";

export interface CreateListsApiFoundation {
    /**
     * Create Lists
     */
    create(data: CreateListsRequest): Observable<CreateListsResponse>;
}