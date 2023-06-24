import { Lists } from "../contracts/entity/lists.contract";

export class ListsModel {
    /**
     * Define The Data
     */
    private lists: Lists[] = [];

    /**
     * Define The Raw Data
     */
    private rawLists: any[] = [];

    /**
     * Initialize The Data
     */
    constructor(lists: any) {
        this.rawLists = lists;
        this.transform();
    }

    /**
     * Transform The Data
     */
    private transform(): void {
        if (this.rawLists.length > 0) {
            for (let i = 0; i < this.rawLists.length; i++) {
                this.lists.push({
                    id: this.rawLists[i].id,
                    title: this.rawLists[i].title,
                    markStatus: this.rawLists[i].markStatus,
                    showOptions: false
                })
            }
        }
    }

    /**
     * Get The Data
     */
    get(): Lists[] {
        return this.lists;
    }
}