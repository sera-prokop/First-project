$(function() {
        $('input, textarea').placeholder();
        var html;

        if ($.fn.placeholder.input && $.fn.placeholder.textarea) {
          html = '<strong>Your current browser natively supports <code>placeholder</code> for <code>input</code> and <code>textarea</code> elements.</strong> The plugin won’t run in this case, since it’s not needed. If you want to test the plugin, use an older browser.';
        } else if ($.fn.placeholder.input) {
          html = '<strong>Your current browser natively supports <code>placeholder</code> for <code>input</code> elements, but not for <code>textarea</code> elements.</strong> The plugin will only do its thang on the <code>textarea</code>s.';
        }

        if (html) {
          $('<p class="note">' + html + '</p>').insertBefore('form');
        }
      });