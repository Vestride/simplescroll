/*!
 *
 * Smooth Scrolling plugin
 * @author Glen Cheney
 * @date 01.16.13
 * @version 1.0
 */
;(function($, window, undefined) {
  'use strict';

  var SimpleScroll = function( options, fn ) {
    var self = this;

    $.extend( self, $.simplescroll.options, options );

    self._init( fn );
  };

  SimpleScroll.prototype = {

    _init : function( fn ) {
      var self = this,
          $target = self.target.jquery ? self.target : $(self.target),
          targetOffset = $target.length ? $target.offset().top - self.offset : 0,
          totalHeight = $(document).height(),
          screenHeight = $(window).height();

      // Unable to find target
      if ( !$target.length ) {
        return;
      }

      if (typeof fn === 'function') {
        self.callback = fn;
      }

      // Make sure we have room to scroll - basically choose an offset that we'll scroll to and have the entire window.
      // This keeps timing correct.
      // If amount below the target offset's is less than our screen height
      if (totalHeight - targetOffset < screenHeight) {
        targetOffset -= screenHeight - (totalHeight - targetOffset);
      }

      if ( self.showHash ) {
        self._showHash( self.target, $target );
      }

      self._animate(targetOffset, self.speed, self.easing, self.callback);
    },

    _animate : function( offset, speed, easing, complete ) {
      var called = false;
      // Scroll!
      $('html,body').animate({
        scrollTop: offset
      }, speed, easing, function(evt) {
        if (!called) {
          complete.call(this, evt);
        }
        called = true;
      });
    },

    _showHash : function( hash, $target ) {
      var $fake;

      hash = hash.replace(/^#/, '');

      if ( $target.length ) {
        $target.attr( 'id', '' );
        $fake = $( '<div/>' ).css({
          position: 'absolute',
          visibility: 'hidden',
          top: $(window).scrollTop() + 'px'
        })
        .attr( 'id', hash )
        .appendTo( document.body );
      }

      window.location.hash = hash;

      if ( $target.length ) {
        $fake.remove();
        $target.attr( 'id', hash );
      }
    }
  };

  $.simplescroll = function( options, fn ) {
    return new SimpleScroll( options, fn );
  };

  // If we load the page with a hash, scroll to it
  $.simplescroll.initial = function( options, fn ) {
    if ( window.location.hash ) {
      options = $.extend(options, {target: window.location.hash});
      $.simplescroll( options, fn );
    }
  };

  $.simplescroll.options = {
    target: 'body',
    speed: 600,
    easing: $.easing.easeOutQuad ? 'easeOutQuad' : 'swing',
    showHash: false,
    callback: $.noop,
    offset: 0
  };

}(jQuery, window));