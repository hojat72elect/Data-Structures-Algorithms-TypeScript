// @flow
/**
 * A Key-Value pair database that's supposed to be a better version
 * of JS Objects.
 *
 * @type {Dictionary|{}}
 */
class Dictionary<K, V> {
    _dataStore:Object;

    constructor() {
        this._dataStore = [];
    }

    add(key:any, value:V) {
        this._dataStore[key] = value;
    }

    find(key:any):V {
        return this._dataStore[key];
    }

    remove(key:any) {
        delete this._dataStore[key];
    }

    /**
     *  The shown result is already sorted according to keys (incrementally).
     * @returns {string}
     */
    showAll():string {
        let retStr = "";
        (Object.keys(this._dataStore).sort()).forEach((key:string) => {
            retStr += `* ${key} -> ${this._dataStore[key]} *`;
        })
        return retStr;
    }

    count():number {
        let n = 0;
        (Object.keys(this._dataStore)).forEach((key:string) => {
            n++;
        })
        return n;
    }

    clear() {
        (Object.keys(this._dataStore)).forEach((key:string) => {
            delete this._dataStore[key];
        })
    }
}

module.exports = Dictionary;
