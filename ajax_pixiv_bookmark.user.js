// Generated by CoffeeScript 1.6.2
/*
// ==UserScript==
// @id             ajax_pixiv_bookmark
// @name           AJAX Pixiv Bookmark
// @version        2.0.0
// @namespace      http://blog.k2ds.net/
// @author         killtw
// @description    Using AJAX to add a bookmark in Pixiv
// @match          http://www.pixiv.net/member_illust.php?*
// @include        http://www.pixiv.net/member_illust.php?*
// ==/UserScript==
*/

var addjQuery, main;

addjQuery = function(callback) {
  var e;

  e = document.createElement('script');
  e.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js');
  e.addEventListener('load', function() {
    var script;

    script = document.createElement('script');
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  });
  document.body.appendChild(e);
};

main = function() {
  $('div.bookmark-container a._button').click(function(e) {
    var bookmark_tags;

    e.preventDefault();
    bookmark_tags = [];
    $.get("http://www.pixiv.net/bookmark_tag_all.php", function(data) {
      var tag, _i, _len, _ref;

      _ref = $(data).find('a.tag-name');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tag = _ref[_i];
        bookmark_tags.push(tag.innerText);
      }
    });
  });
};

addjQuery(main);
