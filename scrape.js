var casper = require('casper').create();
var x = require('casper').selectXPath;

casper.start('https://www.spire.umass.edu/psp/heproda/?cmd=login&languageCd=ENG&');
casper.then(function() {
    this.click("#CourseCatalogLink");
});
casper.then(function() {
    this.evaluate(function() {
        document.querySelector('#CLASS_SRCH_WRK2_SUBJECT$108$').selectedIndex = 18;
        return true;
    });
});
casper.then(function() {
    this.click('#CLASS_SRCH_WRK2_SSR_OPEN_ONLY');
});
casper.then(function() {
    this.evaluate(function() {
        document.querySelector('#CLASS_SRCH_WRK2_SESSION_CODE$12$').selectedIndex = 1;
        return true;
    });
});
casper.then(function() {
    this.click(".SSSBUTTON_CONFIRMLINK");
});
casper.then(function(){
    console.log(this.page.content);
    casper.exit();
});
casper.run();
