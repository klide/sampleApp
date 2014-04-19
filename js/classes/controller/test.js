/**
 * Controller Test
 */
Test.Controller = function () {

    /**
     * On Init, Render Test List
     */
    this.init = function () {
        $.when(Test.Domain.getAllTests()).then(function (allTests) {
            Test.View.renderTitle('My Tests');
            Test.View.renderTests(allTests);
        });
    }
}