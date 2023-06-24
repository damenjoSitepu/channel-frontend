import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ListsState } from "./lists.state";

export const LISTS_STATE_NAME = "Lists";

const getListsState = createFeatureSelector<ListsState>(LISTS_STATE_NAME);

export const fetchLists = createSelector(getListsState, (state: ListsState) => {
    return state.data;
})

export const isUrgentFilterLists = createSelector(getListsState, (state: ListsState) => {
    return state.filtering.isUrgent;
});