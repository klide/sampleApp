/**
 * Dao Test
 */
Test.Dao = function () {

    /**
     * Simply Return ALL tests from Server Request
     */
    this.getAllTests = function () {
        return $.ajax({
            url: 'getData.php'
        });
    }
}