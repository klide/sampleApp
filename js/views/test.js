/**
 * View Test
 */
Test.View = function () {
    this.moduleId = 'testViewer';

    /**
     * Render the Title
     * @param {string} title The title of the Test Listing Container
     */
    this.renderTitle = function (title) {
        $('#' + this.moduleId).html('<h1 id="title">' + title + '</h1>');
    }

    /**
     * Render the data
     * @param {object} completedTests Data used for rendering
     */
    this.renderTests = function (allTests) {
        var self = this;
        // Append UL
        $('#' + self.moduleId).append('<ul class="testList"></ul>');
        // Append LI's and Tests
        $.each(allTests, function (i, test) {
            var testEl = '<li><span class="tag">' + test.testId + '</span> ' + test.testName + '</li>';
            $('#' + self.moduleId).find('ul').append(testEl);
        });
    }
}