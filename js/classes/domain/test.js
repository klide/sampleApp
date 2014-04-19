/**
 * Domain Test
 */
Test.Domain = function () {

    /**
     * Get All Tests and Return with Verbiage Added (Lame... I know)
     * @return {array} Tests
     */
    this.getAllTests = function () {
        return $.when(Test.Dao.getAllTests()).then(function (allTests) {
            var tests = [];

            // Do some data massaging here...
            // @Example Just adding a Status next to the Name
            $.each(JSON.parse(allTests), function (i, test) {
                switch (test.status) {
                    case 'Complete':
                        test.testName = test.testName + ' (Done)';
                        break;
                    case 'InProgress':
                        test.testName = test.testName + ' (In-Progress)';
                        break;
                    default:
                        break;
                }
                tests.push(test);
            });

            return tests;
        });
    }
}