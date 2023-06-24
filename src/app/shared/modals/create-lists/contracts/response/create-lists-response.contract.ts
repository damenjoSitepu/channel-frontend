export interface CreateListsResponse {
    isError: boolean;
    message: string;
    data: {
        creationInformation: {
            list: {
                id: number;
                title: string;
                markStatus: string;
            }
        }
    }
}