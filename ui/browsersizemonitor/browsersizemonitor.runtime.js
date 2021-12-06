/* global TW */
TW.Runtime.Widgets.browsersizemonitor = function () {
  var thisWidget = this;

  this.runtimeProperties = function () {
    return {
      'needsDataLoadingAndError': false
    };
  };

  this.renderHtml = function () {
    var html = '';
    html = '<div class="widget-content widget-browsersizemonitor" style="display:none;"></div>';
    return html;
  };

  this.manageResize = function () {
    var debugMode = thisWidget.getProperty('debugMode');

    var w = $(window).width();
    var h = $(window).height();

    if (thisWidget) {
      var oldW = thisWidget.getProperty('browserWidth');
      var oldH = thisWidget.getProperty('browserHeight');
      var thW = thisWidget.getProperty('thresholdsWidth');
      var thH = thisWidget.getProperty('thresholdsHeight');

      var changed = false;
      if (thW) {
        thW = thW.split(",");
        for (var index = 0; index < thW.length; index++) {
          var value = parseFloat(thW[index].trim());
          changed |= w <= value && oldW >= value;
          changed |= oldW <= value && w >= value;
        }
      }
      if (thH) {
        thH = thH.split(",");
        for (var index = 0; index < thH.length; index++) {
          var value = parseFloat(thH[index].trim());
          changed |= h <= value && oldH >= value;
          changed |= oldH <= value && h >= value;
        }
      }

      if (debugMode) {
        console.log("Browser Size Monitor -> changed: " + changed + ", oldW: ", +oldW + ", oldH: " + oldH + ", w: " + w + ", h: " + h + ", thW: " + thW + ", thH: " + thH);
      }

      thisWidget.setProperty('browserWidth', w);
      thisWidget.setProperty('browserHeight', h);

      if (changed) {
        thisWidget.jqElement.triggerHandler("WindowResized");
      }
    }
  };

  this.afterRender = function () {
    thisWidget.setProperty('browserWidth', $(window).width());
    thisWidget.setProperty('browserHeight', $(window).height());

    if (thisWidget.getProperty("thresholdActive")) {
      $(window).on('resize.browsersizemonitorwidget_browserSizeMonitor', this.manageResize);
    }
  };

  this.updateProperty = function (updatePropertyInfo) {
    var properties = [
      "debugMode", "thresholdActive", "thresholdsWidth", "thresholdsHeight"
    ];

    if (properties.indexOf(updatePropertyInfo.TargetProperty) !== -1) {
      this.setProperty(updatePropertyInfo.TargetProperty, updatePropertyInfo.RawSinglePropertyValue);
    }

    if (updatePropertyInfo.TargetProperty === "thresholdActive") {
      $(window).off('resize.browsersizemonitorwidget_browserSizeMonitor');

      if (thisWidget.getProperty("thresholdActive")) {
        $(window).on('resize.browsersizemonitorwidget_browserSizeMonitor', this.manageResize);
      }
    }
  };

  this.beforeDestroy = function () {
    try {
      console.log("Browser Size Monitor -> Remove resize event");
      TW.log.info("Browser Size Monitor -> Remove resize event");
      $(window).off('resize.browsersizemonitorwidget_browserSizeMonitor');
    } catch (err) {
      TW.log.error('Browser Size Monitor Before Destroy Error', err);
    }
  };
};