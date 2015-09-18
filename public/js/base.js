//scope
~function () {
  var $ = document.querySelectorAll.bind(document);
  var $1 = function (selector) {
    return $(selector)[0];
  };
  window.$L = {
    index: function () {
        var containerSelector = '.gif-node';
        var sg = new SuperGif({ gif: document.getElementById('main-gif') } );
        sg.load();
        $1('.J_operation_play').addEventListener('click', function () {
          sg.play();
        });
        $1('.J_operation_pause').addEventListener('click', function () {
          sg.pause();
        });
    }
  }
}();
