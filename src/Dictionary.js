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

    showAll() {
        let retStr = "";
        (Object.keys(this._dataStore)).forEach((key) => {
            retStr += `* ${key} -> ${this._dataStore[key]} *`;
        })
        return retStr;
    }
}

module.exports = Dictionary;
