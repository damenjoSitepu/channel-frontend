import { Lists } from "../contracts/entity/lists.contract";

export interface ListsState {
    data: Lists[];
    filtering: {
        isUrgent?: boolean;
    }
};

export const listsInitialState: ListsState = {
    data: [],
    filtering: {
        
    }
};