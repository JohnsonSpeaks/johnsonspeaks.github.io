/*!
 * Project: fancy-photoset
 * Description: A jQuery plugin for viewing Flickr Photostreams in a Fancybox gallery
 * Author: Phil Cohen
 * License: MIT
 * Copyright: (c) 2010-2011 Phil Cohen (http://phlippers.net)
 *
 * Version: 0.5.0
 * Requires jQuery 1.4.2+, Fancybox 1.3.1+
 * Docs: http://phlippers.net/code/fancy-photoset
 */
;(function($, window, document) {
  var FancyPhotoset, defaults, pluginName;
  pluginName = "fancyPhotoset";
  defaults = {
    apiKey: "",
    photosetId: "",
    small: "square",
    large: "medium",
    captions: true,
    firstOnly: false,
    fancybox: {}
  };
  FancyPhotoset = (function() {
    function FancyPhotoset(element, options) {
      this.element = element;
      this.options = $.extend({}, defaults, options);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }

// URL: https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=392ebc7d6b5bf437d3b4e4bd6bc44c2d&photoset_id=72157685438344222&user_id=55648661%40N00&format=json&nojsoncallback=1

    FancyPhotoset.prototype.init = function() {
      var domId, element, jsonUrl, options;
      options = this.options;
      element = $(this.element);
      domId = "fancyPhotoset-" + options.photosetId;
      jsonUrl = "https://api.flickr.com/services/rest/?" + "method=flickr.photosets.getPhotos&" + ("api_key=" + options.apiKey + "&") + ("photoset_id=" + options.photosetId + "&") + ("user_id=" + options.flickrId + "&") + "extras=description,url_sq,url_t,url_s,url_m,url_l,url_o&" + "format=json&jsoncallback=?";
      element.append(($("<ul/>")).attr("id", domId).addClass("fancyPhotoset"));
      return $.getJSON(jsonUrl, function(data) {
        $.each(data.photoset.photo, function(index, photo) {
          var anchor, image;
          image = ($("<img/>")).attr({
            src: FancyPhotoset.prototype.urlFor(photo, {
              size: options.small
            }),
            title: photo.title,
            alt: photo.title
          });
          anchor = ($("<a/>")).attr({
            href: FancyPhotoset.prototype.urlFor(photo, {
              size: options.large
            }),
            rel: "flickr-" + options.photosetId,
            title: photo.title + " | " + photo.description._content
          });
          anchor.html(image).fancybox(options.fancybox);
          if (options.captions) {
            image.after(($("<p/>")).addClass("caption").text(photo.description._content));
            image.after(($("<p/>")).addClass("caption").text(photo.title));
          }
          return element.find("ul").append(($("<li/>")).html(anchor));
        });
        if (options.firstOnly) {
          return element.find("li").not(":first").hide();
        }
      });
    };
    FancyPhotoset.prototype.urlFor = function(photo, options) {
      return {
        square: photo.url_sq,
        thumbnail: photo.url_t,
        small: photo.url_s,
        medium: photo.url_m,
        large: photo.url_l,
        original: photo.url_o
      }[options.size];
    };
    return FancyPhotoset;
  })();
  return $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        return $.data(this, "plugin_" + pluginName, new FancyPhotoset(this, options));
      }
    });
  };
})(jQuery, window, document);
