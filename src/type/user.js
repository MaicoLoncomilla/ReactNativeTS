"use strict";
exports.__esModule = true;
exports.UserClass = void 0;
var UserClass = /** @class */ (function () {
    function UserClass() {
        this.first_name = '';
        this.last_name = '';
        this.user_id = '';
        this.email = '';
        this.full_name = this.first_name + ' ' + this.last_name;
        this.avatar = '/assets/image/user_avatar.png';
    }
    return UserClass;
}());
exports.UserClass = UserClass;
