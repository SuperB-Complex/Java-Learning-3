

var __IntegralASDiagnosticCall = (function() {
	try {
		var alreadySent = {};
		return function(code, err, config) {
			try {
				var gen = function(code, err, config) {
					var propsStr, id;
					var url = '//pixel.adsafeprotected.com/mon?anid=925116&advId=fwjs-diag&campId=';
					try {
						url += code + '&adsafe_jsinfo=';
						if (err && err.message) {
							url +=
								'derr:' +
								encodeURIComponent(err.message.toString().replace(/ /g, '-')).substring(0, 200);
						}
						if (config) {
							
							id = config.anId
								? config.anId
								: config.advEntityId
								? config.advEntityId + '/' + config.pubEntityId
								: '';
							propsStr = config.version + ',' + config.mode + ',' + id;
							url += ',dconfig:' + encodeURIComponent(propsStr);
						}
					} catch (e) {
						url += ',dcatch:1';
					}
					return url;
				};

				var send = function(url) {
					if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.sendUrl) {
						__IASOmidVerificationClient.sendUrl(url);
					} else {
						var img = new Image();
						img.src = url;
					}
				};
				if (!alreadySent[code] && Math.random() < 0.01) {
					alreadySent[code] = true;
					send(gen(code, err, config));
				}
			} catch (e) {}
		};
	} catch (e) {
		return function() {};
	}
})();





try {

	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'true',
		version: '19.8.168',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.168.js"},
		protocol: 'https',
		jsref: "https:\/\/c984803823f9491c495e976b2d8cdb13.safeframe.googlesyndication.com\/",
		asid: "4644b402-7c44-11eb-ba6e-0a620ea7f3ad",
		allowViewability: "true",
		jsFeatures: "viewabilityready,consecutive,cachebust:1,forcecocoa:6,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,postDts:0,unreliabilityDetection,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:100,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1,bbs,bas,spg:100,exitOASRSEarly:1,encodeInvalidUrlChars",
		adsafeDomain: "adsafeprotected.com:80",
		minimizeCalls: "false",
		adWidth: "300",
		adHeight: "250",
		forceAppend: "false",
		sp_imp_maxLength: 8000,
		sp_imp_jsInfo_minLength: 200,
		_onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
		_onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
		_onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
		_onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
		_onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
		_onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
		_onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
		reqquery: "",
		mode: "rjss",
		requrl: "",
		dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=552028",
		adsafeSrc: "https:\/\/fw.adsafeprotected.com\/rfw\/www.googletagservices.com\/552028\/51112840\/dcm\/dcmads.js",
		tpiLookupURL: "",
		getTpl: "false",
		use100v: false,
		useBapiCallback: "",
		useViewabilityNotification: "",
		scriptUrl: "https:\/\/fw.adsafeprotected.com\/rjss\/www.googletagservices.com\/552028\/51112840\/dcm\/dcmads.js",
		accountForSadImps: '',
		sendCookie: 'true',
		cookieBaseURL: 'sc.iasds01.com\/dtc?advEntityId=552028&pubEnt=51112840',
		fwMonitoring: 'false',
		doNothing: false,
		mn: "app04va",
		mobOrTab: false,
		app: false,
		mobAppWebview: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/blocking\/app\/initial\/552028\/51112840?redirectUrl=https%3A%2F%2Fwww.googletagservices.com%2Fdcm%2Fdcmads.js",
		anId: '',
		advEntityId: '552028',
		pubEntityId: '51112840',
		videoId: '',
		videoChannel: '',
		rts: {},
		customViewability: [],
		serverSideAppDetection: [],
		groupm_native_publisher: false,
		integration: null,
		staticServer: '\/\/static.adsafeprotected.com\/',
		passback: ''
	};

try {


	

	__IASScope = typeof window !== "undefined" ? window : this;
	
	__IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
	__IntegralASConfig.staticMode = !__IntegralASConfig.isResolved;
	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.perfBirth = (typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function') ? __IASScope.performance.now() : null;




;(function(omidGlobal, factory, exports) {
	// CommonJS support
	if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(omidGlobal, exports);

		// If neither AMD nor CommonJS are used, export to a versioned name in the
		// global context.
	} else {
		var exports = {};
		var versions = ['1.3.6-iab2177'];
		var additionalVersionString = '';
		if (!!additionalVersionString) {
			versions.push(additionalVersionString);
		}

		factory(omidGlobal, exports);

		function deepFreeze(object) {
			for (var key in object) {
				if (object.hasOwnProperty(key)) {
					object[key] = deepFreeze(object[key]);
				}
			}
			return Object.freeze(object);
		}

		// Inject and freeze the exported components of omid.
		for (var key in exports) {
			if (exports.hasOwnProperty(key)) {
				if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
					// Define the top level property in the global scope
					Object.defineProperty(omidGlobal, key, {
//						value: {},       Removed trailing comma for build
						value: {}
					});
				}
				versions.forEach(function(version) {
					if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
						var frozenObject = deepFreeze(exports[key]);
						// Define the object exports keyed-off versions
						Object.defineProperty(omidGlobal[key], version, {
							get: function () {
								return frozenObject;
							},
//							enumerable: true,       Removed trailing comma for build
							enumerable: true
						});
					}
				});
			}
		}
	}
}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
	'use strict';
	var $jscomp = $jscomp || {};
	$jscomp.scope = {};
	$jscomp.arrayIteratorImpl = function(a) {
		var b = 0;
		return function() {
			return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
		};
	};
	$jscomp.arrayIterator = function(a) {
		return {next:$jscomp.arrayIteratorImpl(a)};
	};
	$jscomp.makeIterator = function(a) {
		var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
		return b ? b.call(a) : $jscomp.arrayIterator(a);
	};
	$jscomp.arrayFromIterator = function(a) {
		for (var b, c = []; !(b = a.next()).done;) {
			c.push(b.value);
		}
		return c;
	};
	$jscomp.arrayFromIterable = function(a) {
		return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
	};
	$jscomp.ASSUME_ES5 = !1;
	$jscomp.ASSUME_NO_NATIVE_MAP = !1;
	$jscomp.ASSUME_NO_NATIVE_SET = !1;
	$jscomp.SIMPLE_FROUND_POLYFILL = !1;
	$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
		var b = function() {
		};
		b.prototype = a;
		return new b;
	};
	$jscomp.underscoreProtoCanBeSet = function() {
		var a = {a:!0}, b = {};
		try {
			return b.__proto__ = a, b.a;
		} catch (c) {
		}
		return !1;
	};
	$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
		a.__proto__ = b;
		if (a.__proto__ !== b) {
			throw new TypeError(a + " is not extensible");
		}
		return a;
	} : null;
	$jscomp.inherits = function(a, b) {
		a.prototype = $jscomp.objectCreate(b.prototype);
		a.prototype.constructor = a;
		if ($jscomp.setPrototypeOf) {
			var c = $jscomp.setPrototypeOf;
			c(a, b);
		} else {
			for (c in b) {
				if ("prototype" != c) {
					if (Object.defineProperties) {
						var d = Object.getOwnPropertyDescriptor(b, c);
						d && Object.defineProperty(a, c, d);
					} else {
						a[c] = b[c];
					}
				}
			}
		}
		a.superClass_ = b.prototype;
	};
	var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
			if (!b) {
				throw Error("Value for " + a + " is undefined, null or blank.");
			}
			if ("string" !== typeof b && !(b instanceof String)) {
				throw Error("Value for " + a + " is not a string.");
			}
			if ("" === b.trim()) {
				throw Error("Value for " + a + " is empty string.");
			}
		}, assertNotNullObject:function(a, b) {
			if (null == b) {
				throw Error("Value for " + a + " is undefined or null");
			}
		}, assertNumber:function(a, b) {
			if (null == b) {
				throw Error(a + " must not be null or undefined.");
			}
			if ("number" !== typeof b || isNaN(b)) {
				throw Error("Value for " + a + " is not a number");
			}
		}, assertNumberBetween:function(a, b, c, d) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (b < c || b > d) {
				throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
			}
		}, assertFunction:function(a, b) {
			if (!b) {
				throw Error(a + " must not be truthy.");
			}
		}, assertPositiveNumber:function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (0 > b) {
				throw Error(a + " must be a positive number.");
			}
		}};
	var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
	module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
		return /\d+\.\d+\.\d+(-.*)?/.test(a);
	};
	module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
		a = a.split("-")[0].split(".");
		b = b.split("-")[0].split(".");
		for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
			var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
			if (d > e) {
				break;
			} else {
				if (d < e) {
					return !1;
				}
			}
		}
		return !0;
	};
	var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
	module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
	};
	module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
	};
	var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", LOADED:"loaded", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", MEDIA:"media", VIDEO:"video", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
			PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction", STATE_CHANGE:"stateChange"}, MediaEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",
			UNSPECIFIED:"unspecified", LOADED:"loaded", BEGIN_TO_RENDER:"beginToRender", ONE_PIXEL:"onePixel", VIEWABLE:"viewable", AUDIBLE:"audible", OTHER:"other"}, ErrorType:{GENERIC:"generic", VIDEO:"video", MEDIA:"media"}, AdSessionType:{NATIVE:"native", HTML:"html", JAVASCRIPT:"javascript"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app", WEB:"web"},
		InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", HTML_DISPLAY:"htmlDisplay", NATIVE_DISPLAY:"nativeDisplay", VIDEO:"video", AUDIO:"audio"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped"}, SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll",
			POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions", OBSTRUCTION_CLASS:"obstructionClass", OBSTRUCTION_PURPOSE:"obstructionPurpose",
			OBSTRUCTION_REASON:"obstructionReason", PIXELS:"pixels"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
	var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
		this.guid = a;
		this.method = b;
		this.version = c;
		this.args = d;
	};
	module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
		return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
			void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.deserialize = function(a) {
		return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.prototype.serialize = function() {
		var a = {};
		a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
		void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
		return a;
	};
	var module$exports$omid$common$Communication = function(a) {
		this.to = a;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
	};
	module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
	};
	module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
		if (this.onMessage) {
			this.onMessage(a, b);
		}
	};
	module$exports$omid$common$Communication.prototype.serialize = function(a) {
		return JSON.stringify(a);
	};
	module$exports$omid$common$Communication.prototype.deserialize = function(a) {
		return JSON.parse(a);
	};
	module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
		return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
	};
	module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {
	};
	var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
			try {
				return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
			} catch (b) {
				return !1;
			}
		}, declareOmidPresence:function(a) {
			a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME +
				'"></iframe>'))));
		}, appendPresenceIframe_:function(a) {
			var b = a.document.createElement("iframe");
			b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.style.display = "none";
			a.document.body.appendChild(b);
		}, isMutationObserverAvailable_:function(a) {
			return "MutationObserver" in a;
		}, registerMutationObserver_:function(a) {
			var b = new MutationObserver(function(c) {
				c.forEach(function(c) {
					"BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
				});
			});
			b.observe(a.document.documentElement, {childList:!0});
		}};
	var module$exports$omid$common$DirectCommunication = function(a) {
		module$exports$omid$common$Communication.call(this, a);
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
		this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
	};
	$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.handleExportedMessage(a.serialize(), this);
	};
	module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
		module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
	};
	module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
		return !1;
	};
	var module$exports$omid$common$eventTypedefs = {};
	var module$exports$omid$common$exporter = {};
	function module$contents$omid$common$exporter_getOmidExports() {
		return "undefined" === typeof omidExports ? null : omidExports;
	}
	function module$contents$omid$common$exporter_getOrCreateName(a, b) {
		return a && (a[b] || (a[b] = {}));
	}
	module$exports$omid$common$exporter.packageExport = function(a, b, c) {
		if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
			a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
		}
	};
	var module$exports$omid$common$guid = {generateGuid:function() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
				var b = 16 * Math.random() | 0;
				a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
				return a;
			});
		}};
	var module$exports$omid$common$logger = {error:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
				throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))));
			}, function() {
				return console.error.apply(console, $jscomp.arrayFromIterable(b));
			});
		}, debug:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
			}, function() {
				return console.error.apply(console, $jscomp.arrayFromIterable(b));
			});
		}};
	function module$contents$omid$common$logger_executeLog(a, b) {
		"undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
	}
	;var module$exports$omid$common$OmidGlobalProvider = {}, module$contents$omid$common$OmidGlobalProvider_globalThis = eval("this");
	function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
		if ("undefined" !== typeof omidGlobal && omidGlobal) {
			return omidGlobal;
		}
		if ("undefined" !== typeof global && global) {
			return global;
		}
		if ("undefined" !== typeof window && window) {
			return window;
		}
		if ("undefined" !== typeof module$contents$omid$common$OmidGlobalProvider_globalThis && module$contents$omid$common$OmidGlobalProvider_globalThis) {
			return module$contents$omid$common$OmidGlobalProvider_globalThis;
		}
		throw Error("Could not determine global object context.");
	}
	module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
	var module$exports$omid$common$windowUtils = {};
	function module$contents$omid$common$windowUtils_isValidWindow(a) {
		return null != a && "undefined" !== typeof a.top && null != a.top;
	}
	module$exports$omid$common$windowUtils.isCrossOrigin = function(a) {
		if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
			return !1;
		}
		try {
			if ("undefined" === typeof a.location.hostname) {
				return !0;
			}
			module$contents$omid$common$windowUtils_isSameOriginForIE(a);
		} catch (b) {
			return !0;
		}
		return !1;
	};
	function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
		return "" === a.x || "" !== a.x;
	}
	module$exports$omid$common$windowUtils.resolveGlobalContext = function(a) {
		"undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	module$exports$omid$common$windowUtils.resolveTopWindowContext = function(a) {
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	module$exports$omid$common$windowUtils.evaluatePageUrl = function(a) {
		if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
			return null;
		}
		try {
			var b = a.top;
			return (0,module$exports$omid$common$windowUtils.isCrossOrigin)(b) ? null : b.location.href;
		} catch (c) {
			return null;
		}
	};
	var module$exports$omid$common$PostMessageCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
		module$exports$omid$common$Communication.call(this, b);
		var c = this;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
		a.addEventListener("message", function(a) {
			if ("object" === typeof a.data) {
				var b = a.data;
				module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
			}
		});
	};
	$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
		return !!(a && a.addEventListener && a.postMessage);
	};
	module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.postMessage(a.serialize(), "*");
	};
	module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
		return this.to ? (0,module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
	};
	var module$exports$omid$common$Rectangle = function(a, b, c, d) {
		this.x = a;
		this.y = b;
		this.width = c;
		this.height = d;
	};
	var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
	function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
		return b.reduce(function(a, b) {
			return a && a[b];
		}, a);
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
		if (!(0,module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
			try {
				var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
				if (e) {
					return new module$exports$omid$common$DirectCommunication(e);
				}
			} catch (f) {
			}
		}
		return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
		b = $jscomp.makeIterator(b);
		for (var e = b.next(); !e.done; e = b.next()) {
			if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
				return e;
			}
		}
		return null;
	}
	module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function(a, b, c) {
		c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
		var d = [a, (0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
		b && d.unshift(b);
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
	};
	module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
		var c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
		d && c.push(d);
		c.push((0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
	};
	var module$exports$omid$common$VastProperties = function(a, b, c, d) {
		this.isSkippable = a;
		this.skipOffset = b;
		this.isAutoPlay = c;
		this.position = d;
	};
	module$exports$omid$common$VastProperties.prototype.toJSON = function() {
		return {isSkippable:this.isSkippable, skipOffset:this.skipOffset, isAutoPlay:this.isAutoPlay, position:this.position};
	};
	var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.3.6-iab2177"};
	var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback;
	function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
		var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
		return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
	}
	var module$exports$omid$verificationClient$VerificationClient = function(a) {
		if (this.communication = a || (0,module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication)((0,module$exports$omid$common$windowUtils.resolveGlobalContext)())) {
			this.communication.onMessage = this.handleMessage_.bind(this);
		} else {
			if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
				this.omid3p = a;
			}
		}
//----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
		this.callbackMap_ = {};
		this.imgCache_ = [];
		this.injectionId_ = (a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties) ? a.injectionId : void 0;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
		return !(!this.communication && !this.omid3p);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		this.omid3p ? this.omid3p.registerSessionObserver(a, b, this.injectionId_) : this.sendMessage_("addSessionListener", a, b, this.injectionId_);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
		this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function(a) {
			a && b ? b() : !a && c && c();
		}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(a, b, c) {
		var d = this, e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
		this.imgCache_.push(e);
		var f = function(a) {
			var b = d.imgCache_.indexOf(e);
			0 <= b && d.imgCache_.splice(b, 1);
			a && a();
		};
		e.addEventListener("load", f.bind(this, b));
		e.addEventListener("error", f.bind(this, c));
		e.src = a;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(a, b, c) {
		var d = this;
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function(e, f) {
			e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
		}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(a, b, c) {
		var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document, e = d.body;
		d = d.createElement("script");
		d.onload = b;
		d.onerror = c;
		d.src = a;
		d.type = "application/javascript";
		e.appendChild(d);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
		try {
			eval(a);
		} catch (c) {
			module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
		}
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasTimeoutMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
		}
//----------var c = this.remoteTimeouts_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setTimeout", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
		this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasIntervalMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
		}
//----------var c = this.remoteIntervals_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setInterval", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
		this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(a, b) {
		b = a.method;
		var c = a.guid;
		a = a.args;
		if ("response" === b && this.callbackMap_[c]) {
			var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
			this.callbackMap_[c].apply(this, d);
		}
		"error" === b && window.console && module$exports$omid$common$logger.error(a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a, b) {
		for (var c = [], d = 1; d < arguments.length; ++d) {
			c[d - 1] = arguments[d];
		}
		this.sendMessage_.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b, c) {
		for (var d = [], e = 2; e < arguments.length; ++e) {
			d[e - 2] = arguments[e];
		}
		this.communication && (e = (0,module$exports$omid$common$guid.generateGuid)(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, d)), this.communication.sendMessage(d));
	};
	(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);

}, typeof exports === 'undefined' ? undefined : exports));



} catch(e) {
	__IntegralASDiagnosticCall('thirdparty', e);
}




	
	__IASScope.isDomless = (typeof window === "undefined" ? true : false);
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.3.6-iab2177'](); //try standard in-browser instantiation
		}
		catch(e) {
			try {
				__IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
			}
			catch(e) {
			}
		}
	}

	__IntegralASConfig.useFIF = (__IASScope && !!__IASScope.__IntegralASUseFIF) && __IntegralASConfig.mode === 'jload';
	__IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;




__IntegralASConfig.getContextNode = function(win, topWin) {
	'use strict';

	if (__IASScope.isDomless) {
		return;
	}
	if (__IntegralASConfig.useFIF) {
		return __IASScope.frameElement; // Early exit if using FIF
	}

	if (document.currentScript) {
		return document.currentScript;
	}
	
	var tempScript,
		embedded = win != topWin,
		scripts = document.getElementsByTagName('script'),
		result = scripts[scripts.length - 1],
		scriptIndex = scripts.length,
		
		useDocWrite = 'jss,jsi,jspix'.indexOf(__IntegralASConfig.mode) !== -1,
		scriptUrl = __IntegralASConfig.scriptUrl;

	try {
		
		while (--scriptIndex >= 0) {
			tempScript = scripts[scriptIndex];
			if (
				tempScript.src &&
				tempScript.src.indexOf(scriptUrl) === 0 &&
				tempScript.getAttribute('data-ias-script-tag') === null
			) {
				result = tempScript;
				tempScript.setAttribute('data-ias-script-tag', 'found');
				break;
			}
		}
		if (scriptIndex === 0 && useDocWrite && !embedded) {
			
			document.write('<span id="s' + __IntegralASConfig.asid + '"/>');
			result = document.getElementById('s' + __IntegralASConfig.asid).parentNode;
		}
	} catch (e) {} // TODO: maybe a jsDiagnostic?

	return result;
};

