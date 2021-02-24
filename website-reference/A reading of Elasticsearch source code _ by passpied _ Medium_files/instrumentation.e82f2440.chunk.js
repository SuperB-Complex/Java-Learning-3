(self.webpackChunklite=self.webpackChunklite||[]).push([[118],{8538:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>P});var t=r(94725),o=r(67294),i=r(12291),s=r(57168),a=r(72351),u=r(52837),c=r(61250),l=r(31235),f=r(31117),d=r(27737),v=r(67616),p=r(29035),g=r(63038),m=r.n(g),h=r(59713),_=r.n(h),b=r(44059),w=r(14034);function E(){for(var n=new w.y,e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(0===r.length)return n;var o=r.map((function(){return[]}));return r.forEach((function(e,r){e.observe((function(e){o[r].push(e),o.every((function(n){return n.length>0}))&&n.set(o.map((function(n){return n.shift()})))}))})),n}var T=function(n){return function(e){return _()({},n,e)}};const P=function(){var n,e,r,g,h,_,w,P,A,M,S,y,C,k;return o.useEffect((function(){var n=E(v.sY,v.wZ,v.vY).map((function(n){var e=m()(n,3),r=e[0],t=e[1],o=e[2];return{responseEndToLCP:new v.jb(r.response.end,t.end),responseEndToFCP:new v.jb(r.response.end,o.end)}})),e=E(v.sY,v.qH.map(T("fid")),v.vY.map(T("fcp")),v.wZ.map(T("lcp")),n);v.cA.observe((function(n){n||e.observe((function(n){var e=n.reduce((function(n,e){return Object.assign(n,e)}),{}),r=Object.keys(e).reduce((function(n,r){var t=e[r].duration;return n[r]=t%1==0?t:Number(t.toFixed(1)),n}),{}),t=document.children[0],o={html:null==t?void 0:t.innerHTML.length,redux:JSON.stringify(window.__PRELOADED_STATE__).length,apollo:JSON.stringify(window.__APOLLO_STATE__).length};b.t.log("client hydrated",{perf:r,sizes:o})}))})),v.Df.observe((function(n){return b.t.log("client resource sizes",{resources:n})}))}),[]),n=(0,i.v9)((function(n){return n.tracing.tracer})),e=(0,i.v9)((function(n){return n.tracing.originalSpan})),r=(0,i.v9)((function(n){return n.client.isBot})),g=(0,i.v9)((function(n){return n.client.routingEntity})),h=(0,i.v9)((function(n){return n.auroraPage.isAuroraPageEnabled})),_=(0,s.r)(),w=_.loading,P=_.viewerId,A=(0,i.v9)((function(n){return n.config.performanceTags})),M=(0,l.xg)(),S=(0,l.f$)(),y=(0,i.I0)(),C=(0,c.dh)(),k=(0,a.Av)(),o.useEffect((function(){var o;if(n&&k&&!r&&!w&&P){var i=C(window.location.pathname),s=null!==(o=null==i?void 0:i.route.metricName)&&void 0!==o?o:"unidentified",a=(0,d.j)(P),c=(0,p.ic)(navigator.userAgent),l=[];M?l.push("edge_cache_enabled"):S&&l.push("edge_cache_control");var m=l.join(","),_={"user.logged_in":a,"user.experiment":m,"device.mobile_or_tablet":c,"req.route_name":s,"req.route":s,"req.router":(null==g?void 0:g.type)||u.Cr.DEFAULT};A.forEach((function(n){return _["req.".concat(n)]=1}));var b={auroraPage:h,loggedIn:a,mobileOrTablet:c,experiment:m,route:s},E=function(n){return Math.round(1e3*n)},T=function(e,r,t,o){var i=t.start,s=t.end,a=n.startSpan("timing.".concat(r),{childOf:e,tags:_}).setBeginMicros(E(i)).setEndMicros(E(s));return null!=o&&o(a),a.finish(),a};v.sY.observe((function(r){var o,i,s,a;k.reportRender(b,r);var u=n.startSpan("timing.navigation",{references:e?[(0,t.followsFrom)(e)]:void 0,tags:_}).setBeginMicros(E(r.load.start)).setEndMicros(E(r.load.end)).log({redirect_count:null!==(o=null===(i=window)||void 0===i||null===(s=i.performance)||void 0===s||null===(a=s.navigation)||void 0===a?void 0:a.redirectCount)&&void 0!==o?o:0});T(u,"beforeDomainLookup",r.before_domain_lookup),T(u,"domainLookup",r.domain_lookup),T(u,"connect",r.connect),T(u,"request",r.request),T(u,"response",r.response),T(u,"processing",r.processing);var c=r.overall_fcp,l=r.client,d=r.render;null!=c&&T(u,"firstContentfulPaint",c),null!=l&&T(u,"client",l,(function(n){null!=d&&T(n,"render",d)})),u.finish(),y((0,f.YU)(u.generateTraceURL()))})),v.vY.observe((function(r){k.reportFirstContentfulPaint(b,r),n.startSpan("timing.firstContentfulPaint.v2",{references:e?[(0,t.followsFrom)(e)]:void 0,tags:_}).setBeginMicros(E(r.start)).setEndMicros(E(r.end)).finish()})),v.wZ.observe((function(r){k.reportLargestContentfulPaint(b,r),n.startSpan("timing.largestContentfulPaint",{references:e?[(0,t.followsFrom)(e)]:void 0,tags:_}).setBeginMicros(E(r.start)).setEndMicros(E(r.end)).finish()})),v.yI.observe((function(n){k.reportCumulativeLayoutShift(b,n)})),v.cA.observe((function(n){n&&k.reportUnsupportedPerfObserver(b)})),v.qH.observe((function(r){k.reportInput(b,r),n.startSpan("timing.input.first.delay",{references:e?[(0,t.followsFrom)(e)]:void 0,tags:_}).setBeginMicros(E(r.start)).setEndMicros(E(r.end)).finish()}))}}),[n,w,P]),null}},72864:(n,e,r)=>{"use strict";r.r(e),r.d(e,{init:()=>i,extractSpan:()=>s});var t=r(45573),o=r(94725),i=function(n){var e=n.name,r=n.host,i=n.token,s=n.appVersion,a=new t.Tracer({component_name:e,xhr_instrumentation:!1,access_token:i,collector_host:r,default_span_tags:{"component.version":s}});return(0,o.initGlobalTracer)(a),a},s=function(n,e){if(e)return n.extract(o.FORMAT_HTTP_HEADERS,e)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/instrumentation.e82f2440.chunk.js.map