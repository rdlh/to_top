/*!
 * jquery.to_top.js v0.0.1
 * Baptiste Lecocq - https://github.com/tiste/to_top
 *
 * Released under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */

;(function ($, undefined) {
  $.fn.to_top = function (options) {
    var defaults = {
      'limit': 300,
      'speed': 400
    };

    var opt = $.extend(defaults, options);

    return this.each(function () {
      var $$ = $(this);

      $$.css({
        bottom:   10,
        cursor:   'pointer',
        display:  'none',
        position: 'fixed',
        right:    10
      });

      $$.bind('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, opt.speed);
      });

      $(window).bind('scroll', function () {
        if ($(this).scrollTop() > opt.limit) {
          $$.fadeIn();
        } else {
          $$.fadeOut();
        }
      });
    });
  }
})(jQuery);
