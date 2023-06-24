
export class ListsUpdateMarkMapper {
    /**
     * Form Data Request
     */
    private formData: FormData = new FormData();

    /**
     * Raw List Id
     */
    private rawListId: number = 0;

    /**
     * Raw Mark Status
     */
    private rawMarkStatus: string = '';

    /**
     * Raw Prev Mark Status
     */
    private rawPrevMarkStatus: string = '';

    /**
     * Init The List Id
     * @param listId 
     */
    constructor(listId: number, markStatus: string, prevMarkStatus: string) {
        this.rawListId = listId;
        this.rawMarkStatus = markStatus;
        this.rawPrevMarkStatus = prevMarkStatus;
        this.proceed();
    }

    /**
     * Proceed The Data
     */
    private proceed(): void {
        this.formData.append('listId', this.rawListId ? this.rawListId.toString() : '0');
        this.formData.append('markStatus', this.rawMarkStatus ? this.rawMarkStatus.toString() : '');
        this.formData.append('prevMarkStatus', this.rawPrevMarkStatus ? this.rawPrevMarkStatus.toString() : '');
    }

    /**
     * Get Back The Form Data
     */
    get(): FormData {
        return this.formData;
    }
}