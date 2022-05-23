# BrowserSizeMonitorWidget
An extension to monitor browser size.

**This Extension is provided as-is and without warranty or support. It is not part of the PTC product suite and there is no PTC support.**

## Description
This extension provides a widget to monitor browser (window) resizing.

## Properties
- debugMode - BOOLEAN (default = false): if set to true it sends to the browser's JS console a set of information useful for debugging the widget
- browserWidth - NUMBER (no default value): the current browser's width
- browserHeight - NUMBER (no default value): the current browser's height
- thresholdActive - BOOLEAN (default = true): if set to true the widget will send resizing events
- thresholdsWidth - STRING (default = ''): the width thresholds beyond/before which a resize event must be notified, as a list of comma separated values; ex. "w1,w2,w3"
- thresholdsHeight - STRING (default = ''): The height thresholds beyond/before which a resize event must be notified, as a list of comma separated values; ex. "h1,h2,h3"

## Events
- WindowResized: event to notify a resize causing a threshold's overcome

## Donate
If you would like to support the development of this and/or other extensions, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).
