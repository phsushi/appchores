"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chores = /** @class */ (function () {
    function Chores() {
        this._listChores = [];
    }
    Chores.prototype.update = function (id, chore) {
        this._listChores[id] = chore;
    };
    Chores.prototype.delete = function (id) {
        this._listChores.slice(id, 1);
    };
    Chores.prototype.list = function (filter) {
        if (!filter) {
            return this._listChores;
        }
        var listFiltered = this._listChores.filter(function (chore) {
            return chore.title.toLowerCase().includes(filter.toLowerCase());
        });
        return listFiltered;
    };
    Chores.prototype.create = function (chore) {
        var _this = this;
        if (Array.isArray(chore)) {
            chore.forEach(function (element) {
                _this._listChores.push(element);
            });
        }
        else {
            this._listChores.push(chore);
        }
    };
    return Chores;
}());
exports.default = Chores;
