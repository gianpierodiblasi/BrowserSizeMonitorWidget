/* global TW */
TW.IDE.Widgets.browsersizemonitor = function () {
  this.widgetIconUrl = function () {
    return '../Common/extensions/BrowserSizeMonitorWidget/ui/browsersizemonitor/browser.png';
  };

  this.widgetProperties = function () {
    return {
      'name': 'BrowserSizeMonitor',
      'description': 'Widget to monitor browser size',
      'category': ['Common'],
      'iconImage': 'browser.png',
      'properties': {
        'Width': {
          'description': 'width',
          'defaultValue': 200
        },
        'Height': {
          'description': 'height',
          'defaultValue': 28
        },
        'debugMode': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the debug'
        },
        'browserWidth': {
          'isVisible': true,
          'baseType': 'NUMBER',
          'isBindingSource': true,
          'isEditable': false,
          'description': 'The browser width'
        },
        'browserHeight': {
          'isVisible': true,
          'baseType': 'NUMBER',
          'isBindingSource': true,
          'isEditable': false,
          'description': 'The browser height'
        },
        'thresholdActive': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingTarget': true,
          'isEditable': true,
          'defaultValue': true,
          'description': 'true if thresholds have to be used for resize\'s events'
        },
        'thresholdsWidth': {
          'isVisible': true,
          'baseType': 'STRING',
          'isBindingTarget': true,
          'defaultValue': "",
          'isEditable': true,
          'description': 'The width thresholds beyond/before which a resize event must be notified, as a list of comma separated values; ex. "w1,w2,w3"'
        },
        'thresholdsHeight': {
          'isVisible': true,
          'baseType': 'STRING',
          'isBindingTarget': true,
          'defaultValue': "",
          'isEditable': true,
          'description': 'The height thresholds beyond/before which a resize event must be notified, as a list of comma separated values; ex. "h1,h2,h3"'
        }
      }
    };
  };

  this.widgetEvents = function () {
    return {
      'WindowResized': {}
    };
  };

  this.widgetServices = function () {
    return {
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content widget-browsersizemonitor">' + '<span class="browsersizemonitor-property">Browser Size Monitor</span>' + '</div>';
  };
};