// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree ./vendor/foundation/libraries
//= require vendor/foundation/foundation.js
//= requrie vendor/foundation/foundation.equalizer.js
//= require slick.js/slick.js
//= require colorbox/jquery.colorbox.js
//= require vendor/onscreen.js
//= require components/animate.js
//= require components/toggle-class.js
//= require components/clients-slider.js
//= require vendor/matchheight.js

$(document).foundation();

$(function() {
  if (Modernizr.mq('only screen and (min-width: 768px)')) {
    $('.colorbox').colorbox({
      width: '70%',
      height: '70%',
    });
  } else {
    $('.home-team-members .colorbox').attr('href', '');
  }

  $('.reason-title').matchHeight({
    byRow: false,
    proprety: 'height'
  });

  $('.reason-content').matchHeight({
    byRow: false,
    proprety: 'height'
  });
});
