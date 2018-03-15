$(function () {

    // testing of the initial loading functionality
    describe('RSS Feeds', function () {
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it('url are not empty', function () {
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
        });
        it('name are not empty', function () {
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name).not.toBe(0);
            });
        });
    });
    
    // testing of the menu rendering
    describe('The menu', function () {
        it('is initially hidden', function () {
            expect($("body").hasClass('menu-hidden')).toBe(true);
        });
        it('is visible after hamburger click', function () {
            $('.menu-icon-link').click();
            expect($("body").hasClass('')).toBe(true);
            $('.menu-icon-link').click();
            expect($("body").hasClass('menu-hidden')).toBe(true);
        });
    });

    //testing async data loading
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        it('are correctly loaded', function (done) {
            var entries= $('.feed .entry'); 
            expect(entries).toBeDefined();
            expect(entries.length).toBeGreaterThan(1);
            done();
        });
    });

     //testing async data changes
    describe('New Feed Selection', function () {
       var idToLoad = 3;
        beforeEach(function (done) {
            loadFeed(idToLoad, function () {
                done();
            });
        });
        it('are correctly changed', function (done) {
            var intitialTitle = allFeeds[0].name; 
            var loadedTitle =  $('.header-title').html(); 
            expect(loadedTitle).not.toBe(intitialTitle);
            done();
        });
    });
}());
