/**
 *
 * TODO: this isn't a good implementation; should be migrated to JS objects.
 * A Key-Value pair database that's supposed to be a better version
 * of JS Objects.
 *
 */
class Dictionary {
    _dataStore;

    constructor() {
        this._dataStore = [];
    }

    add(key, value) {
        this._dataStore[key] = value;
    }

    find(key) {
        return this._dataStore[key];
    }

    remove(key) {
        delete this._dataStore[key];
    }

    /**
     *  The shown result is already sorted according to keys (incrementally).
     * @returns {string}
     */
    showAll() {
        let retStr = "";
        (Object.keys(this._dataStore).sort()).forEach((key) => {
            retStr += `* ${key} -> ${this._dataStore[key]} *`;
        })
        return retStr;
    }

    count() {
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

module.exports = Dictionary;
