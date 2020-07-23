/*
* This file has been generated to support Visual Studio IntelliSense.
* You should not use this file at runtime inside the browser--it is only
* intended to be used only for design-time IntelliSense.  Please use the
* standard jQuery library for all production use.
*
* Comment version: 1.6.2
*/

/*!
* jQuery JavaScript Library v1.6.2
* http://jquery.com/
*
* Distributed in whole under the terms of the MIT
*
* Copyright 2010, John Resig
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* Includes Sizzle.js
* http://sizzlejs.com/
* Copyright 2010, The Dojo Foundation
* Released under the MIT and BSD Licenses.
*/

(function ( window, undefined ) {
var jQuery = function (selector, context) {
/// <summary>
///     1: Accepts a string containing a CSS selector which is then used to match a set of elements.
///     <para>    1.1 - $(selector, context) </para>
///     <para>    1.2 - $(element) </para>
///     <para>    1.3 - $(elementArray) </para>
///     <para>    1.4 - $(jQuery object) </para>
///     <para>    1.5 - $()</para>
///     <para>2: Creates DOM elements on the fly from the provided string of raw HTML.</para>
///     <para>    2.1 - $(html, ownerDocument) </para>
///     <para>    2.2 - $(html, props)</para>
///     <para>3: Binds a function to be executed when the DOM has finished loading.</para>
///     <para>    3.1 - $(callback)</para>
/// </summary>
/// <param name="selector" type="String">
///     A string containing a selector expression
/// </param>
/// <param name="context" type="jQuery">
///     A DOM Element, Document, or jQuery to use as context
/// </param>
/// <returns type="jQuery" />

    return new jQuery.fn.init(selector, context, rootjQuery);
};
jQuery.Deferred = function (func) {

    var deferred = jQuery._Deferred(), failDeferred = jQuery._Deferred(), promise;
    jQuery.extend(deferred, {then: function (doneCallbacks, failCallbacks) {deferred.done(doneCallbacks).fail(failCallbacks);return this;}, always: function () {return deferred.done.apply(deferred, arguments).fail.apply(this, arguments);}, fail: failDeferred.done, rejectWith: failDeferred.resolveWith, reject: failDeferred.resolve, isRejected: failDeferred.isResolved, pipe: function (fnDone, fnFail) {return jQuery.Deferred(function (newDefer) {jQuery.each({done: [fnDone, "resolve"], fail: [fnFail, "reject"]}, function (handler, data) {var fn = data[0], action = data[1], returned;if (jQuery.isFunction(fn)) {deferred[handler](function () {returned = fn.apply(this, arguments);if (returned && jQuery.isFunction(returned.promise)) {returned.promise().then(newDefer.resolve, newDefer.reject);} else {newDefer[action](returned);}});} else {deferred[handler](newDefer[action]);}});}).promise();}, promise: function (obj) {if (obj == null) {if (promise) {return promise;}promise = obj = {};}var i = promiseMethods.length;while (i--) {obj[promiseMethods[i]] = deferred[promiseMethods[i]];}return obj;}});
    deferred.done(failDeferred.cancel).fail(deferred.cancel);
    delete deferred.cancel;
    if (func) {
        func.call(deferred, deferred);
    }
    return deferred;
};
jQuery.Event = function (src, props) {

    if (!this.preventDefault) {
        return new jQuery.Event(src, props);
    }
    if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;
        this.isDefaultPrevented = src.defaultPrevented ||
            src.returnValue === false ||
            src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;
    } else {
        this.type = src;
    }
    if (props) {
        jQuery.extend(this, props);
    }
    this.timeStamp = jQuery.now();
    this[jQuery.expando] = true;
};
jQuery._Deferred = function () {

    var callbacks = [], fired, firing, cancelled, deferred = {done: function () {if (!cancelled) {var args = arguments, i, length, elem, type, _fired;if (fired) {_fired = fired;fired = 0;}for (i = 0, length = args.length; i < length; i++) {elem = args[i];type = jQuery.type(elem);if (type === "array") {deferred.done.apply(deferred, elem);} else if (type === "function") {callbacks.push(elem);}}if (_fired) {deferred.resolveWith(_fired[0], _fired[1]);}}return this;}, resolveWith: function (context, args) {if (!cancelled && !fired && !firing) {args = args || [];firing = 1;try {while (callbacks[0]) {callbacks.shift().apply(context, args);}} finally {fired = [context, args];firing = 0;}}return this;}, resolve: function () {deferred.resolveWith(this, arguments);return this;}, isResolved: function () {return !!(firing || fired);}, cancel: function () {cancelled = 1;callbacks = [];return this;}};
    return deferred;
};
jQuery._data = function (elem, name, data) {

    return jQuery.data(elem, name, data, true);
};
jQuery._mark = function (elem, type) {

    if (elem) {
        type = (type || "fx") + "mark";
        jQuery.data(elem, type, (jQuery.data(elem, type, undefined, true) || 0) + 1, true);
    }
};
jQuery._unmark = function (force, elem, type) {

    if (force !== true) {
        type = elem;
        elem = force;
        force = false;
    }
    if (elem) {
        type = type || "fx";
        var key = type + "mark", count = force ? 0 : (jQuery.data(elem, key, undefined, true) || 1) - 1;
        if (count) {
            jQuery.data(elem, key, count, true);
        } else {
            jQuery.removeData(elem, key, true);
            handleQueueMarkDefer(elem, type, "mark");
        }
    }
};
jQuery.acceptData = function (elem) {

    if (elem.nodeName) {
        var match = jQuery.noData[elem.nodeName.toLowerCase()];
        if (match) {
            return !(match === true || elem.getAttribute("classid") !== match);
        }
    }
    return true;
};
jQuery.access = function (elems, key, value, exec, fn, pass) {

    var length = elems.length;
    if (typeof key === "object") {
        for (var k in key) {
            jQuery.access(elems, k, key[k], exec, fn, value);
        }
        return elems;
    }
    if (value !== undefined) {
        exec = !pass && exec && jQuery.isFunction(value);
        for (var i = 0; i < length; i++) {
            fn(elems[i], key, exec ? value.call(elems[i], i, fn(elems[i], key)) : value, pass);
        }
        return elems;
    }
    return length ? fn(elems[0], key) : undefined;
};
jQuery.active = 0;
jQuery.ajax = function (url, options) {
/// <summary>
///     Perform an asynchronous HTTP (Ajax) request.
///     <para>1 - jQuery.ajax(url, settings) </para>
///     <para>2 - jQuery.ajax(settings)</para>
/// </summary>
/// <param name="url" type="String">
///     A string containing the URL to which the request is sent.
/// </param>
/// <param name="options" type="Object">
///     A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup(). See jQuery.ajax( settings ) below for a complete list of all settings.
/// </param>

    if (typeof url === "object") {
        options = url;
        url = undefined;
    }
    options = options || {};
    var s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = callbackContext !== s &&
        (callbackContext.nodeType || callbackContext instanceof jQuery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery._Deferred(), statusCode = s.statusCode || {}, ifModifiedKey, requestHeaders = {}, requestHeadersNames = {}, responseHeadersString, responseHeaders, transport, timeoutTimer, parts, state = 0, fireGlobals, i, jqXHR = {readyState: 0, setRequestHeader: function (name, value) {if (!state) {var lname = name.toLowerCase();name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;requestHeaders[name] = value;}return this;}, getAllResponseHeaders: function () {return state === 2 ? responseHeadersString : null;}, getResponseHeader: function (key) {var match;if (state === 2) {if (!responseHeaders) {responseHeaders = {};while ((match = rheaders.exec(responseHeadersString))) {responseHeaders[match[1].toLowerCase()] = match[2];}}match = responseHeaders[key.toLowerCase()];}return match === undefined ? null : match;}, overrideMimeType: function (type) {if (!state) {s.mimeType = type;}return this;}, abort: function (statusText) {statusText = statusText || "abort";if (transport) {transport.abort(statusText);}done(0, statusText);return this;}};

    function done(status, statusText, responses, headers) {
        if (state === 2) {
            return;
        }
        state = 2;
        if (timeoutTimer) {
            clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status ? 4 : 0;
        var isSuccess, success, error, response = responses ? ajaxHandleResponses(s, jqXHR, responses) : undefined, lastModified, etag;
        if (status >= 200 && status < 300 || status === 304) {
            if (s.ifModified) {
                if ((lastModified = jqXHR.getResponseHeader("Last-Modified"))) {
                    jQuery.lastModified[ifModifiedKey] = lastModified;
                }
                if ((etag = jqXHR.getResponseHeader("Etag"))) {
                    jQuery.etag[ifModifiedKey] = etag;
                }
            }
            if (status === 304) {
                statusText = "notmodified";
                isSuccess = true;
            } else {
                try {
                    success = ajaxConvert(s, response);
                    statusText = "success";
                    isSuccess = true;
                } catch (e) {
                    statusText = "parsererror";
                    error = e;
                }
            }
        } else {
            error = statusText;
            if (!statusText || status) {
                statusText = "error";
                if (status < 0) {
                    status = 0;
                }
            }
        }
        jqXHR.status = status;
        jqXHR.statusText = statusText;
        if (isSuccess) {
            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
            globalEventContext.trigger("ajax" + (isSuccess ? "Success" : "Error"), [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.resolveWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
            }
        }
    }

    deferred.promise(jqXHR);
    jqXHR.success = jqXHR.done;
    jqXHR.error = jqXHR.fail;
    jqXHR.complete = completeDeferred.done;
    jqXHR.statusCode = function (map) {if (map) {var tmp;if (state < 2) {for (tmp in map) {statusCode[tmp] = [statusCode[tmp], map[tmp]];}} else {tmp = map[jqXHR.status];jqXHR.then(tmp, tmp);}}return this;};
    s.url = ((url || s.url) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
    s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().split(rspacesAjax);
    if (s.crossDomain == null) {
        parts = rurl.exec(s.url.toLowerCase());
        s.crossDomain = !!(parts &&
            (parts[1] != ajaxLocParts[1] ||
            parts[2] != ajaxLocParts[2] ||
            (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))));
    }
    if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
    }
    inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
    if (state === 2) {
        return false;
    }
    fireGlobals = s.global;
    s.type = s.type.toUpperCase();
    s.hasContent = !rnoContent.test(s.type);
    if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
    }
    if (!s.hasContent) {
        if (s.data) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.data;
        }
        ifModifiedKey = s.url;
        if (s.cache === false) {
            var ts = jQuery.now(), ret = s.url.replace(rts, "$1_=" + ts);
            s.url = ret + (ret === s.url ? (rquery.test(s.url) ? "&" : "?") + "_=" + ts : "");
        }
    }
    if (s.data && s.hasContent && s.contentType !== false ||
        options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
    }
    if (s.ifModified) {
        ifModifiedKey = ifModifiedKey || s.url;
        if (jQuery.lastModified[ifModifiedKey]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[ifModifiedKey]);
        }
        if (jQuery.etag[ifModifiedKey]) {
            jqXHR.setRequestHeader("If-None-Match", jQuery.etag[ifModifiedKey]);
        }
    }
    jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : s.accepts['*']);
    for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
    }
    if (s.beforeSend &&
        (s.beforeSend.call(callbackContext, jqXHR, s) === false ||
        state === 2)) {
        jqXHR.abort();
        return false;
    }
    for (i in {success: 1, error: 1, complete: 1}) {
        jqXHR[i](s[i]);
    }
    transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
    if (!transport) {
        done(- 1, "No Transport");
    } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
            globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (s.async && s.timeout > 0) {
            timeoutTimer = setTimeout(function () {jqXHR.abort("timeout");}, s.timeout);
        }
        try {
            state = 1;
            transport.send(requestHeaders, done);
        } catch (e) {
            if (status < 2) {
                done(- 1, e);
            } else {
                jQuery.error(e);
            }
        }
    }
    return jqXHR;
};
jQuery.ajaxPrefilter = function (dataTypeExpression, func) {
/// <summary>
///     Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().
/// </summary>
/// <param name="dataTypeExpression" type="String">
///     An optional string containing one or more space-separated dataTypes
/// </param>
/// <param name="func" type="Function">
///     A handler to set default values for future Ajax requests.
/// </param>
/// <returns type="undefined" />

    if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
    }
    if (jQuery.isFunction(func)) {
        var dataTypes = dataTypeExpression.toLowerCase().split(rspacesAjax), i = 0, length = dataTypes.length, dataType, list, placeBefore;
        for (; i < length; i++) {
            dataType = dataTypes[i];
            placeBefore = /^\+/.test(dataType);
            if (placeBefore) {
                dataType = dataType.substr(1) || "*";
            }
            list = structure[dataType] = structure[dataType] || [];
            list[placeBefore ? "unshift" : "push"](func);
        }
    }
};
jQuery.ajaxSettings = { "url": 'http://damianedwards.com/vsdoc/?ver=1.6.2&newLineMethod=para',
"isLocal": false,
"global": true,
"type": 'GET',
"contentType": 'application/x-www-form-urlencoded',
"processData": true,
"async": true,
"accepts": {},
"contents": {},
"responseFields": {},
"converters": {},
"jsonp": 'callback' };
jQuery.ajaxSetup = function (target, settings) {
/// <summary>
///     Set default values for future Ajax requests.
/// </summary>
/// <param name="target" type="Object">
///     A set of key/value pairs that configure the default Ajax request. All options are optional.
/// </param>

    if (!settings) {
        settings = target;
        target = jQuery.extend(true, jQuery.ajaxSettings, settings);
    } else {
        jQuery.extend(true, target, jQuery.ajaxSettings, settings);
    }
    for (var field in {context: 1, url: 1}) {
        if (field in settings) {
            target[field] = settings[field];
        } else if (field in jQuery.ajaxSettings) {
            target[field] = jQuery.ajaxSettings[field];
        }
    }
    return target;
};
jQuery.ajaxTransport = function (dataTypeExpression, func) {

    if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
    }
    if (jQuery.isFunction(func)) {
        var dataTypes = dataTypeExpression.toLowerCase().split(rspacesAjax), i = 0, length = dataTypes.length, dataType, list, placeBefore;
        for (; i < length; i++) {
            dataType = dataTypes[i];
            placeBefore = /^\+/.test(dataType);
            if (placeBefore) {
                dataType = dataType.substr(1) || "*";
            }
            list = structure[dataType] = structure[dataType] || [];
            list[placeBefore ? "unshift" : "push"](func);
        }
    }
};
jQuery.attr = function (elem, name, value, pass) {

    var nType = elem.nodeType;
    if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return undefined;
    }
    if (pass && name in jQuery.attrFn) {
        return jQuery(elem)[name](value);
    }
    if (!("getAttribute" in elem)) {
        return jQuery.prop(elem, name, value);
    }
    var ret, hooks, notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
    if (notxml) {
        name = jQuery.attrFix[name] || name;
        hooks = jQuery.attrHooks[name];
        if (!hooks) {
            if (rboolean.test(name)) {
                hooks = boolHook;
            } else if (formHook &&
                name !== "className" &&
                (jQuery.nodeName(elem, "form") || rinvalidChar.test(name))) {
                hooks = formHook;
            }
        }
    }
    if (value !== undefined) {
        if (value === null) {
            jQuery.removeAttr(elem, name);
            return undefined;
        } else if (hooks &&
            "set" in hooks &&
            notxml && (ret = hooks.set(elem, value, name)) !== undefined) {
            return ret;
        } else {
            elem.setAttribute(name, "" + value);
            return value;
        }
    } else if (hooks &&
        "get" in hooks && notxml && (ret = hooks.get(elem, name)) !== null) {
        return ret;
    } else {
        ret = elem.getAttribute(name);
        return ret === null ? undefined : ret;
    }
};
jQuery.attrFix = { "tabindex": 'tabIndex' };
jQuery.attrFn = { "val": true,
"css": true,
"html": true,
"text": true,
"data": true,
"width": true,
"height": true,
"offset": true,
"blur": true,
"focus": true,
"focusin": true,
"focusout": true,
"load": true,
"resize": true,
"scroll": true,
"unload": true,
"click": true,
"dblclick": true,
"mousedown": true,
"mouseup": true,
"mousemove": true,
"mouseover": true,
"mouseout": true,
"mouseenter": true,
"mouseleave": true,
"change": true,
"select": true,
"submit": true,
"keydown": true,
"keypress": true,
"keyup": true,
"error": true };
jQuery.attrHooks = { "type": {},
"tabIndex": {},
"value": {} };
jQuery.bindReady = function () {

    if (readyList) {
        return;
    }
    readyList = jQuery._Deferred();
    if (document.readyState === "complete") {
        return setTimeout(jQuery.ready, 1);
    }
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
        window.addEventListener("load", jQuery.ready, false);
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", DOMContentLoaded);
        window.attachEvent("onload", jQuery.ready);
        var toplevel = false;
        try {
            toplevel = window.frameElement == null;
        } catch (e) {
        }
        if (document.documentElement.doScroll && toplevel) {
            doScrollCheck();
        }
    }
};
jQuery.boxModel = true;
jQuery.browser = { "mozilla": true,
"version": '12.0' };
jQuery.buildFragment = function (args, nodes, scripts) {

    var fragment, cacheable, cacheresults, doc;
    if (nodes && nodes[0]) {
        doc = nodes[0].ownerDocument || nodes[0];
    }
    if (!doc.createDocumentFragment) {
        doc = document;
    }
    if (args.length === 1 &&
        typeof args[0] === "string" &&
        args[0].length < 512 &&
        doc === document &&
        args[0].charAt(0) === "<" &&
        !rnocache.test(args[0]) &&
        (jQuery.support.checkClone || !rchecked.test(args[0]))) {
        cacheable = true;
        cacheresults = jQuery.fragments[args[0]];
        if (cacheresults && cacheresults !== 1) {
            fragment = cacheresults;
        }
    }
    if (!fragment) {
        fragment = doc.createDocumentFragment();
        jQuery.clean(args, doc, fragment, scripts);
    }
    if (cacheable) {
        jQuery.fragments[args[0]] = cacheresults ? fragment : 1;
    }
    return {fragment: fragment, cacheable: cacheable};
};
jQuery.cache = {};
jQuery.camelCase = function (string) {

    return string.replace(rdashAlpha, fcamelCase);
};
jQuery.clean = function (elems, context, fragment, scripts) {

    var checkScriptType;
    context = context || document;
    if (typeof context.createElement === "undefined") {
        context = context.ownerDocument ||
            context[0] && context[0].ownerDocument || document;
    }
    var ret = [], j;
    for (var i = 0, elem; (elem = elems[i]) != null; i++) {
        if (typeof elem === "number") {
            elem += "";
        }
        if (!elem) {
            continue;
        }
        if (typeof elem === "string") {
            if (!rhtml.test(elem)) {
                elem = context.createTextNode(elem);
            } else {
                elem = elem.replace(rxhtmlTag, "<$1></$2>");
                var tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, depth = wrap[0], div = context.createElement("div");
                div.innerHTML = wrap[1] + elem + wrap[2];
                while (depth--) {
                    div = div.lastChild;
                }
                if (!jQuery.support.tbody) {
                    var hasBody = rtbody.test(elem), tbody = tag === "table" && !hasBody ? div.firstChild && div.firstChild.childNodes : wrap[1] === "<table>" && !hasBody ? div.childNodes : [];
                    for (j = tbody.length - 1; j >= 0; --j) {
                        if (jQuery.nodeName(tbody[j], "tbody") &&
                            !tbody[j].childNodes.length) {
                            tbody[j].parentNode.removeChild(tbody[j]);
                        }
                    }
                }
                if (!jQuery.support.leadingWhitespace &&
                    rleadingWhitespace.test(elem)) {
                    div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]), div.firstChild);
                }
                elem = div.childNodes;
            }
        }
        var len;
        if (!jQuery.support.appendChecked) {
            if (elem[0] && typeof (len = elem.length) === "number") {
                for (j = 0; j < len; j++) {
                    findInputs(elem[j]);
                }
            } else {
                findInputs(elem);
            }
        }
        if (elem.nodeType) {
            ret.push(elem);
        } else {
            ret = jQuery.merge(ret, elem);
        }
    }
    if (fragment) {
        checkScriptType = function (elem) {return !elem.type || rscriptType.test(elem.type);};
        for (i = 0; ret[i]; i++) {
            if (scripts &&
                jQuery.nodeName(ret[i], "script") &&
                (!ret[i].type ||
                ret[i].type.toLowerCase() === "text/javascript")) {
                scripts.push(ret[i].parentNode ? ret[i].parentNode.removeChild(ret[i]) : ret[i]);
            } else {
                if (ret[i].nodeType === 1) {
                    var jsTags = jQuery.grep(ret[i].getElementsByTagName("script"), checkScriptType);
                    ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
                }
                fragment.appendChild(ret[i]);
            }
        }
    }
    return ret;
};
jQuery.cleanData = function (elems) {

    var data, id, cache = jQuery.cache, internalKey = jQuery.expando, special = jQuery.event.special, deleteExpando = jQuery.support.deleteExpando;
    for (var i = 0, elem; (elem = elems[i]) != null; i++) {
        if (elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()]) {
            continue;
        }
        id = elem[jQuery.expando];
        if (id) {
            data = cache[id] && cache[id][internalKey];
            if (data && data.events) {
                for (var type in data.events) {
                    if (special[type]) {
                        jQuery.event.remove(elem, type);
                    } else {
                        jQuery.removeEvent(elem, type, data.handle);
                    }
                }
                if (data.handle) {
                    data.handle.elem = null;
                }
            }
            if (deleteExpando) {
                delete elem[jQuery.expando];
            } else if (elem.removeAttribute) {
                elem.removeAttribute(jQuery.expando);
            }
            delete cache[id];
        }
    }
};
jQuery.clone = function (elem, dataAndEvents, deepDataAndEvents) {

    var clone = elem.cloneNode(true), srcElements, destElements, i;
    if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
        (elem.nodeType === 1 || elem.nodeType === 11) &&
        !jQuery.isXMLDoc(elem)) {
        cloneFixAttributes(elem, clone);
        srcElements = getAll(elem);
        destElements = getAll(clone);
        for (i = 0; srcElements[i]; ++i) {
            cloneFixAttributes(srcElements[i], destElements[i]);
        }
    }
    if (dataAndEvents) {
        cloneCopyEvent(elem, clone);
        if (deepDataAndEvents) {
            srcElements = getAll(elem);
            destElements = getAll(clone);
            for (i = 0; srcElements[i]; ++i) {
                cloneCopyEvent(srcElements[i], destElements[i]);
            }
        }
    }
    srcElements = destElements = null;
    return clone;
};
jQuery.contains = function (a, b) {
/// <summary>
///     Check to see if a DOM node is within another DOM node.
/// </summary>
/// <param name="a" domElement="true">
///     The DOM element that may contain the other element.
/// </param>
/// <param name="b" domElement="true">
///     The DOM node that may be contained by the other element.
/// </param>
/// <returns type="Boolean" />

    return a !== b && (a.contains ? a.contains(b) : true);
};
jQuery.css = function (elem, name, extra) {

    var ret, hooks;
    name = jQuery.camelCase(name);
    hooks = jQuery.cssHooks[name];
    name = jQuery.cssProps[name] || name;
    if (name === "cssFloat") {
        name = "float";
    }
    if (hooks &&
        "get" in hooks &&
        (ret = hooks.get(elem, true, extra)) !== undefined) {
        return ret;
    } else if (curCSS) {
        return curCSS(elem, name);
    }
};
jQuery.cssHooks = { "opacity": {},
"height": {},
"width": {} };
jQuery.cssNumber = { "fillOpacity": true,
"fontWeight": true,
"lineHeight": true,
"opacity": true,
"orphans": true,
"widows": true,
"zIndex": true,
"zoom": true };
jQuery.cssProps = { "float": 'cssFloat' };
jQuery.curCSS = function (elem, name, extra) {

    var ret, hooks;
    name = jQuery.camelCase(name);
    hooks = jQuery.cssHooks[name];
    name = jQuery.cssProps[name] || name;
    if (name === "cssFloat") {
        name = "float";
    }
    if (hooks &&
        "get" in hooks &&
        (ret = hooks.get(elem, true, extra)) !== undefined) {
        return ret;
    } else if (curCSS) {
        return curCSS(elem, name);
    }
};
jQuery.data = function (elem, name, data, pvt) {
/// <summary>
///     1: Store arbitrary data associated with the specified element. Returns the value that was set.
///     <para>    1.1 - jQuery.data(element, key, value)</para>
///     <para>2: Returns value at named data store for the element, as set by jQuery.data(element, name, value), or the full data store for the element.</para>
///     <para>    2.1 - jQuery.data(element, key) </para>
///     <para>    2.2 - jQuery.data(element)</para>
/// </summary>
/// <param name="elem" domElement="true">
///     The DOM element to associate with the data.
/// </param>
/// <param name="name" type="String">
///     A string naming the piece of data to set.
/// </param>
/// <param name="data" type="Object">
///     The new data value.
/// </param>
/// <returns type="Object" />

    if (!jQuery.acceptData(elem)) {
        return;
    }
    var internalKey = jQuery.expando, getByName = typeof name === "string", thisCache, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : elem[jQuery.expando] && jQuery.expando;
    if ((!id || pvt && id && !cache[id][internalKey]) &&
        getByName && data === undefined) {
        return;
    }
    if (!id) {
        if (isNode) {
            elem[jQuery.expando] = id = ++jQuery.uuid;
        } else {
            id = jQuery.expando;
        }
    }
    if (!cache[id]) {
        cache[id] = {};
        if (!isNode) {
            cache[id].toJSON = jQuery.noop;
        }
    }
    if (typeof name === "object" || typeof name === "function") {
        if (pvt) {
            cache[id][internalKey] = jQuery.extend(cache[id][internalKey], name);
        } else {
            cache[id] = jQuery.extend(cache[id], name);
        }
    }
    thisCache = cache[id];
    if (pvt) {
        if (!thisCache[internalKey]) {
            thisCache[internalKey] = {};
        }
        thisCache = thisCache[internalKey];
    }
    if (data !== undefined) {
        thisCache[jQuery.camelCase(name)] = data;
    }
    if (name === "events" && !thisCache[name]) {
        return thisCache[internalKey] && thisCache[internalKey].events;
    }
    return getByName ? thisCache[jQuery.camelCase(name)] || thisCache[name] : thisCache;
};
jQuery.dequeue = function (elem, type) {
/// <summary>
///     Execute the next function on the queue for the matched element.
/// </summary>
/// <param name="elem" domElement="true">
///     A DOM element from which to remove and execute a queued function.
/// </param>
/// <param name="type" type="String">
///     A string containing the name of the queue. Defaults to fx, the standard effects queue.
/// </param>
/// <returns type="jQuery" />

    type = type || "fx";
    var queue = jQuery.queue(elem, type), fn = queue.shift(), defer;
    if (fn === "inprogress") {
        fn = queue.shift();
    }
    if (fn) {
        if (type === "fx") {
            queue.unshift("inprogress");
        }
        fn.call(elem, function () {jQuery.dequeue(elem, type);});
    }
    if (!queue.length) {
        jQuery.removeData(elem, type + "queue", true);
        handleQueueMarkDefer(elem, type, "queue");
    }
};
jQuery.dir = function (elem, dir, until) {

    var matched = [], cur = elem[dir];
    while (cur &&
        cur.nodeType !== 9 &&
        (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
        if (cur.nodeType === 1) {
            matched.push(cur);
        }
        cur = cur[dir];
    }
    return matched;
};
jQuery.each = function (object, callback, args) {
/// <summary>
///     A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
/// </summary>
/// <param name="object" type="Object">
///     The object or array to iterate over.
/// </param>
/// <param name="callback" type="Function">
///     The function that will be executed on every object.
/// </param>
/// <returns type="Object" />

    var name, i = 0, length = object.length, isObj = length === undefined || jQuery.isFunction(object);
    if (args) {
        if (isObj) {
            for (name in object) {
                if (callback.apply(object[name], args) === false) {
                    break;
                }
            }
        } else {
            for (; i < length;) {
                if (callback.apply(object[i++], args) === false) {
                    break;
                }
            }
        }
    } else {
        if (isObj) {
            for (name in object) {
                if (callback.call(object[name], name, object[name]) === false) {
                    break;
                }
            }
        } else {
            for (; i < length;) {
                if (callback.call(object[i], i, object[i++]) === false) {
                    break;
                }
            }
        }
    }
    return object;
};
jQuery.easing = {};
jQuery.error = function (msg) {
/// <summary>
///     Takes a string and throws an exception containing it.
/// </summary>
/// <param name="msg" type="String">
///     The message to send out.
/// </param>

    throw msg;
};
jQuery.etag = {};
jQuery.event = { "global": {},
"customEvent": {},
"props": ['altKey','attrChange','attrName','bubbles','button','cancelable','charCode','clientX','clientY','ctrlKey','currentTarget','data','detail','eventPhase','fromElement','handler','keyCode','layerX','layerY','metaKey','newValue','offsetX','offsetY','pageX','pageY','prevValue','relatedNode','relatedTarget','screenX','screenY','shiftKey','srcElement','target','toElement','view','wheelDelta','which'],
"guid": 100000000,
"special": {},
"triggered":  };
jQuery.expr = { "order": ['ID','CLASS','NAME','TAG'],
"match": {},
"leftMatch": {},
"attrMap": {},
"attrHandle": {},
"relative": {},
"find": {},
"preFilter": {},
"filters": {},
"setFilters": {},
"filter": {},
":": {} };
jQuery.extend = function () {
/// <summary>
///     Merge the contents of two or more objects together into the first object.
///     <para>1 - jQuery.extend(target, object1, objectN) </para>
///     <para>2 - jQuery.extend(deep, target, object1, objectN)</para>
/// </summary>
/// <param name="" type="Boolean">
///     If true, the merge becomes recursive (aka. deep copy).
/// </param>
/// <param name="" type="Object">
///     The object to extend. It will receive the new properties.
/// </param>
/// <param name="" type="Object">
///     An object containing additional properties to merge in.
/// </param>
/// <param name="" type="Object">
///     Additional objects containing properties to merge in.
/// </param>
/// <returns type="Object" />

    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
        target = {};
    }
    if (length === i) {
        target = this;
        --i;
    }
    for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                if (target === copy) {
                    continue;
                }
                if (deep &&
                    copy &&
                    (jQuery.isPlainObject(copy) ||
                    (copyIsArray = jQuery.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && jQuery.isArray(src) ? src : [];
                    } else {
                        clone = src && jQuery.isPlainObject(src) ? src : {};
                    }
                    target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
};
jQuery.filter = function (expr, elems, not) {

    if (not) {
        expr = ":not(" + expr + ")";
    }
    return elems.length === 1 ? jQuery.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] : jQuery.find.matches(expr, elems);
};
jQuery.find = function (query, context, extra, seed) {

    context = context || document;
    if (!seed && !Sizzle.isXML(context)) {
        var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(query);
        if (match && (context.nodeType === 1 || context.nodeType === 9)) {
            if (match[1]) {
                return makeArray(context.getElementsByTagName(query), extra);
            } else if (match[2] &&
                Expr.find.CLASS && context.getElementsByClassName) {
                return makeArray(context.getElementsByClassName(match[2]), extra);
            }
        }
        if (context.nodeType === 9) {
            if (query === "body" && context.body) {
                return makeArray([context.body], extra);
            } else if (match && match[3]) {
                var elem = context.getElementById(match[3]);
                if (elem && elem.parentNode) {
                    if (elem.id === match[3]) {
                        return makeArray([elem], extra);
                    }
                } else {
                    return makeArray([], extra);
                }
            }
            try {
                return makeArray(context.querySelectorAll(query), extra);
            } catch (qsaError) {
            }
        } else if (context.nodeType === 1 &&
            context.nodeName.toLowerCase() !== "object") {
            var oldContext = context, old = context.getAttribute("id"), nid = old || id, hasParent = context.parentNode, relativeHierarchySelector = /^\s*[+~]/.test(query);
            if (!old) {
                context.setAttribute("id", nid);
            } else {
                nid = nid.replace(/'/g, "\\$&");
            }
            if (relativeHierarchySelector && hasParent) {
                context = context.parentNode;
            }
            try {
                if (!relativeHierarchySelector || hasParent) {
                    return makeArray(context.querySelectorAll("[id='" + nid + "'] " + query), extra);
                }
            } catch (pseudoError) {
            } finally {
                if (!old) {
                    oldContext.removeAttribute("id");
                }
            }
        }
    }
    return oldSizzle(query, context, extra, seed);
};
jQuery.fn = { "selector": '',
"jquery": '1.6.2',
"length": 0 };
jQuery.fragments = {};
jQuery.fx = function (elem, options, prop) {

    this.options = options;
    this.elem = elem;
    this.prop = prop;
    options.orig = options.orig || {};
};
jQuery.get = function (url, data, callback, type) {
/// <summary>
///     Load data from the server using a HTTP GET request.
/// </summary>
/// <param name="url" type="String">
///     A string containing the URL to which the request is sent.
/// </param>
/// <param name="data" type="String">
///     A map or string that is sent to the server with the request.
/// </param>
/// <param name="callback" type="Function">
///     A callback function that is executed if the request succeeds.
/// </param>
/// <param name="type" type="String">
///     The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
/// </param>

    if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
    }
    return jQuery.ajax({type: method, url: url, data: data, success: callback, dataType: type});
};
jQuery.getJSON = function (url, data, callback) {
/// <summary>
///     Load JSON-encoded data from the server using a GET HTTP request.
/// </summary>
/// <param name="url" type="String">
///     A string containing the URL to which the request is sent.
/// </param>
/// <param name="data" type="Object">
///     A map or string that is sent to the server with the request.
/// </param>
/// <param name="callback" type="Function">
///     A callback function that is executed if the request succeeds.
/// </param>

    return jQuery.get(url, data, callback, "json");
};
jQuery.getScript = function (url, callback) {
/// <summary>
///     Load a JavaScript file from the server using a GET HTTP request, then execute it.
/// </summary>
/// <param name="url" type="String">
///     A string containing the URL to which the request is sent.
/// </param>
/// <param name="callback" type="Function">
///     A callback function that is executed if the request succeeds.
/// </param>
/// <returns type="XMLHttpRequest" />

    return jQuery.get(url, undefined, callback, "script");
};
jQuery.globalEval = function (data) {
/// <summary>
///     Execute some JavaScript code globally.
/// </summary>
/// <param name="data" type="String">
///     The JavaScript code to execute.
/// </param>

    if (data && rnotwhite.test(data)) {
        (window.execScript ||
            function (data) {window.eval.call(window, data);})(data);
    }
};
jQuery.grep = function (elems, callback, inv) {
/// <summary>
///     Finds the elements of an array which satisfy a filter function. The original array is not affected.
/// </summary>
/// <param name="elems" type="Array">
///     The array to search through.
/// </param>
/// <param name="callback" type="Function">
///     The function to process each item against.  The first argument to the function is the item, and the second argument is the index.  The function should return a Boolean value.  this will be the global window object.
/// </param>
/// <param name="inv" type="Boolean">
///     If "invert" is false, or not provided, then the function returns an array consisting of all elements for which "callback" returns true.  If "invert" is true, then the function returns an array consisting of all elements for which "callback" returns false.
/// </param>
/// <returns type="Array" />

    var ret = [], retVal;
    inv = !!inv;
    for (var i = 0, length = elems.length; i < length; i++) {
        retVal = !!callback(elems[i], i);
        if (inv !== retVal) {
            ret.push(elems[i]);
        }
    }
    return ret;
};
jQuery.guid = 1;
jQuery.hasData = function (elem) {
/// <summary>
///     Determine whether an element has any jQuery data associated with it.
/// </summary>
/// <param name="elem" domElement="true">
///     A DOM element to be checked for data.
/// </param>
/// <returns type="Boolean" />

    elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
    return !!elem && !isEmptyDataObject(elem);
};
jQuery.holdReady = function (hold) {
/// <summary>
///     Holds or releases the execution of jQuery's ready event.
/// </summary>
/// <param name="hold" type="Boolean">
///     Indicates whether the ready hold is being requested or released
/// </param>
/// <returns type="Boolean" />

    if (hold) {
        jQuery.readyWait++;
    } else {
        jQuery.ready(true);
    }
};
jQuery.inArray = function (elem, array) {
/// <summary>
///     Search for a specified value within an array and return its index (or -1 if not found).
/// </summary>
/// <param name="elem" type="Object">
///     The value to search for.
/// </param>
/// <param name="array" type="Array">
///     An array through which to search.
/// </param>
/// <returns type="Number" />

    if (indexOf) {
        return indexOf.call(array, elem);
    }
    for (var i = 0, length = array.length; i < length; i++) {
        if (array[i] === elem) {
            return i;
        }
    }
    return - 1;
};
jQuery.isEmptyObject = function (obj) {
/// <summary>
///     Check to see if an object is empty (contains no properties).
/// </summary>
/// <param name="obj" type="Object">
///     The object that will be checked to see if it's empty.
/// </param>
/// <returns type="Boolean" />

    for (var name in obj) {
        return false;
    }
    return true;
};
jQuery.isFunction = function (obj) {
/// <summary>
///     Determine if the argument passed is a Javascript function object.
/// </summary>
/// <param name="obj" type="Object">
///     Object to test whether or not it is a function.
/// </param>
/// <returns type="boolean" />

    return jQuery.type(obj) === "function";
};
jQuery.isNaN = function (obj) {

    return obj == null || !rdigit.test(obj) || isNaN(obj);
};
jQuery.isPlainObject = function (obj) {
/// <summary>
///     Check to see if an object is a plain object (created using "{}" or "new Object").
/// </summary>
/// <param name="obj" type="Object">
///     The object that will be checked to see if it's a plain object.
/// </param>
/// <returns type="Boolean" />

    if (!obj ||
        jQuery.type(obj) !== "object" ||
        obj.nodeType || jQuery.isWindow(obj)) {
        return false;
    }
    if (obj.constructor &&
        !hasOwn.call(obj, "constructor") &&
        !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
    }
    var key;
    for (key in obj) {
    }
    return key === undefined || hasOwn.call(obj, key);
};
jQuery.isReady = true;
jQuery.isWindow = function (obj) {
/// <summary>
///     Determine whether the argument is a window.
/// </summary>
/// <param name="obj" type="Object">
///     Object to test whether or not it is a window.
/// </param>
/// <returns type="boolean" />

    return obj && typeof obj === "object" && "setInterval" in obj;
};
jQuery.isXMLDoc = function (elem) {
/// <summary>
///     Check to see if a DOM node is within an XML document (or is an XML document).
/// </summary>
/// <param name="elem" domElement="true">
///     The DOM node that will be checked to see if it's in an XML document.
/// </param>
/// <returns type="Boolean" />

    var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;
    return documentElement ? documentElement.nodeName !== "HTML" : false;
};
jQuery.lastModified = {};
jQuery.makeArray = function (array, results) {
/// <summary>
///     Convert an array-like object into a true JavaScript array.
/// </summary>
/// <param name="array" type="Object">
///     Any object to turn into a native Array.
/// </param>
/// <returns type="Array" />

    var ret = results || [];
    if (array != null) {
        var type = jQuery.type(array);
        if (array.length == null ||
            type === "string" ||
            type === "function" ||
            type === "regexp" || jQuery.isWindow(array)) {
            push.call(ret, array);
        } else {
            jQuery.merge(ret, array);
        }
    }
    return ret;
};
jQuery.map = function (elems, callback, arg) {
/// <summary>
///     Translate all items in an array or object to new array of items.
///     <para>1 - jQuery.map(array, callback(elementOfArray, indexInArray)) </para>
///     <para>2 - jQuery.map(arrayOrObject, callback( value, indexOrKey ))</para>
/// </summary>
/// <param name="elems" type="Array">
///     The Array to translate.
/// </param>
/// <param name="callback" type="Function">
///     The function to process each item against.  The first argument to the function is the array item, the second argument is the index in array The function can return any value. Within the function, this refers to the global (window) object.
/// </param>
/// <returns type="Array" />

    var value, key, ret = [], i = 0, length = elems.length, isArray = elems instanceof jQuery ||
        length !== undefined &&
        typeof length === "number" &&
        (length > 0 && elems[0] && elems[length - 1] ||
        length === 0 || jQuery.isArray(elems));
    if (isArray) {
        for (; i < length; i++) {
            value = callback(elems[i], i, arg);
            if (value != null) {
                ret[ret.length] = value;
            }
        }
    } else {
        for (key in elems) {
            value = callback(elems[key], key, arg);
            if (value != null) {
                ret[ret.length] = value;
            }
        }
    }
    return ret.concat.apply([], ret);
};
jQuery.merge = function (first, second) {
/// <summary>
///     Merge the contents of two arrays together into the first array.
/// </summary>
/// <param name="first" type="Array">
///     The first array to merge, the elements of second added.
/// </param>
/// <param name="second" type="Array">
///     The second array to merge into the first, unaltered.
/// </param>
/// <returns type="Array" />

    var i = first.length, j = 0;
    if (typeof second.length === "number") {
        for (var l = second.length; j < l; j++) {
            first[i++] = second[j];
        }
    } else {
        while (second[j] !== undefined) {
            first[i++] = second[j++];
        }
    }
    first.length = i;
    return first;
};
jQuery.noConflict = function (deep) {
/// <summary>
///     Relinquish jQuery's control of the $ variable.
/// </summary>
/// <param name="deep" type="Boolean">
///     A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
/// </param>
/// <returns type="Object" />

    if (window.$ === jQuery) {
        window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
        window.jQuery = _jQuery;
    }
    return jQuery;
};
jQuery.noData = { "embed": true,
"object": 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
"applet": true };
jQuery.nodeName = function (elem, name) {

    return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
};
jQuery.noop = function () {
/// <summary>
///     An empty function.
/// </summary>
/// <returns type="Function" />

};
jQuery.now = function () {
/// <summary>
///     Return a number representing the current time.
/// </summary>
/// <returns type="Number" />

    return (new Date).getTime();
};
jQuery.nth = function (cur, result, dir, elem) {

    result = result || 1;
    var num = 0;
    for (; cur; cur = cur[dir]) {
        if (cur.nodeType === 1 && ++num === result) {
            break;
        }
    }
    return cur;
};
jQuery.offset = {};
jQuery.param = function (a, traditional) {
/// <summary>
///     Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
///     <para>1 - jQuery.param(obj) </para>
///     <para>2 - jQuery.param(obj, traditional)</para>
/// </summary>
/// <param name="a" type="Object">
///     An array or object to serialize.
/// </param>
/// <param name="traditional" type="Boolean">
///     A Boolean indicating whether to perform a traditional "shallow" serialization.
/// </param>
/// <returns type="String" />

    var s = [], add = function (key, value) {value = jQuery.isFunction(value) ? value() : value;s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);};
    if (traditional === undefined) {
        traditional = jQuery.ajaxSettings.traditional;
    }
    if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
        jQuery.each(a, function () {add(this.name, this.value);});
    } else {
        for (var prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
        }
    }
    return s.join("&").replace(r20, "+");
};
jQuery.parseJSON = function (data) {
/// <summary>
///     Takes a well-formed JSON string and returns the resulting JavaScript object.
/// </summary>
/// <param name="data" type="String">
///     The JSON string to parse.
/// </param>
/// <returns type="Object" />

    if (typeof data !== "string" || !data) {
        return null;
    }
    data = jQuery.trim(data);
    if (window.JSON && window.JSON.parse) {
        return window.JSON.parse(data);
    }
    if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
        return (new Function("return " + data))();
    }
    jQuery.error("Invalid JSON: " + data);
};
jQuery.parseXML = function (data, xml, tmp) {
/// <summary>
///     Parses a string into an XML document.
/// </summary>
/// <param name="data" type="String">
///     a well-formed XML string to be parsed
/// </param>
/// <returns type="XMLDocument" />

    if (window.DOMParser) {
        tmp = new DOMParser;
        xml = tmp.parseFromString(data, "text/xml");
    } else {
        xml = new ActiveXObject("Microsoft.XMLDOM");
        xml.async = "false";
        xml.loadXML(data);
    }
    tmp = xml.documentElement;
    if (!tmp || !tmp.nodeName || tmp.nodeName === "parsererror") {
        jQuery.error("Invalid XML: " + data);
    }
    return xml;
};
jQuery.post = function (url, data, callback, type) {
/// <summary>
///     Load data from the server using a HTTP POST request.
/// </summary>
/// <param name="url" type="String">
///     A string containing the URL to which the request is sent.
/// </param>
/// <param name="data" type="String">
///     A map or string that is sent to the server with the request.
/// </param>
/// <param name="callback" type="Function">
///     A callback function that is executed if the request succeeds.
/// </param>
/// <param name="type" type="String">
///     The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
/// </param>

    if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
    }
    return jQuery.ajax({type: method, url: url, data: data, success: callback, dataType: type});
};
jQuery.prop = function (elem, name, value) {

    var nType = elem.nodeType;
    if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return undefined;
    }
    var ret, hooks, notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
    if (notxml) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
    }
    if (value !== undefined) {
        if (hooks &&
            "set" in hooks &&
            (ret = hooks.set(elem, value, name)) !== undefined) {
            return ret;
        } else {
            return elem[name] = value;
        }
    } else {
        if (hooks &&
            "get" in hooks && (ret = hooks.get(elem, name)) !== undefined) {
            return ret;
        } else {
            return elem[name];
        }
    }
};
jQuery.propFix = { "tabindex": 'tabIndex',
"readonly": 'readOnly',
"for": 'htmlFor',
"class": 'className',
"maxlength": 'maxLength',
"cellspacing": 'cellSpacing',
"cellpadding": 'cellPadding',
"rowspan": 'rowSpan',
"colspan": 'colSpan',
"usemap": 'useMap',
"frameborder": 'frameBorder',
"contenteditable": 'contentEditable' };
jQuery.propHooks = {};
jQuery.proxy = function (fn, context) {
/// <summary>
///     Takes a function and returns a new one that will always have a particular context.
///     <para>1 - jQuery.proxy(function, context) </para>
///     <para>2 - jQuery.proxy(context, name)</para>
/// </summary>
/// <param name="fn" type="Function">
///     The function whose context will be changed.
/// </param>
/// <param name="context" type="Object">
///     The object to which the context (this) of the function should be set.
/// </param>
/// <returns type="Function" />

    if (typeof context === "string") {
        var tmp = fn[context];
        context = fn;
        fn = tmp;
    }
    if (!jQuery.isFunction(fn)) {
        return undefined;
    }
    var args = slice.call(arguments, 2), proxy = function () {return fn.apply(context, args.concat(slice.call(arguments)));};
    proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;
    return proxy;
};
jQuery.queue = function (elem, type, data) {
/// <summary>
///     1: Show the queue of functions to be executed on the matched element.
///     <para>    1.1 - jQuery.queue(element, queueName)</para>
///     <para>2: Manipulate the queue of functions to be executed on the matched element.</para>
///     <para>    2.1 - jQuery.queue(element, queueName, newQueue) </para>
///     <para>    2.2 - jQuery.queue(element, queueName, callback())</para>
/// </summary>
/// <param name="elem" domElement="true">
///     A DOM element where the array of queued functions is attached.
/// </param>
/// <param name="type" type="String">
///     A string containing the name of the queue. Defaults to fx, the standard effects queue.
/// </param>
/// <param name="data" type="Array">
///     An array of functions to replace the current queue contents.
/// </param>
/// <returns type="jQuery" />

    if (elem) {
        type = (type || "fx") + "queue";
        var q = jQuery.data(elem, type, undefined, true);
        if (data) {
            if (!q || jQuery.isArray(data)) {
                q = jQuery.data(elem, type, jQuery.makeArray(data), true);
            } else {
                q.push(data);
            }
        }
        return q || [];
    }
};
jQuery.ready = function (wait) {

    if (wait === true && !--jQuery.readyWait ||
        wait !== true && !jQuery.isReady) {
        if (!document.body) {
            return setTimeout(jQuery.ready, 1);
        }
        jQuery.isReady = true;
        if (wait !== true && --jQuery.readyWait > 0) {
            return;
        }
        readyList.resolveWith(document, [jQuery]);
        if (jQuery.fn.trigger) {
            jQuery(document).trigger("ready").unbind("ready");
        }
    }
};
jQuery.readyWait = 0;
jQuery.removeAttr = function (elem, name) {

    var propName;
    if (elem.nodeType === 1) {
        name = jQuery.attrFix[name] || name;
        if (jQuery.support.getSetAttribute) {
            elem.removeAttribute(name);
        } else {
            jQuery.attr(elem, name, "");
            elem.removeAttributeNode(elem.getAttributeNode(name));
        }
        if (rboolean.test(name) &&
            (propName = jQuery.propFix[name] || name) in elem) {
            elem[propName] = false;
        }
    }
};
jQuery.removeData = function (elem, name, pvt) {
/// <summary>
///     Remove a previously-stored piece of data.
/// </summary>
/// <param name="elem" domElement="true">
///     A DOM element from which to remove data.
/// </param>
/// <param name="name" type="String">
///     A string naming the piece of data to remove.
/// </param>
/// <returns type="jQuery" />

    if (!jQuery.acceptData(elem)) {
        return;
    }
    var internalKey = jQuery.expando, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
    if (!cache[id]) {
        return;
    }
    if (name) {
        var thisCache = pvt ? cache[id][internalKey] : cache[id];
        if (thisCache) {
            delete thisCache[name];
            if (!isEmptyDataObject(thisCache)) {
                return;
            }
        }
    }
    if (pvt) {
        delete cache[id][internalKey];
        if (!isEmptyDataObject(cache[id])) {
            return;
        }
    }
    var internalCache = cache[id][internalKey];
    if (jQuery.support.deleteExpando || cache != window) {
        delete cache[id];
    } else {
        cache[id] = null;
    }
    if (internalCache) {
        cache[id] = {};
        if (!isNode) {
            cache[id].toJSON = jQuery.noop;
        }
        cache[id][internalKey] = internalCache;
    } else if (isNode) {
        if (jQuery.support.deleteExpando) {
            delete elem[jQuery.expando];
        } else if (elem.removeAttribute) {
            elem.removeAttribute(jQuery.expando);
        } else {
            elem[jQuery.expando] = null;
        }
    }
};
jQuery.removeEvent = function (elem, type, handle) {

    if (elem.removeEventListener) {
        elem.removeEventListener(type, handle, false);
    }
};
jQuery.sibling = function (n, elem) {

    var r = [];
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
            r.push(n);
        }
    }
    return r;
};
jQuery.speed = function (speed, easing, fn) {

    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {complete: fn || !fn && easing || jQuery.isFunction(speed) && speed, duration: speed, easing: fn && easing || easing && !jQuery.isFunction(easing) && easing};
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    opt.old = opt.complete;
    opt.complete = function (noUnmark) {if (jQuery.isFunction(opt.old)) {opt.old.call(this);}if (opt.queue !== false) {jQuery.dequeue(this);} else if (noUnmark !== false) {jQuery._unmark(this);}};
    return opt;
};
jQuery.style = function (elem, name, value, extra) {

    if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
    }
    var ret, type, origName = jQuery.camelCase(name), style = elem.style, hooks = jQuery.cssHooks[origName];
    name = jQuery.cssProps[origName] || origName;
    if (value !== undefined) {
        type = typeof value;
        if (type === "number" && isNaN(value) || value == null) {
            return;
        }
        if (type === "string" && rrelNum.test(value)) {
            value = + value.replace(rrelNumFilter, "") + parseFloat(jQuery.css(elem, name));
            type = "number";
        }
        if (type === "number" && !jQuery.cssNumber[origName]) {
            value += "px";
        }
        if (!hooks ||
            !("set" in hooks) ||
            (value = hooks.set(elem, value)) !== undefined) {
            try {
                style[name] = value;
            } catch (e) {
            }
        }
    } else {
        if (hooks &&
            "get" in hooks &&
            (ret = hooks.get(elem, false, extra)) !== undefined) {
            return ret;
        }
        return style[name];
    }
};
jQuery.sub = function () {
/// <summary>
///     Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object.
/// </summary>
/// <returns type="jQuery" />


    function jQuerySub(selector, context) {
        return new jQuerySub.fn.init(selector, context);
    }

    jQuery.extend(true, jQuerySub, this);
    jQuerySub.superclass = this;
    jQuerySub.fn = jQuerySub.prototype = this();
    jQuerySub.fn.constructor = jQuerySub;
    jQuerySub.sub = this.sub;
    jQuerySub.fn.init = function init(selector, context) {if (context && context instanceof jQuery && !(context instanceof jQuerySub)) {context = jQuerySub(context);}return jQuery.fn.init.call(this, selector, context, rootjQuerySub);};
    jQuerySub.fn.init.prototype = jQuerySub.fn;
    var rootjQuerySub = jQuerySub(document);
    return jQuerySub;
};
jQuery.support = { "leadingWhitespace": true,
"tbody": true,
"htmlSerialize": true,
"style": true,
"hrefNormalized": true,
"opacity": true,
"cssFloat": true,
"checkOn": true,
"optSelected": true,
"getSetAttribute": true,
"submitBubbles": true,
"changeBubbles": true,
"focusinBubbles": false,
"deleteExpando": true,
"noCloneEvent": true,
"inlineBlockNeedsLayout": false,
"shrinkWrapBlocks": false,
"reliableMarginRight": true,
"noCloneChecked": true,
"optDisabled": true,
"radioValue": true,
"checkClone": ,
"appendChecked": true,
"boxModel": true,
"reliableHiddenOffsets": true,
"ajax": true,
"cors": true };
jQuery.swap = function (elem, options, callback) {

    var old = {};
    for (var name in options) {
        old[name] = elem.style[name];
        elem.style[name] = options[name];
    }
    callback.call(elem);
    for (name in options) {
        elem.style[name] = old[name];
    }
};
jQuery.text = function (elems) {

    var ret = "", elem;
    for (var i = 0; elems[i]; i++) {
        elem = elems[i];
        if (elem.nodeType === 3 || elem.nodeType === 4) {
            ret += elem.nodeValue;
        } else if (elem.nodeType !== 8) {
            ret += Sizzle.getText(elem.childNodes);
        }
    }
    return ret;
};
jQuery.trim = function (text) {
/// <summary>
///     Remove the whitespace from the beginning and end of a string.
/// </summary>
/// <param name="text" type="String">
///     The string to trim.
/// </param>
/// <returns type="String" />

    return text == null ? "" : trim.call(text);
};
jQuery.type = function (obj) {
/// <summary>
///     Determine the internal JavaScript [[Class]] of an object.
/// </summary>
/// <param name="obj" type="Object">
///     Object to get the internal JavaScript [[Class]] of.
/// </param>
/// <returns type="String" />

    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
};
jQuery.uaMatch = function (ua) {

    ua = ua.toLowerCase();
    var match = rwebkit.exec(ua) ||
        ropera.exec(ua) ||
        rmsie.exec(ua) ||
        ua.indexOf("compatible") < 0 && rmozilla.exec(ua) || [];
    return {browser: match[1] || "", version: match[2] || "0"};
};
jQuery.unique = function (results) {
/// <summary>
///     Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
/// </summary>
/// <param name="results" type="Array">
///     The Array of DOM elements.
/// </param>
/// <returns type="Array" />

    if (sortOrder) {
        hasDuplicate = baseHasDuplicate;
        results.sort(sortOrder);
        if (hasDuplicate) {
            for (var i = 1; i < results.length; i++) {
                if (results[i] === results[i - 1]) {
                    results.splice(i--, 1);
                }
            }
        }
    }
    return results;
};
jQuery.uuid = 0;
jQuery.valHooks = { "option": {},
"select": {},
"radio": {},
"checkbox": {} };
jQuery.when = function (firstParam) {
/// <summary>
///     Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.
/// </summary>
/// <param name="firstParam" type="Deferred">
///     One or more Deferred objects, or plain JavaScript objects.
/// </param>
/// <returns type="Promise" />

    var args = arguments, i = 0, length = args.length, count = length, deferred = length <= 1 && firstParam && jQuery.isFunction(firstParam.promise) ? firstParam : jQuery.Deferred();

    function resolveFunc(i) {
        return function (value) {args[i] = arguments.length > 1 ? sliceDeferred.call(arguments, 0) : value;if (!--count) {deferred.resolveWith(deferred, sliceDeferred.call(args, 0));}};
    }

    if (length > 1) {
        for (; i < length; i++) {
            if (args[i] && jQuery.isFunction(args[i].promise)) {
                args[i].promise().then(resolveFunc(i), deferred.reject);
            } else {
                --count;
            }
        }
        if (!count) {
            deferred.resolveWith(deferred, args);
        }
    } else if (deferred !== firstParam) {
        deferred.resolveWith(deferred, length ? [firstParam] : []);
    }
    return deferred.promise();
};
jQuery.Event.prototype.isDefaultPrevented = function returnFalse() {
/// <summary>
///     Returns whether event.preventDefault() was ever called on this event object.
/// </summary>
/// <returns type="Boolean" />

    return false;
};
jQuery.Event.prototype.isImmediatePropagationStopped = function returnFalse() {
/// <summary>
///     Returns whether event.stopImmediatePropagation() was ever called on this event object.
/// </summary>
/// <returns type="Boolean" />

    return false;
};
jQuery.Event.prototype.isPropagationStopped = function returnFalse() {
/// <summary>
///     Returns whether event.stopPropagation() was ever called on this event object.
/// </summary>
/// <returns type="Boolean" />

    return false;
};
jQuery.Event.prototype.preventDefault = function () {
/// <summary>
///     If this method is called, the default action of the event will not be triggered.
/// </summary>
/// <returns type="undefined" />

    this.isDefaultPrevented = returnTrue;
    var e = this.originalEvent;
    if (!e) {
        return;
    }
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
};
jQuery.Event.prototype.stopImmediatePropagation = function () {
/// <summary>
///     Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
/// </summary>

    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
};
jQuery.Event.prototype.stopPropagation = function () {
/// <summary>
///     Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
/// </summary>

    this.isPropagationStopped = returnTrue;
    var e = this.originalEvent;
    if (!e) {
        return;
    }
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    e.cancelBubble = true;
};
jQuery.prototype._toggle = function (fn) {

    var args = arguments, guid = fn.guid || jQuery.guid++, i = 0, toggler = function (event) {var lastToggle = (jQuery.data(this, "lastToggle" + fn.guid) || 0) % i;jQuery.data(this, "lastToggle" + fn.guid, lastToggle + 1);event.preventDefault();return args[lastToggle].apply(this, arguments) || false;};
    toggler.guid = guid;
    while (i < args.length) {
        args[i++].guid = guid;
    }
    return this.click(toggler);
};
jQuery.prototype.add = function (selector, context) {
/// <summary>
///     Add elements to the set of matched elements.
///     <para>1 - add(selector) </para>
///     <para>2 - add(elements) </para>
///     <para>3 - add(html) </para>
///     <para>4 - add(jQuery object) </para>
///     <para>5 - add(selector, context)</para>
/// </summary>
/// <param name="selector" type="String">
///     A string representing a selector expression to find additional elements to add to the set of matched elements.
/// </param>
/// <param name="context" domElement="true">
///     The point in the document at which the selector should begin matching; similar to the context argument of the $(selector, context) method.
/// </param>
/// <returns type="jQuery" />

    var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector), all = jQuery.merge(this.get(), set);
    return this.pushStack(isDisconnected(set[0]) || isDisconnected(all[0]) ? all : jQuery.unique(all));
};
jQuery.prototype.addClass = function (value) {
/// <summary>
///     Adds the specified class(es) to each of the set of matched elements.
///     <para>1 - addClass(className) </para>
///     <para>2 - addClass(function(index, currentClass))</para>
/// </summary>
/// <param name="value" type="String">
///     One or more class names to be added to the class attribute of each matched element.
/// </param>
/// <returns type="jQuery" />

    var classNames, i, l, elem, setClass, c, cl;
    if (jQuery.isFunction(value)) {
        return this.each(function (j) {jQuery(this).addClass(value.call(this, j, this.className));});
    }
    if (value && typeof value === "string") {
        classNames = value.split(rspace);
        for (i = 0, l = this.length; i < l; i++) {
            elem = this[i];
            if (elem.nodeType === 1) {
                if (!elem.className && classNames.length === 1) {
                    elem.className = value;
                } else {
                    setClass = " " + elem.className + " ";
                    for (c = 0, cl = classNames.length; c < cl; c++) {
                        if (!~setClass.indexOf(" " + classNames[c] + " ")) {
                            setClass += classNames[c] + " ";
                        }
                    }
                    elem.className = jQuery.trim(setClass);
                }
            }
        }
    }
    return this;
};
jQuery.prototype.after = function () {
/// <summary>
///     Insert content, specified by the parameter, after each element in the set of matched elements.
///     <para>1 - after(content, content) </para>
///     <para>2 - after(function(index))</para>
/// </summary>
/// <param name="" type="jQuery">
///     HTML string, DOM element, or jQuery object to insert after each element in the set of matched elements.
/// </param>
/// <param name="" type="jQuery">
///     One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
/// </param>
/// <returns type="jQuery" />

    if (this[0] && this[0].parentNode) {
        return this.domManip(arguments, false, function (elem) {this.parentNode.insertBefore(elem, this.nextSibling);});
    } else if (arguments.length) {
        var set = this.pushStack(this, "after", arguments);
        set.push.apply(set, jQuery(arguments[0]).toArray());
        return set;
    }
};
jQuery.prototype.ajaxComplete = function (f) {
/// <summary>
///     Register a handler to be called when Ajax requests complete. This is an Ajax Event.
/// </summary>
/// <param name="f" type="Function">
///     The function to be invoked.
/// </param>
/// <returns type="jQuery" />

    return this.bind(o, f);
};
jQuery.prototype.ajaxError = function (f) {
/// <summary>
///     Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
/// </summary>
/// <param name="f" type="Function">
///     The function to be invoked.
/// </param>
/// <returns type="jQuery" />

    return this.bind(o, f);
};
jQuery.prototype.ajaxSend = function (f) {
/// <summary>
///     Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
/// </summary>
/// <param name="f" type="Function">
///     The function to be invoked.
/// </param>
/// <returns type="jQuery" />

    return this.bind(o, f);
};
jQuery.prototype.ajaxStart = function (f) {
/// <summary>
///     Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
/// </summary>
/// <param name="f" type="Function">
///     The function to be invoked.
/// </param>
/// <returns type="jQuery" />

    return this.bind(o, f);
};
jQuery.prototype.ajaxStop = function (f) {
/// <summary>
///     Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.
/// </summary>
/// <param name="f" type="Function">
///     The function to be invoked.
/// </param>
/// <returns type="jQuery" />

    return this.bind(o, f);
};
jQuery.prototype.ajaxSuccess = function (f) {
/// <summary>
///     Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.
/// </summary>
/// <param name="f" type="Function">
///     The function to be invoked.
/// </param>
/// <returns type="jQuery" />

    return this.bind(o, f);
};
jQuery.prototype.andSelf = function () {
/// <summary>
///     Add the previous set of elements on the stack to the current set.
/// </summary>
/// <returns type="jQuery" />

    return this.add(this.prevObject);
};
jQuery.prototype.animate = function (prop, speed, easing, callback) {
/// <summary>
///     Perform a custom animation of a set of CSS properties.
///     <para>1 - animate(properties, duration, easing, complete) </para>
///     <para>2 - animate(properties, options)</para>
/// </summary>
/// <param name="prop" type="Object">
///     A map of CSS properties that the animation will move toward.
/// </param>
/// <param name="speed" type="Number">
///     A string or number determining how long the animation will run.
/// </param>
/// <param name="easing" type="String">
///     A string indicating which easing function to use for the transition.
/// </param>
/// <param name="callback" type="Function">
///     A function to call once the animation is complete.
/// </param>
/// <returns type="jQuery" />

    var optall = jQuery.speed(speed, easing, callback);
    if (jQuery.isEmptyObject(prop)) {
        return this.each(optall.complete, [false]);
    }
    prop = jQuery.extend({}, prop);
    return this[optall.queue === false ? "each" : "queue"](function () {if (optall.queue === false) {jQuery._mark(this);}var opt = jQuery.extend({}, optall), isElement = this.nodeType === 1, hidden = isElement && jQuery(this).is(":hidden"), name, val, p, display, e, parts, start, end, unit;opt.animatedProperties = {};for (p in prop) {name = jQuery.camelCase(p);if (p !== name) {prop[name] = prop[p];delete prop[p];}val = prop[name];if (jQuery.isArray(val)) {opt.animatedProperties[name] = val[1];val = prop[name] = val[0];} else {opt.animatedProperties[name] = opt.specialEasing && opt.specialEasing[name] || opt.easing || "swing";}if (val === "hide" && hidden || val === "show" && !hidden) {return opt.complete.call(this);}if (isElement && (name === "height" || name === "width")) {opt.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];if (jQuery.css(this, "display") === "inline" && jQuery.css(this, "float") === "none") {if (!jQuery.support.inlineBlockNeedsLayout) {this.style.display = "inline-block";} else {display = defaultDisplay(this.nodeName);if (display === "inline") {this.style.display = "inline-block";} else {this.style.display = "inline";this.style.zoom = 1;}}}}}if (opt.overflow != null) {this.style.overflow = "hidden";}for (p in prop) {e = new jQuery.fx(this, opt, p);val = prop[p];if (rfxtypes.test(val)) {e[val === "toggle" ? hidden ? "show" : "hide" : val]();} else {parts = rfxnum.exec(val);start = e.cur();if (parts) {end = parseFloat(parts[2]);unit = parts[3] || (jQuery.cssNumber[p] ? "" : "px");if (unit !== "px") {jQuery.style(this, p, (end || 1) + unit);start = (end || 1) / e.cur() * start;jQuery.style(this, p, start + unit);}if (parts[1]) {end = (parts[1] === "-=" ? - 1 : 1) * end + start;}e.custom(start, end, unit);} else {e.custom(start, val, "");}}}return true;});
};
jQuery.prototype.append = function () {
/// <summary>
///     Insert content, specified by the parameter, to the end of each element in the set of matched elements.
///     <para>1 - append(content, content) </para>
///     <para>2 - append(function(index, html))</para>
/// </summary>
/// <param name="" type="jQuery">
///     DOM element, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
/// </param>
/// <param name="" type="jQuery">
///     One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
/// </param>
/// <returns type="jQuery" />

    return this.domManip(arguments, true, function (elem) {if (this.nodeType === 1) {this.appendChild(elem);}});
};
jQuery.prototype.appendTo = function (selector) {
/// <summary>
///     Insert every element in the set of matched elements to the end of the target.
/// </summary>
/// <param name="selector" type="jQuery">
///     A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
/// </param>
/// <returns type="jQuery" />

    var ret = [], insert = jQuery(selector), parent = this.length === 1 && this[0].parentNode;
    if (parent &&
        parent.nodeType === 11 &&
        parent.childNodes.length === 1 && insert.length === 1) {
        insert[original](this[0]);
        return this;
    } else {
        for (var i = 0, l = insert.length; i < l; i++) {
            var elems = (i > 0 ? this.clone(true) : this).get();
            jQuery(insert[i])[original](elems);
            ret = ret.concat(elems);
        }
        return this.pushStack(ret, name, insert.selector);
    }
};
jQuery.prototype.attr = function (name, value) {
/// <summary>
///     1: Get the value of an attribute for the first element in the set of matched elements.
///     <para>    1.1 - attr(attributeName)</para>
///     <para>2: Set one or more attributes for the set of matched elements.</para>
///     <para>    2.1 - attr(attributeName, value) </para>
///     <para>    2.2 - attr(map) </para>
///     <para>    2.3 - attr(attributeName, function(index, attr))</para>
/// </summary>
/// <param name="name" type="String">
///     The name of the attribute to set.
/// </param>
/// <param name="value" type="Number">
///     A value to set for the attribute.
/// </param>
/// <returns type="jQuery" />

    return jQuery.access(this, name, value, true, jQuery.attr);
};
jQuery.prototype.before = function () {
/// <summary>
///     Insert content, specified by the parameter, before each element in the set of matched elements.
///     <para>1 - before(content, content) </para>
///     <para>2 - before(function)</para>
/// </summary>
/// <param name="" type="jQuery">
///     HTML string, DOM element, or jQuery object to insert before each element in the set of matched elements.
/// </param>
/// <param name="" type="jQuery">
///     One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
/// </param>
/// <returns type="jQuery" />

    if (this[0] && this[0].parentNode) {
        return this.domManip(arguments, false, function (elem) {this.parentNode.insertBefore(elem, this);});
    } else if (arguments.length) {
        var set = jQuery(arguments[0]);
        set.push.apply(set, this.toArray());
        return this.pushStack(set, "before", arguments);
    }
};
jQuery.prototype.bind = function (type, data, fn) {
/// <summary>
///     Attach a handler to an event for the elements.
///     <para>1 - bind(eventType, eventData, handler(eventObject)) </para>
///     <para>2 - bind(eventType, eventData, false) </para>
///     <para>3 - bind(events)</para>
/// </summary>
/// <param name="type" type="String">
///     A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
/// </param>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    var handler;
    if (typeof type === "object") {
        for (var key in type) {
            this[name](key, data, type[key], fn);
        }
        return this;
    }
    if (arguments.length === 2 || data === false) {
        fn = data;
        data = undefined;
    }
    if (name === "one") {
        handler = function (event) {jQuery(this).unbind(event, handler);return fn.apply(this, arguments);};
        handler.guid = fn.guid || jQuery.guid++;
    } else {
        handler = fn;
    }
    if (type === "unload" && name !== "one") {
        this.one(type, data, fn);
    } else {
        for (var i = 0, l = this.length; i < l; i++) {
            jQuery.event.add(this[i], type, handler, data);
        }
    }
    return this;
};
jQuery.prototype.blur = function (data, fn) {
/// <summary>
///     Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
///     <para>1 - blur(handler(eventObject)) </para>
///     <para>2 - blur(eventData, handler(eventObject)) </para>
///     <para>3 - blur()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.change = function (data, fn) {
/// <summary>
///     Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
///     <para>1 - change(handler(eventObject)) </para>
///     <para>2 - change(eventData, handler(eventObject)) </para>
///     <para>3 - change()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.children = function (until, selector) {
/// <summary>
///     Get the children of each element in the set of matched elements, optionally filtered by a selector.
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.clearQueue = function (type) {
/// <summary>
///     Remove from the queue all items that have not yet been run.
/// </summary>
/// <param name="type" type="String">
///     A string containing the name of the queue. Defaults to fx, the standard effects queue.
/// </param>
/// <returns type="jQuery" />

    return this.queue(type || "fx", []);
};
jQuery.prototype.click = function (data, fn) {
/// <summary>
///     Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
///     <para>1 - click(handler(eventObject)) </para>
///     <para>2 - click(eventData, handler(eventObject)) </para>
///     <para>3 - click()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.clone = function (dataAndEvents, deepDataAndEvents) {
/// <summary>
///     Create a deep copy of the set of matched elements.
///     <para>1 - clone(withDataAndEvents) </para>
///     <para>2 - clone(withDataAndEvents, deepWithDataAndEvents)</para>
/// </summary>
/// <param name="dataAndEvents" type="Boolean">
///     A Boolean indicating whether event handlers and data should be copied along with the elements. The default value is false. *For 1.5.0 the default value is incorrectly true. This will be changed back to false in 1.5.1 and up.
/// </param>
/// <param name="deepDataAndEvents" type="Boolean">
///     A Boolean indicating whether event handlers and data for all children of the cloned element should be copied. By default its value matches the first argument's value (which defaults to false).
/// </param>
/// <returns type="jQuery" />

    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
    return this.map(function () {return jQuery.clone(this, dataAndEvents, deepDataAndEvents);});
};
jQuery.prototype.closest = function (selectors, context) {
/// <summary>
///     1: Get the first ancestor element that matches the selector, beginning at the current element and progressing up through the DOM tree.
///     <para>    1.1 - closest(selector) </para>
///     <para>    1.2 - closest(selector, context) </para>
///     <para>    1.3 - closest(jQuery object) </para>
///     <para>    1.4 - closest(element)</para>
///     <para>2: Gets an array of all the elements and selectors matched against the current element up through the DOM tree.</para>
///     <para>    2.1 - closest(selectors, context)</para>
/// </summary>
/// <param name="selectors" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <param name="context" domElement="true">
///     A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
/// </param>
/// <returns type="jQuery" />

    var ret = [], i, l, cur = this[0];
    if (jQuery.isArray(selectors)) {
        var match, selector, matches = {}, level = 1;
        if (cur && selectors.length) {
            for (i = 0, l = selectors.length; i < l; i++) {
                selector = selectors[i];
                if (!matches[selector]) {
                    matches[selector] = POS.test(selector) ? jQuery(selector, context || this.context) : selector;
                }
            }
            while (cur && cur.ownerDocument && cur !== context) {
                for (selector in matches) {
                    match = matches[selector];
                    if (match.jquery ? match.index(cur) > - 1 : jQuery(cur).is(match)) {
                        ret.push({selector: selector, elem: cur, level: level});
                    }
                }
                cur = cur.parentNode;
                level++;
            }
        }
        return ret;
    }
    var pos = POS.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
    for (i = 0, l = this.length; i < l; i++) {
        cur = this[i];
        while (cur) {
            if (pos ? pos.index(cur) > - 1 : jQuery.find.matchesSelector(cur, selectors)) {
                ret.push(cur);
                break;
            } else {
                cur = cur.parentNode;
                if (!cur ||
                    !cur.ownerDocument ||
                    cur === context || cur.nodeType === 11) {
                    break;
                }
            }
        }
    }
    ret = ret.length > 1 ? jQuery.unique(ret) : ret;
    return this.pushStack(ret, "closest", selectors);
};
jQuery.prototype.constructor = function (selector, context) {

    return new jQuery.fn.init(selector, context, rootjQuery);
};
jQuery.prototype.contents = function (until, selector) {
/// <summary>
///     Get the children of each element in the set of matched elements, including text and comment nodes.
/// </summary>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.css = function (name, value) {
/// <summary>
///     1: Get the value of a style property for the first element in the set of matched elements.
///     <para>    1.1 - css(propertyName)</para>
///     <para>2: Set one or more CSS properties for the  set of matched elements.</para>
///     <para>    2.1 - css(propertyName, value) </para>
///     <para>    2.2 - css(propertyName, function(index, value)) </para>
///     <para>    2.3 - css(map)</para>
/// </summary>
/// <param name="name" type="String">
///     A CSS property name.
/// </param>
/// <param name="value" type="Number">
///     A value to set for the property.
/// </param>
/// <returns type="jQuery" />

    if (arguments.length === 2 && value === undefined) {
        return this;
    }
    return jQuery.access(this, name, value, true, function (elem, name, value) {return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);});
};
jQuery.prototype.data = function (key, value) {
/// <summary>
///     1: Store arbitrary data associated with the matched elements.
///     <para>    1.1 - data(key, value) </para>
///     <para>    1.2 - data(obj)</para>
///     <para>2: Returns value at named data store for the first element in the jQuery collection, as set by data(name, value).</para>
///     <para>    2.1 - data(key) </para>
///     <para>    2.2 - data()</para>
/// </summary>
/// <param name="key" type="String">
///     A string naming the piece of data to set.
/// </param>
/// <param name="value" type="Object">
///     The new data value; it can be any Javascript type including Array or Object.
/// </param>
/// <returns type="jQuery" />

    var data = null;
    if (typeof key === "undefined") {
        if (this.length) {
            data = jQuery.data(this[0]);
            if (this[0].nodeType === 1) {
                var attr = this[0].attributes, name;
                for (var i = 0, l = attr.length; i < l; i++) {
                    name = attr[i].name;
                    if (name.indexOf("data-") === 0) {
                        name = jQuery.camelCase(name.substring(5));
                        dataAttr(this[0], name, data[name]);
                    }
                }
            }
        }
        return data;
    } else if (typeof key === "object") {
        return this.each(function () {jQuery.data(this, key);});
    }
    var parts = key.split(".");
    parts[1] = parts[1] ? "." + parts[1] : "";
    if (value === undefined) {
        data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);
        if (data === undefined && this.length) {
            data = jQuery.data(this[0], key);
            data = dataAttr(this[0], key, data);
        }
        return data === undefined && parts[1] ? this.data(parts[0]) : data;
    } else {
        return this.each(function () {var $this = jQuery(this), args = [parts[0], value];$this.triggerHandler("setData" + parts[1] + "!", args);jQuery.data(this, key, value);$this.triggerHandler("changeData" + parts[1] + "!", args);});
    }
};
jQuery.prototype.dblclick = function (data, fn) {
/// <summary>
///     Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
///     <para>1 - dblclick(handler(eventObject)) </para>
///     <para>2 - dblclick(eventData, handler(eventObject)) </para>
///     <para>3 - dblclick()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.delay = function (time, type) {
/// <summary>
///     Set a timer to delay execution of subsequent items in the queue.
/// </summary>
/// <param name="time" type="Number">
///     An integer indicating the number of milliseconds to delay execution of the next item in the queue.
/// </param>
/// <param name="type" type="String">
///     A string containing the name of the queue. Defaults to fx, the standard effects queue.
/// </param>
/// <returns type="jQuery" />

    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function () {var elem = this;setTimeout(function () {jQuery.dequeue(elem, type);}, time);});
};
jQuery.prototype.delegate = function (selector, types, data, fn) {
/// <summary>
///     Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.
///     <para>1 - delegate(selector, eventType, handler) </para>
///     <para>2 - delegate(selector, eventType, eventData, handler) </para>
///     <para>3 - delegate(selector, events)</para>
/// </summary>
/// <param name="selector" type="String">
///     A selector to filter the elements that trigger the event.
/// </param>
/// <param name="types" type="String">
///     A string containing one or more space-separated JavaScript event types, such as "click" or "keydown," or custom event names.
/// </param>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute at the time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    return this.live(types, data, fn, selector);
};
jQuery.prototype.dequeue = function (type) {
/// <summary>
///     Execute the next function on the queue for the matched elements.
/// </summary>
/// <param name="type" type="String">
///     A string containing the name of the queue. Defaults to fx, the standard effects queue.
/// </param>
/// <returns type="jQuery" />

    return this.each(function () {jQuery.dequeue(this, type);});
};
jQuery.prototype.detach = function (selector) {
/// <summary>
///     Remove the set of matched elements from the DOM.
/// </summary>
/// <param name="selector" type="String">
///     A selector expression that filters the set of matched elements to be removed.
/// </param>
/// <returns type="jQuery" />

    return this.remove(selector, true);
};
jQuery.prototype.die = function (types, data, fn, origSelector) {
/// <summary>
///     1: Remove all event handlers previously attached using .live() from the elements.
///     <para>    1.1 - die()</para>
///     <para>2: Remove an event handler previously attached using .live() from the elements.</para>
///     <para>    2.1 - die(eventType, handler) </para>
///     <para>    2.2 - die(eventTypes)</para>
/// </summary>
/// <param name="types" type="String">
///     A string containing a JavaScript event type, such as click or keydown.
/// </param>
/// <param name="data" type="String">
///     The function that is no longer to be executed.
/// </param>
/// <returns type="jQuery" />

    var type, i = 0, match, namespaces, preType, selector = origSelector || this.selector, context = origSelector ? this : jQuery(this.context);
    if (typeof types === "object" && !types.preventDefault) {
        for (var key in types) {
            context[name](key, data, types[key], selector);
        }
        return this;
    }
    if (name === "die" &&
        !types && origSelector && origSelector.charAt(0) === ".") {
        context.unbind(origSelector);
        return this;
    }
    if (data === false || jQuery.isFunction(data)) {
        fn = data || returnFalse;
        data = undefined;
    }
    types = (types || "").split(" ");
    while ((type = types[i++]) != null) {
        match = rnamespaces.exec(type);
        namespaces = "";
        if (match) {
            namespaces = match[0];
            type = type.replace(rnamespaces, "");
        }
        if (type === "hover") {
            types.push("mouseenter" + namespaces, "mouseleave" + namespaces);
            continue;
        }
        preType = type;
        if (liveMap[type]) {
            types.push(liveMap[type] + namespaces);
            type = type + namespaces;
        } else {
            type = (liveMap[type] || type) + namespaces;
        }
        if (name === "live") {
            for (var j = 0, l = context.length; j < l; j++) {
                jQuery.event.add(context[j], "live." + liveConvert(type, selector), {data: data, selector: selector, handler: fn, origType: type, origHandler: fn, preType: preType});
            }
        } else {
            context.unbind("live." + liveConvert(type, selector), fn);
        }
    }
    return this;
};
jQuery.prototype.domManip = function (args, table, callback) {

    var results, first, fragment, parent, value = args[0], scripts = [];
    if (!jQuery.support.checkClone &&
        arguments.length === 3 &&
        typeof value === "string" && rchecked.test(value)) {
        return this.each(function () {jQuery(this).domManip(args, table, callback, true);});
    }
    if (jQuery.isFunction(value)) {
        return this.each(function (i) {var self = jQuery(this);args[0] = value.call(this, i, table ? self.html() : undefined);self.domManip(args, table, callback);});
    }
    if (this[0]) {
        parent = value && value.parentNode;
        if (jQuery.support.parentNode &&
            parent &&
            parent.nodeType === 11 &&
            parent.childNodes.length === this.length) {
            results = {fragment: parent};
        } else {
            results = jQuery.buildFragment(args, this, scripts);
        }
        fragment = results.fragment;
        if (fragment.childNodes.length === 1) {
            first = fragment = fragment.firstChild;
        } else {
            first = fragment.firstChild;
        }
        if (first) {
            table = table && jQuery.nodeName(first, "tr");
            for (var i = 0, l = this.length, lastIndex = l - 1; i < l; i++) {
                callback.call(table ? root(this[i], first) : this[i], results.cacheable || l > 1 && i < lastIndex ? jQuery.clone(fragment, true, true) : fragment);
            }
        }
        if (scripts.length) {
            jQuery.each(scripts, evalScript);
        }
    }
    return this;
};
jQuery.prototype.each = function (callback, args) {
/// <summary>
///     Iterate over a jQuery object, executing a function for each matched element.
/// </summary>
/// <param name="callback" type="Function">
///     A function to execute for each matched element.
/// </param>
/// <returns type="jQuery" />

    return jQuery.each(this, callback, args);
};
jQuery.prototype.empty = function () {
/// <summary>
///     Remove all child nodes of the set of matched elements from the DOM.
/// </summary>
/// <returns type="jQuery" />

    for (var i = 0, elem; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
            jQuery.cleanData(elem.getElementsByTagName("*"));
        }
        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
    }
    return this;
};
jQuery.prototype.end = function () {
/// <summary>
///     End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
/// </summary>
/// <returns type="jQuery" />

    return this.prevObject || this.constructor(null);
};
jQuery.prototype.eq = function (i) {
/// <summary>
///     Reduce the set of matched elements to the one at the specified index.
///     <para>1 - eq(index) </para>
///     <para>2 - eq(-index)</para>
/// </summary>
/// <param name="i" type="Number">
///     An integer indicating the 0-based position of the element.
/// </param>
/// <returns type="jQuery" />

    return i === - 1 ? this.slice(i) : this.slice(i, + i + 1);
};
jQuery.prototype.error = function (data, fn) {
/// <summary>
///     Bind an event handler to the "error" JavaScript event.
///     <para>1 - error(handler(eventObject)) </para>
///     <para>2 - error(eventData, handler(eventObject))</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.extend = function () {

    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
        target = {};
    }
    if (length === i) {
        target = this;
        --i;
    }
    for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                if (target === copy) {
                    continue;
                }
                if (deep &&
                    copy &&
                    (jQuery.isPlainObject(copy) ||
                    (copyIsArray = jQuery.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && jQuery.isArray(src) ? src : [];
                    } else {
                        clone = src && jQuery.isPlainObject(src) ? src : {};
                    }
                    target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
};
jQuery.prototype.fadeIn = function (speed, easing, callback) {
/// <summary>
///     Display the matched elements by fading them to opaque.
///     <para>1 - fadeIn(duration, callback) </para>
///     <para>2 - fadeIn(duration, easing, callback)</para>
/// </summary>
/// <param name="speed" type="Number">
///     A string or number determining how long the animation will run.
/// </param>
/// <param name="easing" type="String">
///     A string indicating which easing function to use for the transition.
/// </param>
/// <param name="callback" type="Function">
///     A function to call once the animation is complete.
/// </param>
/// <returns type="jQuery" />

    return this.animate(props, speed, easing, callback);
};
jQuery.prototype.fadeOut = function (speed, easing, callback) {
/// <summary>
///     Hide the matched elements by fading them to transparent.
///     <para>1 - fadeOut(duration, callback) </para>
///     <para>2 - fadeOut(duration, easing, callback)</para>
/// </summary>
/// <param name="speed" type="Number">
///     A string or number determining how long the animation will run.
/// </param>
/// <param name="easing" type="String">
///     A string indicating which easing function to use for the transition.
/// </param>
/// <param name="callback" type="Function">
///     A function to call once the animation is complete.
/// </param>
/// <returns type="jQuery" />

    return this.animate(props, speed, easing, callback);
};
jQuery.prototype.fadeTo = function (speed, to, easing, callback) {
/// <summary>
///     Adjust the opacity of the matched elements.
///     <para>1 - fadeTo(duration, opacity, callback) </para>
///     <para>2 - fadeTo(duration, opacity, easing, callback)</para>
/// </summary>
/// <param name="speed" type="Number">
///     A string or number determining how long the animation will run.
/// </param>
/// <param name="to" type="Number">
///     A number between 0 and 1 denoting the target opacity.
/// </param>
/// <param name="easing" type="String">
///     A string indicating which easing function to use for the transition.
/// </param>
/// <param name="callback" type="Function">
///     A function to call once the animation is complete.
/// </param>
/// <returns type="jQuery" />

    return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
};
jQuery.prototype.fadeToggle = function (speed, easing, callback) {
/// <summary>
///     Display or hide the matched elements by animating their opacity.
/// </summary>
/// <param name="speed" type="Number">
///     A string or number determining how long the animation will run.
/// </param>
/// <param name="easing" type="String">
///     A string indicating which easing function to use for the transition.
/// </param>
/// <param name="callback" type="Function">
///     A function to call once the animation is complete.
/// </param>
/// <returns type="jQuery" />

    return this.animate(props, speed, easing, callback);
};
jQuery.prototype.filter = function (selector) {
/// <summary>
///     Reduce the set of matched elements to those that match the selector or pass the function's test.
///     <para>1 - filter(selector) </para>
///     <para>2 - filter(function(index)) </para>
///     <para>3 - filter(element) </para>
///     <para>4 - filter(jQuery object)</para>
/// </summary>
/// <param name="selector" type="String">
///     A string containing a selector expression to match the current set of elements against.
/// </param>
/// <returns type="jQuery" />

    return this.pushStack(winnow(this, selector, true), "filter", selector);
};
jQuery.prototype.find = function (selector) {
/// <summary>
///     Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
///     <para>1 - find(selector) </para>
///     <para>2 - find(jQuery object) </para>
///     <para>3 - find(element)</para>
/// </summary>
/// <param name="selector" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var self = this, i, l;
    if (typeof selector !== "string") {
        return jQuery(selector).filter(function () {for (i = 0, l = self.length; i < l; i++) {if (jQuery.contains(self[i], this)) {return true;}}});
    }
    var ret = this.pushStack("", "find", selector), length, n, r;
    for (i = 0, l = this.length; i < l; i++) {
        length = ret.length;
        jQuery.find(selector, this[i], ret);
        if (i > 0) {
            for (n = length; n < ret.length; n++) {
                for (r = 0; r < length; r++) {
                    if (ret[r] === ret[n]) {
                        ret.splice(n--, 1);
                        break;
                    }
                }
            }
        }
    }
    return ret;
};
jQuery.prototype.first = function () {
/// <summary>
///     Reduce the set of matched elements to the first in the set.
/// </summary>
/// <returns type="jQuery" />

    return this.eq(0);
};
jQuery.prototype.focus = function (data, fn) {
/// <summary>
///     Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
///     <para>1 - focus(handler(eventObject)) </para>
///     <para>2 - focus(eventData, handler(eventObject)) </para>
///     <para>3 - focus()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.focusin = function (data, fn) {
/// <summary>
///     Bind an event handler to the "focusin" JavaScript event.
///     <para>1 - focusin(handler(eventObject)) </para>
///     <para>2 - focusin(eventData, handler(eventObject))</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.focusout = function (data, fn) {
/// <summary>
///     Bind an event handler to the "focusout" JavaScript event.
///     <para>1 - focusout(handler(eventObject)) </para>
///     <para>2 - focusout(eventData, handler(eventObject))</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.get = function (num) {
/// <summary>
///     Retrieve the DOM elements matched by the jQuery object.
/// </summary>
/// <param name="num" type="Number">
///     A zero-based integer indicating which element to retrieve.
/// </param>
/// <returns type="Array" />

    return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num];
};
jQuery.prototype.has = function (target) {
/// <summary>
///     Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
///     <para>1 - has(selector) </para>
///     <para>2 - has(contained)</para>
/// </summary>
/// <param name="target" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var targets = jQuery(target);
    return this.filter(function () {for (var i = 0, l = targets.length; i < l; i++) {if (jQuery.contains(this, targets[i])) {return true;}}});
};
jQuery.prototype.hasClass = function (selector) {
/// <summary>
///     Determine whether any of the matched elements are assigned the given class.
/// </summary>
/// <param name="selector" type="String">
///     The class name to search for.
/// </param>
/// <returns type="Boolean" />

    var className = " " + selector + " ";
    for (var i = 0, l = this.length; i < l; i++) {
        if ((" " + this[i].className + " ").replace(rclass, " ").indexOf(className) > - 1) {
            return true;
        }
    }
    return false;
};
jQuery.prototype.height = function (size) {
/// <summary>
///     1: Get the current computed height for the first element in the set of matched elements.
///     <para>    1.1 - height()</para>
///     <para>2: Set the CSS height of every matched element.</para>
///     <para>    2.1 - height(value) </para>
///     <para>    2.2 - height(function(index, height))</para>
/// </summary>
/// <param name="size" type="Number">
///     An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
/// </param>
/// <returns type="jQuery" />

    var elem = this[0];
    if (!elem) {
        return size == null ? null : this;
    }
    if (jQuery.isFunction(size)) {
        return this.each(function (i) {var self = jQuery(this);self[type](size.call(this, i, self[type]()));});
    }
    if (jQuery.isWindow(elem)) {
        var docElemProp = elem.document.documentElement["client" + name];
        return elem.document.compatMode === "CSS1Compat" && docElemProp ||
            elem.document.body["client" + name] || docElemProp;
    } else if (elem.nodeType === 9) {
        return Math.max(elem.documentElement["client" + name], elem.body["scroll" + name], elem.documentElement["scroll" + name], elem.body["offset" + name], elem.documentElement["offset" + name]);
    } else if (size === undefined) {
        var orig = jQuery.css(elem, type), ret = parseFloat(orig);
        return jQuery.isNaN(ret) ? orig : ret;
    } else {
        return this.css(type, typeof size === "string" ? size : size + "px");
    }
};
jQuery.prototype.hide = function (speed, easing, callback) {
/// <summary>
///     Hide the matched elements.
///     <para>1 - hide() </para>
///     <para>2 - hide(duration, callback) </para>
///     <para>3 - hide(duration, easing, callback)</para>
/// </summary>
/// <param name="speed" type="Number">
///     A string or number determining how long the animation will run.
/// </param>
/// <param name="easing" type="String">
///     A string indicating which easing function to use for the transition.
/// </param>
/// <param name="callback" type="Function">
///     A function to call once the animation is complete.
/// </param>
/// <returns type="jQuery" />

    if (speed || speed === 0) {
        return this.animate(genFx("hide", 3), speed, easing, callback);
    } else {
        for (var i = 0, j = this.length; i < j; i++) {
            if (this[i].style) {
                var display = jQuery.css(this[i], "display");
                if (display !== "none" &&
                    !jQuery._data(this[i], "olddisplay")) {
                    jQuery._data(this[i], "olddisplay", display);
                }
            }
        }
        for (i = 0; i < j; i++) {
            if (this[i].style) {
                this[i].style.display = "none";
            }
        }
        return this;
    }
};
jQuery.prototype.hover = function (fnOver, fnOut) {
/// <summary>
///     1: Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
///     <para>    1.1 - hover(handlerIn(eventObject), handlerOut(eventObject))</para>
///     <para>2: Bind a single handler to the matched elements, to be executed when the mouse pointer enters or leaves the elements.</para>
///     <para>    2.1 - hover(handlerInOut(eventObject))</para>
/// </summary>
/// <param name="fnOver" type="Function">
///     A function to execute when the mouse pointer enters the element.
/// </param>
/// <param name="fnOut" type="Function">
///     A function to execute when the mouse pointer leaves the element.
/// </param>
/// <returns type="jQuery" />

    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
};
jQuery.prototype.html = function (value) {
/// <summary>
///     1: Get the HTML contents of the first element in the set of matched elements.
///     <para>    1.1 - html()</para>
///     <para>2: Set the HTML contents of each element in the set of matched elements.</para>
///     <para>    2.1 - html(htmlString) </para>
///     <para>    2.2 - html(function(index, oldhtml))</para>
/// </summary>
/// <param name="value" type="String">
///     A string of HTML to set as the content of each matched element.
/// </param>
/// <returns type="jQuery" />

    if (value === undefined) {
        return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(rinlinejQuery, "") : null;
    } else if (typeof value === "string" &&
        !rnocache.test(value) &&
        (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) &&
        !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
        value = value.replace(rxhtmlTag, "<$1></$2>");
        try {
            for (var i = 0, l = this.length; i < l; i++) {
                if (this[i].nodeType === 1) {
                    jQuery.cleanData(this[i].getElementsByTagName("*"));
                    this[i].innerHTML = value;
                }
            }
        } catch (e) {
            this.empty().append(value);
        }
    } else if (jQuery.isFunction(value)) {
        this.each(function (i) {var self = jQuery(this);self.html(value.call(this, i, self.html()));});
    } else {
        this.empty().append(value);
    }
    return this;
};
jQuery.prototype.index = function (elem) {
/// <summary>
///     Search for a given element from among the matched elements.
///     <para>1 - index() </para>
///     <para>2 - index(selector) </para>
///     <para>3 - index(element)</para>
/// </summary>
/// <param name="elem" type="String">
///     A selector representing a jQuery collection in which to look for an element.
/// </param>
/// <returns type="Number" />

    if (!elem || typeof elem === "string") {
        return jQuery.inArray(this[0], elem ? jQuery(elem) : this.parent().children());
    }
    return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
};
jQuery.prototype.init = function (selector, context, rootjQuery) {

    var match, elem, ret, doc;
    if (!selector) {
        return this;
    }
    if (selector.nodeType) {
        this.context = this[0] = selector;
        this.length = 1;
        return this;
    }
    if (selector === "body" && !context && document.body) {
        this.context = document;
        this[0] = document.body;
        this.selector = selector;
        this.length = 1;
        return this;
    }
    if (typeof selector === "string") {
        if (selector.charAt(0) === "<" &&
            selector.charAt(selector.length - 1) === ">" &&
            selector.length >= 3) {
            match = [null, selector, null];
        } else {
            match = quickExpr.exec(selector);
        }
        if (match && (match[1] || !context)) {
            if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                doc = context ? context.ownerDocument || context : document;
                ret = rsingleTag.exec(selector);
                if (ret) {
                    if (jQuery.isPlainObject(context)) {
                        selector = [document.createElement(ret[1])];
                        jQuery.fn.attr.call(selector, context, true);
                    } else {
                        selector = [doc.createElement(ret[1])];
                    }
                } else {
                    ret = jQuery.buildFragment([match[1]], [doc]);
                    selector = (ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment).childNodes;
                }
                return jQuery.merge(this, selector);
            } else {
                elem = document.getElementById(match[2]);
                if (elem && elem.parentNode) {
                    if (elem.id !== match[2]) {
                        return rootjQuery.find(selector);
                    }
                    this.length = 1;
                    this[0] = elem;
                }
                this.context = document;
                this.selector = selector;
                return this;
            }
        } else if (!context || context.jquery) {
            return (context || rootjQuery).find(selector);
        } else {
            return this.constructor(context).find(selector);
        }
    } else if (jQuery.isFunction(selector)) {
        return rootjQuery.ready(selector);
    }
    if (selector.selector !== undefined) {
        this.selector = selector.selector;
        this.context = selector.context;
    }
    return jQuery.makeArray(selector, this);
};
jQuery.prototype.innerHeight = function () {
/// <summary>
///     Get the current computed height for the first element in the set of matched elements, including padding but not border.
/// </summary>
/// <returns type="Number" />

    var elem = this[0];
    return elem && elem.style ? parseFloat(jQuery.css(elem, type, "padding")) : null;
};
jQuery.prototype.innerWidth = function () {
/// <summary>
///     Get the current computed width for the first element in the set of matched elements, including padding but not border.
/// </summary>
/// <returns type="Number" />

    var elem = this[0];
    return elem && elem.style ? parseFloat(jQuery.css(elem, type, "padding")) : null;
};
jQuery.prototype.insertAfter = function (selector) {
/// <summary>
///     Insert every element in the set of matched elements after the target.
/// </summary>
/// <param name="selector" type="jQuery">
///     A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
/// </param>
/// <returns type="jQuery" />

    var ret = [], insert = jQuery(selector), parent = this.length === 1 && this[0].parentNode;
    if (parent &&
        parent.nodeType === 11 &&
        parent.childNodes.length === 1 && insert.length === 1) {
        insert[original](this[0]);
        return this;
    } else {
        for (var i = 0, l = insert.length; i < l; i++) {
            var elems = (i > 0 ? this.clone(true) : this).get();
            jQuery(insert[i])[original](elems);
            ret = ret.concat(elems);
        }
        return this.pushStack(ret, name, insert.selector);
    }
};
jQuery.prototype.insertBefore = function (selector) {
/// <summary>
///     Insert every element in the set of matched elements before the target.
/// </summary>
/// <param name="selector" type="jQuery">
///     A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
/// </param>
/// <returns type="jQuery" />

    var ret = [], insert = jQuery(selector), parent = this.length === 1 && this[0].parentNode;
    if (parent &&
        parent.nodeType === 11 &&
        parent.childNodes.length === 1 && insert.length === 1) {
        insert[original](this[0]);
        return this;
    } else {
        for (var i = 0, l = insert.length; i < l; i++) {
            var elems = (i > 0 ? this.clone(true) : this).get();
            jQuery(insert[i])[original](elems);
            ret = ret.concat(elems);
        }
        return this.pushStack(ret, name, insert.selector);
    }
};
jQuery.prototype.is = function (selector) {
/// <summary>
///     Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
///     <para>1 - is(selector) </para>
///     <para>2 - is(function(index)) </para>
///     <para>3 - is(jQuery object) </para>
///     <para>4 - is(element)</para>
/// </summary>
/// <param name="selector" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="Boolean" />

    return !!selector &&
        (typeof selector === "string" ? jQuery.filter(selector, this).length > 0 : this.filter(selector).length > 0);
};
jQuery.prototype.keydown = function (data, fn) {
/// <summary>
///     Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
///     <para>1 - keydown(handler(eventObject)) </para>
///     <para>2 - keydown(eventData, handler(eventObject)) </para>
///     <para>3 - keydown()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.keypress = function (data, fn) {
/// <summary>
///     Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
///     <para>1 - keypress(handler(eventObject)) </para>
///     <para>2 - keypress(eventData, handler(eventObject)) </para>
///     <para>3 - keypress()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.keyup = function (data, fn) {
/// <summary>
///     Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
///     <para>1 - keyup(handler(eventObject)) </para>
///     <para>2 - keyup(eventData, handler(eventObject)) </para>
///     <para>3 - keyup()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.last = function () {
/// <summary>
///     Reduce the set of matched elements to the final one in the set.
/// </summary>
/// <returns type="jQuery" />

    return this.eq(- 1);
};
jQuery.prototype.length = 0;
jQuery.prototype.live = function (types, data, fn, origSelector) {
/// <summary>
///     Attach a handler to the event for all elements which match the current selector, now and in the future.
///     <para>1 - live(eventType, handler) </para>
///     <para>2 - live(eventType, eventData, handler) </para>
///     <para>3 - live(events)</para>
/// </summary>
/// <param name="types" type="String">
///     A string containing a JavaScript event type, such as "click" or "keydown." As of jQuery 1.4 the string can contain multiple, space-separated event types or custom event names, as well.
/// </param>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute at the time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    var type, i = 0, match, namespaces, preType, selector = origSelector || this.selector, context = origSelector ? this : jQuery(this.context);
    if (typeof types === "object" && !types.preventDefault) {
        for (var key in types) {
            context[name](key, data, types[key], selector);
        }
        return this;
    }
    if (name === "die" &&
        !types && origSelector && origSelector.charAt(0) === ".") {
        context.unbind(origSelector);
        return this;
    }
    if (data === false || jQuery.isFunction(data)) {
        fn = data || returnFalse;
        data = undefined;
    }
    types = (types || "").split(" ");
    while ((type = types[i++]) != null) {
        match = rnamespaces.exec(type);
        namespaces = "";
        if (match) {
            namespaces = match[0];
            type = type.replace(rnamespaces, "");
        }
        if (type === "hover") {
            types.push("mouseenter" + namespaces, "mouseleave" + namespaces);
            continue;
        }
        preType = type;
        if (liveMap[type]) {
            types.push(liveMap[type] + namespaces);
            type = type + namespaces;
        } else {
            type = (liveMap[type] || type) + namespaces;
        }
        if (name === "live") {
            for (var j = 0, l = context.length; j < l; j++) {
                jQuery.event.add(context[j], "live." + liveConvert(type, selector), {data: data, selector: selector, handler: fn, origType: type, origHandler: fn, preType: preType});
            }
        } else {
            context.unbind("live." + liveConvert(type, selector), fn);
        }
    }
    return this;
};
jQuery.prototype.load = function (url, params, callback) {
/// <summary>
///     1: Bind an event handler to the "load" JavaScript event.
///     <para>    1.1 - load(handler(eventObject)) </para>
///     <para>    1.2 - load(eventData, handler(eventObject))</para>
///     <para>2: Load data from the server and place the returned HTML into the matched element.</para>
///     <para>    2.1 - load(url, data, complete(responseText, textStatus, XMLHttpRequest))</para>
/// </summary>
/// <param name="url" type="String">
///     A string containing the URL to which the request is sent.
/// </param>
/// <param name="params" type="String">
///     A map or string that is sent to the server with the request.
/// </param>
/// <param name="callback" type="Function">
///     A callback function that is executed when the request completes.
/// </param>
/// <returns type="jQuery" />

    if (typeof url !== "string" && _load) {
        return _load.apply(this, arguments);
    } else if (!this.length) {
        return this;
    }
    var off = url.indexOf(" ");
    if (off >= 0) {
        var selector = url.slice(off, url.length);
        url = url.slice(0, off);
    }
    var type = "GET";
    if (params) {
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined;
        } else if (typeof params === "object") {
            params = jQuery.param(params, jQuery.ajaxSettings.traditional);
            type = "POST";
        }
    }
    var self = this;
    jQuery.ajax({url: url, type: type, dataType: "html", data: params, complete: function (jqXHR, status, responseText) {responseText = jqXHR.responseText;if (jqXHR.isResolved()) {jqXHR.done(function (r) {responseText = r;});self.html(selector ? jQuery("<div>").append(responseText.replace(rscript, "")).find(selector) : responseText);}if (callback) {self.each(callback, [responseText, status, jqXHR]);}}});
    return this;
};
jQuery.prototype.map = function (callback) {
/// <summary>
///     Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
/// </summary>
/// <param name="callback" type="Function">
///     A function object that will be invoked for each element in the current set.
/// </param>
/// <returns type="jQuery" />

    return this.pushStack(jQuery.map(this, function (elem, i) {return callback.call(elem, i, elem);}));
};
jQuery.prototype.mousedown = function (data, fn) {
/// <summary>
///     Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
///     <para>1 - mousedown(handler(eventObject)) </para>
///     <para>2 - mousedown(eventData, handler(eventObject)) </para>
///     <para>3 - mousedown()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.mouseenter = function (data, fn) {
/// <summary>
///     Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
///     <para>1 - mouseenter(handler(eventObject)) </para>
///     <para>2 - mouseenter(eventData, handler(eventObject)) </para>
///     <para>3 - mouseenter()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.mouseleave = function (data, fn) {
/// <summary>
///     Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
///     <para>1 - mouseleave(handler(eventObject)) </para>
///     <para>2 - mouseleave(eventData, handler(eventObject)) </para>
///     <para>3 - mouseleave()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.mousemove = function (data, fn) {
/// <summary>
///     Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
///     <para>1 - mousemove(handler(eventObject)) </para>
///     <para>2 - mousemove(eventData, handler(eventObject)) </para>
///     <para>3 - mousemove()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.mouseout = function (data, fn) {
/// <summary>
///     Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
///     <para>1 - mouseout(handler(eventObject)) </para>
///     <para>2 - mouseout(eventData, handler(eventObject)) </para>
///     <para>3 - mouseout()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.mouseover = function (data, fn) {
/// <summary>
///     Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
///     <para>1 - mouseover(handler(eventObject)) </para>
///     <para>2 - mouseover(eventData, handler(eventObject)) </para>
///     <para>3 - mouseover()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.mouseup = function (data, fn) {
/// <summary>
///     Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
///     <para>1 - mouseup(handler(eventObject)) </para>
///     <para>2 - mouseup(eventData, handler(eventObject)) </para>
///     <para>3 - mouseup()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.next = function (until, selector) {
/// <summary>
///     Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.nextAll = function (until, selector) {
/// <summary>
///     Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.nextUntil = function (until, selector) {
/// <summary>
///     Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
///     <para>1 - nextUntil(selector, filter) </para>
///     <para>2 - nextUntil(element, filter)</para>
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to indicate where to stop matching following sibling elements.
/// </param>
/// <param name="selector" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.not = function (selector) {
/// <summary>
///     Remove elements from the set of matched elements.
///     <para>1 - not(selector) </para>
///     <para>2 - not(elements) </para>
///     <para>3 - not(function(index))</para>
/// </summary>
/// <param name="selector" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    return this.pushStack(winnow(this, selector, false), "not", selector);
};
jQuery.prototype.offset = function (options) {
/// <summary>
///     1: Get the current coordinates of the first element in the set of matched elements, relative to the document.
///     <para>    1.1 - offset()</para>
///     <para>2: Set the current coordinates of every element in the set of matched elements, relative to the document.</para>
///     <para>    2.1 - offset(coordinates) </para>
///     <para>    2.2 - offset(function(index, coords))</para>
/// </summary>
/// <param name="options" type="Object">
///     An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
/// </param>
/// <returns type="jQuery" />

    var elem = this[0], box;
    if (options) {
        return this.each(function (i) {jQuery.offset.setOffset(this, options, i);});
    }
    if (!elem || !elem.ownerDocument) {
        return null;
    }
    if (elem === elem.ownerDocument.body) {
        return jQuery.offset.bodyOffset(elem);
    }
    try {
        box = elem.getBoundingClientRect();
    } catch (e) {
    }
    var doc = elem.ownerDocument, docElem = doc.documentElement;
    if (!box || !jQuery.contains(docElem, elem)) {
        return box ? {top: box.top, left: box.left} : {top: 0, left: 0};
    }
    var body = doc.body, win = getWindow(doc), clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, scrollTop = win.pageYOffset ||
        jQuery.support.boxModel && docElem.scrollTop || body.scrollTop, scrollLeft = win.pageXOffset ||
        jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft, top = box.top + scrollTop - clientTop, left = box.left + scrollLeft - clientLeft;
    return {top: top, left: left};
};
jQuery.prototype.offsetParent = function () {
/// <summary>
///     Get the closest ancestor element that is positioned.
/// </summary>
/// <returns type="jQuery" />

    return this.map(function () {var offsetParent = this.offsetParent || document.body;while (offsetParent && !rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") {offsetParent = offsetParent.offsetParent;}return offsetParent;});
};
jQuery.prototype.one = function (type, data, fn) {
/// <summary>
///     Attach a handler to an event for the elements. The handler is executed at most once per element.
/// </summary>
/// <param name="type" type="String">
///     A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
/// </param>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute at the time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    var handler;
    if (typeof type === "object") {
        for (var key in type) {
            this[name](key, data, type[key], fn);
        }
        return this;
    }
    if (arguments.length === 2 || data === false) {
        fn = data;
        data = undefined;
    }
    if (name === "one") {
        handler = function (event) {jQuery(this).unbind(event, handler);return fn.apply(this, arguments);};
        handler.guid = fn.guid || jQuery.guid++;
    } else {
        handler = fn;
    }
    if (type === "unload" && name !== "one") {
        this.one(type, data, fn);
    } else {
        for (var i = 0, l = this.length; i < l; i++) {
            jQuery.event.add(this[i], type, handler, data);
        }
    }
    return this;
};
jQuery.prototype.outerHeight = function (margin) {
/// <summary>
///     Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin.
/// </summary>
/// <param name="margin" type="Boolean">
///     A Boolean indicating whether to include the element's margin in the calculation.
/// </param>
/// <returns type="Number" />

    var elem = this[0];
    return elem && elem.style ? parseFloat(jQuery.css(elem, type, margin ? "margin" : "border")) : null;
};
jQuery.prototype.outerWidth = function (margin) {
/// <summary>
///     Get the current computed width for the first element in the set of matched elements, including padding and border.
/// </summary>
/// <param name="margin" type="Boolean">
///     A Boolean indicating whether to include the element's margin in the calculation.
/// </param>
/// <returns type="Number" />

    var elem = this[0];
    return elem && elem.style ? parseFloat(jQuery.css(elem, type, margin ? "margin" : "border")) : null;
};
jQuery.prototype.parent = function (until, selector) {
/// <summary>
///     Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.parents = function (until, selector) {
/// <summary>
///     Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.parentsUntil = function (until, selector) {
/// <summary>
///     Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
///     <para>1 - parentsUntil(selector, filter) </para>
///     <para>2 - parentsUntil(element, filter)</para>
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to indicate where to stop matching ancestor elements.
/// </param>
/// <param name="selector" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.position = function () {
/// <summary>
///     Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
/// </summary>
/// <returns type="Object" />

    if (!this[0]) {
        return null;
    }
    var elem = this[0], offsetParent = this.offsetParent(), offset = this.offset(), parentOffset = rroot.test(offsetParent[0].nodeName) ? {top: 0, left: 0} : offsetParent.offset();
    offset.top -= parseFloat(jQuery.css(elem, "marginTop")) || 0;
    offset.left -= parseFloat(jQuery.css(elem, "marginLeft")) || 0;
    parentOffset.top += parseFloat(jQuery.css(offsetParent[0], "borderTopWidth")) || 0;
    parentOffset.left += parseFloat(jQuery.css(offsetParent[0], "borderLeftWidth")) || 0;
    return {top: offset.top - parentOffset.top, left: offset.left - parentOffset.left};
};
jQuery.prototype.prepend = function () {
/// <summary>
///     Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
///     <para>1 - prepend(content, content) </para>
///     <para>2 - prepend(function(index, html))</para>
/// </summary>
/// <param name="" type="jQuery">
///     DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
/// </param>
/// <param name="" type="jQuery">
///     One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
/// </param>
/// <returns type="jQuery" />

    return this.domManip(arguments, true, function (elem) {if (this.nodeType === 1) {this.insertBefore(elem, this.firstChild);}});
};
jQuery.prototype.prependTo = function (selector) {
/// <summary>
///     Insert every element in the set of matched elements to the beginning of the target.
/// </summary>
/// <param name="selector" type="jQuery">
///     A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
/// </param>
/// <returns type="jQuery" />

    var ret = [], insert = jQuery(selector), parent = this.length === 1 && this[0].parentNode;
    if (parent &&
        parent.nodeType === 11 &&
        parent.childNodes.length === 1 && insert.length === 1) {
        insert[original](this[0]);
        return this;
    } else {
        for (var i = 0, l = insert.length; i < l; i++) {
            var elems = (i > 0 ? this.clone(true) : this).get();
            jQuery(insert[i])[original](elems);
            ret = ret.concat(elems);
        }
        return this.pushStack(ret, name, insert.selector);
    }
};
jQuery.prototype.prev = function (until, selector) {
/// <summary>
///     Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.prevAll = function (until, selector) {
/// <summary>
///     Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.prevUntil = function (until, selector) {
/// <summary>
///     Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
///     <para>1 - prevUntil(selector, filter) </para>
///     <para>2 - prevUntil(element, filter)</para>
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to indicate where to stop matching preceding sibling elements.
/// </param>
/// <param name="selector" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.promise = function (type, object) {
/// <summary>
///     Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished.
/// </summary>
/// <param name="type" type="String">
///     The type of queue that needs to be observed.
/// </param>
/// <param name="object" type="Object">
///     Object onto which the promise methods have to be attached
/// </param>
/// <returns type="Promise" />

    if (typeof type !== "string") {
        object = type;
        type = undefined;
    }
    type = type || "fx";
    var defer = jQuery.Deferred(), elements = this, i = elements.length, count = 1, deferDataKey = type + "defer", queueDataKey = type + "queue", markDataKey = type + "mark", tmp;

    function resolve() {
        if (!--count) {
            defer.resolveWith(elements, [elements]);
        }
    }

    while (i--) {
        if ((tmp = jQuery.data(elements[i], deferDataKey, undefined, true) ||
            (jQuery.data(elements[i], queueDataKey, undefined, true) ||
            jQuery.data(elements[i], markDataKey, undefined, true)) &&
            jQuery.data(elements[i], deferDataKey, jQuery._Deferred(), true))) {
            count++;
            tmp.done(resolve);
        }
    }
    resolve();
    return defer.promise();
};
jQuery.prototype.prop = function (name, value) {
/// <summary>
///     1: Get the value of a property for the first element in the set of matched elements.
///     <para>    1.1 - prop(propertyName)</para>
///     <para>2: Set one or more properties for the set of matched elements.</para>
///     <para>    2.1 - prop(propertyName, value) </para>
///     <para>    2.2 - prop(map) </para>
///     <para>    2.3 - prop(propertyName, function(index, oldPropertyValue))</para>
/// </summary>
/// <param name="name" type="String">
///     The name of the property to set.
/// </param>
/// <param name="value" type="Boolean">
///     A value to set for the property.
/// </param>
/// <returns type="jQuery" />

    return jQuery.access(this, name, value, true, jQuery.prop);
};
jQuery.prototype.pushStack = function (elems, name, selector) {
/// <summary>
///     Add a collection of DOM elements onto the jQuery stack.
///     <para>1 - pushStack(elements) </para>
///     <para>2 - pushStack(elements, name, arguments)</para>
/// </summary>
/// <param name="elems" type="Array">
///     An array of elements to push onto the stack and make into a new jQuery object.
/// </param>
/// <param name="name" type="String">
///     The name of a jQuery method that generated the array of elements.
/// </param>
/// <param name="selector" type="Array">
///     The arguments that were passed in to the jQuery method (for serialization).
/// </param>
/// <returns type="jQuery" />

    var ret = this.constructor();
    if (jQuery.isArray(elems)) {
        push.apply(ret, elems);
    } else {
        jQuery.merge(ret, elems);
    }
    ret.prevObject = this;
    ret.context = this.context;
    if (name === "find") {
        ret.selector = this.selector + (this.selector ? " " : "") + selector;
    } else if (name) {
        ret.selector = this.selector + "." + name + "(" + selector + ")";
    }
    return ret;
};
jQuery.prototype.queue = function (type, data) {
/// <summary>
///     1: Show the queue of functions to be executed on the matched elements.
///     <para>    1.1 - queue(queueName)</para>
///     <para>2: Manipulate the queue of functions to be executed on the matched elements.</para>
///     <para>    2.1 - queue(queueName, newQueue) </para>
///     <para>    2.2 - queue(queueName, callback( next ))</para>
/// </summary>
/// <param name="type" type="String">
///     A string containing the name of the queue. Defaults to fx, the standard effects queue.
/// </param>
/// <param name="data" type="Array">
///     An array of functions to replace the current queue contents.
/// </param>
/// <returns type="jQuery" />

    if (typeof type !== "string") {
        data = type;
        type = "fx";
    }
    if (data === undefined) {
        return jQuery.queue(this[0], type);
    }
    return this.each(function () {var queue = jQuery.queue(this, type, data);if (type === "fx" && queue[0] !== "inprogress") {jQuery.dequeue(this, type);}});
};
jQuery.prototype.ready = function (fn) {
/// <summary>
///     Specify a function to execute when the DOM is fully loaded.
/// </summary>
/// <param name="fn" type="Function">
///     A function to execute after the DOM is ready.
/// </param>
/// <returns type="jQuery" />

    jQuery.bindReady();
    readyList.done(fn);
    return this;
};
jQuery.prototype.remove = function (selector, keepData) {
/// <summary>
///     Remove the set of matched elements from the DOM.
/// </summary>
/// <param name="selector" type="String">
///     A selector expression that filters the set of matched elements to be removed.
/// </param>
/// <returns type="jQuery" />

    for (var i = 0, elem; (elem = this[i]) != null; i++) {
        if (!selector || jQuery.filter(selector, [elem]).length) {
            if (!keepData && elem.nodeType === 1) {
                jQuery.cleanData(elem.getElementsByTagName("*"));
                jQuery.cleanData([elem]);
            }
            if (elem.parentNode) {
                elem.parentNode.removeChild(elem);
            }
        }
    }
    return this;
};
jQuery.prototype.removeAttr = function (name) {
/// <summary>
///     Remove an attribute from each element in the set of matched elements.
/// </summary>
/// <param name="name" type="String">
///     An attribute to remove.
/// </param>
/// <returns type="jQuery" />

    return this.each(function () {jQuery.removeAttr(this, name);});
};
jQuery.prototype.removeClass = function (value) {
/// <summary>
///     Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
///     <para>1 - removeClass(className) </para>
///     <para>2 - removeClass(function(index, class))</para>
/// </summary>
/// <param name="value" type="String">
///     One or more space-separated classes to be removed from the class attribute of each matched element.
/// </param>
/// <returns type="jQuery" />

    var classNames, i, l, elem, className, c, cl;
    if (jQuery.isFunction(value)) {
        return this.each(function (j) {jQuery(this).removeClass(value.call(this, j, this.className));});
    }
    if (value && typeof value === "string" || value === undefined) {
        classNames = (value || "").split(rspace);
        for (i = 0, l = this.length; i < l; i++) {
            elem = this[i];
            if (elem.nodeType === 1 && elem.className) {
                if (value) {
                    className = (" " + elem.className + " ").replace(rclass, " ");
                    for (c = 0, cl = classNames.length; c < cl; c++) {
                        className = className.replace(" " + classNames[c] + " ", " ");
                    }
                    elem.className = jQuery.trim(className);
                } else {
                    elem.className = "";
                }
            }
        }
    }
    return this;
};
jQuery.prototype.removeData = function (key) {
/// <summary>
///     Remove a previously-stored piece of data.
/// </summary>
/// <param name="key" type="String">
///     A string naming the piece of data to delete.
/// </param>
/// <returns type="jQuery" />

    return this.each(function () {jQuery.removeData(this, key);});
};
jQuery.prototype.removeProp = function (name) {
/// <summary>
///     Remove a property for the set of matched elements.
/// </summary>
/// <param name="name" type="String">
///     The name of the property to set.
/// </param>
/// <returns type="jQuery" />

    name = jQuery.propFix[name] || name;
    return this.each(function () {try {this[name] = undefined;delete this[name];} catch (e) {}});
};
jQuery.prototype.replaceAll = function (selector) {
/// <summary>
///     Replace each target element with the set of matched elements.
/// </summary>
/// <param name="selector" type="String">
///     A selector expression indicating which element(s) to replace.
/// </param>
/// <returns type="jQuery" />

    var ret = [], insert = jQuery(selector), parent = this.length === 1 && this[0].parentNode;
    if (parent &&
        parent.nodeType === 11 &&
        parent.childNodes.length === 1 && insert.length === 1) {
        insert[original](this[0]);
        return this;
    } else {
        for (var i = 0, l = insert.length; i < l; i++) {
            var elems = (i > 0 ? this.clone(true) : this).get();
            jQuery(insert[i])[original](elems);
            ret = ret.concat(elems);
        }
        return this.pushStack(ret, name, insert.selector);
    }
};
jQuery.prototype.replaceWith = function (value) {
/// <summary>
///     Replace each element in the set of matched elements with the provided new content.
///     <para>1 - replaceWith(newContent) </para>
///     <para>2 - replaceWith(function)</para>
/// </summary>
/// <param name="value" type="jQuery">
///     The content to insert. May be an HTML string, DOM element, or jQuery object.
/// </param>
/// <returns type="jQuery" />

    if (this[0] && this[0].parentNode) {
        if (jQuery.isFunction(value)) {
            return this.each(function (i) {var self = jQuery(this), old = self.html();self.replaceWith(value.call(this, i, old));});
        }
        if (typeof value !== "string") {
            value = jQuery(value).detach();
        }
        return this.each(function () {var next = this.nextSibling, parent = this.parentNode;jQuery(this).remove();if (next) {jQuery(next).before(value);} else {jQuery(parent).append(value);}});
    } else {
        return this.length ? this.pushStack(jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value) : this;
    }
};
jQuery.prototype.resize = function (data, fn) {
/// <summary>
///     Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
///     <para>1 - resize(handler(eventObject)) </para>
///     <para>2 - resize(eventData, handler(eventObject)) </para>
///     <para>3 - resize()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.scroll = function (data, fn) {
/// <summary>
///     Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
///     <para>1 - scroll(handler(eventObject)) </para>
///     <para>2 - scroll(eventData, handler(eventObject)) </para>
///     <para>3 - scroll()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.scrollLeft = function (val) {
/// <summary>
///     1: Get the current horizontal position of the scroll bar for the first element in the set of matched elements.
///     <para>    1.1 - scrollLeft()</para>
///     <para>2: Set the current horizontal position of the scroll bar for each of the set of matched elements.</para>
///     <para>    2.1 - scrollLeft(value)</para>
/// </summary>
/// <param name="val" type="Number">
///     An integer indicating the new position to set the scroll bar to.
/// </param>
/// <returns type="jQuery" />

    var elem, win;
    if (val === undefined) {
        elem = this[0];
        if (!elem) {
            return null;
        }
        win = getWindow(elem);
        return win ? "pageXOffset" in win ? win[i ? "pageYOffset" : "pageXOffset"] : jQuery.support.boxModel && win.document.documentElement[method] ||
            win.document.body[method] : elem[method];
    }
    return this.each(function () {win = getWindow(this);if (win) {win.scrollTo(!i ? val : jQuery(win).scrollLeft(), i ? val : jQuery(win).scrollTop());} else {this[method] = val;}});
};
jQuery.prototype.scrollTop = function (val) {
/// <summary>
///     1: Get the current vertical position of the scroll bar for the first element in the set of matched elements.
///     <para>    1.1 - scrollTop()</para>
///     <para>2: Set the current vertical position of the scroll bar for each of the set of matched elements.</para>
///     <para>    2.1 - scrollTop(value)</para>
/// </summary>
/// <param name="val" type="Number">
///     An integer indicating the new position to set the scroll bar to.
/// </param>
/// <returns type="jQuery" />

    var elem, win;
    if (val === undefined) {
        elem = this[0];
        if (!elem) {
            return null;
        }
        win = getWindow(elem);
        return win ? "pageXOffset" in win ? win[i ? "pageYOffset" : "pageXOffset"] : jQuery.support.boxModel && win.document.documentElement[method] ||
            win.document.body[method] : elem[method];
    }
    return this.each(function () {win = getWindow(this);if (win) {win.scrollTo(!i ? val : jQuery(win).scrollLeft(), i ? val : jQuery(win).scrollTop());} else {this[method] = val;}});
};
jQuery.prototype.select = function (data, fn) {
/// <summary>
///     Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
///     <para>1 - select(handler(eventObject)) </para>
///     <para>2 - select(eventData, handler(eventObject)) </para>
///     <para>3 - select()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.serialize = function () {
/// <summary>
///     Encode a set of form elements as a string for submission.
/// </summary>
/// <returns type="String" />

    return jQuery.param(this.serializeArray());
};
jQuery.prototype.serializeArray = function () {
/// <summary>
///     Encode a set of form elements as an array of names and values.
/// </summary>
/// <returns type="Array" />

    return this.map(function () {return this.elements ? jQuery.makeArray(this.elements) : this;}).filter(function () {return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.type));}).map(function (i, elem) {var val = jQuery(this).val();return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val, i) {return {name: elem.name, value: val.replace(rCRLF, "\r\n")};}) : {name: elem.name, value: val.replace(rCRLF, "\r\n")};}).get();
};
jQuery.prototype.show = function (speed, easing, callback) {
/// <summary>
///     Display the matched elements.
///     <para>1 - show() </para>
///     <para>2 - show(duration, callback) </para>
///     <para>3 - show(duration, easing, callback)</para>
/// </summary>
/// <param name="speed" type="Number">
///     A string or number determining how long the animation will run.
/// </param>
/// <param name="easing" type="String">
///     A string indicating which easing function to use for the transition.
/// </param>
/// <param name="callback" type="Function">
///     A function to call once the animation is complete.
/// </param>
/// <returns type="jQuery" />

    var elem, display;
    if (speed || speed === 0) {
        return this.animate(genFx("show", 3), speed, easing, callback);
    } else {
        for (var i = 0, j = this.length; i < j; i++) {
            elem = this[i];
            if (elem.style) {
                display = elem.style.display;
                if (!jQuery._data(elem, "olddisplay") && display === "none") {
                    display = elem.style.display = "";
                }
                if (display === "" &&
                    jQuery.css(elem, "display") === "none") {
                    jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
                }
            }
        }
        for (i = 0; i < j; i++) {
            elem = this[i];
            if (elem.style) {
                display = elem.style.display;
                if (display === "" || display === "none") {
                    elem.style.display = jQuery._data(elem, "olddisplay") || "";
                }
            }
        }
        return this;
    }
};
jQuery.prototype.siblings = function (until, selector) {
/// <summary>
///     Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
/// </summary>
/// <param name="until" type="String">
///     A string containing a selector expression to match elements against.
/// </param>
/// <returns type="jQuery" />

    var ret = jQuery.map(this, fn, until), args = slice.call(arguments);
    if (!runtil.test(name)) {
        selector = until;
    }
    if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
    }
    ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
    if ((this.length > 1 || rmultiselector.test(selector)) &&
        rparentsprev.test(name)) {
        ret = ret.reverse();
    }
    return this.pushStack(ret, name, args.join(","));
};
jQuery.prototype.size = function () {
/// <summary>
///     Return the number of elements in the jQuery object.
/// </summary>
/// <returns type="Number" />

    return this.length;
};
jQuery.prototype.slice = function () {
/// <summary>
///     Reduce the set of matched elements to a subset specified by a range of indices.
/// </summary>
/// <param name="" type="Number">
///     An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
/// </param>
/// <param name="" type="Number">
///     An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
/// </param>
/// <returns type="jQuery" />

    return this.pushStack(slice.apply(this, arguments), "slice", slice.call(arguments).join(","));
};
jQuery.prototype.slideDown = function (speed, easing, callback) {
/// <summary>
///     Display the matched elements with a sliding motion.
///     <para>1 - slideDown(duration, callback) </para>
///     <para>2 - slideDown(duration, easing, callback)</para>
/// </summary>
/// <param name="speed" type="Number">
///     A string or number determining how long the animation will run.
/// </param>
/// <param name="easing" type="String">
///     A string indicating which easing function to use for the transition.
/// </param>
/// <param name="callback" type="Function">
///     A function to call once the animation is complete.
/// </param>
/// <returns type="jQuery" />

    return this.animate(props, speed, easing, callback);
};
jQuery.prototype.slideToggle = function (speed, easing, callback) {
/// <summary>
///     Display or hide the matched elements with a sliding motion.
///     <para>1 - slideToggle(duration, callback) </para>
///     <para>2 - slideToggle(duration, easing, callback)</para>
/// </summary>
/// <param name="speed" type="Number">
///     A string or number determining how long the animation will run.
/// </param>
/// <param name="easing" type="String">
///     A string indicating which easing function to use for the transition.
/// </param>
/// <param name="callback" type="Function">
///     A function to call once the animation is complete.
/// </param>
/// <returns type="jQuery" />

    return this.animate(props, speed, easing, callback);
};
jQuery.prototype.slideUp = function (speed, easing, callback) {
/// <summary>
///     Hide the matched elements with a sliding motion.
///     <para>1 - slideUp(duration, callback) </para>
///     <para>2 - slideUp(duration, easing, callback)</para>
/// </summary>
/// <param name="speed" type="Number">
///     A string or number determining how long the animation will run.
/// </param>
/// <param name="easing" type="String">
///     A string indicating which easing function to use for the transition.
/// </param>
/// <param name="callback" type="Function">
///     A function to call once the animation is complete.
/// </param>
/// <returns type="jQuery" />

    return this.animate(props, speed, easing, callback);
};
jQuery.prototype.stop = function (clearQueue, gotoEnd) {
/// <summary>
///     Stop the currently-running animation on the matched elements.
/// </summary>
/// <param name="clearQueue" type="Boolean">
///     A Boolean indicating whether to remove queued animation as well. Defaults to false.
/// </param>
/// <param name="gotoEnd" type="Boolean">
///     A Boolean indicating whether to complete the current animation immediately. Defaults to false.
/// </param>
/// <returns type="jQuery" />

    if (clearQueue) {
        this.queue([]);
    }
    this.each(function () {var timers = jQuery.timers, i = timers.length;if (!gotoEnd) {jQuery._unmark(true, this);}while (i--) {if (timers[i].elem === this) {if (gotoEnd) {timers[i](true);}timers.splice(i, 1);}}});
    if (!gotoEnd) {
        this.dequeue();
    }
    return this;
};
jQuery.prototype.submit = function (data, fn) {
/// <summary>
///     Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
///     <para>1 - submit(handler(eventObject)) </para>
///     <para>2 - submit(eventData, handler(eventObject)) </para>
///     <para>3 - submit()</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.text = function (text) {
/// <summary>
///     1: Get the combined text contents of each element in the set of matched elements, including their descendants.
///     <para>    1.1 - text()</para>
///     <para>2: Set the content of each element in the set of matched elements to the specified text.</para>
///     <para>    2.1 - text(textString) </para>
///     <para>    2.2 - text(function(index, text))</para>
/// </summary>
/// <param name="text" type="String">
///     A string of text to set as the content of each matched element.
/// </param>
/// <returns type="jQuery" />

    if (jQuery.isFunction(text)) {
        return this.each(function (i) {var self = jQuery(this);self.text(text.call(this, i, self.text()));});
    }
    if (typeof text !== "object" && text !== undefined) {
        return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(text));
    }
    return jQuery.text(this);
};
jQuery.prototype.toArray = function () {
/// <summary>
///     Retrieve all the DOM elements contained in the jQuery set, as an array.
/// </summary>
/// <returns type="Array" />

    return slice.call(this, 0);
};
jQuery.prototype.toggle = function (fn, fn2, callback) {
/// <summary>
///     1: Bind two or more handlers to the matched elements, to be executed on alternate clicks.
///     <para>    1.1 - toggle(handler(eventObject), handler(eventObject), handler(eventObject))</para>
///     <para>2: Display or hide the matched elements.</para>
///     <para>    2.1 - toggle(duration, callback) </para>
///     <para>    2.2 - toggle(duration, easing, callback) </para>
///     <para>    2.3 - toggle(showOrHide)</para>
/// </summary>
/// <param name="fn" type="Function">
///     A function to execute every even time the element is clicked.
/// </param>
/// <param name="fn2" type="Function">
///     A function to execute every odd time the element is clicked.
/// </param>
/// <param name="callback" type="Function">
///     Additional handlers to cycle through after clicks.
/// </param>
/// <returns type="jQuery" />

    var bool = typeof fn === "boolean";
    if (jQuery.isFunction(fn) && jQuery.isFunction(fn2)) {
        this._toggle.apply(this, arguments);
    } else if (fn == null || bool) {
        this.each(function () {var state = bool ? fn : jQuery(this).is(":hidden");jQuery(this)[state ? "show" : "hide"]();});
    } else {
        this.animate(genFx("toggle", 3), fn, fn2, callback);
    }
    return this;
};
jQuery.prototype.toggleClass = function (value, stateVal) {
/// <summary>
///     Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
///     <para>1 - toggleClass(className) </para>
///     <para>2 - toggleClass(className, switch) </para>
///     <para>3 - toggleClass(function(index, class, switch), switch)</para>
/// </summary>
/// <param name="value" type="String">
///     One or more class names (separated by spaces) to be toggled for each element in the matched set.
/// </param>
/// <param name="stateVal" type="Boolean">
///     A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
/// </param>
/// <returns type="jQuery" />

    var type = typeof value, isBool = typeof stateVal === "boolean";
    if (jQuery.isFunction(value)) {
        return this.each(function (i) {jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);});
    }
    return this.each(function () {if (type === "string") {var className, i = 0, self = jQuery(this), state = stateVal, classNames = value.split(rspace);while ((className = classNames[i++])) {state = isBool ? state : !self.hasClass(className);self[state ? "addClass" : "removeClass"](className);}} else if (type === "undefined" || type === "boolean") {if (this.className) {jQuery._data(this, "__className__", this.className);}this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";}});
};
jQuery.prototype.trigger = function (type, data) {
/// <summary>
///     Execute all handlers and behaviors attached to the matched elements for the given event type.
///     <para>1 - trigger(eventType, extraParameters) </para>
///     <para>2 - trigger(event)</para>
/// </summary>
/// <param name="type" type="String">
///     A string containing a JavaScript event type, such as click or submit.
/// </param>
/// <param name="data" type="Object">
///     Additional parameters to pass along to the event handler.
/// </param>
/// <returns type="jQuery" />

    return this.each(function () {jQuery.event.trigger(type, data, this);});
};
jQuery.prototype.triggerHandler = function (type, data) {
/// <summary>
///     Execute all handlers attached to an element for an event.
/// </summary>
/// <param name="type" type="String">
///     A string containing a JavaScript event type, such as click or submit.
/// </param>
/// <param name="data" type="Array">
///     An array of additional parameters to pass along to the event handler.
/// </param>
/// <returns type="Object" />

    if (this[0]) {
        return jQuery.event.trigger(type, data, this[0], true);
    }
};
jQuery.prototype.unbind = function (type, fn) {
/// <summary>
///     Remove a previously-attached event handler from the elements.
///     <para>1 - unbind(eventType, handler(eventObject)) </para>
///     <para>2 - unbind(eventType, false) </para>
///     <para>3 - unbind(event)</para>
/// </summary>
/// <param name="type" type="String">
///     A string containing a JavaScript event type, such as click or submit.
/// </param>
/// <param name="fn" type="Function">
///     The function that is to be no longer executed.
/// </param>
/// <returns type="jQuery" />

    if (typeof type === "object" && !type.preventDefault) {
        for (var key in type) {
            this.unbind(key, type[key]);
        }
    } else {
        for (var i = 0, l = this.length; i < l; i++) {
            jQuery.event.remove(this[i], type, fn);
        }
    }
    return this;
};
jQuery.prototype.undelegate = function (selector, types, fn) {
/// <summary>
///     Remove a handler from the event for all elements which match the current selector, now or in the future, based upon a specific set of root elements.
///     <para>1 - undelegate() </para>
///     <para>2 - undelegate(selector, eventType) </para>
///     <para>3 - undelegate(selector, eventType, handler) </para>
///     <para>4 - undelegate(selector, events) </para>
///     <para>5 - undelegate(namespace)</para>
/// </summary>
/// <param name="selector" type="String">
///     A selector which will be used to filter the event results.
/// </param>
/// <param name="types" type="String">
///     A string containing a JavaScript event type, such as "click" or "keydown"
/// </param>
/// <param name="fn" type="Function">
///     A function to execute at the time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (arguments.length === 0) {
        return this.unbind("live");
    } else {
        return this.die(types, null, fn, selector);
    }
};
jQuery.prototype.unload = function (data, fn) {
/// <summary>
///     Bind an event handler to the "unload" JavaScript event.
///     <para>1 - unload(handler(eventObject)) </para>
///     <para>2 - unload(eventData, handler(eventObject))</para>
/// </summary>
/// <param name="data" type="Object">
///     A map of data that will be passed to the event handler.
/// </param>
/// <param name="fn" type="Function">
///     A function to execute each time the event is triggered.
/// </param>
/// <returns type="jQuery" />

    if (fn == null) {
        fn = data;
        data = null;
    }
    return arguments.length > 0 ? this.bind(name, data, fn) : this.trigger(name);
};
jQuery.prototype.unwrap = function () {
/// <summary>
///     Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
/// </summary>
/// <returns type="jQuery" />

    return this.parent().each(function () {if (!jQuery.nodeName(this, "body")) {jQuery(this).replaceWith(this.childNodes);}}).end();
};
jQuery.prototype.val = function (value) {
/// <summary>
///     1: Get the current value of the first element in the set of matched elements.
///     <para>    1.1 - val()</para>
///     <para>2: Set the value of each element in the set of matched elements.</para>
///     <para>    2.1 - val(value) </para>
///     <para>    2.2 - val(function(index, value))</para>
/// </summary>
/// <param name="value" type="String">
///     A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
/// </param>
/// <returns type="jQuery" />

    var hooks, ret, elem = this[0];
    if (!arguments.length) {
        if (elem) {
            hooks = jQuery.valHooks[elem.nodeName.toLowerCase()] ||
                jQuery.valHooks[elem.type];
            if (hooks &&
                "get" in hooks &&
                (ret = hooks.get(elem, "value")) !== undefined) {
                return ret;
            }
            ret = elem.value;
            return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
        }
        return undefined;
    }
    var isFunction = jQuery.isFunction(value);
    return this.each(function (i) {var self = jQuery(this), val;if (this.nodeType !== 1) {return;}if (isFunction) {val = value.call(this, i, self.val());} else {val = value;}if (val == null) {val = "";} else if (typeof val === "number") {val += "";} else if (jQuery.isArray(val)) {val = jQuery.map(val, function (value) {return value == null ? "" : value + "";});}hooks = jQuery.valHooks[this.nodeName.toLowerCase()] || jQuery.valHooks[this.type];if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {this.value = val;}});
};
jQuery.prototype.width = function (size) {
/// <summary>
///     1: Get the current computed width for the first element in the set of matched elements.
///     <para>    1.1 - width()</para>
///     <para>2: Set the CSS width of each element in the set of matched elements.</para>
///     <para>    2.1 - width(value) </para>
///     <para>    2.2 - width(function(index, width))</para>
/// </summary>
/// <param name="size" type="Number">
///     An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
/// </param>
/// <returns type="jQuery" />

    var elem = this[0];
    if (!elem) {
        return size == null ? null : this;
    }
    if (jQuery.isFunction(size)) {
        return this.each(function (i) {var self = jQuery(this);self[type](size.call(this, i, self[type]()));});
    }
    if (jQuery.isWindow(elem)) {
        var docElemProp = elem.document.documentElement["client" + name];
        return elem.document.compatMode === "CSS1Compat" && docElemProp ||
            elem.document.body["client" + name] || docElemProp;
    } else if (elem.nodeType === 9) {
        return Math.max(elem.documentElement["client" + name], elem.body["scroll" + name], elem.documentElement["scroll" + name], elem.body["offset" + name], elem.documentElement["offset" + name]);
    } else if (size === undefined) {
        var orig = jQuery.css(elem, type), ret = parseFloat(orig);
        return jQuery.isNaN(ret) ? orig : ret;
    } else {
        return this.css(type, typeof size === "string" ? size : size + "px");
    }
};
jQuery.prototype.wrap = function (html) {
/// <summary>
///     Wrap an HTML structure around each element in the set of matched elements.
///     <para>1 - wrap(wrappingElement) </para>
///     <para>2 - wrap(function(index))</para>
/// </summary>
/// <param name="html" type="jQuery">
///     An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
/// </param>
/// <returns type="jQuery" />

    return this.each(function () {jQuery(this).wrapAll(html);});
};
jQuery.prototype.wrapAll = function (html) {
/// <summary>
///     Wrap an HTML structure around all elements in the set of matched elements.
/// </summary>
/// <param name="html" type="jQuery">
///     An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
/// </param>
/// <returns type="jQuery" />

    if (jQuery.isFunction(html)) {
        return this.each(function (i) {jQuery(this).wrapAll(html.call(this, i));});
    }
    if (this[0]) {
        var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
            wrap.insertBefore(this[0]);
        }
        wrap.map(function () {var elem = this;while (elem.firstChild && elem.firstChild.nodeType === 1) {elem = elem.firstChild;}return elem;}).append(this);
    }
    return this;
};
jQuery.prototype.wrapInner = function (html) {
/// <summary>
///     Wrap an HTML structure around the content of each element in the set of matched elements.
///     <para>1 - wrapInner(wrappingElement) </para>
///     <para>2 - wrapInner(wrappingFunction)</para>
/// </summary>
/// <param name="html" type="String">
///     An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
/// </param>
/// <returns type="jQuery" />

    if (jQuery.isFunction(html)) {
        return this.each(function (i) {jQuery(this).wrapInner(html.call(this, i));});
    }
    return this.each(function () {var self = jQuery(this), contents = self.contents();if (contents.length) {contents.wrapAll(html);} else {self.append(html);}});
};
jQuery.fn = jQuery.prototype;
jQuery.fn.init.prototype = jQuery.fn;
window.jQuery = window.$ = jQuery;
})(window);