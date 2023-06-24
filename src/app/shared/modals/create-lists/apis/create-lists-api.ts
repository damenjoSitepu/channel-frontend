import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CreateListsApiFoundation } from "../contracts/api-foundation/create-lists-api-foundation.contract";
import { CreateListsResponse } from "../contracts/response/create-lists-response.contract";
import { CREATE_LISTS_URL } from "../create-lists-url";
import { CreateListsRequest } from "../create-lists.interface";

@Injectable({
    providedIn: 'root'
})
export class CreateListsApi implements CreateListsApiFoundation {
    constructor(private _http: HttpClient) {}

    /**
     * Create Lists
     */
    create(data: CreateListsRequest): Observable<CreateListsResponse> {
        return this._http.post<CreateListsResponse>(
            CREATE_LISTS_URL.CREATE,
            data
        );
    }
}