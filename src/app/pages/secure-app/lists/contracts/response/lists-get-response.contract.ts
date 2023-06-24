import { Lists } from "../entity/lists.contract";

export interface ListsGetResponse {
    isError: boolean;
    message: string;
    data: {
        lists: Lists[]
    }
}

export interface ListsDeleteResponse {
    isError: boolean;
    message: string;
    data: {
        deletionInformation: {
            deletedCount: number;
            listIdAffected: number;
        }
    }
}
export interface ListsUpdateMarkResponse {
    isError: boolean;
    message: string;
    data: {
        updatingInformation: {
            list: {
                updatedCount: number;
                listIdAffected: number;
                prevMarkStatus: string;
                currMarkStatus: string;
            }
        }
    };
}