__IntegralASConfig.contextNode = __IASScope.isDomless ? undefined : __IntegralASConfig.getContextNode(window, top);





__IntegralASConfig.perfFactory = function() {
	'use strict';

	var _marks = {};
	var START_CODE = 'A';
	var END_CODE = 'Z';

	function _addMark(codeName, time) {
		
		_marks[codeName] = time;
	}

	function mark(codeName) {
		_addMark(codeName, Math.round(__IASScope.performance.now()));
	}

	function markStart(baseName) {
		mark(baseName + START_CODE);
	}

	function markEnd(baseName) {
		mark(baseName + END_CODE);
	}

	function markResource(baseName, url) {
		var entry, entries;
		entries = __IASScope.performance.getEntriesByName(url);
		if (entries && entries.length) {
			entry = entries[entries.length - 1];
			if (entry.startTime > 0 && entry.responseEnd > 0) {
				_addMark(baseName + START_CODE, Math.round(entry.startTime));
				
				_addMark(baseName + END_CODE, Math.round(entry.responseEnd));
			}
		}
	}

	function getData() {
		return _marks;
	}

	function getStart(baseName) {
		return _marks[baseName + START_CODE];
	}

	function getEnd(baseName) {
		return _marks[baseName + END_CODE];
	}

	function noop() {}

	function setNoops() {
		_addMark = noop;
		mark = noop;
		markStart = noop;
		markEnd = noop;
		markResource = noop;
	}

	function isFunc(obj) {
		return typeof obj === 'function';
	}

	function _init() {
		var canUsePerformanceAPIs = false;
		var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
		var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
		var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
		var downloadMark;

		try {
			canUsePerformanceAPIs =
				__IASScope.performance &&
				isFunc(__IASScope.performance.getEntriesByName) &&
				isFunc(__IASScope.performance.now) &&
				__IntegralASConfig.perfBirth !== null; // initialized to null or a time in jsAddOns1-birthdate.js

			if (canUsePerformanceAPIs) {
				downloadMark = __IntegralASConfig.jsDoSplit
					? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD
					: PERF_MARK_MAIN_SCRIPT_DOWNLOAD;

				markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
				_addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
				markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
			} else {
				setNoops();
			}
		} catch (err) {
			// TODO: remove if we never get here?
			setNoops();
			if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
				__IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
			}
		}
	}

	_init();

	return {
		mark: mark,
		markStart: markStart,
		markEnd: markEnd,
		markResource: markResource,
		getData: getData,
		getStart: getStart,
		getEnd: getEnd
	};
};
__IntegralASConfig.perf = __IntegralASConfig.perfFactory();





} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}
__IntegralASConfig.initialize=function(l,w,H){function ja(h){if(!l.executedContinueMain){l.executedContinueMain=!0;var a;l.perf.markStart(ka);Ya(l).verifyContextNode();a=Za();var b=a.mAdTalk,c=a.iOutput,d=a.mErrors,e=a.mAncestorOrigins,g=a.mBrowser,q=a.mPageUrls,m=a.mFeatures,p=t,u=a.renderDetector,v,z,C;l.perf.markStart(la);l.b11="1"===l.adHeight&&"1"===l.adWidth?"true":"false";l.cnod=l.contextNode?"true":"false";n.getAggregator().trigger("addOutputItem",{output:h?"1":"0"},"nbld",{type:k.IMPRESSION_EVENT});
var B;try{b.isApplicable(t)&&(b.start(),c.addItem(b.getFrameMap(),"fm"),m.on("fm2")&&c.addItem(b.getFrameMapIncludingPeerCase(),"fm2"),m.on("idMap")&&(B=b.getIdMap())&&c.addItem(B,"idMap"))}catch(y){d.add(k.ERROR_CODES.ADTALK_GENERAL)}try{e.isApplicable(g,m,p)&&e.start(),C=q.detectTopURL(),m.on("exch")&&(v=(new $a).createInstance(d,c),v.parse(C)),z=ab(),z.isApplicable(m)&&z.start(m),p.usesGroupMCustomMetric()&&bb(),u.start()}catch(O){d.add(k.ERROR_CODES.IMPRESSION_LEADUP)}l.perf.markEnd(la);h=C;b=
a.mVideo;try{cb(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability).send(h),f.isFunction(b.triggerInitializationEvents)&&b.triggerInitializationEvents()}catch(J){__IntegralASDiagnosticCall("impsend",J,l)}h=a.mBrowser;b=a.mIds;c=a.mViewability;d=a.mFeatures;e=a.mComm;g=a.mDataTransfer;q=a.mErrors;m=a.iOutput;p=a.loopDelay;u=a.mAdTalk;v=a.viewabilityMeasurement;a=a.mAncestorOrigins;z=t;try{l.perf.markStart(ma);var r=db();r.start();r.addFieldTypes([k.DT_SLOT.IM,k.DT_SLOT.FF,k.DT_SLOT.ENVIRONMENT,
k.DT_SLOT.FF_EXP]);var s=eb(h,b,c);s.isApplicable(d)&&s.start();var G;d.bootstrapOn("getTpl")&&d.on("usetpl")&&(G=fb(e,g,q,b,m),G.init());gb(m,p,u,q,d,e,g,b,a);v&&v.start&&v.start();z.isDomless()||hb().start(["sca","xsca","rsrch"],d);ib();n.runTier(k.TIERS.VIEWABILITY);var F=jb();F.isApplicable(d)&&(F.start(),R.recordBlockingTime(),l.perf.mark(kb),R.setupOnLoadTracking(),R.setupBrowserDelayTracking());l.perf.markEnd(ma)}catch(w){q.add(k.ERROR_CODES.POST_IMPRESSION)}l.perf.markEnd(ka)}}function lb(h,
a,b,c,d,e,g,q,m,p){try{l.perf.markStart(na),l.tpiLookupURL&&mb(g,q).init(l.tpiLookupURL),t.isDomless()||p.isStarted()&&p.sendOriginList(),n.runAll(),r.execAtEndOfThread(function(){var e;try{l.perf.markStart(oa);e={output:(new Date).getTime()-d};h.addItem(e,"sinceFw",{type:k.DT_CODES.ADTALK});f.isDef(a.loopStarted())&&h.addItem({output:a.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK});l.perf.markEnd(oa);var g,q;l.isSplitMode&&(q=l.protocol+"://"+l.sp_cdnScripts.main,l.perf.markResource(pa,q));
l.impUrl&&l.perf.markResource(nb,l.impUrl);g=l.perf.getData();n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"prf",f(g).toION());b.isApplicable(t)&&b.sendAdTalkCall()}catch(m){c.add(k.ERROR_CODES.ADTALK_DELAY)}}),l.perf.markEnd(na)}catch(u){c.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function ob(h){var a=new pb(h,t),b=new qb,c=new rb(h,t),d=sb(h,t),e=(new tb(l,t,h)).resolve(),g=[a],q=[];d.applies()&&g.push(d);c.applies()&&g.push(c);b.applies(h,t)&&g.push(b);f(e).each(function(a,b){g.push(new ub(b,
t));q.push(b.id)});0<q.length&&(n.getAggregator().trigger("addOutputItem",{output:q.join(".")},"scm",{type:k.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:q},"metricIdList",{type:k.DT_CODES.UNLOAD,asION:!0}));return g}function vb(h,a){return!t.isVideo()||t.isAvid()||t.isOmid()||t.isInMobiMraidVideo()?{}:wb(l.videoId,h,a)}function Za(){var h,a,b,c,d,e,g,q,m={};l.perf.markStart(qa);var p=n.getAggregator();xb();m.mFeatures=p.provide("features",yb());p.provide("mobileApp",function(){return h=
h||new zb(m.mFeatures)});p.provide("avidJsClient",function(){return a=a||new Ab(r.getWindow())});p.provide("context",t);m.mBrowser=p.provide("browser",(new Bb).createInstance());m.mErrors=p.request("mErrors");m.mIds=p.provide("ids",Cb());m.iOutput=Db(p);p.request("mJsonp");m.mComm=p.request("mComm");m.viewabilityMeasurement=(new Eb(Fb(m.mIds),m.mFeatures,m.mBrowser)).create();c=p.request("omidAdSessionContext");Gb(c,p);m.mFeatures.on("swapids")&&(l.oid=l.asid,l.asid=m.mIds.unq);m.mAdTalk=(new Hb).createInstance(m.mFeatures);
b=Ib();c=Jb(p);d=p.provide("mPage",(new Kb).createInstance());m.mAncestorOrigins=Lb();m.mPageUrls=p.provide("pageUrls",(new Mb).createInstance(m.mAncestorOrigins,r));e=p.provide("mScreenEvents",Nb());p.provide("ieXDomainViewability",Ob(m.mBrowser));g=Pb(m.mBrowser);q=vb(m.mFeatures,e);m.mVideo=p.provide("video",q);Qb(Rb.build());g=(new Sb).createInstance(m.mErrors,g,m.mFeatures);d=(new Tb).createInstance(g,m.mErrors,d,t);q=p.provide("jobFactory",Ub());m.mDataTransfer=Vb(g,m.mErrors,m.mFeatures,m.mIds,
m.iOutput,m.mBrowser,e,b);b=Wb(m.mErrors,m.mFeatures,p,c);m.mMode=Xb(b,m.mFeatures,m.viewabilityMeasurement.isImmediate());m.mViewability=p.provide("viewability",Yb(A(),m.viewabilityMeasurement,m.mBrowser,m.mDataTransfer,m.mFeatures,p,m.iOutput,d,e,m.mVideo));Zb(m.mFeatures,m.mViewability,c,q);m.loopDelay=ra();m.renderDetector=$b();m.mDataTransfer.setViewabilityMod(m.mViewability);l.perf.markEnd(qa);return m}function ac(h){var a=h&&h.sca,b=h&&h.xsca,c=h&&h.w,d=h&&h.h;return function(e){e="string"===
typeof e?JSON.parse(e):e;if(Object.assign)Object.assign(l,e);else for(var g in e)l[g]=e[g];l.isResolved=!0;l.sp_cdnScripts={sca:a,xsca:b};c&&d&&(l.adWidth=c,l.adHeight=d,l.autotagSizeSet=!0);ja(l.isNewBuild)}}function xb(){var h,a,b;b=n.getAggregator().request("omidAdSessionContext");h=b.app&&b.isDisplay&&!b.isWeb;(a=l.mobFwUrl&&-1<l.mobFwUrl.indexOf("/blocking/"))&&b.isLimitedSandbox&&"1"===l.adWidth&&"1"===l.adHeight&&(b.isLimitedSandbox=!1);h&&a&&(b.delayingViewabilityEvents=!0);if("app"===b.environment||
!0===l.mobAppWebview)l.mobOrTab=!0}function Gb(h,a){if(h&&h.queuedOutputItems)for(var b=0;b<h.queuedOutputItems.length;b++)a.trigger("addOutputItem",{output:h.queuedOutputItems[b].value},h.queuedOutputItems[b].code,{type:"impression"})}function Zb(h,a,b,c){var d=ob(h);n.getAggregator().provide("viewabilityDefinitions",d);return f(d).map(bc(h,a,b,c))}function gb(h,a,b,c,d,e,g,q,m){var p;"true"!==l.minimizeCalls&&(p=(new Date).getTime(),r.execAtEndOfThread(function(){lb(h,a,b,c,p,d,e,g,q,m)}))}function sa(h){if(l.isResolved)ja(l.isNewBuild);
else{if("string"===typeof h)try{h=JSON.parse(h)}catch(a){}var b=h&&h.host||"https://jsconfig.adsafeprotected.com",c=h&&h.config;c&&(b=b+"/jsconfig"+c+(l.adSessionId?"&adSessionId="+l.adSessionId:""),n.getAggregator().trigger("jsonp",b,ac(h),!1,"cbName"))}}function bc(h,a,b,c){return function(d,e){var g,q,m;g=ta(e,a);var p=cc(b,h,e.rts).getCallbacks(),f=ua(c.createPingJobs(e.type,e.timeInViewThresholds,p,e.metricId));e.sendOtherwiseInViewSignal&&(m=ta(e,a,e.sendOtherwiseInViewSignal),q=ua(c.createPingJobs(e.type,
e.timeInViewThresholds,p,e.metricId,e.sendOtherwiseInViewSignal)));e.rtsCallbacks=p;e.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?g=dc(g,e,f,t.isVideo()):(g=va(g,W(e.minUnit),f),e.sendOtherwiseInViewSignal&&(q=va(m,W(e.minUnit),q,e.sendOtherwiseInViewSignal),q.start()));g.start();return g}}function ec(h){var a,b,c;l.perf.markStart(wa);l.isNewBuild=h;h=[fc,gc,hc,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc];for(a=0;a<h.length;a+=1)n(h[a].name,h[a].dependencies,h[a].creator,h[a].settings);
n.startSystem();h=n.getAggregator();h.provide({omidAdSessionContext:{}});h.provide({omidAdSessionVerificationParameters:{}});a=uc();b=xa();c=(new vc).createInstance(a,b);h.provide({mErrors:a,mJsonp:b,mComm:c});a=__IASOmidVerificationClient;h.provide({omidVerificationClient:a});h=[{environment:$(a),adSessionReadyStrategy:wc(a)},{environment:xc(),adSessionReadyStrategy:yc()}];(new zc(h)).resolve().adSessionReadyStrategy.start();l.perf.markEnd(wa)}var ya={};if(Object.assign)l=Object.assign({},l);else{for(var za in l)ya[za]=
l[za];l=ya}var f=function(h){return new E(h)},E=function(h){this.iterable=h};E.prototype.isObj=function(h){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return h?a:b};E.prototype.isArray=function(){return this.iterable instanceof Array};E.prototype.isEmpty=function(h){return 0===this.keys(h).length};E.prototype.each=function(h,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)h(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&h(c,
b[c])};E.prototype.map=function(h,a){var b=[];this.each(function(c,d){var e=h(c,d);if(void 0!==e||a)b[b.length]=e});return b};E.prototype.stringify=function(h,a){a=a||",";var b=[];this.each(function(a,d){var e=h(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};E.prototype.toION=function(h,a){var b,c="[",d="]";a=a||0;h=h||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(h,a)}):(c="{",
d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),m=f(c).toION(h,a);return d?m:(h[b]||b)+":"+m}));return c+b.join(",")+d};E.prototype.compareTo=function(h){var a=!1;this.each(function(b,c){h[b]!==c&&(a||(a={}),a[b]=c)});return a};E.prototype.toParams=function(h){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},h)};E.prototype._privateMixin=function(h,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(h[c]=a[c]);
return h};E.prototype.mapToObj=function(h){var a={},b=this;this.each(function(c,d){var e=h(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};E.prototype.invert=function(){return this.mapToObj(function(h,a){var b={};b[a]=h;return b})};E.prototype.mixin=function(h,a){return this._privateMixin(this.iterable,h,a)};E.prototype.find=function(h){var a;this.each(function(b,c){h(b,c)&&(a=c)});return a};E.prototype.findFirst=function(h){var a,b;this.each(function(c,d){!b&&h(c,d)&&(a=d,b=!0)});return a};E.prototype.keys=
function(h){var a=[];this.each(function(b){a.push(b)},h);return a};E.prototype.asStrings=function(){var h={};this.each(function(a,b){h[a]=""+b});return h};E.prototype.selectProperties=function(h){var a={},b=this;f(h).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};E.prototype.filter=function(h,a){return this.map(function(a,c){var d;if(f.isUndef(h)||f.resolve(h,a,c))d=c;return d},a)};E.prototype.toArray=function(){return this.map(function(h,a){return a})};E.prototype.JSONStringify=
function(){var h,a,b=!1;w.Prototype&&w.Prototype.Version&&-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);h=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return h};E.prototype.contains=function(h){var a=f(this.iterable).findFirst(function(a,c){return h===c});return f.isDef(a)};f.toBase=function(h,a){var b,c=0>h,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];h=c?-h:h;do b=h%a,e.push(d[b]),h=
(h-b)/a;while(0<h);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(h){return"undefined"!==typeof h};f.isUndef=function(h){return!f.isDef(h)};f.isBool=function(h){return"boolean"===typeof h};f.noop=function(){};f.identity=function(h){return h};f.isFunction=function(h){return"function"===typeof h};f.isStr=function(h){return"string"===typeof h};f.useIfDef=function(h){return f.isDef(h)?h:!1};f.stringifyTriState=function(h){return!0===h?1:!1===h?0:"na"};f.getNum=function(h){h=parseInt(h);isFinite(h)||
(h=-1);return h};f.resolve=function(h){var a=f(arguments).toArray();a.shift();return f.isFunction(h)?h.apply({},a):h};f.flatJSONParse=function(h){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(h);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(h);return e};f.debounce=function(h,a,b){var c,d=b||w;return function(){var b=this,g=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;h.apply(b,g)},a)}};f.last=function(h){return h[h.length-1]};f.collapseArgsIntoHash=function(h,a){var b=
{};a?b[h]=a:b=h;return b};f.fromBoolToNum=function(h){return h?1:0};f.isNumeric=function(h){return f.isDef(h)&&null!==h&&!isNaN(h)};f.fromNodeListToArray=function(h){return Array.prototype.slice.call(h)};var n=function(){var h,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,p,u){u=u||{};var v,k,n=function(a){0===b.length&&(b=f(a).map(function(a,b){return h.request(b)}))},l=function(){if(!v){var a=[];v=!0;n(["features","browser","context"]);
u.emits&&(c.events=new A);if(!u.applies||u.applies.apply(u,b))k=!0,a=f(e).map(function(a,b){return h.request(b)},!0),a.push(c),f(c).mixin(p.apply({},a))}};(function(){var b=u.tier;f.isDef(b)&&(a[b]=a[b]||new aa,a[b].push(l))})();h.provide(d,function(){var a;l();k&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){h=h||new Aa;f(c).each(function(a,
b){e.apply({},b)})};d.getAggregator=function(){return h};return d}(),k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",
XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},
PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",IMPRESSION_PERFORMANCE:"e",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",
HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",
ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",
IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",OMID_GEOMETRY_MEASUREMENT_CHANGED:"omidGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",
RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",
UNIQUE_ID_TOKEN:"[IAS_ASID]"},wa="mf",ka="cm",qa="in",la="pr",ma="po",kb="bl",na="lo",oa="lt",pa="md",nb="id",Ya=function(h){return{verifyContextNode:function(){if(!(__IASScope.isDomless||h.contextNode&&null!==h.contextNode.parentNode)){var a,b=H.getElementsByTagName("script"),c=b.length,d=b[c-1],e=h.scriptUrl;try{for(;0<=--c;)if(a=b[c],a.src&&0===a.src.indexOf(e)&&null===a.getAttribute("data-ias-script-tag")){d=a;a.setAttribute("data-ias-script-tag","found");break}}catch(g){}h.contextNode=d}}}},
Bc=function(){var h,a=["STYLE","SCRIPT","HEAD","META"],b=k.RENDER.CREATIVE_NODE_TYPES.concat(k.RENDER.CONTAINER_NODE_TYPES),c=0,d=l.useFIF&&t.friendlyIframe||t.isSpecifiedAd(),e=0,g=[],q=function(q){var p=s.isNodeXDomainIframe(q)||s.isNodeCreative(q),u=!q;h=u?l.contextNode.parentNode:q;if(p||u){var v=g.length;0<v&&(e<v?e=v:(e=0,g=[]));n.getAggregator().trigger("evaluateCreativeFinderResult",q)}else{if(d){var z;z=p=q;u=t.friendly?r.getTop().document.body:l.contextNode.ownerDocument.body;for(;3>c;){if(u&&
p===u){z=p;c=3;break}s.isWindow(p)&&(z=s.crossQuerySelector("["+k.AD_IDENTIFIER+"-"+l.asid+"]"),p=f.isDef(z)?z:p);z=p=f.isDef(p)?p.parentNode||p:p;c++}p=z}else p=q;if(s.isWindow(p)){try{v=p.document}catch(C){v=l.contextNode.ownerDocument}q=v}else"IFRAME"===s.getNodeName(p)?(g.push(q),q=q.contentWindow.document):q=p;var v=[],u=(p=q&&q.getElementsByTagName&&q.getElementsByTagName("*"))&&p.length,B;if(p)for(var y=0;y<u;y++)B=(z=p[y])&&z.nodeName&&z.nodeName.toUpperCase(),!z.children||0!==z.children.length||
f(b).contains(B)||f(a).contains(B)||f(v).contains(B)||v.push(B);v=b.concat(v);(new Ac(v,g)).searchDescendants(q)}};n.getAggregator().on("creativeFinderBatchCompleted",q);return{find:q,getClosestContainerName:function(){return s.getNodeName(h)}}},Ac=function(h,a){var b=function(b){function d(b){var c=s.getNodeName(b),d=s.isNodeCreative(b)||"IFRAME"===c;c&&d&&!s.isEmptyTeadsFrame(b)&&(c=s.getNodeArea(b),c>m&&!f(a).contains(b)&&(q=b,m=c))}function e(){do d(b[g]),g+=1;while(0!==g%p&&g<b.length);g<b.length?
r.execAtEndOfThread(e,0):n.getAggregator().trigger("creativeFinderBatchCompleted",q)}var g=0,q=null,m=-1,p=500;if(b.length&&n.getAggregator().request("useYieldSearch"))e();else{for(g;g<b.length;g++)d(b[g]);n.getAggregator().trigger("creativeFinderBatchCompleted",q)}};return{searchDescendants:function(a){a=a||l.contextNode.parentNode;var d,e,g=[];for(d=0;d<h.length;d++){e=h[d].toLowerCase();var q=a.getElementsByTagName&&a.getElementsByTagName(e);if(q&&q.length)for(e=0;e<q.length;e++)g.push(q[e])}b(g)}}},
$b=function(){var h,a=!1,b=!1,c=!1,d={status:k.RENDER.STATUS.OTHER,details:k.RENDER.DETAILS.OTHER},e={status:k.RENDER.STATUS.DETECTED,details:k.RENDER.DETAILS.ENVIRONMENT},g=n.getAggregator().request("omidAdSessionContext"),q=function(){c=a=!0},m=function(a){a&&(a.status=k.RENDER.STATUS.DETECTED);n.getAggregator().trigger("adRendered")},p=function(){var a=!1;t.isOmid()&&g&&g.useOMID13Logic&&(a=!0);return a},u=function(a){var b={},c=r.getDoc(),d=function(e){var g=e&&e.type;if("readystatechange"===
g&&"complete"===e.target.readyState||"load"===g)m(b),h.saveNode(a),"readystatechange"===g?h.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===g&&h.save(k.RENDER.DIAGNOSTIC.LOAD_FIRED),l(b),x.removeEvent(a,"load",d),x.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(m(b),h.saveNode(a),h.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(x.addEvent(a,"load",d),x.addEvent(c,"readystatechange",d));return b},v=function(){var a=r.getWindow().mraid,b=a&&a.getState&&a.getState(),c=function(){x.removeEvent(a,
"ready",c);h.save(k.RENDER.DETAILS.ENVIRONMENT);h.save(k.RENDER.DIAGNOSTIC.MRAID_READY);m();l({status:k.RENDER.STATUS.DETECTED})};h.save(k.RENDER.DETAILS.ENVIRONMENT);"default"===b?(m(),h.save(k.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=k.RENDER.STATUS.DETECTED):"loading"===b?(x.addEvent(a,"ready",c),h.save(k.RENDER.DIAGNOSTIC.MRAID_LOADING)):(x.addEvent(a,"ready",c),h.save(k.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));l(d)},z=function(a){a===k.RENDER.STATUS.DETECTED&&n.getAggregator().trigger("perfCheckpoint",
{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},l=function(b){var c=h.build();b=b.status||d.status;c=c?c:d.details;a&&b===k.RENDER.STATUS.DETECTED?(z(b),n.getAggregator().trigger("addThrottledOutputItem","rend",b),n.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(z(b),n.getAggregator().trigger("addOutputItem",{output:b},"rend"),n.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},B=function(){n.getAggregator().on("primaryadfound",
function(a){var b,c=d,e=new Bc,g=!0;n.getAggregator().on("evaluateCreativeFinderResult",function(a){if(s.isNodeXDomainIframe(a))b?r.clearInterval(b):g=!1,c=u(a);else if(a){var d=!1,q=s.getRect(a);a&&"IMG"===s.getNodeName(a)&&(d=f.isDef(a.naturalWidth)&&(0===a.naturalWidth||0===a.naturalHeight));!d&&q.width>=k.RENDER.WIDTH_THRESHOLD&&q.height>=k.RENDER.HEIGHT_THRESHOLD&&(m(c),b?r.clearInterval(b):g=!1);h.saveNode(a)}else a=e.getClosestContainerName()||h.getAdNodeName(a)||c.details,h.save(a);l(c)});
var q=function(){var b=a&&a.getAdNode();try{e.find(b)}catch(c){n.getAggregator().trigger("renderdiag",c)}},p=n.getAggregator().request("mobileApp");p&&p.isMobileAppEnvironment&&p.isMobileAppEnvironment()&&t.isMraid()?v():(q(),g&&(b=r.setInterval(q,500)));n.getAggregator().trigger("eligiblerender")})},y=function(){var a=g&&!!g.isVideo,c=g&&!!g.videoStartArrived,d=g&&!!g.geometryArrived;return b||!d||a&&!c?!1:(n.getAggregator().trigger("eligiblerender"),h.save(k.RENDER.DETAILS.ENVIRONMENT),h.save(k.RENDER.DIAGNOSTIC.OMID_RENDERED),
m(),l(e),b=!0)};return{start:function(){var a=!1;n.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:"initial"});n.getAggregator().on("adRendered",function(){a=!0});n.getAggregator().provide("adRenderStatus",function(){return a});n.getAggregator().provide("useYieldSearch",function(){return c});h=new Cc;new Dc;n.getAggregator().on("impressionsent",q);p()?y()||(h.save(k.RENDER.DETAILS.ENVIRONMENT),h.save(k.RENDER.DIAGNOSTIC.OMID_UNRENDERED),
l(d),n.getAggregator().on("omidrendgeoupdate",function(){y()}),n.getAggregator().on("omidrendvideostart",function(){y()})):t.isAvid()||t.isOmid()||t.isVideo()?(n.getAggregator().trigger("eligiblerender"),h.save(e.details),m(),l(e)):(l(d),B())}}},Cc=function(){var h=[],a=[],b=function(a){var b;if(s.isWindow(a))b="WINDOW";else if(s.isNodeXDomainIframe(a))b="XIFRAME";else try{b=s.getNodeName(a)}catch(g){c("nen")}return b},c=function(a){h.push(a)};return{build:function(){var b=[];f(a).each(function(a,
c){b.push(c)});f(h).each(function(a,c){b.push(c)});a=[];h=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),g=d&&s.getRect(d),q=d&&"IMG"===e,m=d&&s.hasBackgroundImage(d),p=d&&d.innerText&&0<d.innerText.length,h=d&&d.children&&0===d.children.length&&p,v=g&&g.width>=k.RENDER.WIDTH_THRESHOLD&&g.height>=k.RENDER.HEIGHT_THRESHOLD?k.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:k.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE,z=(m||q)&&f.isDef(d.naturalWidth)&&(0===d.naturalWidth||0===d.naturalHeight);
a.push(e);a.push(v);z&&a.push(k.RENDER.DIAGNOSTIC.BROKEN_IMAGE);m&&a.push(k.RENDER.DIAGNOSTIC.STYLED_NODE);h&&a.push(k.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(n){c("sne")}}}},Dc=function(h){var a,b=!1,c=!1,d=function(){n.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a,l),n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};n.getAggregator().on("eligiblerender",function(){b=!0;d()});n.getAggregator().on("renderdiag",
function(b){a=b;d()});d()},X=function(){return{applies:function(h,a){var b=n.getAggregator().request("mobileApp");return(h.browserIs(k.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(k.BROWSERS.WEBKIT)||h.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&h.hasIntersectionObserver()}}},Ec=function(){return{applies:function(h){var a=n.getAggregator().request("mobileApp");return(h.browserIs(k.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(k.BROWSERS.WEBKIT)||h.browserIs(k.BROWSERS.MSEDGE))&&
!a.isMobileAppEnvironment()&&h.hasResizeObserver()}}},bb=function(){var h,a,b=!1,c=n.getAggregator().request("mPage"),d=function(){!b&&a&&h&&!c.isHidden()&&(b=!0,n.getAggregator().trigger("sendDt",k.DT_CODES.LARGE_BILLABLE))};n.getAggregator().on("primaryadfound",function(a){h=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});n.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},Ib=function(){var h=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h",omidObstructions:"oobs"},
c={omidObstructions:["sl","percentInView","reason"]};n.getAggregator().on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var g=f(c).compareTo(a);(g=d(g))&&JSON.stringify(g)!==JSON.stringify({})&&(g.t=t.getTagTime(),h.push(g));f(a).mixin(c)});var d=function(a){f(c).each(function(b,c){var d=!1;f(c).each(function(b,c){a[c]&&(d=!0)});!1===d&&delete a[b]});return a};return{toString:function(){return f(h).toION(b)}}},Aa=function(){var h=new Fc,a=new A;return f(h).mixin(a)},
A=function(){var h={},a={},b=function(b,c,g){if((b=a[b])&&0!==b)return g&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){h[a]=h[a]||new aa;h[a].push(b,c)};return{on:function(a,e){var g={};e?g[a]=e:g=a;f(g).each(c);f(g).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=h[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var g=b;a[g]=a[g]||[];a[g].push(c);(g=
h[b])&&g.run.apply({},c)}}},ba=function(){var h=function(a,c,d){var e,g=c.length,q=s.isWindow(a)?a.frames:s.getChildWindowsOf(a);d&&d(a,c);if(q&&q.length){for(a=0;a<q.length;a++)(e=q[a])&&s.isWindow(e)&&(c[g]=a,h(e,c,d));c.pop()}},a=function(a,c){try{h(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=s.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},aa=function(){var h=[];return{push:function(a,
b){var c=0;b=b||Number.MAX_VALUE;h[h.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(h).each(function(b,c){c.apply({},a)})}}},ua=function(h){var a={};return{doEligibleJobs:function(b){f(h).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Ba=function(){var h,a=new ca,b=function(b,d,e,g){var q,m,p,h;if(JSON&&JSON.parse)try{q=JSON.parse(b.data),m=b.source,h=f.noop,d(q)&&(g&&(p=g(m,q))&&(h=function(){a.send(function(){return p},
m)}),e(b,q,h))}catch(v){q&&n.getAggregator().trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){h=function(g){b(g,a,d,e)};x.addEvent(w,"message",h)},stop:function(){h&&x.removeEvent(w,"message",h);h=null}}},ca=function(){var h=function(a){return f(a).isObj()?[a]:(new ba).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=h(c);f(d).each(function(c,d){var q;
q=f.resolve(b,d)||{};q.sentTime=r.now();q=a(q);d.postMessage(f(q).JSONStringify(),"*")})}}}},Gc=function(h,a){return{onAll:function(b){var c={};f(a).each(function(d,e){h.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},Db=function(h){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},
d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var p=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};h.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,h;a(e)&&(h=d.output(),e.encode&&(c=encodeURIComponent(c),h=encodeURIComponent(h)),f.isFunction(b)?
b(c,h):b[c]=h)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Fc=function(){var h={},a=function(a,c){h[a]=c};return{request:function(a){var c,d=h[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?h[b]=c:f(b).each(a);return c}}},Tb=function(){return{createInstance:function(h,a,b,c){return t.isDomless()?new Hc:new Ic(h,a,b,c)}}},Ic=function(h,a,b,c){var d;
return{collect:function(){var a=h.find(),g=a.getOutOfViewReasons(),q=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&d?d:D(s.calcWinDims()),p=a.getDims();d=m;if(!a.hasAd()||!m.hasValidDims()||!p.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:t.embedded,winDimensions:m,adDimensions:p};!0===q&&g.push(k.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:m,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:g.length?k.OUT_OF_VIEW:a.getViewState(),
viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),reason:g.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(q),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Hc=function(){return{collect:function(){return{}}}},Jc=function(h){h=h||f.identity;var a=[],b=r.now(),c=function(){var c=
r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=h(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},Ca=function(h,a){var b=h||1,c=0,d=0,e,g=0;return{start:function(){0===c%b&&(e=r.now())},stop:function(){var q=e||a;0===c%b&&(g+=r.now()-q,d++);c++},getTime:function(){return g},getCount:function(){return d}}},
Da=function(){var h,a=0,b=0,c=new A(!0),d=function(){h&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){h=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){h||(h=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return h}}},Kc=function(h,a){var b,c=a,d=function(a){b||(a&&h(),b=r.setInterval(h,c))},e=function(a){b&&(a&&h(),r.clearInterval(b),b=null)};return{start:d,stop:e,updateFrequency:function(a,
q){c=a;b&&(e(),d(q))}}},W=function(h){var a,b,c=0,d=t.getTagTime(),e=0,g=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=t.getTagTime();g=!1},mark:function(){a=g?t.getTagTime()-d:0;c+=a;c>=h&&(b=c-a<h,e+=b?c:a);d=t.getTagTime();g=!0}}},S=function(h,a){var b=h||l.adsafeSrc||l.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?l.protocol+":"+b:l.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],g=b[4],q=b[5],
m=h?b[6]:"",p=a?b[7]:"",u={},v=function(a){f.isDef(a)&&(g=a);return g},k=function(a){f.isDef(a)&&(q=a);return q},n=function(a,b){return a+"="+f(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=u[b])?u[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:c,hostname:e,sub:v,master:k,setParam:function(a,b){u[a]=u[a]||{};f(b).isObj()?f(u[a]).mixin(b):u[a]=b},path:function(a){m=a},toString:function(){var a=
v()?v()+".":"",b=m?"/"+m:"",c;p||!f(u).isEmpty()?(c=f(u).isEmpty()?"":f(u).stringify(n,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+k()+b+c}}},ib=function(){var h=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(t.friendly&&!t.isMobileApp())if(b=n.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=s.getOurNodeInTop()){var g=
s.getAncestorNodes(d);e=f(g).map(a)}if(b=e=e&&h(e))n.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0}),n.getAggregator().provide("adSlotIds",b),c=b}return c}catch(q){n.getAggregator().trigger("error",k.ERROR_CODES.AD_SLOT_ID)}}()},pc={name:"AdRefreshDetection",dependencies:[],creator:function(){var h=[15,30,45,60,90],a={start:function(){var a=this,c=l.asid,d=this.getChanId(),e=l&&l.contextNode&&l.contextNode.nextSibling&&l.contextNode.nextSibling.id;c&&d&&
(this.recordAdSlotImpression(c,d,e,function(c,d){c?n.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==h.indexOf(a)},getChanId:function(){for(var a=l.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var g=d.exec(a[e]);g&&3===g.length&&"chanId"===g[1]&&(c=g[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+
"."+a.refreshCount;n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var g=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);g.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=l.adRefreshThreshold&&parseInt(l.adRefreshThreshold)||
null,g=r.getTop();if(e&&this.adRefreshIntervalIsValid(e))n.getAggregator().on("sendDt",function(q,m){q===k.DT_CODES.PING&&m===e&&(r.execAtEndOfThread(function(){g.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ir",a);n.getAggregator().trigger("adSessionComplete")}};t.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&
d.adServerName&&a.start()}catch(e){n.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH)}});return a},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(h,a,b){return b.isPossiblyRefreshable()}}},Lb=function(){var h,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){var g;if(g=e.isVideo()&&!(e.isAvid()||e.isMraid()||e.isOmid()))g=n.getAggregator().request("adNode")?parseFloat(n.getAggregator().request("videoVersion")):
void 0,g=3.7>g;return!g&&a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{h=r.getWindow().location.ancestorOrigins,a=!0}catch(b){n.getAggregator().trigger("error",k.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return h&&h.length||0},getTopDomain:function(){return f.last(h)},sendOriginList:function(){var a;a="ao:"+(h?f(h).map(b).reverse():[]).join(",");n.getAggregator().trigger("addOutputItem",{output:a},
"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});n.getAggregator().trigger("sendDt",k.DT_CODES.THIRD_PARTY)}}},fb=function(h,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},g=function(d){try{a.diagnostic("c");var g=d.length,p=0,u=0;e(g,0,0);f(d).each(function(a,b){h.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(g,p,++u)},!0);e(g,++p,u)})}catch(v){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new S).fullDom;"/"!==a.slice(-1)&&
(a+="/");a+="tpl?asId="+l.asid;h.jsonp(a,g)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},Wb=function(h,a,b,c){return{enabled:"true"===l.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===l.accountForSadImps&&c.measure(a),l._onAPIResult&&l._onAPIResult(a)}catch(e){h.add(k.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},Bb=function(){return{createInstance:function(h,a,b,c){return t.isDomless()?new Lc:new Mc}}},Mc=function(){var h=k.BROWSERS,a=function(a){return b()===
a},b=function(){var a="u",b=r.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=h.OPERA:f.isDef(b.mozInnerScreenY)?a=h.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=h.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=h.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=h.IE:f.isDef(b.WebKitPoint)&&(a=h.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=r.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,
hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasMutationObserver:function(){return"function"===typeof MutationObserver},hasResizeObserver:function(){return"function"===typeof ResizeObserver},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:k.NA},getBrowserType:b,
getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var g=k.NA,q=r.getDoc(),m=q.createElement("div");if(a(h.IE))try{if("-ms-ime-align"in q.documentElement.style)g="11";else for(m.style.behavior="url(#default#clientcaps)",q=0;q<e.length&&!(g=m.getComponentVersion(e[q],"componentid").replace(/,/g,"."));q++);}catch(p){}e=g;g=k.NA;m=r.getWindow();f.isDef(m.navigator)&&f.isDef(m.navigator.appName)&&
(g=m.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:g}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],g=function(){return f(b).findFirst(function(b,c){return M.contains(a,c)})};return M.contains(a,"Android")&&g()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},Lc=function(){var h=function(){return!1},a=function(){return k.NA};return{getDocumentMode:a,
getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:h,getUserAgent:h,hasPostMessage:h,hasAncestorOrigins:h,hasIntersectionObserver:h,hasMutationObserver:h,isAndroidWebViewBrowser:h}},vc=function(){return{createInstance:function(h,a){return t.isDomless()?new Nc(a):new Oc(h,a)}}},Pc=function(){var h,a=function(a,c){var d="",e="",g=r.getDoc().getElementsByTagName("ins");if(g&&0<g.length){e=g[0];d="<ins";for(g=0;g<e.attributes.length;g++)d+=
" "+e.attributes[g].nodeName+'="'+e.attributes[g].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){h=n.getAggregator().request("omidAdSessionContext");var c=!(!h.app||!h.isDisplay||h.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!t.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){h=n.getAggregator().request("omidAdSessionContext");var c="iasbi"+l.asid,d;d=l.contextNode.parentNode;var e,g=l.adWidth&&0<l.adWidth?l.adWidth:0,q=l.adHeight&&0<l.adHeight?l.adHeight:0,m=r.getDoc().getElementsByTagName("ins"),
p;p=e=0;m&&0<m.length&&(p=m[0],e=parseInt(p.style.width),p=parseInt(p.style.height));g=e||g||window.innerWidth;q=p||q||window.innerHeight;"complete"===r.getDoc().readyState&&(l.forceAppend="true");"true"===l.forceAppend?(e=r.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):r.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=r.getDoc().getElementById(c))d.style.width=g+"px",d.style.height=q+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},Oc=function(h,a){var b=function(a,b,c,d){"script"!==a?(b=H.createElement("DIV"),b.innerHTML=c,c=b.childNodes[0]):(c=H.createElement("SCRIPT"),c.src=b,d&&(c.onload=d));l.contextNode.parentNode.appendChild(c)},c=function(a,c,d){var e,g="";e=' src="'+c+'"';d&&(g="__IntegralASEventLoadHandler_"+l.asid.replace(/-/g,""),w[g]=d,g=' onload="'+g+" && "+g+'()"');g={script:['<script type="text/javascript"',
g,e,">\x3c/script>"],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0"',g,e,"></iframe>"],img:["<img",g,e,"/>"]}[a].join("");t.isOmid()?(e=new Pc,e.isApplicable(c)?e.deployBlockingScriptIntoIframe(c):b(a,c,g,d)):"true"===l.forceAppend?b(a,c,g,d):H.write(g)},d=function(a,b,c){var d=!c&&x.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=s.createImage(),
b&&(c.onload=b),c.src=a)},e=function(a,b,c,d){var e=H.createElement("script");c=c||l.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},g=function(a){f.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),d(a,void 0,!0))},q=function(b,c,d,g){e(a.wrap(b,c,d,g))};n.getAggregator().on({addNode:c,send:d,exec:e,notify:g,jsonp:q});return{addNode:c,send:d,exec:e,
notify:g,jsonp:q}},Nc=function(h){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";n.getAggregator().request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);n.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){n.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:l.asid}):a&&
"string"===typeof a&&(a=(new S(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(h.wrap(a,b,d,e))};n.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},t=function(h){var a="undefined"===typeof window,b="undefined"!==typeof h&&"undefined"!==typeof top&&h!==top,c=function(){var b=!1;if(a)b=!0;else try{b=!!top.document}catch(c){}return b}(),d=function(){return a||f.isDef(r.getWindow().mraid)},e=function(){return!a&&f.isDef(r.getWindow().mraid)},
g=function(){var b=!1;if(!a)var c=(b=r.getWindow().inmobi)&&b.IASDocumentVideoBuffer,b=b&&c&&f.isFunction(c.addVideoEventListener),b=e()&&!!b;return b},q=function(){var b;if(!(b=-1!==l.mode.indexOf("jsvid"))){var c;b=!1;var d=n.getAggregator();if(!a&&(d=d.request("avidJsClient"),d.isAvidAvailable()))try{c=d.getAvidAdSessionContext(),b=c.mediaType===k.MEDIA_TYPE.VIDEO}catch(e){}(c=b)||(d=n.getAggregator(),c=d.request("omidVerificationClient"),b=!1,d=d.request("omidAdSessionContext"),c&&d&&(b=d.mediaType===
k.MEDIA_TYPE.VIDEO),c=b||g());b=c}return b},m=function(){return l.mobOrTab},p=function(a){return!1===f(l.customViewability).isArray()?!1:0<f(l.customViewability).filter(function(b,c){return M.contains(c.id,a)}).length},u=function(){return p("grpm")||l.use100v};return{embedded:b,friendly:c,isFriendlyToParent:function(b){var c,d;if(a)b=!0;else{try{d=S(b.document.referrer),c=d.hostname===b.location.hostname}catch(e){}b=c}return b},friendlyIframe:b&&c,xDomainIframe:b&&!c,getTagTime:function(){return r.now()-
l.birthdate},getPageTime:function(){var b=k.NA;!a&&f.isDef(h.chrome)&&f.isDef(h.chrome.csi)&&f.isFunction(h.chrome.csi)&&(b=r.round(h.chrome.csi().pageT));return b},isVideo:q,isMobileApp:d,isSpecifiedAd:function(){var b=!1;a||(b=(b=f.isFunction(l.contextNode.getAttribute)&&l.contextNode.getAttribute("data-ias-container")||l._cl_adpath)&&f.isStr(b));return b},isCompoundAd:function(){var b=!1,c=/\[(.*)\]/;a||(b=c.exec(l._cl_adpath),b=null!==b&&0!==b[1].length&&1<b[1].split(",").length);return b},isAvid:function(){return!a&&
f.isDef(r.getWindow().avid)},isOmid:function(){var a=n.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new Ea).accepts()},isOmidForWeb:function(){return(new Fa).accepts()},isDomless:function(){return a},isAvidNative:function(){var b=!1,c=n.getAggregator();a||(c=c.request("avidJsClient"),c.isAvidAvailable()&&(b=c.getAvidAdSessionContext().avidAdSessionType,b=b===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||b===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));
return b},isBustedIframe:function(){var b=!1;a||(b=void 0!==da());return b},isMraid:e,isSafeFrame:function(){var b=!1;a||(b=f(r.getWindow().$sf).isObj(!1)&&f(r.getWindow().$sf.ext).isObj(!1));return b},isInMobiMraidVideo:g,isDeviceTypeGroupMobile:m,usesIASFullyInViewCustomMetric:function(){return p("fiv")||l.use100v||!u()},usesGroupMCustomMetric:u,isCeltra:function(){var b=!1;a||(b=Ga().isApplicable());return b},usesGroupMCustomMetricMobilePassThru:function(){return u()&&m()},usesZeroPivCustomMetric:function(){return!1===
f(l.customViewability).isArray()?!1:0<f(l.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!a&&!d()&&!q()&&b&&"jload"===l.mode},integratedBlockingApplies:function(a){var b=
!1,c,d,e;l.contextNode&&f.isFunction(l.contextNode.getAttribute)&&(c=l.contextNode.getAttribute("data-ias-check-tag"),d=l.contextNode.getAttribute("data-ias-check-done"),e=(e=l.contextNode.getAttribute("data-ias-callback"))&&f.isFunction(r.getWindow()[e]));var g=f.isDef(JSON)&&f.isFunction(JSON.parse);a=l.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var q=!0===l.fwMonitoring||"true"===l.fwMonitoring;g&&a&&("true"===c&&"true"!==d&&e?(b=!0,q&&n.getAggregator().trigger("addOutputItem",
{output:"imgb"},"smm",{type:"impression"})):(b=!1,q||n.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b}}}(w),x={addEvent:function(h,a,b,c){f.isDef(h.addEventListener)?"mouseenter"===a?h.addEventListener("mouseover",x.mouseEnter(b),c):"mouseleave"===a?h.addEventListener("mouseout",x.mouseEnter(b),c):h.addEventListener(a,b,c):f.isDef(h.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),h.attachEvent("on"+a,b))},removeEvent:function(h,a,b){f.isDef(h.removeEventListener)?
("mouseenter"===a?(a="mouseover",b=x.mouseEnter):"mouseleave"===a&&(a="mouseout",b=x.mouseEnter),h.removeEventListener(a,b)):f.isDef(h.detachEvent)&&h.detachEvent("on"+a,b)},mouseEnter:function(h){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||h.call(this,b)}},isAChildOf:function(h,a){if(h===a)return!1;for(;a&&a!==h;)a=a.parentNode;return a===h},getStyle:function(h,a,b){var c="",d=H.defaultView&&H.defaultView.getComputedStyle;b=b||"";d?c=(h=H.defaultView.getComputedStyle(h,
b))?h.getPropertyValue(a):c:h.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=h.currentStyle[a]);return c},getXHR2:function(h,a){var b,c;f.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(h,a){if(t.isDomless())r.setTimeout(function(){h()},50);else{var b=a||(t.xDomainIframe?H:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),
a())},50)},d=this;(function(a){var g=function(){a(!0)};f.isFunction(H.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(g):d.addEvent(b,"DOMContentLoaded",g,!1):c(a)})(h)}},isSandboxed:function(h){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)h=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(h.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&
(a=!0)}h=a}c=h}return c},styleElement:function(h,a){if(h&&f(h.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});h.style.cssText=b}},nodeIsAbsolutelyPositioned:function(h){return"absolute"===x.getStyle(h,"position")||h.style&&"absolute"===h.style.position}},Y=function(h){var a,b=Y.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},
e=function(){var a={},b=k.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[h],d=b&&b[h];f.isDef(d)&&0!==d&&f(c).contains(h)&&(a=a+"."+d);d=b[h];b[h]=f.isDef(d)?d+1:1;return a}();return{callType:h,enumerator:a}};Y.callTypeCounter={};var Vb=function(h,a,b,c,d,e,g,q){var m=0,p=0,u=!1,v=function(a,e,q,h,v,z){q=q||!b.on("postDts");var t=a===k.DT_CODES.DIAGNOSTIC||
a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==g.getCurrentLoc()))try{var s=l.dtBaseURL,w=new S(s,!0),x=r.now();n.getAggregator().trigger("preSendDt",a);s||(w.path("dt"),b.on("usedtdomain")&&w.sub("dt"));C(w,a,e);v&&v.field&&w.setParam(v.field,v.value);h||B(w,a);n.getAggregator().trigger("send",w,function(){p+=1;m=r.now()-x;f.isFunction(z)&&z()},q);a===k.DT_CODES.UNLOAD&&(u=!0);d.cleanup()}catch(D){__IntegralASDiagnosticCall("dt-"+
a,D),n.getAggregator().trigger("error",k.ERROR_CODES.PHONE_HOME)}};h=function(){u||v(k.DT_CODES.UNLOAD,-1,!0)};var z=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=l.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&v(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},C=function(a,b,e){var g=new Y(b);e=f.isDef(e)?e:g.enumerator;a.setParam("asId",l.asid);e={c:c.getCacheBustId(),pingTime:e,time:t.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===
b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},B=function(c,h){var f,u={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===h},function(a,b){c.setParam(a,b.replace("%3A",":"))});g.fastForward();if(h===k.DT_CODES.CUSTOM||h===k.DT_CODES.UNLOAD||h===k.DT_CODES.VIDEO_EVENTS||h===k.DT_CODES.FULLY_INVIEW||h===k.DT_CODES.PING||h===k.DT_CODES.VIEWABILITY_READY||h===k.DT_CODES.ADTALK)u.clog=q,t.isVideo()&&(f=t.isOmid()?"omidVideoEventsString":"videoEventsString",(f=
n.getAggregator().request(f))&&!f.isEmpty()&&(u.ve=f));h===k.DT_CODES.UNLOAD&&(u.ndt=p);-1!==l.mode.indexOf("jsvid")&&(u.vv=n.getAggregator().request("videoVersion"));u.NULL1=b.output();u.NULL2=g.stringify(10);u.em=t.embedded;u.fr=t.friendly;u.e=a.toString();u.tt=l.mode;u.dtt=m;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===h);b&&a.oneTime&&(a.flagForRemoval=!0);return b},u);c.setParam("tv",u);c.setParam("br",e.getBrowserType())};n.getAggregator().on({sendDt:function(a,
b,c){v(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){v(a,b,void 0,!0)},sendDiag:z,updateDtCount:function(){p++},unload:h});return{send:v,unload:h,diagnostic:z,setViewabilityMod:function(a){}}},D=function(h){var a={},b=!1,c=function(){var a=1===h.nodeType?s.nodeIsHidden(h):0===h.width||0===h.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},g=function(){return r.round(a.width)*r.round(a.height)};
(function(){var b;h!==w.parent&&(1!==h.nodeType?a=h:f.isDef(h.getBoundingClientRect)&&(b=s.getRect(h),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};f(a).each(function(a,c){b[a]="x"===a||
"y"===a||"width"===a||"height"===a?r.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:g,isMrcLarge:function(){return g()>=k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=g()}}},s={findElementsWithSize:function(h){var a=[],b=function(c){1>s.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(h);return a},nodeIsHidden:function(h){var a=this.getRect(h),b=0!==parseInt(x.getStyle(h,"width"))&&0===a.width,a=0===a.width||0===a.height;
h="hidden"===x.getStyle(h,"visibility");return b||a||h},calcWinDims:function(){var h,a,b;try{a=s.browserWindowPosition(),b=s.windowSize(),h={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(b.width),height:r.round(b.height)}}catch(c){n.getAggregator().trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),h={}}return h},windowSize:function(){var h={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))h.width=top.innerWidth,
h.height=top.innerHeight;else if(f.isDef(b.clientWidth))h.width=b.clientWidth,h.height=b.clientHeight;else if(f.isDef(a.clientWidth))h.width=a.clientWidth,h.height=a.clientHeight;else throw h.width=h.height=0,"";else f.isDef(w.outerWidth)&&(h.width=w.outerWidth,h.height=w.outerHeight);return h},browserWindowPosition:function(){var h=0,a=0;f.isDef(w.screenX)?(h=w.screenX,a=w.screenY):f.isDef(w.screenLeft)&&(h=w.screenLeft,a=w.screenTop);return{scrX:h,scrY:a}},getNodeArea:function(h){var a=-1;h&&(h=
s.getRect(h),a=h.width*h.height);return a},getRect:function(h){var a={},b=s.browserWindowPosition();h=h.getBoundingClientRect();f.isUndef(h.x)&&(a.x=h.left,a.y=h.top);f.isUndef(h.width)&&(a.width=h.right-h.left,a.height=h.bottom-h.top);f(a).mixin(h,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(h){h=h.document;return h.documentElement&&f.isDef(h.documentElement.clientWidth)&&h.documentElement||h.body},getPlaceholderSpan:function(){var h=H.createElement("span");f(h.style).mixin({width:"0px",
height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});h.innerHTML=".";return h},createImage:function(){var h=t.friendly&&r.getTop().Image;return f.isFunction(h)?new h:new Image},createHiddenIframe:function(h){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};x.styleElement(a,h?{display:"none"}:b);return a},tagNameIs:function(h,a){return h.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(h,
a){var b,c,d,e=1E4,g=1E4;b=x.nodeIsAbsolutelyPositioned(h);d=!s.tagNameIs(h,"OBJECT");if(null!==h.parentNode&&!b&&d&&!s.tagNameIs(a,"BODY")){d=h;do d=d.parentNode,b=!s.tagNameIs(d,"OBJECT"),c="inline"!==x.getStyle(d,"display"),b&&c&&(b=s.getRect(d),e=b.width<e?b.width:e,g=b.height<g?b.height:g);while(d.parentNode!==H&&d!==a)}return{width:r.round(e),height:r.round(g)}},hasBackgroundImage:function(h){h=x.getStyle(h,"background-image");return""!==h&&"none"!==h},isEmptyTeadsFrame:function(h){try{var a,
b,c=!1,d=h&&"IFRAME"===h.nodeName&&h.contentDocument;h&&h.parentElement&&"teads-player"===h.parentElement.classList.item(0)&&d&&(b=(a=d.body)&&1>a.childElementCount)&&(c=!0);return c}catch(e){return!1}},findChildWithLargestContent:function(h,a){var b=n.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=n.getAggregator().request("omidAdSessionContext"),d=c&&c.hasOwnProperty("ignoreDivAsCandidate"),e=this.hasBackgroundImage,c=function(a){for(var c=a;a.parentNode!==h&&"inline"!==x.getStyle(a.parentNode,
"display");){var e;if(!(e=!b)){e=a.parentNode;var g=!0;if("visible"===x.getStyle(e,"overflow")||"visible"===x.getStyle(e,"overflowX")&&"visible"===x.getStyle(e,"overflowY"))g=!1;e=g&&0<s.getNodeArea(a.parentNode)}!e||b&&d&&"DIV"===a.parentNode.nodeName||(c=a.parentNode);a=a.parentNode}return c},g=null,q=function(a){var b,c,g=null,q=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var f=a[b],k=s.getNodeArea(f),n=f,l=void 0;if(l=n.parentNode===h)if(l=void 0,l="DIV"===n.nodeName)if(l=void 0,l=!e(n))if(l=void 0,
!(l="0"===x.getStyle(n,"opacity")||"hidden"===x.getStyle(n,"visibility"))){for(var r=l=void 0,n=n.childNodes,l=0;l<n.length;l++)1===n[l].nodeType&&(r=!0);l=!r}(n=!l)&&d&&"DIV"===f.nodeName&&(n=!1);l=s.isEmptyTeadsFrame(f);k>q&&n&&!l&&(g=f,q=k)}g&&(g.hasValidSizeForMobileApp=1<q);return g}(function(b){var c,d,e,g,q=[],h=a||"iframe img a object embed div".split(" ");c=0;for(d=h.length;c<d;c++){e=h[c].toLowerCase();var f=b.getElementsByTagName&&b.getElementsByTagName(e);if(f&&f.length)for(e=0,g=f.length;e<
g;e++)q.push(f[e])}return q}(h));q&&(g=c(q),g.hasValidSizeForMobileApp=q.hasValidSizeForMobileApp);return g},screenSize:function(){if(t.isDomless())return{width:0,height:0};var h={width:-1,height:-1};try{f.isDef(w.screen)&&(h={width:w.screen.width,height:w.screen.height})}catch(a){}return h},calcMonDims:function(){var h=f(s.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(h={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return h},
getOurIFrameInTop:function(){for(var h,a=r.getTop(),b=r.getWindow();b!=a;)h=b,b=h.parent;return h},getOurNodeInTop:function(){var h;t.friendly&&(h=t.embedded?(h=s.getOurIFrameInTop())&&h.frameElement:l.contextNode);return h},getAncestorNodes:function(h){var a=[],b=h.ownerDocument&&h.ownerDocument.documentElement;if(b)for(;h.parentNode!==b;)a.push(h),h=h.parentNode;return a},getTagsNamed:function(h,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(h)}catch(d){b=null}return b},containsScriptTagWithSrc:function(h){return!!f(s.getTagsNamed("script")).findFirst(function(a,
b){var c=b.src;return f.isFunction(h)?h(c):c===h})},contains:function(h,a){var b=!1;try{b=f.isDef(h)&&f.isFunction(h.contains)&&h.contains(a)}catch(c){}return b},querySelector:function(h,a){var b;try{b=h.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(h,a){return h.ownerDocument&&(h.ownerDocument.defaultView||h.ownerDocument.parentWindow)===a},setAttributeOf:function(h,a,b){h&&f.isFunction(h.setAttribute)&&h.setAttribute(a,b)},removeAttributeOf:function(h,a){h&&f.isFunction(h.removeAttribute)&&
h.removeAttribute(a)},crossQuerySelector:function(h,a){var b,c,d=[l.contextNode.parentNode,r.getDoc()];t.friendly&&d.push(r.getTop().document);if(a&&t.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=s.querySelector(d,h)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(h){return h&&h.nodeName},isWindow:function(h){var a=!1;try{a=h&&"object"===typeof h&&"setInterval"in h}catch(b){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=s.getTagsNamed("iframe",
h))&&(a=f(h).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var h=r.getWindow().frameElement;return h&&h.id},isViewportVisible:function(h,a){var b=h.innerWidth,c=h.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(h){return h.tagName.toLowerCase()},getAttribute:function(h,a){return h.getAttribute(a)},attributeMatches:function(h,a,b){h=h&&s.getAttribute(h,a);return b.test(h)},isImageTag:function(h){return h&&h.src&&s.tagNameIs(h,"img")},
getDimensionFromStyle:function(h){var a,b=x.getStyle(h,"width");h=x.getStyle(h,"height");b&&h&&(a={width:f.getNum(b),height:f.getNum(h)});return a},getDimensionFromAttributes:function(h){var a,b=s.getAttribute(h,"width");h=s.getAttribute(h,"height");b&&h&&(a={width:f.getNum(b),height:f.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,g;if(c(b))e=b;else if(g=b.children)for(d=0;d<g.length&&!(e=a(g[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&
a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===x.getStyle(a,"position"),e="hidden"!==x.getStyle(b,"overflow")&&!d;t.isSpecifiedAd()&&(d||e)&&(c=!1);return c},isNodeCreative:function(a){var b=s.getNodeName(a),c=a&&a.innerText&&0<a.innerText.length,c=a&&a.children&&0===a.children.length&&c,d=b&&-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase());return b?!!(d||s.hasBackgroundImage(a)||c):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=
s.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return s.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===s.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},uc=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};n.getAggregator().on("error",function(a){a=f(a).isObj()?a.errorCode:
a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},$a=function(){return{createInstance:function(a,b){return t.isDomless()?new Qc:new Rc(a,b)}}},Rc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(l.adsafeSrc,l.requrl,l.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,
g=c(d),q=g&&g.length&&g.join("|"),m=l.exchList;q&&(e=f(m).map(function(a,b){return 0<=q.indexOf(M.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:k.IMPRESSION_EVENT}))}catch(p){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},Qc=function(){return{parse:function(a){}}},yb=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=l.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c=
{es:"everySecond",sc:"usesca",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};l.integration&&(d.intblk="integration");l.autotagSizeSet&&(d.ats="autotagSizeSet");var e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(g(b));return c});e.gm=f.fromBoolToNum(t.usesGroupMCustomMetric());return f(b).mixin(e)},g=function(a){var b=l[a];return f(["integration"]).contains(a)?
!!b:!0===b||"true"===b||f.isFunction(b)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:g,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(l[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=l.sp_cdnScripts&&l.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},Pb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,
PARTIAL_VIEW:50},e=k.NA;c=b?c:d;f.isDef(a)&&a!==k.NA&&-1<a&&(e=a>=c.IN_VIEW?k.IN_VIEW:a<=c.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,b,c,d){var e=0,g=a;a.hasValidDims()&&!a.isHidden()&&(f([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=g.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),f=Math.max(c.scrY,d.scrY),k=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),k=k-e,
c=c-f;g=D({scrX:e,scrY:f,width:0<k?k:0,height:0<c?c:0})}}),e=r.round(g.area()/a.area()*100));return e}}},Cb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,
32)}catch(d){n.getAggregator().trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return l.anId};return{getAsid:function(){return l.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||l.advEntityId+"-"+l.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},mb=function(a,
b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},Sc=function(a,b,c,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return e?function(){var c=n.getAggregator().request("adRenderStatus"),e=d||b,f=a.getTimeInViewInSeconds();c||n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"nr_"+e,f)}:function(){var e=a.getTimeInViewInSeconds(),q=a.getTimeInViewForRts();
f.isDef(d)&&(n.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),n.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));n.getAggregator().trigger("sendDt",b,e);if(c[q])c[q]()}}}},Ub=function(){return{createPingJobs:function(a,b,c,d,e){return f(b.getTimeThresholds()).map(function(b,q){return new Sc(q,a,c,d,e)})}}},Ha=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-l.birthdate||""}},d=function(){a||(a=n.getAggregator().request("viewabilityDefinitions"));
a&&0==b.length&&f(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(f(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),p=n.getAggregator().request("mScreenEvents").getCurrentEvent(),u=Math.floor(d.time/1E3);f(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&
(n.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:k.DT_CODES.CUSTOM}),n.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:k.DT_CODES.CUSTOM}),n.getAggregator().trigger("sendDt",k.DT_CODES.CUSTOM,u),b.rtsCallbacks&&f.isFunction(b.rtsCallbacks[k.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[k.RTS_KEY_FOR_VQ]())})};return{init:function(){d();n.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},xa=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+=
"&");return a.replace(b,"")},b=function(a,b,c){var q=a.indexOf("?");b=b+"="+c;if(-1===q)return a+"?"+b;q++;return a.slice(0,q)+b+"&"+a.slice(q)},c=function(){var a=l.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,g,q){var f=c(),p,u,v;q=q||"ias_callback";d=""+d;RegExp(q).test(d)&&(p=RegExp("("+q+"=)(.[^&]*)").exec(d)[0],u=p.split("=")[1],v=M.stringToFn(u),d=a(d,p));w[f]=function(a){e(a);g&&v&&v(a);w[f]=void 0};return d=b(d,q,f)},wrapToGlobal:function(a){var b=
c();w[b]=function(c){a(c);w[b]=void 0};return b}}},Xb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=S(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,onloadCallback:Ia,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?n.getAggregator().trigger("jsonp",c,a.callback,!0):n.getAggregator().trigger("send",
c,function(){Ia();n.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){n.getAggregator().on("adImpression",function(e,m){var p;try{p=d(c,m),a.enabled?n.getAggregator().trigger("jsonp",
p,a.callback,!0):n.getAggregator().trigger("send",p,f.noop,!b.on("postMon"))}catch(u){__IntegralASDiagnosticCall("jsvidimp",u,l)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===l.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&n.getAggregator().trigger("jsonp",c(a),function(a){n.getAggregator().trigger("videoBlockResult",a)});n.getAggregator().on("adImpression",function(c,e){var m;try{var k;if(k=b)k=c&&f.isBool(c.integral_didBlock)&&
0<=c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));m=d(a,e);n.getAggregator().trigger("send",m,f.noop,!0)}catch(C){__IntegralASDiagnosticCall("fwjsvidimp",C,l)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[l.mode],d=!!b.isFW,f=function(a){var b;b=n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&l.mobFwUrl?l.mobFwUrl:
a?l.adsafeSrc:l.requrl;a||(b+="?"+l.reqquery);return b}(d),u=f.indexOf("BEGIN__ADSAFE"),k=-1!==u,z=k?f.slice(u):"",a=k?f.slice(0,u):a(f);return{isFW:d,baseUrl:a,macroUrl:z,sendImpression:function(a){var d=function(){b.nodeType?n.getAggregator().trigger("addNode",b.nodeType,a,b.onloadCallback):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)n.getAggregator().on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},
random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return w},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?n.getAggregator().request("omidVerificationClient"):w},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,
b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getDoc:function(){t.isDomless();return H},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},getMutationObserver:function(a){t.isDomless();return new MutationObserver(a)},getResizeObserver:function(a){t.isDomless();
return new ResizeObserver(a)},pow:function(a,b){return Math.pow(a,b)}},Kb=function(){return{createInstance:function(){return t.isDomless()?new Tc:new Uc}}},Uc=function(){var a,b=!1,c=!1,d=n.getAggregator().request("features"),e=new aa,g=function(){var b;d.on("blur")?(b=r.getWindow(),b=t.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?r.getDoc()[a.prop]:null;
return b},q=function(){var b=r.getWindow(),c=function(){e.run(g())};x.addEvent(b,"focus",c,!0);x.addEvent(b,"blur",c,!0);a.event&&x.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=r.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,g){var q=g+"Hidden";f.isDef(d[q])&&(a=q,c=g+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:g,onHiddenChange:function(a){e.push(a);c||(c=!0,q())},supportsVisAPI:function(){return b}}},Tc=function(){return{isHidden:function(){return!1},
onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},Mb=function(){return{createInstance:function(a,b){return t.isDomless()?new Vc:new Wc(a,b)}}},Wc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},g=function(){var g,
m=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var g=b.getWindow();e=!1;f.isDef(g.navigator)&&f.isDef(g.navigator.userAgent)&&(g=g.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==g&&2==g.length&&(g=g[1].split("."),3==parseInt(g[0],10)&&6>=parseInt(g[1],10)&&(3==g.length?13>=parseInt(g[2],10)&&(e=!0):e=!0)))}e&&(a.g=
d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(u){}try{p.b=encodeURIComponent(parent.location.href)}catch(k){}if(t.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(n){}try{p.e=encodeURIComponent(w.document.referrer)}catch(r){}}try{"jsi"!==l.mode&&(p.d=encodeURIComponent(w.location.href))}catch(B){}try{p.f=encodeURIComponent(l.jsref)}catch(y){}try{g=m(),p.g=encodeURIComponent(g.g||""),p.q=encodeURIComponent(g.q||""),a.isStarted()&&!g.g&&1<a.getMyFrameDepth()&&
(p.g=encodeURIComponent(a.getTopDomain()))}catch(O){}p=d(p);p=e(p);g=[];for(var J in p)p.hasOwnProperty(J)&&g.push({key:J,val:p[J]});g.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=g};return{detectTopURL:g,getDetectedURLs:function(){return c?c:g()}}},Vc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},Jb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",l._onSuspicious)},skipAsFraudulent:function(){return b}}},
Nb=function(){var a=[],b={},c={sl:"n"},d=0,e,g,q,m={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},u=function(a,c){var d=new Jc(c);return b[a]=d},v=function(a,b){return(b||"")+{inView:"i",
outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},l=function(){f(c).each(function(b,c){m[c]+=a.length?q-d:q});d=q},r=function(b){a.length&&l();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(m[b]+=m.n);c[a]=b});a.length||l()},B=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=p(a);var e=a.omidObstructions,m={sl:v(a.viewState)};q=t.getTagTime();r(m);m.t=q;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(m).toParams()+
this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(m);f(c).mixin(a);c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=k.PIV_NA);f.isUndef(c.reason)&&(c.reason="");f.isDef(e)&&""!==e&&(c.omidObstructions=e);return g=c};(function(){u("piv",function(a){var b,c=a.percentInView,
d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});u("as",function(a){var b=k.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){q=t.getTagTime();l()},registerLocation:function(d){var g,q=!1;c.sl==v(d.viewState)&&a.length?(g=new B(d),a[a.length-1].details=g.details):(g=new B(d),a.push(g),e=d.viewState,q=!0);n.getAggregator().trigger("newScreenEvent",
g);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(q&&c.clear(),c.addState(g),a[a.length-1].breakdowns[b]=c.get()):c.addState(g)});return g},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(m).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:u,getCurrentLoc:function(){return v(e)},getCurrentEvent:function(){return g}}},M={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=
a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=w,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,
b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},Xc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=s.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=s.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,
e=/_blank/,g=function(a){var d=s.tagNameIs(a,"div"),e=s.attributeMatches(a,"class",b);a=s.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return s.traverseAndFindFirstMatchingNode(a,g)},getClickableImage:function(b){var c,g=(b=s.getFirstChildElement(b))&&s.tagNameIs(b,"a"),f=s.attributeMatches(b,"href",d),k=s.attributeMatches(b,"target",e);g&&f&&k&&(b=s.getFirstChildElement(b),s.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return s.traverseAndFindFirstMatchingNode(b,
a.hasValidDimensions)}}},Yc=function(){var a=Xc(),b=function(a,b){b.tag=s.getTagName(a);b.size=s.getDimensionFromAttributes(a)||s.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}},mc={name:"viewport",dependencies:[],creator:function(){var a={width:4,
height:4},b=function(c,d){if(c!==d&&!s.isViewportVisible(c,a))return c;if(c!==d&&t.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();s.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}}},Zc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},
42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,p=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;f=a.innerHeight})}}},kc={name:"AS_Finder",dependencies:["viewport"],creator:function(a,b){var c,d=function(){try{var d=a.isHidden(),g,q={};d!==c&&(g=f.stringifyTriState(d),q.res1=g,q.ps=g,q.ts=r.now(),q.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),
b.events.trigger("newState",q));c=d}catch(m){n.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)Zc(b).onResize(d)}}}},settings:{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}}},lc={name:"hA",dependencies:["AS_Finder"],creator:function(a){var b=0,c=function(a,b){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,a,f(b).toION())},d=function(a){2>b&&c("ha1",
a);b++};(function(){var b,g;if(t.embedded)try{g=l.contextNode.parentNode,b=Yc().getDFPValue(g),g={},g.df=b.type,b.size&&(g.sz=b.size.width+"."+b.size.height),b.tag&&(g.dom=b.tag),c("dfp",g),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){n.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN)}})()},settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}}},Ja=function(a,b,c,d){var e,g=0,q=0,m=!1,p=function(){e=Math.round(s.getNodeArea(a.body));if(e>=d){for(var p,
u=e+20*e/100,l=a.querySelectorAll("iframe"),l=f.fromNodeListToArray(l);l.length&&(q<u||g<c);)p=l.shift(),p=Math.round(s.getNodeArea(p)),p>=d&&(g++,q+=p);q>=u&&g>=c&&(u={va:e,bia:q,bin:g},n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,b,f(u).toION()),m=!0)}},u=function(){var b;b=new MutationObserver(function(a){m?b.disconnect():r.execAtEndOfThread(function(){f(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&s.isElement(c)&&s.tagNameIs(c,"IFRAME")&&f.debounce(p,10)}})})});
b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(r.execAtEndOfThread(p),!m&&f.isDef(w.MutationObserver)&&u())},jc={name:"BS_InApp",dependencies:[],creator:function(){var a=r.getWindow().document;n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Ja(a,"bs1",3,100)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}}},ic={name:"BS_Browser",
dependencies:[],creator:function(){var a=r.getWindow().document,b=a.body?Math.round(s.getNodeArea(a.body)):null;!n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Ja(a,"bs2",10,b)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}}},Hb=function(){return{createInstance:function(a){return t.isDomless()?new $c:new ad(a)}}},ad=function(a){var b,c,d,e=new Aa,g=new ba,q=new bd(e),m=new cd,p=new dd,u=new ed(e,
a),k=function(){f.isUndef(d)&&(d=new fd(e));return d},l=function(){e.provide({frameCollection:function(){return q},adProxy:function(){return p},adTalkMessage:function(a){return new gd(a,e)},adTalkMessageCollection:function(){return m},idMapModule:k,interFrameQuerySelector:function(a){return new hd(a)}})};return{isApplicable:function(a){return f.isDef(w.JSON)&&f.isDef(w.postMessage)&&!a.isAvid()&&(!a.isOmidNative()||a.isOmidForWeb())},start:function(){l();g.traverse(q.addFrame);u.startListening();
u.sendToKnownFrames();n.getAggregator().once("stopAdTalk",function(){u.stopListening()});n.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:u.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new Ka(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Ka(e,!0));return c},getIdMap:k}},$c=function(){return{isApplicable:function(){return!1},start:function(){}}},gd=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();
c=n.getAggregator().request("features").on("swapids")?l.oid:l.asid;var g=a||{},f=l.asid,d=d.tagId,m=t.embedded,p=t.friendly,u=l.birthdate;c=c.split("-")[2];var v;t.friendly?v="["+k.AD_IDENTIFIER+"-"+l.asid+"]":(v=r.getWindow(),v=v.location&&v.location.href,v='iframe[src*="'+(v&&v.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:g,srcAsid:f,srcTagId:d,srcIsEmbedded:m,srcIsFriendly:p,srcBirthdate:u,iasCommonId:c,nodeSelector:v,positionStr:e,version:"0.1"}},cd=function(){var a={};return{add:function(b){var c=
b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},id=function(a,b,c,d){var e,g=a==w;e={position:b.slice(0),id:b.join("-"),isMe:g,isLeaf:!a.frames.length,adProxies:g?c:[],selfDescription:void 0,unifiedId:l.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||
e.isMe||f.isDef(e.selfDescription)}};var q=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){m(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},m=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){q(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},bd=function(a){var b=
[],c={},d={noMe:!0};return{addFrame:function(e,g,f){var m=a.request("adProxy").getAll();e=new id(e,g,m,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Ka=function(a,b){var c=function(a,c){var f=c.adProxies,m="";if(c.isValidForMapping()){if(b)m+=d(f,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=f.length?"."+f[0].tagId:"";m+=p}return m}},d=function(a,b){var c="";return c=a.length?
c+f(a).stringify(function(a,c){return b+(l.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},fd=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=l.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},g=function(a){var e=!1,e=!t.embedded,g="BODY"!==s.getNodeName(c)&&
"HEAD"!==s.getNodeName(c),f;if(f=a.srcIsEmbedded){f="0.1"!==a.version;var v=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);f=!(f?v:!a.srcIsFriendly)}e&&g&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&t.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==l.asid&&g(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});
c.push(d);c=c.join("|");120<c.length&&(c=e(c),n.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:g}},hd=function(a){var b=new ba,c=function(a){var b=a,c="IFRAME"===s.getNodeName(a),d=s.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return s.querySelector(c(a),b)},e=function(c,e){var m,p,u;try{p=d(c,e),p||(m=b.getFrames(!0,a),f(m).findFirst(function(a,b){return u=d(b,e)}))}catch(k){}return p||u||null};return{queryFor:function(b){var c=null;
b&&(c=e(a,b));return c}}},ed=function(a){var b=!1,c,d;d=n.getAggregator().request("features").on("swapids")?l.oid:l.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==l.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},g=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},q=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);n.getAggregator().trigger("sendDt",
c)},m=function(c,d,e){var g,m,l,y,O;try{g=a.request("frameCollection");m=a.request("adTalkMessageCollection");l=d.messageContent.self;m.add(d);var t=g.getMe();t.unifiedId>l.unifiedId&&(t.unifiedId=l.unifiedId);var s;s=r.now()-d.sentTime;d.transferDuration=s;m=y=g.getFrame(l.id);f.isUndef(m)||f.isUndef(m.selfDescription)?(y=y||g.addFrame(c.source,l.id.split("-"),d),y.addInformationFromSrc(d,l),e()):y.addInformationFromSrc(d,l);(O=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&q()}catch(w){n.getAggregator().trigger("error",
k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:q,sendToKnownFrames:function(){(new ca).send(g)},startListening:function(){c=new Ba;c.listen(e,m,g)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:m,createMessage:g}},jd=function(){var a=n.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},dd=function(){var a,b=[],c=function(a){a=new jd(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Ob=function(a){var b,
c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&x.addEvent(r.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},kd=function(a,b){var c,d,e=k.NA,g=e,q=!1,m=!1,p=!1,u=!b,v=n.getAggregator().request("browser"),l=function(a,b){Ec().applies(v)&&
r.getResizeObserver(function(c,d){var e=c.pop();0<e.contentRect.height*e.contentRect.width&&(b.unobserve(a),b.observe(a),d.disconnect())}).observe(a)},C=function(){var b=r.getIntersectionObserver(function(a,b){var d=a.pop(),f=d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height)*100;isNaN(f)&&(l(d.target,b),f=0);e=Math.min(f,100);c=d.boundingClientRect;e!==g&&r.execAtEndOfThread(function(){n.getAggregator().trigger("IOPivChange",e)});g=e},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});
u&&r.execAtEndOfThread(function(){e===k.NA&&(e=0)});b.observe(B(a));u&&r.execAtEndOfThread(function(){t.isBustedIframe()||n.getAggregator().trigger("delayedViewabilityReady")});q=!0},B=function(b){if(!f.isUndef(b)){if(p){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(p=!0,b={bodyElement:a.document.body,
document:a.document})}catch(c){m=!0}b&&null!==b.bodyElement?C():b&&b.document?x.whenReady(C,b.document):m?n.getAggregator().request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):C()},isReady:function(){return e!==k.NA},isStarted:function(){return q},getAdNodeDimensions:function(){var a;c&&(a=D({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},ra=function(){var a=!1;(function(){x.whenReady(function(){n.getAggregator().trigger("startViewabilityLoop");
a=!0})})();return{loopStarted:function(){return a}}},qc={name:"loopDelay",dependencies:[],creator:ra,settings:{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY}},ld=function(){return{start:function(a){n.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},md=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},eb=
function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,n.getAggregator().trigger("notify",l._onMeasurable))};return{start:function(){var b;b=[nd(),od(),md(),ld()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(l._onMeasurable)}}},od=function(){return{start:function(a){Gc(n.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,
b){var c=9<=b.getIOSVersion();return(!b.browserIs(k.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},nd=function(){return{start:function(a){n.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},pd=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&
a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){n.getAggregator().trigger("adImpression")})}}},qd=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===
c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},rd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&n.getAggregator().trigger("adImpression")})}catch(b){}}}},sd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},$=function(a){var b=
r.getWindow(),b=b&&b.omid3p,c=n.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},td=function(a,b,c){var d=n.getAggregator().request("omidAdSessionContext"),e;e=d.isHtml&&d.isWeb?["rjss","jss","jload","jsvid","fwjsvid"]:["rjss","jss","jload"];
return{accepts:function(){var a=f.isDef(f(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",function(a){n.getAggregator().trigger("adImpression")})}}},zc=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},wc=function(a){var b=
!1,c=!1,d=!1,e=!1,g=n.getAggregator().request("omidAdSessionContext");g.queuedOutputItems=[];var q=new ea,m=n.getAggregator().request("omidAdSessionVerificationParameters"),p=r.getWindow(),k=(p=p&&p.omid3p)&&f.isFunction(p.registerSessionObserver)&&f.isFunction(p.addEventListener)?p:a,v=!1,l=function(){if(b&&c&&(!e||d)){w.omidSupported=!0;g.hasOwnProperty("impressionType")&&g.queuedOutputItems.push({code:"oiet",value:g.impressionType});g.hasOwnProperty("creativeType")&&g.queuedOutputItems.push({code:"oct",
value:g.creativeType});var a=m&&m.IAS&&0<Object.keys(m.IAS).length;sa(a?m.IAS:m);v=!0}},C=function(a){if("sessionStart"===a.type){g.adSessionType=a.data.context.adSessionType;g.environment=a.data.context.environment;g.accessMode=a.data.context.accessMode;g.omidNativeInfo=a.data.context.omidNativeInfo;g.omidJsInfo=a.data.context.omidJsInfo;g.deviceInfo=a.data.context.deviceInfo;g.app=a.data.context.app;g.app&&"string"===typeof g.app.appId&&-1<g.app.appId.toLowerCase().indexOf("pandora")&&(g.ignoreDivAsCandidate=
!0);a.data.hasOwnProperty("contentUrl")&&(g.contentUrl=a.data.contentUrl);g.isJavaScript="javascript"===g.adSessionType;g.isNative="native"===g.adSessionType||"javascript"===g.adSessionType;g.isLimitedSandbox="app"===g.environment?t.embedded:"full"!==a.data.context.accessMode;g.isHtml="html"===a.data.context.adSessionType;g.isWeb="web"===a.data.context.environment;m=a.data.verificationParameters;!a.data.hasOwnProperty("supportsLoadedEvent")||"true"!==a.data.supportsLoadedEvent&&!0!==a.data.supportsLoadedEvent||
"string"!==typeof a.data.creativeType||""===a.data.creativeType?g.queuedOutputItems.push({code:"ohand",value:"12"}):(e=!0,g.useOMID13Logic=!0,g.element=a.data.context.videoElement||a.data.context.slotElement||null,g.queuedOutputItems.push({code:"ohand",value:"13"}),k.addEventListener("video",y),k.addEventListener("media",y));for(var c=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},
{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],d,f,p,q=0;q<c.length;q++)d=c[q].root,f=c[q].field,p=c[q].code,"object"===typeof g[d]&&"undefined"!==
typeof g[d][f]&&g.queuedOutputItems.push({code:p,value:g[d][f]});g.queuedOutputItems.push({code:"oast",value:g.adSessionType});g.queuedOutputItems.push({code:"oacm",value:g.accessMode});g.queuedOutputItems.push({code:"oenv",value:g.environment});g.hasOwnProperty("contentUrl")&&g.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(g.contentUrl||"")});b=!0;l()}"sessionError"===a.type&&(a=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?
a.data.message:"NoMessage"),v?n.getAggregator().trigger("addOutputItem",{output:a},"oser"):g.queuedOutputItems.push({code:"oser",value:a}))},B=function(a){g.mediaType=a.data.mediaType;g.queuedOutputItems.push({code:"omtp",value:g.mediaType});"video"===a.data.mediaType&&(g.isVideo=!0);a.data.adView&&(a.data.viewport||g.isWeb)&&(g.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}},"undefined"===typeof g.geometryArrived&&q.checkForViewAttachmentBasedOnAdSessionType(g,
a.data.adView)&&(g.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate")));a.data.hasOwnProperty("impressionType")&&!g.hasOwnProperty("impressionType")&&(g.impressionType=a.data.impressionType);g.isNativeVideo=g.isNative&&"video"===a.data.mediaType;g.isDisplay="display"===a.data.mediaType;c=!0;l()},y=function(a){a&&"start"===a.type?(g.videoStartArrived=!0,n.getAggregator().trigger("omidrendvideostart")):"loaded"===a.type&&(d=!0,a.data.hasOwnProperty("creativeType")&&(g.creativeType=a.data.creativeType),
a.data.hasOwnProperty("impressionType")&&(g.impressionType=a.data.impressionType),l())};return{start:function(){k.registerSessionObserver(C,"IAS");k.addEventListener("impression",B)}}},xc=function(){return{accepts:function(){return!0}}},Fa=function(){var a=n.getAggregator().request("omidAdSessionContext"),b=n.getAggregator().request("omidVerificationClient"),c=new $(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},yc=function(){return{start:function(){sa(l.contextNode&&(l.contextNode.dataset.iasParameters||
l.iasParameters))}}},ud=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},vd=function(a,b){var c,d=function(a){var d,f,m;try{d=a.eventData.percentageInView,f=c&&75<=d,m={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},
shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",m)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(g){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},wd=function(a,b){var c=[],d=(new Date).getTime(),e=0,g=0,q=!1,m=
new Ha,p=n.getAggregator().request("omidAdSessionContext"),u={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},v=function(){q=!0},l=function(a){try{var m="",u=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),v="n",l=!1;switch(a.type){case "start":m="adVideoStart";
p.videoStartArrived=!0;n.getAggregator().trigger("omidrendvideostart");d=u;g=a.data.duration;1E3<g&&(g/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":m="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":m="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);l=!0;n.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":m="pauseAd";break;case "resume":case "bufferFinish":m=
"resumeAd";break;case "skipped":m="adSkipped"}if(""!==m){var z=n.getAggregator().request("mScreenEvents");z&&(v=z.getCurrentLoc());c.push({t:u-d,tp:m,sl:v,ad_duration:g,volume:e})}if("loaded"===a.type&&f.isDef(a.data)){var r=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),m=-1!==r?r+1:void 0,u=[];!0===a.data.autoPlay?u.push("autoplayed"):u.push("clicktoplay");!0===a.data.skippable&&u.push("skippable");"fullscreen"===a.data.state&&u.push("fullscreen");var t=u.join(".");!0===
q?(f.isDef(m)&&n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vbp",m),n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vps",t)):(f.isDef(m)&&n.getAggregator().trigger("addOutputItem",{output:m},"vbp",{type:k.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:t},"vps",{type:k.IMPRESSION_EVENT}))}"start"===a.type&&n.getAggregator().trigger("omidAdDuration",{ad_duration:g});var s;"playerStateChange"===a.type?s="fullscreen"===a.data.state?"AdEnteredFullscreen":
"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?s="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(s="AdPaused");f.isDef(s)&&b.trigger("videoPlaybackEvent",{eventType:s,eventData:null});l&&n.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS)}catch(x){__IntegralASDiagnosticCall("omidvideo",x,w.bootstrapper)}};return{start:function(){n.getAggregator().on("impressionsent",v);n.getAggregator().provide({omidVideoEventsString:u});
a.addEventListener("video",l);m.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},La=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},
getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},xd=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,g=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:g,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return g()?d.isImmediate():!0},isMeasurable:function(){return g()?
e.isMeasurable():!1},isMediaType:function(a){return g()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){g()&&d.start()},requiresDelayedViewabilityEvent:function(){g()&&b.requiresDelayedViewabilityEvent()}}},Eb=function(a,b,c){var d=n.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getAvidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());
(b=(new fa(b)).resolve())||n.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new yd(b);return new xd(b,c,d.isMobileAppEnvironment())}}},Fb=function(a){var b=n.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=n.getAggregator().request("omidVerificationClient"),b=new $(a),e=[];if(b.accepts()){var g=new Ea,f=new zd,m=new Fa,p=n.getAggregator().request("omidAdSessionContext"),k=new Ad(a,new A),g=[{environment:g,measurementStrategy:new Bd(a,
new A)},{environment:m,measurementStrategy:new Cd(new Ma,r.getWindow(),new A)},{environment:f,measurementStrategy:new Na(new ga,r.getWindow(),new A)}],g=(g=(new fa(g)).resolve())?g.measurementStrategy:{},m=new Oa(new Pa(new U),new U,p.isHtml),p=new sd(a,b,l.mode),f=new Qa(k,g,new A,m),b=new td(a,b,l.mode),a=new Ra(k,g,new wd(a,new A),new A,m);e.push({environment:p,measurementStrategy:f});e.push({environment:b,measurementStrategy:a})}return e},getAvidMeasurementStrategies:function(){var b=n.getAggregator().request("avidJsClient"),
d=new qd(b),e=[];if(d.accepts()){var g=new pd(b,d,l.mode),f=new rd(b,d,l.mode),m;m=new ud(b,new A);if(d.supportsAdContainerGeometry()){var p=new Dd,k=new Ed,v=new Na(new ga,r.getWindow(),new A),z=new Fd(b,new A),p=(p=(new fa([{environment:p,measurementStrategy:z},{environment:k,measurementStrategy:v}])).resolve())?p.measurementStrategy:{},k=new Oa(new Pa(new U),new U,k.accepts()),v=new Gd(b,new A),b=new Qa(v,p,new A,k);m=new Ra(v,p,m,new A,k)}else k=new vd(b,new A),b=new La(k,new A),m=new Sa(k,m,
new A);e.push({environment:g,measurementStrategy:b});e.push({environment:f,measurementStrategy:m});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Hd(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=n.getAggregator().request("context"),e=new Id(r.getWindow(),e),g=new Jd(r.getWindow(),new A);e.accepts()?(d=new Kd(r.getWindow(),new A),d=new Sa(g,d,new A),d={environment:e,measurementStrategy:d}):
(e=new La(g,new A),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},fa=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},yd=function(a){var b=!1,c,d={winDimensions:D({scrX:0,scrY:0,width:0,height:0}),adDimensions:D({scrX:0,scrY:0,width:0,height:0}),containerDimensions:D({scrX:0,scrY:0,width:0,height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,
posViewState:k.NA,adCompCount:1},e=function(a){return a?new D({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):D({scrX:0,scrY:0,width:0,height:0})},g=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:k.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,
posViewState:a.viewState||k.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};var d=a.omidObstructions;f.isDef(d)&&""!==d&&(c.omidObstructions=d);a.isMeasurable&&b&&(b=!1,n.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=
c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(g),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Sa=function(a,b,c){var d=!1,e=!1,g=!1,q,m,p,u,v=function(){if(!f.isUndef(m)){var a=[],b,l;d?(e?(l=!1,b=100):(l=u,b=p),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(l=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));
g=!0;m.shouldDelegateToDomBasedViewability=l;m.percentageInView=b;m.viewState=50>b?k.OUT_OF_VIEW:k.IN_VIEW;m.outOfViewReason=a.join(".");q=m;c.trigger("measurementChanged",q)}},l=function(a){m=a;p=a.percentageInView;u=a.shouldDelegateToDomBasedViewability;v()},r=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);v()};return{start:function(){n.getAggregator().trigger("addOutputItem",
{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(l);a.start();b.addVideoPlaybackEventListener(r);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return g}}},Id=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;
a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,n.getAggregator().trigger("adImpression"))})}catch(d){}}}},Kd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Gd=function(a,b){var c=function(a){var c=new D(a.eventData.viewport||
{width:0,height:0}),f=new D(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),m=new D(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:f.getRoundedGeometry(),computedAdContainer:m.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,
viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},
Oa=function(a,b,c){function d(a,b,c){c=m(b,c);a=g(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),g=Math.min(a.y+a.height,b.y+b.height),e=e-c,g=g-d;return{x:c,y:d,width:0<e?e:0,height:0<g?g:0}},g=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},q=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},m=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};
return{calculateGeometricMeasurement:function(e,u){if(f.isDef(e)&&f.isDef(u)){var l=e.viewport,n=e.computedAdContainer,t=n.obstructions,s=e.omidObstructions,y=t&&0<t.length,O=e.originalAdContainer,J=u.adGeometry,w=u.adFound,x=e.detectionMethod,G=0,l={x:0,y:0,width:l.width,height:l.height},F=q(O,J),P=e.outOfViewReason,K=0,L=0,A=y||!1,K=1>=J.width*J.height;c&&K&&(w=!1,P=P||"",w||-1!==P.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(P=k.OUT_OF_VIEW_REASONS.GEOM+(""!==P?"."+P:"")));if(w&&0<e.percentageInView){K=
d(l,n,F);y?(G=m(n,F),G=g(l,n,G),G=q(n,G),G=a.calculateObstructedArea(G,t)):G=0;L=G;G=Math.round((K-L)/(F.width*F.height)*100);y&&0===L&&(A=!1);for(var J=(new D(F)).getRoundedGeometry(),w=A,N,y=0,L=b.getConfig(J).numberOfSlices,T=r.floor(J.height/L)||1,t=[],K=w?a.getObstructionStatusBySlice(L):[],Ta,y=0;y<L;y++)N=J.y+T*y,y==L-1&&(T=J.y+J.height-N),N={x:J.x,y:N,width:J.width,height:T},Ta=d(l,n,N),N=1==Ta/(N.width*N.height),t.push(N);if(w)for(n=r.min(K.length,L),y=0;y<n;y++)t[y]=t[y]&&!K[y];n=t}else n=
b.getConfig(J).defaultSliceArray;O={windowDimensions:l,containerDimensions:O,adDimensions:F,percentageInView:G,viewState:50<=G?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=G?"":P||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:x,isObstructed:A,sliceStatus:n};f.isDef(s)&&""!==s&&(O.omidObstructions=s);return O}}}},Dd=function(){return{accepts:function(){return t.isAvidNative()}}},Fd=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;a=!!c;c=(new D({x:0,y:0,width:a?c.width:0,height:a?
c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Ed=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Qa=function(a,b,c,d){var e,g,q,m=function(){if(f.isDef(e)&&f.isDef(g)){var a=d.calculateGeometricMeasurement(e,g);q=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",
a)}},p=function(a){e=a;m()},l=function(a){g=a;m()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(l);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return q}}},Pa=
function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var g,q,m,p;q=e&&0<e.length;var k;if(q){k=Math.round(d.width);var l=Math.round(d.height);g=Array(k);for(m=0;m<k;m++)g[m]=Array(l);k={matrix:g,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:k,height:l}}else k={};g=k;l=k=0;if(q){for(;k<e.length;k++){q=e[k];m=l=g;var n=q;g=Math.max(m.x,n.x);q=Math.max(m.y,n.y);p=Math.min(m.x+m.width,n.x+n.width);n=Math.min(m.y+m.height,n.y+n.height);m=p-g;p=n-q;m=0<m?m:0;p=0<p?p:0;g-=
l.x;q-=l.y;m=g+m;p=q+p;for(g=Math.round(g);g<Math.round(m);g++)for(n=Math.round(q);n<Math.round(p);n++)void 0!==l.matrix[g]&&void 0===l.matrix[g][n]&&(l.matrix[g][n]=1,l.obscuredPixelCount+=1);g=l}l=g.obscuredPixelCount;k=g;if(f.isUndef(k.matrix)||0===k.matrix.length)c=[];else{q=0;p=!1;g=k.matrix[0].length;m=k.matrix.length;p=a.getConfig({height:g}).numberOfSlices;for(var n=r.floor(g/p)||1,t=[],s=0;s<g;s++){p=!1;for(var y=0;y<m;y++)if(1===k.matrix[y][s]){p=!0;break}q++;p&&(s+=n-q,q=n);if(q==n||s===
g-1)t.push(p),q=0}c=t}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},Ad=function(a,b){var c=n.getAggregator().request("omidAdSessionContext"),d=null,e=!1,g=new ea,q=function(){var a=r.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(m(d),d=null)):r.setTimeout(q,50)},m=function(a){if(a&&a.data&&a.data.adView){var m=a.data.adView,l=!!(m.measuringElement&&m.containerGeometry&&m.onScreenContainerGeometry);if(c.delayingViewabilityEvents)d=
a,e||(e=!0,q());else{var r=[];m.onScreenGeometry&&m.onScreenGeometry.obstructions&&0<m.onScreenGeometry.obstructions.length&&(l&&(m.onScreenContainerGeometry.obstructions=m.onScreenGeometry.obstructions),-1<m.reasons.indexOf("obstructed")&&100>m.percentageInView&&(m.onScreenGeometry.obstructions=m.onScreenGeometry.obstructions.slice(0,4),f(m.onScreenGeometry.obstructions).each(function(a,b){r.push(Math.round(b.x)+"."+Math.round(b.y)+"."+Math.round(b.width)+"."+Math.round(b.height))})));var B=t.isOmidForWeb()?
s.calcWinDims():{width:0,height:0},B=new D(a.data.viewport||B),y=new D(l?m.containerGeometry:m.geometry||{x:0,y:0,width:0,height:0}),l=new D(l?m.onScreenContainerGeometry:m.onScreenGeometry||{x:0,y:0,width:0,height:0}),m={viewport:B.getRoundedGeometry(),originalAdContainer:y.getRoundedGeometry(),computedAdContainer:l.getRoundedGeometry(),percentageInView:m.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:p(m.reasons),omidObstructions:r.join("_")};"undefined"===typeof c.geometryArrived&&
g.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,m)}}},p=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN,hidden:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,
d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&m(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",m)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:p}},Ea=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Bd=
function(a,b){var c=n.getAggregator().request("omidAdSessionContext"),d=null,e=!1,g=new ea,f=function(){var a=r.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(m(d),d=null)):r.setTimeout(f,50)},m=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,f());else{var m=a.data.adView.geometry,l=a.data.adView.containerGeometry,r=!!m,t=a.data.adView.measuringElement&&!!l,m=(new D({x:r&&t?m.x-l.x:0,y:r&&t?m.y-
l.y:0,width:r?m.width:0,height:r?m.height:0})).getRoundedGeometry();"undefined"===typeof c.geometryArrived&&g.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:m,adFound:r})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&m(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",m)},addAdGeometryMeasurementChangedListener:function(a){b.on(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},zd=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Cd=function(a,b,c){var d,e=function(){var b=a.find(),e,m,p=!1;f.isDef(b)?(m=!0,e=b.getBoundingClientRect(),e={x:0,y:0,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(b=m)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||p)d=e,c.trigger(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:m})};
return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Ra=function(a,b,c,d,e){var g=!1,q=!1,m,p,l,v,r,t=function(){if(!(f.isUndef(p)||f.isUndef(l)||f.isUndef(v))){r=!0;var a=e.calculateGeometricMeasurement(p,l),b=g&&q,c=g&&50<=a.percentageInView,n={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,
isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:g,isVideoPlayingInFullscreen:b,isSoundOn:!0},t=a.omidObstructions;f.isDef(t)&&""!==t&&(n.omidObstructions=t);b&&(n.percentageInView=100);b||c?n.viewState=k.IN_VIEW:(n.viewState=k.OUT_OF_VIEW,n.outOfViewReason=a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);m=n;d.trigger("videoGeometryMeasurementChanged",m)}},s=function(a){p=a;t()},y=function(a){l=a;t()},O=function(a){v=a;a=a.eventType;"AdEnteredFullscreen"===a?q=
!0:"AdExitedFullscreen"===a?q=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?g=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(g=!1);t()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(s);a.start();b.addAdGeometryMeasurementChangedListener(y);b.start();c.addVideoPlaybackEventListener(O);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},
addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return r}}},Na=function(a,b,c){var d,e=function(){var b=a.find(),e,m,p=!1;f.isDef(b)?(m=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(b=m)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||p)d=e,c.trigger(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,
adFound:m})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Hd=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Jd=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var g={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:g,
adDimensions:g,containerDimensions:g,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(f){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},g=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},q=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){g()}):
g())},m=function(){c||q()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||s.containsScriptTagWithSrc("mraid.js"))b=!1;n.getAggregator().trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?n.getAggregator().trigger("exec","mraid.js",m):q()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},cc=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||n.getAggregator().trigger("notify",
c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},qb=function(){var a=new Q({tiv:[1E4]}),b=f([k.IN_VIEW,k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==l.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},
pb=function(a,b){var c,d,e;c=a.on("everySecond");var g=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var f=[2E3,5E3,15E3],m=function(a,b){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a[b?"viewStateIgnoringRender":"viewState"])};c?(c=new Q({tiv:d}),d=d[0]):g?(c=new Q({tiv:f}),d=f[0]):(c=new Q({tiv:e}),d=e[0]);e={5E3:l._onInViewMRC5,15E3:l._onInViewMRC15};e[d]=l._onInViewMRC;return{timeInViewThresholds:c,type:k.DT_CODES.PING,
rts:e,isInView:m,isInViewIgnoringRender:function(a){return m(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},sb=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),g=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],f=[1E3,5E3,15E3],m=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new Q({tiv:g}):
d?new Q({tiv:m}):new Q({tiv:f});n.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},rb=function(a,b){return{timeInViewThresholds:new Q({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,rts:{0:l._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},
applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},ub=function(a,b){var c,d,e,g=r.getMaxNumber(),q=b.isVideo(),m=a.id;d=a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&l.groupm_native_publisher)&&d,n=function(b,c){if(!b.adDimensions)return!1;var d=c?"percentInViewIgnoringRender":"percentInView",e,m,l,n=b.adDimensions.area();l=1===b.tabHidden;var u=r.max(b.fullPercentInView||0,b[d]),d=f(a.thresholds).findFirst(function(a,b){e=b.lb||
0;m=b.ub||g;if(n>=e&&n<=m)return!0});l=!l&&u>=d.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(l=!1);q&&(l=l&&b.isVideoPlaying,p&&(l=l&&b.isSoundOn));return l};c=new Q(a);d=a.qiv;(function(){e={};var a;f.isDef(l.rts)&&f.isDef(l.rts[m])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():k.RTS_KEY_FOR_VQ,e[a]=l.rts[m])})();return{timeInViewThresholds:c,qivThreshold:d,type:k.DT_CODES.CUSTOM,rts:e,
isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},metricId:m,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p,sendOtherwiseInViewSignal:!0}},tb=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",g=b.isDeviceTypeGroupMobile()?"mobile":"desktop",k=f(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),p=c.on("groupmCM"),l=function(a,b){var c,m,k,q,l;c=f(b.mediaTypes).contains(d);m=f(b.distributionChannels).contains(e);
k=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(g):!0;q=M.contains(b.id,"fiv");l=M.contains(b.id,"groupmCM");q=!q;l&&(q=p);return q&&c&&m&&k};return{resolve:function(){var b=[],c;m&&k&&(c=f(a.customViewability).filter(l),f(c).each(function(a,c){b.push(c)}));return b}}},Q=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ha(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new Ld;b.push(new Md(c,parseInt(a[1].replace("%"))));b.push(new ha(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&
b.push(new ha(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},Ld=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};n.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},ha=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},
Md=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},va=function(a,b,c,d){var e=d?"isInViewIgnoringRender":"isInView",g=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(g)}}},dc=function(a,b,c,d){var e,g,k,m,p,l,v=function(a,b){return!b&&
a},r=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},t=function(a){var n=0,v=1===a.tabHidden,t=a.isVideoPlaying,y=a.isSoundOn,C=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){k(b,v,t,C)?e[a].mark():e[a].stop();m[a]=e[a].getTotalTime()});s("slcVt",m);d&&(f(a.sliceStatus).each(function(a,b){r(b,v,t,C)&&y?g[a].mark():g[a].stop();p[a]=g[a].getTotalTime()}),s("slcVtVol",p));l=d&&b&&b.shouldIncludeSound?p:m;a=f(l).findFirst(function(a,b){n=Math.max(n,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(n)},
s=function(a,b){var c={};c[a]=b;n.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},y=function(a){!e&&a.sliceStatus&&(e=[],g=[],m=[],p=[],f(a.sliceStatus).each(function(a){e.push(new W(1));m.push(0);d&&(g.push(new W(1)),p.push(0))}))},w=function(a){f.isUndef(a.sliceStatus)||(e||y(a),t(a))};return{start:function(){k=d?r:v;a.addMeasurementChangedListener(w)}}},ta=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,
c)}}},Yb=function(a,b,c,d,e,g,f,m,p,l){var n=!1,s=t.isVideo(),C=g.request("mobileApp"),B=X().applies(c,e),y=c.browserIs(k.BROWSERS.GECKO)||c.browserIs(k.BROWSERS.IE)&&e.on("rattie")||B,w=t.xDomainIframe&&!y,x=new Ca(10),D=function(){e.on("viewabilityready")&&!n&&(d.send(k.DT_CODES.VIEWABILITY_READY),g.trigger("measurable"),n=!0)};g.on("delayedViewabilityReady",function(){A();D()});g.on("delayedViewabilityReadyCallOnly",D);var A=function(c){c=c||!1;try{x.start();var d,e;b.hasMeasurementStrategy()?
e=(C.isMobileAppEnvironment()||t.isOmidNative())&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(m.collect(),c):(e=m.collect(),C.isMobileAppEnvironment()?(e.viewState=k.NA,e.method=k.NA,e.percentInView=k.NA):w&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),s&&!t.isAvid()&&l.setVideoSpecificScreenEventFields(e));d=p.registerLocation(e);c||a.trigger("measurementChanged",e);x.stop();var n=r.round(x.getTime()/x.getCount());f.addItem({output:n},"lt",{type:k.DT_CODES.UNLOAD});
return d}catch(v){g.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:A,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":s?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),a=a&&B,d=!d&&!e&&!a;return C.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){C.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&
b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}},rc={name:"viewabilityLoopLifecycle",dependencies:["viewability","features","context","browser"],creator:function(a,b,c,d){var e,g=Nd(c),q=[new Od,new Pd(g)],m=function(){return f(q).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},p=function(a){"sessionFinish"===a.type&&n.getAggregator().trigger("adSessionComplete")},u=function(a){x.addEvent(w,a,function(){n.getAggregator().trigger("adSessionComplete")},
!1)},v=function(){var a=new Y(k.DT_CODES.VIDEO_EVENTS);n.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a={id:l.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};n.getAggregator().once("startViewabilityLoop",function(){var b,c=n.getAggregator().request("mobileApp").isMobileAppEnvironment();n.getAggregator().request("ids").impressionIsIdentifiable()&&(e=Kc(a.checkScreenLoc,g.getPollingFrequency()),(b=m())?b.start(e):e.start(!0),
t.isOmid()?n.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):c?u("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):u("beforeunload"))});n.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmid()||v();n.getAggregator().trigger("unload");e&&e.stop();n.getAggregator().trigger("endAdSession");n.getAggregator().trigger("stopAdTalk")})},settings:{tier:k.TIERS.VIEWABILITY}},Nd=function(a){return{getPollingFrequency:function(){return a.isVideo()?
200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Pd=function(a){var b,c,d,e,g,f=function(m){d&&!g&&1>m?(g=!0,r.setTimeout(function(){f(m)},1E3)):(e=1>m,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){f(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",
f);n.getAggregator().on("newScreenEvent",m)}}},Od=function(){var a,b,c,d=!1,e=function(g){if(c&&!d&&1>g)d=!0,r.setTimeout(function(){e(g)},1E3);else return 1>g?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a},g=function(){b.start(!0)};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=X();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",e);n.getAggregator().on("nodesAdded",g)}}},
Xd=function(a,b,c,d,e,g){var q,m,p,u,v,z,C,B,y,O=s.getElementsWindow(b);s.getElementsDocument(b);n.getAggregator().provide("iframeCalculatorHelper",Qd(O));var J=Rd(b,d),A=k.AD_IDENTIFIER+"-"+l.asid,E=!1,G=D({}),F=t.isDeviceTypeGroupMobile(),P=t.usesGroupMCustomMetricMobilePassThru(),K,L=function(){if(!q)if(q=J.calcDims(b,d,p),1<l.adWidth&&1<l.adHeight&&(q.set("width",l.adWidth),q.set("height",l.adHeight)),c===k.DETECTION_METHODS.VIDEO&&t.embedded){var a=q,e=(new D(b)).getRounded();try{a.set("width",
e.width),a.set("height",e.height)}catch(g){n.getAggregator().trigger("error",k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&q.treatAsPlaceholder();return q},I=function(){var b,d=t.xDomainIframe&&E;b=F&&E&&p.isReady();b=d||b;d=J.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?m=p.getPiv():f.isUndef(m)&&(b=!F&&(t.friendly||f.isDef(w.mozInnerScreenX))&&e.on("offscreen"),B=L(),C=new D(s.calcWinDims()),z=new D(b?s.calcMonDims():{}),y=
d?J.getClippedDims():G,m=a.calcPercentInView(B,C,z,y));return m},N=function(){return a.calcInitialViewState(I())},T=function(){return b===w?!1:L().isHidden()};(function(){var d=r.getWindow(),e=r.getDoc(),g=b===d,f=e.body,m=n.getAggregator(),l=new X,q=m.request("browser"),s=m.request("features"),m=m.request("context"),z=!t.xDomainIframe,e=g&&f?e.body:b;K=t.friendlyIframe?d.frameElement:e;x.addEvent(e,"click",function(){n.getAggregator().trigger("adComponentClicked")});x.addEvent(e,"mouseover",function(){n.getAggregator().trigger("adComponentMousedOver")});
l.applies(q,s,m)?(p=kd(b,z),p.start(),E=!0,P&&c!==k.DETECTION_METHODS.AD_PLACEHOLDER&&(d=new Sd(L().getRounded()),l=new Td,l=new Ud(p.getObservedNode(),l),u=new Vd(d.getSlices(),l))):P&&(v=new Wd(a))})();return{mark:function(){s.setAttributeOf(K,A,"")},cleanup:function(){s.removeAttributeOf(K,A)},isNode:function(a){return b===a},isHidden:T,isObstructed:function(){return!1},getDims:L,getPercentInView:I,getLocationState:N,getOnPageViewability:function(){return T()?k.OUT_OF_VIEW:N()},getDetectionMethod:function(){return c},
getContainerDims:function(){return J.allowsOptimization?q:D(d)},refresh:function(){y=B=C=z=m=q=void 0;if(g){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==w&&c&&c!==H&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;u&&u.isReadyToMeasure()?a=u.getSliceStatus():t.friendly&&v&&f.isDef(B)&&(a=v.getSliceStatus(B,C,z,y));return a}}},Yd=function(a,b){var c=[],d,e=f([]),g=function(){return c[0]&&c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},
l=function(m,l,p,q){var u=g()||0===c.length;m=Xd(a,m,l,p,b,q);g()&&(p=c.shift(),e=f(c),p.cleanup(),d=void 0);c.push(m);e=f(c);u&&m.mark();u&&l!==k.DETECTION_METHODS.AD_PLACEHOLDER&&n.getAggregator().trigger("primaryadfound",m)},m=function(){if(d)return d;var a,b=!1,c=0,g=0;e.each(function(d,e){var f;f=e.getDims();f.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,f=f.area(),c+=f,g+=a/100*f)});return d={totalArea:c,totalInView:g,hasMeasurement:b}},p=function(a){var b=n.getAggregator().request("adRenderStatus");
return!a&&!b},u=function(a){var b;b=m();b=b.hasMeasurement?r.round(b.totalInView/b.totalArea*100):k.PIV_NA;if(isNaN(b)||p(a))b=0;return b},v=function(c){var d=b.bootstrapOn("mobOrTab"),d=m().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!t.isVideo();return a.calcInitialViewState(u(c),d)},s=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},C=function(a){return function(){return c[0]&&c[0][a]()}};n.getAggregator().on("adComponentAdded",function(a){f(a).each(function(a,
b){-1===s(b)&&l(b,k.DETECTION_METHODS.MUTATION)})});n.getAggregator().on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=s(b);-1<d&&c.splice(d,1)})});return{getDims:C("getDims"),isObstructed:C("isObstructed"),getDetectionMethod:C("getDetectionMethod"),getContainerDims:C("getContainerDims"),getViewState:v,getViewStateIgnoringRender:function(){return v(!0)},getPercentInView:u,getPercentInViewIgnoringRender:function(){return u(!0)},isHidden:C("isHidden"),isUsingPlaceholder:g,hasAd:function(){return!!c.length},
refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:l,getOutOfViewReasons:function(a){var b,e=[],g=c[0],f=k.OUT_OF_VIEW_REASONS;g&&(b=d||v(),p(a)?e.push(f.RENDER):b!==k.OUT_OF_VIEW&&b!==k.PARTIAL_VIEW_MINUS||e.push(f.GEOM),g.isHidden()&&e.push(f.HIDDEN),g.isObstructed()&&e.push(f.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:C("getSliceStatus")}},Zd=function(a){var b=!1;if(!f.isUndef(w.MutationObserver)){var c=
new w.MutationObserver(function(a){r.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&n.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&n.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;r.setTimeout(function(){b=!1},40)};n.getAggregator().on("adComponentClicked",d);n.getAggregator().on("adComponentMousedOver",d);x.whenReady(function(){try{c.observe(H.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},
r.getDoc())}},ge=function(a,b){var c=[$d(),ae()],d=[Ma(),ga(),be(),ce(),de(),ee(),fe()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},ce=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||da();var c=s.crossQuerySelector(da().getCssSelector(),
!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},he=function(a,b){var c,d=s.findChildWithLargestContent(a||l.contextNode.parentNode,b);1<s.getNodeArea(d)&&!d[k.IAS_DETECTOR]&&(c=d);return c},Ma=function(){var a=n.getAggregator().request("omidAdSessionContext");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.OMID,isApplicable:function(){return t.isOmidForWeb()&&!t.isOmidNative()},find:function(){return a.element},getAdContainer:function(){return a.element.parentNode},
allowForAdContainerChange:!0}},ee=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,find:function(){return w},isApplicable:function(){return t.embedded},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},ie=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return M.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,
isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return s.crossQuerySelector(b,!0)})}catch(c){}return a}}},je=function(){return{isApplicable:function(a,b){var c;try{c=s.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&M.contains(c,"_tpi")&&s.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+s.getFrameId().replace("_tpi","")+
"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},ke=function(){var a,b,c=r.getDoc(),d=function(){var b;a||(a=(b=(b=s.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=s.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),k=a.friendlyIframe&&r.getWindow().frameElement,k=k&&
D(k).isOneByOne(),l=function(){var a=["bs.serving-sys.com/BurstingPipe/adServer","secure-ds.serving-sys.com/BurstingCachedScripts"],b=r.getDoc().scripts;return f(b).findFirst(function(b,c){return f(a).findFirst(function(a,b){return M.contains(c.src,b)})})}(),c=c.EBG&&c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&l&&c&&k&&d()&&e()},getCssSelector:e}},da=function(){var a,b=n.getAggregator().request("features");a||(a=[ke(),je(),ie()]);return f(a).findFirst(function(a,d){return d.isApplicable(t,
b)})},de=function(){var a,b=function(){r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=Ga().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=s.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},
Ga=function(){var a,b=function(){var b;(b=l.contextNode.parentNode)&&M.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&s.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ga=function(){var a=n.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=s.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&
!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},ae=function(){var a,b;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var c=f.isFunction(l.contextNode.getAttribute)&&l.contextNode.getAttribute("data-ias-container");b=c&&"#"+c||l._cl_adpath;if(c=s.crossQuerySelector(b))a=s.getParent(c),1>s.getNodeArea(c)&&(a=c,c=s.findElementsWithSize(c));return c},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},$d=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return t.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(l._cl_adpath)[1].split(",").forEach(function(d){if(c=s.crossQuerySelector(d))a=s.getParent(c),1>s.getNodeArea(c)&&(a=c,c=s.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},fe=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,
isApplicable:function(){return!0},find:he,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},be=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:n.getAggregator().request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Rd=function(a,b){var c,d;c=[le(),me(),ne()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=oe();c.isApplicable(b)&&(c.setBaseStrategy(d),
d=c);return d},ne=function(){return{calcDims:function(a,b){var c,d,e=new D(a);s.isClippable(a,b)&&(c=s.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&s.nodeIsInWindow(a,r.getTop());a=!s.elementIsEmbedded(a);return b||a}}},me=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,
getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&s.elementIsEmbedded(a)}}},le=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new D(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!s.nodeIsInWindow(c,
r.getTop()),e=t.isCeltra()&&s.elementIsEmbedded(a);return d||e}}},oe=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=X();var c=n.getAggregator(),d=c.request("browser"),e=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},Qd=function(a){var b,c,d,e=n.getAggregator().request("features"),
g=n.getAggregator().request("browser");a=a||r.getWindow();var l=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,g=!1,f=0,m=e.length;f<m;f++)if(e[f]==b){d=e[f];g=!0;break}if(g){d=s.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(t){n.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&l(b.parent,c)}return c},m=function(){var m,
u={};try{var v,z,C,w,y,x,A=r.getMaxNumber(),D=r.getMaxNumber();t.friendly?(v=l(),C=v.left,w=v.top,A=v.width,D=v.height,z=s.browserWindowPosition(),y=z.scrX+C,x=z.scrY+w):e.on("rattie")&&g.browserIs(k.BROWSERS.IE)?(d=d||n.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),y=c.scrX,x=c.scrY):f.isDef(a.mozInnerScreenX)&&(y=r.round(a.mozInnerScreenX),x=r.round(a.mozInnerScreenY));var u={scrX:y,scrY:x,iFrameClippingWidth:A,iFrameClippingHeight:D},E,G,F=b||s.getIeDimObj(a);b=F;
f.isDef(a.innerWidth)?(E=a.innerWidth,G=a.innerHeight):F&&f.isDef(F.clientWidth)?(E=F.clientWidth,G=F.clientHeight,0===E&&0<F.offsetWidth&&(E=F.offsetWidth),0===G&&0<F.offsetHeight&&(G=F.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(E=a.frameElement.clientWidth,G=a.frameElement.clientHeight);m=E;u.height=G;u.width=m}catch(H){n.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return u};return{calcDims:function(){return new D(m())},getClippedDims:function(){var a=
m();return new D({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Sb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new pe:new qe(a,b,c)}}},qe=function(a,b,c){var d,e=n.getAggregator().request("browser"),g=l&&l.contextNode&&l.contextNode.parentNode?l.contextNode.parentNode:null,q=Yd(b,c),m=function(){var a,b,m;d=d||ge(t,c);a=d.find();!a&&d.usePlaceholder?(p(),t.isDeviceTypeGroupMobile()&&e.hasMutationObserver()&&r.getMutationObserver(u).observe(g,
{childList:!0})):a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),m=d.allowForAdContainerChange,f(a).each(function(a,c){q.addAdComponent(c,f.resolve(d.detectionMethod),b,m)}))},p=function(){var a;q.hasAd()||(a=s.getPlaceholderSpan(),g.insertBefore(a,l.contextNode.nextSibling),q.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,s.getParent(a)))},u=function(a,b){var c=!1;f(a).each(function(a,b){b.addedNodes&&0<b.addedNodes.length&&(c=!0)});c&&(n.getAggregator().trigger("nodesAdded"),b.disconnect())};
Zd(a);return{find:function(){q.isUsingPlaceholder()||!q.hasAd()?m():q.refresh();return q},getDetectionMethod:function(){}}},pe=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Ab=function(a){var b,c=[],d=a||w,e=function(){return"stub"===f().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==f().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var g=function(){return void 0!==d.avid},f=function(){var a,
b={};if(g())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:g,getAvidAdSessionContext:f,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";
return d.avid.getHtmlVideoAvidAdSessionListener()}}},zb=function(a){var b=new re,c=new se,d="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"";(function(){var e="",g=n.getAggregator().request("omidAdSessionContext"),f=t.isDomless()||g&&"app"===g.environment,g=g&&"web"===g.environment;try{var m;if(!(m=f)){var l;if(!(l=t.isAvid())){var u;if(!(u=t.isAvidNative())){var r;if(r=!g){var s;if(s=a.bootstrapOn("mobOrTab")){var C;if(C=a.bootstrapOn("mobAppWebview")){var f="FBAN FBAV Twitter Instagram Flipboard Snapchat LinkedInApp Pinterest".split(" "),
w,g=!1;for(w=0;w<f.length;w++)if(-1<d.indexOf(f[w].toLowerCase())){g=!0;break}C=!g}s=C}r=s}u=r}l=u}m=l}if(m&&(e=b.detect(),b.hasDetectedMobileApp())){if("s_serv"===e||"u_cars"===e)ia[ia.length-1].detectionRules.userAgent[0]="/";c.detect();n.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"});n.getAggregator().trigger("addOutputItem",{output:e},"drul",{type:"impression"})}}catch(y){n.getAggregator().trigger("error",k.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},
isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},te={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(t.isDomless())return!1;var b=r.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(t.embedded){try{c.push(parent.document.referrer)}catch(g){}try{c.push(H.referrer)}catch(k){}}try{"jsi"!==l.mode&&c.push(w.location.href)}catch(m){}try{c.push(l.jsref)}catch(n){}c.sort(function(a,b){return a.length>b.length?1:a.length<
b.length?-1:0});return!!f(a).findFirst(function(a,d){var e=!1,g,m,k="mobfox"===d?c:[b];for(m=0;m<k.length;m++){g=k[m];var l="string"===typeof d?[d]:d;if(f(l).isArray()&&(l[0].substring(0,4),l))for(var n=0;n<l.length&&(e=-1<g.indexOf(l[n]),!1!==e);n++);if(e)break}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=r.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==
d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,c){var d=!1;return d=f.isDef(M.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return s.containsScriptTagWithSrc(function(a){var b=!1;return b=f.isDef(a)&&-1!==a.indexOf(c)})})}}},Ua=function(){var a=function(a,c){var d,e=te[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},
ue=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],
url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},
{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_APPDET:"cars",safeToInjectMraid:!0,detectionRules:{url:[["carsales",
".android"],["carsales",".ios"]]}}],re=function(){var a,b=function(a,b){var e,g=Ua().process(b.detectionRules);g&&(e=g+"_"+b.STRINGIFIED_APPDET);return e};return{detect:function(){a=f(ue).map(b);a=0<a.length?a[0]:"";""===a&&l.hasOwnProperty("serverSideAppDetection")&&0!==l.serverSideAppDetection.length&&(a="s_serv");return a},hasDetectedMobileApp:function(){return void 0!==a&&""!==a}}},se=function(){var a=[],b=[],c=function(b,c){var g,f=Ua().process(c.detectionRules);f&&(a.push(c.STRINGIFIED_SDK+
"*"+f),g=c);return g};return{detect:function(){b=f(ia).map(c);0<b.length&&n.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1===b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},ia=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],
url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},
{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,
detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_SDK:"mrad",safeToInjectMraid:!0,detectionRules:{userAgent:["unmatchabledetectionstring"]}}],Sd=function(a){var b=
[];(function(){if(10>a.height)b.push({geometry:new V(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var c=Math.floor(a.height),d=c%10,c=(c-d)/10,e,g=0;10>g;g++)e=e||0,e={geometry:new V(0,a.width,e,e+(g<d?c+1:c)),percentageInViewContribution:10,isInView:!1},b.push(e),e=e.geometry.value().bottomY})();return{getSlices:function(){return b}}},U=function(){var a=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;
e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Vd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var g=e.value(),f=Math.max(d.leftX,g.leftX),m=Math.min(d.rightX,g.rightX),k=Math.max(d.topY,g.topY),g=Math.min(d.bottomY,g.bottomY);c.push(new V(f,m,k,g))}});return c},e=function(a,b){var c=0,
e=d(a,b),g;f(e).each(function(a,b){g=b.value();c+=g.area});return c},g=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=g();c.mbrd=1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=
1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(k.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},Wd=function(a){var b=U();return{getSliceStatus:function(c,d,e,g){var f,m=[];f=c.getRounded();c=f.height;var k=f.scrY,l=new D({scrX:f.scrX,width:f.width}),n=b.getConfig(f).numberOfSlices;l.set("height",r.floor(c/n));for(var t=0;t<n;t++)l.set("scrY",r.ceil(k+c/n*t)),f=100===a.calcPercentInView(l,
d,e,g),m.push(f);return m}}},V=function(a,b,c,d){var e=Math.ceil(a),g=Math.ceil(b),f=Math.ceil(c),m=Math.ceil(d),k=g-e,l=m-f,n=k*l,r=function(){return{leftX:e,rightX:g,topY:f,bottomY:m,width:k,height:l,area:n}};return{value:r,doesIntersect:function(a){var b=r();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},Td=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},Ud=function(a,b){var c,d=[],e=[],g=function(){f(d).each(function(a,
b){b(e)})},k=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,g=d.topY;-1===e.indexOf(g)&&e.push(g);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var l=d.intersectionRatio,d=d.intersectionRect,n=d.left-f.left,f=d.top-f.top,f=new V(n,n+d.width,f,f+d.height);e.push(f);f=k();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new V(0,b,f[d],f[d+1]));g();
1===l&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},ea=function(){var a=function(a){var b=!1;ve.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return b.omidNativeInfo&&b.omidNativeInfo.partnerName&&a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&
a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},ve=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],we=function(){return{listenForResult:function(){n.getAggregator().on("videoBlockResult",
function(a){var b=n.getAggregator().request("adNode"),c=!1,d="blockAd"+l.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},xe=function(a,b){var c,d,e,g,k;e=n.getAggregator().request("videoTranslator").translate(a.messageType);g=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};
a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-l.birthdate,tp:e,sl:b};f(d).mixin(g);f(d).mixin(k);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===g.viewMode||g.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&
"normal"===g.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},getVolume:function(a){return a.getVolumeFromContext(g)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?n.getAggregator().persistentTrigger(e,g,k):n.getAggregator().trigger(e,g,k)},toString:function(){return"{"+f(d).toParams()+
"}"}}).mixin(d)},ye=function(){var a=[];return{registerEvent:function(b,c,d){b=new xe(b,c,d);a.push(b);return b},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},ze=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&n.getAggregator().trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},g=function(){b=!0;d()},l=
function(a){a=(new Va).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){n.getAggregator().on({adVideoStart:g,adImpression:g,volumeChanged:l,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=n.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Ae=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+
b.slice(1);b in a&&(c=a[b]);return c}}},Va=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},wb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,g,q,m,p=[],u=k.OUT_OF_VIEW,v=!1,s=!1,w=!1,B=!0,y=new ye,A=ze(),D=new we,E=new Va,H=new Ha,G=function(b){var d;v=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=y.registerEvent(e,c.getCurrentLoc()),
d.indicatesPlaying()?(s=!0,u=w?k.IN_VIEW:!1):d.indicatesNotPlaying()?(s=!1,u=k.OUT_OF_VIEW):d.indicatesFullscreen()?(w=!0,u=s?k.IN_VIEW:k.OUT_OF_VIEW):d.indicatesNormalSize()&&(w=!1,u=s?!1:k.OUT_OF_VIEW),b=parseFloat(d.getVolume(E)),0<b?B=!0:0===b&&(B=!1));p.push(d);m&&M();return d},F=function(b){var c,g,m=xa().wrapToGlobal(G),k=function(a){f.isStr(a)&&(n.getAggregator().provide("vc",function(){return a}),n.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{g=b[e]||
b.getIasVidBridgeVersion,c=f.isFunction(g)&&"2"===g.call(b)?unescape(b[d].call(b,a,m)):unescape(b[d].call(b,a)),v=!0,k(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,l)}},I=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};g||(f(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return g=c(d)}),!g&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",
{},l));return g},K=function(){var a=I();a&&!v&&F(a);return a},L=function(a){a=E.getVolumeFromContext(a);B=f.isDef(a)?0<a:!1},M=function(){H.init();f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&n.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&n.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS),n.getAggregator().trigger("videoQuartileEvent",b)))});p=[];m=!0};(function(){x.addEvent(r.getWindow(),
"message",function(a){G(a)});n.getAggregator().on({volumeChanged:L});n.getAggregator().provide({videoEventsString:y,videoVersion:function(){var a,b=K();try{a=b.getVersion()}catch(c){a=-1,n.getAggregator().trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return q=q||new Ae},adNode:K});K();D.listenForResult();A.isApplicable(t)&&A.start(c)})();return{findAdNode:K,getViewStateOverride:function(){return u},isHandshakeComplete:function(){return v},triggerInitializationEvents:M,
setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=B;a.isVideoPlayingInFullscreen=!1;if(u){if(u===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:u;a.isVideoPlaying=u===k.IN_VIEW}w&&s&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Be=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},
db=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():n.getAggregator().trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},g=function(){b=new Da;d=0;e(!0);b.start()},l=function(d,e,m,k){d=c[d];k?(f.isDef(d[e])||(d[e]=[]),d[e].push(m)):d[e]=m;b&&b.isActive()||g();a=!0},m=function(c,d,e){n.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||g();a=!0},p=function(b){f(c).each(function(d,e){var g=c[d],m={type:b,oneTime:!0,minDt:!0,asION:!0};f(g).isEmpty()||
(n.getAggregator().trigger("addOutputItem",{output:g},d,m),c[d]={});a=!1})};return{start:function(){n.getAggregator().on("preSendDt",function(a){p(a);b&&b.kill()});n.getAggregator().on("addThrottledProp",l);n.getAggregator().on("addThrottledOutputItem",m)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},jb=function(){var a={},b=function(b){a[b]||(a[b]=new Ca(1,l.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();n.getAggregator().trigger("addThrottledProp",
"im",a,c.getTime())};return{start:function(){n.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Ce=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Qb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),n.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&n.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));n.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},Z=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},g=function(){var a,b={};e();f(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return f(g()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===
b}}},Rb=function(){function a(){}a.build=function(){var a=[];a.push(new Z(k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=n.getAggregator().request("vc");var d={jv3:Wa,av3:Wa,jvw:Ce,avw:Be};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Wa=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},R={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){n.getAggregator().trigger("measureTime",
R.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){x.addEvent(w,"load",function(){n.getAggregator().trigger("measureTime",R.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Da;a.onTick({4:function(){n.getAggregator().trigger("markTime",R.IDS.IN_BROWSER_DELAY)},5:function(){n.getAggregator().trigger("measureTime",R.IDS.IN_BROWSER_DELAY)}});a.start()}},I={isFrameworkAvailable:function(a,b){var c,d,e=r.getTop(),f=r.getWindow();try{c=e[a]}catch(k){for(;!d;){try{f.frames[b]&&(d=f.frames[b].parent)}catch(m){}if(f===
e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=I.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),x.removeEvent(r.getWindow(),"message",d))}catch(f){n.getAggregator().trigger("error",k.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+l.asid},send:function(a,b){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,a,b)}},gc={name:"CCPAConsentDetector",dependencies:[],creator:function(){function a(a){a&&
I.send(b,f(a).toION())}var b="ccd";(function(){var b=I.isFrameworkAvailable("__uspapi","__uspapiLocator");I.send("cca",!!b);if(b){var d,e;f.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",version:1,callId:I.getCallId()}},e=I.getMessageHandler("__uspapiReturn",a),x.addEvent(r.getWindow(),"message",e),b.postMessage(d,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},fc={name:"GDPRConsentDetector",dependencies:[],
creator:function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendorConsents)&&f.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e),glbl:f.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};I.send(c,f(a).toION())}var b=278,c="gcd";(function(){var c=I.isFrameworkAvailable("__cmp","__cmpLocator");I.send("gca",!!c);if(c){var e,g;f.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",
parameter:[b],callId:I.getCallId()}},g=I.getMessageHandler("__cmpReturn",a),x.addEvent(r.getWindow(),"message",g),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},hc={name:"GDPRV2ConsentDetector",dependencies:[],creator:function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendor)&&f.isDef(a.vendor.consents)&&f.isDef(a.vendor.consents[b])?a.vendor.consents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e)};
I.send(c,f(a).toION())}var b=278,c="gcd2";(function(){var c=I.isFrameworkAvailable("__tcfapi","__tcfapiLocator");I.send("gca2",!!c);if(c){var e,g;f.isFunction(c)?c("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[b],callId:I.getCallId(),version:2}},g=I.getMessageHandler("__tcfapiReturn",a),x.addEvent(r.getWindow(),"message",g),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},nc={name:"postMessageDetector",
dependencies:[],creator:function(){var a=!1,b="pmdetector"+l.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();x.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pom",f.stringifyTriState(a));x.removeEvent(d,"message",c)})})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}}},oc={name:"safeFrameDetector",dependencies:[],creator:function(){n.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.IM,"sf",f.stringifyTriState(t.isSafeFrame()))},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}}},cb=function(a,b,c,d,e,f,q){var m=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var r,s=d.baseUrl,w,x,B=f.getDocumentMode();"number"===typeof B?(x=2E3,8===B?x=4E3:8<B&&(x=8E3)):x=m(l.sp_imp_maxLength,2E3);w=x;if(t.integratedBlockingApplies(s)){x=s;var y=n.getAggregator().request("mobileApp"),A=y&&y.isMobileAppEnvironment&&y.isMobileAppEnvironment(),
D=l.contextNode.getAttribute("data-ias-container"),E=l.contextNode.getAttribute("data-ias-callback"),y=x+"adContainerId="+D+"&cbFunctionName="+E,y=A?y.replace("monitoring","blocking"):y.replace("skeleton.js",l.integration+".js"),H=l.protocol+":"+l.staticServer+l.integration+"a.js",G=l.protocol+":"+l.staticServer+l.integration+".js",s=y+"&true_pb="+encodeURIComponent(l.passback)+(A?"&redirectUrl="+encodeURIComponent(G):"")+(A?"&passback=":"&adsafe_pb=")+encodeURIComponent(H)+"&"}var A=s=s.replace(k.UNIQUE_ID_TOKEN,
l.asid),F=s.length,I,K,L=m(l.sp_imp_jsInfo_minLength,0),H="";try{I=w-F-L,0<I&&(K=De(p,I,14,b.on("partialUrls")),H+=K.join("&"))}catch(M){a.add(k.ERROR_CODES.IMPRESSION_URLS)}s=A+H;p=s+="&"===s.slice(-1)?"":"&";var N,F="";try{N=w-s.length,F+=Ee(N,"adsafe_jsinfo=",a,b,c,e,f,q)}catch(Q){a.add(k.ERROR_CODES.JSINFO),F+="adsafe_jsinfo=e:"+a.toString()}s=p+F;d.macroUrl&&(s+="&"===s.slice(-1)?"":"&",s+=d.macroUrl);r=s;l.impUrl=r;d.sendImpression(r);n.getAggregator().trigger("impressionsent")}catch(R){__IntegralASDiagnosticCall("impsend",
R,l)}}}},Ia=function(){try{var a=l.perf,b,c,d,e,g,q;a.markEnd("ec");b=a.getEnd("ec");c=w.performance&&"function"===typeof w.performance.getEntriesByName&&w.performance.getEntriesByName(l.impUrl)[0];var m=a.getStart("bd"),p=a.getStart(pa);d=l.jsDoSplit?Math.round(b-m):Math.round(b-p);e=Math.round(c&&c.duration);g=Math.round(b-(c&&c.responseEnd));f.isNumeric(d)&&f.isNumeric(e)&&f.isNumeric(g)&&(q={ttecl:d,ecd:e,tsecr:g},n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"imprf",f(q).toION()))}catch(r){n.getAggregator().trigger("error",
k.ERROR_CODES.IMPRESSION_PERFORMANCE)}},Ee=function(a,b,c,d,e,g,q,m){return function(c){var d=c.primary.join(","),g=b,k=0,m=function(a){if(a)return","+a};g.length+d.length+5<=a&&(g+=m(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){g.length+c.length+5<=a?g+=m(c):k+=1}));return g+=",ov:"+k}(function(){var a,b;b=a={viewState:k.NA};t.isDomless()?b=m.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=m.checkScreenLoc(!0))?b:a):f.isDef(r.getDoc().body)&&(b=m.checkScreenLoc(!0));
m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=b;var s=a.viewState;b=e.getAvidIds();s=["id:"+l.asid,"c:"+e.getCacheBustId(),"sl:"+s,"em:"+t.embedded,"fr:"+t.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(s.push("abi:"+b.bundleIdentifier),s.push("apn:"+b.partner),s.push("apv:"+b.partnerVersion));a=Fe(a,c,d,e,g,q,m);n.getAggregator().trigger("eligiblerender");return{primary:s,secondary:a}}())},Fe=function(a,b,c,d,e,g,q){var m=[],p=n.getAggregator().request("mPage");m.push("mn:"+
l.mn);m.push("pt:"+function(){var b=q.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());m.push(f(g.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&m.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;(c||d)&&m.push(a+":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("tt:"+l.mode);m.push("thd:"+f.stringifyTriState(p.supportsVisAPI()));m.push("et:"+
(r.now()-l.birthdate));l.perf.mark("si");c.on("swapids")?m.push("oid:"+l.oid):m.push("uid:"+d.unq);m.push("v:19.8.168");m.push("sp:"+(l.isSplitMode?1:0));m.push("st:"+(l.staticMode?1:0));m.push("fwm:"+("true"===l.fwMonitoring?1:0));c.on("resolution")&&(m.push("wr:"+f(s.windowSize()).toArray().join(".")),m.push("sr:"+f(s.screenSize()).toArray().join(".")));b=function(){var a;a=String(l.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,
b):a):a="NotFound";return a||""}();"NotFound"!==b&&m.push("x_xpc:"+b);return m},De=function(a,b,c,d){var e,g=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(k(b))return b}),a=f(a).map(function(a,b){if(!k(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var k=e.key,l;l=24+g.join("&").length+k.length+c;l=b-l;d&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+k,k=
g.join("&").length,f.length+k<=b&&g.push(f)}));return g},ab=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=Ge(a.navigator.plugins);var b=a.hash(),c=b.join(".");n.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),n.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},Je=function(a,b){return{start:function(){try{var c=
He(),d=c.getMethodName(a),e=new S(b.getEnabledScriptUrl(a)),f=Ie,l=r.getDoc();(new f(l.body||l.head||l.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(m){n.getAggregator().trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},He=function(){var a=function(a,c,d){a===l.asid&&(d.unshift(c),n.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:l.asid,constant:k,features:b,context:t,dtBaseURL:l.dtBaseURL,spg:Xa};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+
a}}},hb=function(){return{start:function(a,b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&Je(d,b).start()})}}},Ge=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=M.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Ie=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=s.createHiddenIframe();
c.setAttribute("src","about:blank");c.setAttribute("class","_ntnrjf7826-hj");(a||l.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,m;k=(new Date).getTime();m=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+m}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);
return{getWindow:function(){return c.contentWindow}}},Xa=function(a){var b=new Ba;(function(){b.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==l.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();r.setTimeout(function(){a.isDtCallAlreadySent()||(n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),f(d.cache).each(function(b,c){a.addToCache(b,c)}))},r.round(1E3*r.random()))})})();(function(){n.getAggregator().on("addToSpg",
function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),r.setTimeout(a.sendToOtherTags,1300),r.setTimeout(a.sendToOtherTags,3200))})})()},tc={name:"spg",dependencies:["spgCache"],creator:Xa,settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}}},sc={name:"spgCache",dependencies:[],creator:function(){var a=["asp","fsc","mvn","no","sd"],b={},c=!1,d=function(){return e(b)},e=function(b){return f(b).keys().sort().toString()===a.toString()},g=function(){c||(c=
!0,f(b).each(function(a,b){n.getAggregator().trigger("addOutputItem",b,a,{type:k.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),n.getAggregator().trigger("sendMinDt",k.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&g()},isFull:d,sendToOtherTags:function(){(new ca).send({scaInfoOriginatorASID:l.asid,cache:b})}}},settings:{}};try{ec()}catch(Ke){__IntegralASDiagnosticCall("main",Ke,l)}};
try{(function(){var l=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;try{top.isSingleIASInstance&&top.iasAdSlots?top.iasAdSlots.forEach(function(w){__IntegralASConfig._cl_adpath=w.adSelector;__IntegralASConfig.iasParameters=w.iasParameters;__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)}):__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)}catch(w){__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)}})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",
err$$10,__IntegralASConfig)};
