import { createReducer, on } from "@ngrx/store";
import { listsInitialState } from "./lists.state";
import { createListsSuccess, deleteListsSuccess, filterUrgentStatusLists, getListsSuccess, updateMarkStatusListsSuccess } from "./lists.actions";
import { ListsModel } from "../mapper/lists-model";
import { Lists } from "../contracts/entity/lists.contract";

const _listsReducer = createReducer(
    listsInitialState,
    on(getListsSuccess, (state, action) => {
        return {
            ...state,
            data: (new ListsModel(action.data.lists ?? [])).get()
        };
    }),
    on(createListsSuccess, (state, action) => {
        const listData = [(new ListsModel([action.data.data.creationInformation.list] ?? [])).get()[0], ...state.data];
        return {
            ...state,
            data: listData
        };
    }),
    on(deleteListsSuccess, (state, action) => {
        const filteredData = [...state.data].filter((list: Lists) => list.id !== action.data.data.deletionInformation.listIdAffected);
        return {
            ...state,
            data: filteredData
        };
    }),
    on(updateMarkStatusListsSuccess, (state, action) => {
        const updatedData = [...state.data].map((list: Lists) => {
            if (list.id === action.data.data.updatingInformation.list.listIdAffected) {
                return { ...list, markStatus: action.data.data.updatingInformation.list.currMarkStatus };
            }
            return list;
        })
        return {
            ...state,
            data: updatedData
        }
    }),
    on(filterUrgentStatusLists, (state, action) => {
        return {
            ...state,
            filtering: {
                isUrgent: action.isUrgent
            }
        }
    })
);

export function ListsReducer(state: any, action: any) {
    return _listsReducer(state, action);
}