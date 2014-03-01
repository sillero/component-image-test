(function () {
  var imageElement;
  var iframeHandler;

  beforeEach(function (done) {
    iframeHandler = harnessUtils.createIframe('test/html/test.html', function (win, doc) {
      imageElement = iframeHandler.document.querySelector('ceci-image');
      done();
    });
  });

  describe('Ceci Button', function () {

    // TODO: Broadcast Tests

    test('Listeners', function (done) {
      iframeHandler.testListeners(imageElement, done, {
        check: {
          setImageSource: function (e, channel) {
            chai.assert(true);
          }
        }
      });
    });
  });
})();
