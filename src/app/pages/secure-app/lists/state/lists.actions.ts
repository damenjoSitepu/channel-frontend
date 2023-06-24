import { createAction, props } from "@ngrx/store";
import { ListsDeleteResponse, ListsGetResponse, ListsUpdateMarkResponse } from "../contracts/response/lists-get-response.contract";
import { CreateListsRequest } from "src/app/shared/modals/create-lists/create-lists.interface";
import { CreateListsResponse } from "src/app/shared/modals/create-lists/contracts/response/create-lists-response.contract";
import { ListsSetFilter } from "../request/lists-get-request.contract";

export const GET_LISTS = '[Lists Page] - Fetch Data!';
export const GET_LISTS_SUCCESS = '[Lists Page] - Fetch Data Success!';
export const CREATE_LISTS = '[Lists Page] - Create Lists';
export const CREATE_LISTS_SUCCESS = '[Lists Page] - Create Lists Success';
export const CREATE_LISTS_FAILED = '[Lists Page] - Create Lists Failed'
export const DELETE_LISTS = '[Lists Page] - Delete Lists';
export const DELETE_LISTS_SUCCESS = '[Lists Page] - Delete Lists Success';
export const DELETE_LISTS_FAILED = '[Lists Page] - Delete Lists Failed';
export const UPDATE_MARK_STATUS_LISTS = '[Lists Page] - Update Mark Status For Lists';
export const UPDATE_MARK_STATUS_LISTS_SUCCESS = '[Lists Page] - Update Mark Status For Lists Success';
export const FILTER_URGENT_STATUS_LISTS = '[Lists Page] - Filter Urgent Status';

export const getLists = createAction(
    GET_LISTS,
    props<ListsSetFilter>()
);

export const getListsSuccess = createAction(
    GET_LISTS_SUCCESS,
    props<ListsGetResponse>()
);

export const createLists = createAction(
    CREATE_LISTS,
    props<CreateListsRequest>()
);

export const createListsSuccess = createAction(
    CREATE_LISTS_SUCCESS,
    props<{ data: CreateListsResponse }>()
);

export const createListsFailed = createAction(
    CREATE_LISTS_FAILED,
    props<{ message: string }>()
);

export const deleteLists = createAction(
    DELETE_LISTS,
    props<{ listId: number }>()
);

export const deleteListsSuccess = createAction(
    DELETE_LISTS_SUCCESS,
    props<{ data: ListsDeleteResponse }>()
);

export const deleteListsFailed = createAction(
    DELETE_LISTS_FAILED,
    props<{ message: string }>()
);

export const updateMarkStatusLists = createAction(
    UPDATE_MARK_STATUS_LISTS,
    props<{ listId: number, markStatus: string, prevMarkStatus: string }>()
);

export const updateMarkStatusListsSuccess = createAction(
    UPDATE_MARK_STATUS_LISTS_SUCCESS,
    props<{ data: ListsUpdateMarkResponse }>()
);

export const filterUrgentStatusLists = createAction(
    FILTER_URGENT_STATUS_LISTS,
    props<{ isUrgent: boolean }>()
);



