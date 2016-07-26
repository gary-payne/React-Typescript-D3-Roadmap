//export{}; //Ensures that this file is treated as a module!

export class RestDao {
    constructor(webUrl: string);
    get(restQuery: string): {
        then(any): any
    };
    lists(listName: string): {
        findItems(fieldName: string, fieldValue: string): {
            then(any): any
        }
        getItems(): {
            then(any): any
        }
        getItems(itemQuery: string): {
            then(any): any
        }
    };
}