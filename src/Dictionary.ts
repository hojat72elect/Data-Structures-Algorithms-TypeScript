/**
 *
 * TODO: this isn't a good implementation; should be migrated to JS objects.
 * A Key-Value pair database that's supposed to be a better version
 * of JS Objects.
 *
 */
export class Dictionary {
    _dataStore: any[];

    constructor() {
        this._dataStore = [];
    }

    add(key: number | string, value: any) {
        this._dataStore[key] = value;
    }

    find(key: number | string) {
        return this._dataStore[key];
    }

    remove(key: number | string) {
        delete this._dataStore[key];
    }

    /**
     *  The shown result is already sorted according to keys (incrementally).
     * @returns {string}
     */
    showAll(): string {
        let retStr = "";
        (Object.keys(this._dataStore).sort()).forEach((key) => {
            retStr += `* ${key} -> ${this._dataStore[key]} *`;
        })
        return retStr;
    }

    count(): number {
        let n = 0;
        (Object.keys(this._dataStore)).forEach((key) => {
            n++;
        })
        return n;
    }

    clear() {
        (Object.keys(this._dataStore)).forEach((key) => {
            delete this._dataStore[key];
        })
    }
}

