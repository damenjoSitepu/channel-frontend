
export class ListsDeleteMapper {
    /**
     * Form Data Request
     */
    private formData: FormData = new FormData();

    /**
     * Raw List Id
     */
    private rawListId: number = 0;

    /**
     * Init The List Id
     * @param listId 
     */
    constructor(listId: number) {
        this.rawListId = listId;
        this.proceed();
    }

    /**
     * Proceed The Data
     */
    private proceed(): void {
        this.formData.append('listId', this.rawListId ? this.rawListId.toString() : '0');
    }

    /**
     * Get Back The Form Data
     */
    get(): FormData {
        return this.formData;
    }
}