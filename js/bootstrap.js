/**
 * Start my App
 */
var Test = {
    init: function () {
        this.View = new this.View();
        this.Controller = new this.Controller();
        this.Domain = new this.Domain();
        this.Dao = new this.Dao();

        // Call Init
        this.Controller.init();
    }
}