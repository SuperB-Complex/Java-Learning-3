(self.webpackChunklite=self.webpackChunklite||[]).push([[5064],{28859:(e,t,r)=>{"use strict";r.d(t,{u6:()=>c,Am:()=>u,TA:()=>l});var a=r(63038),n=r.n(a),i=r(67294),o={updateWatchedBounds:function(){},watchedBounds:new Map},c=i.createContext(o),u=function(e){var t=new Map,r=i.useState(t),a=n()(r,2),o=a[0],u=a[1],l={offset:{left:0,right:0,top:0,bottom:0}},p={watchedBounds:o,updateWatchedBounds:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l;u((function(a){var n=new Map(a);return n.set(e,{ref:t,opts:r}),n}))}};return i.createElement(c.Provider,{value:p},e.children)},l=function(e){var t=e.children,r=e.className,a=e.name,n=e.type,o=e.offset,u=i.useContext(c).updateWatchedBounds,l=i.useRef(null);return i.useEffect((function(){u&&u(a,l,{type:n,offset:o})}),[]),i.createElement("div",{className:r,ref:l},t)}},99361:(e,t,r)=>{"use strict";r.d(t,{Jj:()=>le,_V:()=>pe,ZP:()=>ue});var a=r(28655),n=r.n(a),i=r(34575),o=r.n(i),c=r(93913),u=r.n(c),l=r(2205),p=r.n(l),s=r(78585),h=r.n(s),g=r(29754),d=r.n(g),f=r(71439),m=r(67294),v=r(28859),E=r(59713),x=r.n(E),y=r(63038),S=r.n(y),T=r(12291),b=r(87815),R=r(93340),P=r(25309),w=r(99985),_=r(17742),I=r(67154),O=r.n(I),W=r(28309),k=r(72955),N=r(41331),q=r(53006),C=function(e){return{backgroundColor:e.baseColor.background.normal}},L=function(){return{width:"1px",minWidth:"100%","*width":"100%"}};const B=(0,T.$j)((function(e){return{isAmp:e.config.isAmp}}))((function(e){var t,r=e.src,a=e.title,n=e.height,i=e.width,o=e.allowFullScreen,c=e.frameBorder,u=e.thumbnailUrl,l=e.rules,p=e.placeholderRef,s=e.iframeRef,h=e.isAmp,g=(0,W.Iq)(),d={src:r,allowFullScreen:o,frameBorder:c,height:n,width:i},f=m.useState(!1),v=S()(f,2),E=v[0],x=v[1],y=m.useState(!1),T=S()(y,2),b=T[0],R=T[1];if(b||k.V6.on("load",(function(){return R(!0)})),null!=s&&null!==(t=s.current)&&void 0!==t&&t.parentElement&&s.current.parentElement.offsetWidth<s.current.offsetWidth&&!E&&x(!0),h){var P,w={allowFullScreen:o};for(var _ in w)d[_]=d[_]?"":null;return P=u?m.createElement("amp-img",{placeholder:"",src:u,layout:"fill"}):m.createElement("div",{placeholder:"",className:g([q.m,C])}),m.createElement("amp-iframe",O()({},d,{class:g(l),placeholder:"",resizable:"",layout:"responsive",sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"}),P,m.createElement("div",{overflow:"true",tabIndex:"0",role:"button","aria-label":"Read more"},"Read more"))}return b?m.createElement(N.v,{rootMargin:"200px 0px",target:p},(function(e){return e?m.createElement("iframe",O()({},d,{ref:s,title:a,className:g(E?[l,L]:l),scrolling:E?"no":"auto"})):null})):null}));var M=r(80637),A=r(69703),H=r(65441),F=r(27952);function U(){var e=n()(["\n  fragment IframeParagraph_paragraph on Paragraph {\n    iframe {\n      mediaResource {\n        id\n        iframeSrc\n        iframeHeight\n        iframeWidth\n        title\n      }\n    }\n    layout\n    ...getEmbedlyCardUrlParams_paragraph\n    ...Markups_paragraph\n  }\n  ","\n  ","\n"]);return U=function(){return e},e}var j=function(e){var t=e.host,r=e.isAmp,a=e.paragraph,n=e.paragraphStyle,i=e.richTextStyle,o=e.spaceTop,c=e.updateWatchedBounds,u=(0,W.Iq)(),l=m.useRef(null),p=(a.iframe||{}).mediaResource,s=p||{},h=s.id,g=s.iframeSrc,d=s.iframeHeight,f=s.iframeWidth,v=s.title,E=g;E||(E=h?(0,F.jU)(t,h):"");var y=function(e){var t=e.src,r=e.initialHeight,a=e.initialWidth,n=m.useRef(null),i=m.useState(r),o=S()(i,2),c=o[0],u=o[1],l=m.useState(a),p=S()(l,2),s=p[0],h=p[1];return m.useEffect((function(){if(""!==t){var e=(0,R.x)((function(e,r){n.current&&"MEASURE"===e.type&&e.details.height>0&&(h(n.current.offsetWidth),n.current.contentWindow===r&&u(e.details.height)),"iframe.resize"===e.context&&e.src===t&&e.height>0&&(n.current&&h(n.current.offsetWidth),u(e.height))})).destructor;return function(){e()}}}),[t,r]),[c,s,n]}({src:E,initialHeight:d||0,initialWidth:f||0}),T=S()(y,3),I=T[0],O=T[1],k=T[2],N=m.useRef(null);if(m.useEffect((function(){if(c&&p&&p.id&&O&&I){var e="";l.current&&(e=l.current.offsetTop.toString()),c("".concat(p.id,"-").concat(e),l,{type:"image"})}}),[]),!E)return null;var C=a.text?m.createElement(w.Z,{richTextStyle:i},m.createElement(b.T2,{paragraph:a,paragraphStyle:n,richTextStyle:i})):null,L=[(0,A.qB)(o)];L.push((function(){return{clear:"both"}})),"OUTSET_LEFT"===(a.layout||void 0)&&"STREAM"!==i&&L.push((function(e){var t;return t={background:e.backgroundColor,borderWidth:e.borderWidthThick+"px",borderStyle:e.borderStyle,borderColor:e.backgroundColor,float:"left",marginLeft:"-150px",marginRight:"30px",width:"75%",padding:"0",paddingBottom:"10px"},x()(t,M.md(e),{float:"none",marginLeft:"0",marginRight:"0",width:"100%"}),x()(t,"marginBottom","16px"),t}));var U=r?(0,H.XC)(a):null;return m.createElement(_.B,{className:u(L),figCaption:C,figureRef:l},U?m.createElement(m.Fragment,null,m.createElement("amp-embedly-card",{"data-url":U.url,layout:"responsive",width:O,height:I,"data-card-controls":"0"})):m.createElement(P.G,{height:I,width:O,backgroundColor:"NONE",ref:N},m.createElement(B,{placeholderRef:N,iframeRef:k,src:E,title:v||"",height:I,width:O,allowFullScreen:!0,frameBorder:"0",rules:q.m})))},D=m.memo(j);const Z=(0,T.$j)((function(e){return{isAmp:e.config.isAmp,host:e.navigation.host}}))(D);var z=(0,f.Ps)(U(),H.Zp,b.Zr);const G=Z;var X=r(98587),Q=r(65922),V=r(203),Y=r(64504),J=r(90038);function $(){var e=n()(["\n  fragment MixtapeParagraph_paragraph on Paragraph {\n    text\n    type\n    mixtapeMetadata {\n      href\n      thumbnailImageId\n    }\n    markups {\n      start\n      end\n      type\n      href\n    }\n  }\n"]);return $=function(){return e},e}var K=function(e){return{boxShadow:"inset 0 0 0 1px ".concat(e.baseColor.border.lighter)}};const ee=function(e){var t=e.paragraph,r=e.spaceTop,a=e.structuredMarkup,n=(0,W.Iq)(),i=t.mixtapeMetadata,o=t.type;if(!i||!i.href||!o)return null;var c=i.href,u=a||function(e){var t=e.text,r=e.markups;if(!t)return null;var a=r.find((function(e){return"STRONG"===e.type}));if(!a)return null;var n=r.find((function(e){return"EM"===e.type})),i=a.end,o=n?n.end:a.end;return{title:t.slice(a.start,i).trim(),description:n?t.slice(n.start,n.end).trim():null,domain:t.slice(o).trim()||null}}(t);if(!u)return null;var l=u.title,p=u.description,s=u.domain,h=[(0,A.qB)(r),K];return m.createElement("div",{className:n(h)},m.createElement(V.P3,{href:c||"",disableSourceParam:!0,target:"_blank"},m.createElement(V.xu,{display:"flex",flexShrink:"0",padding:"0px"},m.createElement(V.xu,{padding:"16px 20px",flexShrink:"1",flexGrow:"1",display:"flex",justifyContent:"center",flexDirection:"column",sm:{padding:"10px 12px 10px"}},m.createElement(Y.Dx,{scale:"XS",clamp:2},l),p&&m.createElement(V.xu,{marginTop:"8px"},m.createElement(Y.QE,{scale:"S",clamp:2},p)),s&&m.createElement(V.xu,{marginTop:"12px"},m.createElement(Y.F,{scale:"S",clamp:2},s))),i&&i.thumbnailImageId&&m.createElement(V.xu,{width:"160px"},m.createElement(Q.Z,{boxShadowRules:K,miroId:i.thumbnailImageId,width:160,height:167,strategy:J._S.Resample,focusPercent:[50,50],imgHeight:167,imgWidth:160})))))};var te=(0,f.Ps)($()),re=r(19692),ae=r(11642);function ne(){var e=n()(["\n      fragment PostBodyParagraph_paragraph on Paragraph {\n        name\n        type\n        ...ImageParagraph_paragraph\n        ...TextParagraph_paragraph\n        ...IframeParagraph_paragraph\n        ...MixtapeParagraph_paragraph\n      }\n      ","\n      ","\n      ","\n      ","\n    "]);return ne=function(){return e},e}function ie(){var e=n()(["\n  fragment PostBodyParagraph_privateNote on Note {\n    ...TextParagraph_privateNote\n    ...ImageParagraph_privateNote\n  }\n  ","\n  ","\n"]);return ie=function(){return e},e}function oe(){var e=n()(["\n  fragment PostBodyParagraph_highlight on Quote {\n    ...TextParagraph_highlight\n    ...ImageParagraph_highlight\n  }\n  ","\n  ","\n"]);return oe=function(){return e},e}var ce=function(e){p()(n,e);var t,r,a=(t=n,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=d()(t);if(r){var n=d()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return h()(this,e)});function n(){return o()(this,n),a.apply(this,arguments)}return u()(n,[{key:"render",value:function(){var e,t=this.props,r=t.highlights,a=t.inserts,n=t.marginTopOverride,i=t.paragraph,o=t.paragraphStyle,c=t.privateNotes,u=t.richTextStyle,l=t.sequenceAspectRatio,p=t.spaceTop;switch(o){case H.qq.IMG:e=m.createElement(v.u6.Consumer,null,(function(e){var t=e.updateWatchedBounds;return m.createElement(X.ZP,{highlights:r,marginTopOverride:n,paragraph:i,paragraphStyle:o,privateNotes:c,richTextStyle:u,sequenceAspectRatio:l,spaceTop:p,updateWatchedBounds:t})}));break;case H.qq.P:case H.qq.BQ:case H.qq.PQ:case H.qq.H1:case H.qq.H2:case H.qq.H3:case H.qq.H4:case H.qq.ULI:case H.qq.OLI:case H.qq.PRE:case H.qq.Kicker:case H.qq.Subtitle:case H.qq.Title:e=m.createElement(re.ZP,{highlights:r,marginTopOverride:n,paragraph:i,paragraphStyle:o,privateNotes:c,richTextStyle:u,spaceTop:p});break;case H.qq.IFRAME:e=m.createElement(v.u6.Consumer,null,(function(e){var t=e.updateWatchedBounds;return m.createElement(G,{paragraph:i,paragraphStyle:o,richTextStyle:u,spaceTop:p,updateWatchedBounds:t})}));break;case H.qq.MIXTAPE_EMBED:e=m.createElement(ee,{paragraph:i,paragraphStyle:o,richTextStyle:u,spaceTop:p});break;case H.qq.COVER_TITLE:case H.qq.SECTION_CAPTION:case H.qq.HR:e=null;break;default:(0,ae.v)(o),e=null}return a&&a.length?m.createElement(m.Fragment,null,a.map((function(e){return"before"===e.order&&e.component})),e,a.map((function(e){return"after"===e.order&&e.component}))):e}}]),n}(m.Component);ce.fragments={paragraph:(0,f.Ps)(ne(),z,X.ck,re.Rg,te)};const ue=ce;var le=(0,f.Ps)(oe(),re.m8,X.Zl),pe=(0,f.Ps)(ie(),re.hz,X.T_)},95064:(e,t,r)=>{"use strict";r.d(t,{ZQ:()=>w,PL:()=>_,NR:()=>I,lD:()=>O,l:()=>k});var a=r(63038),n=r.n(a),i=r(28655),o=r.n(i),c=r(59713),u=r.n(c),l=r(67154),p=r.n(l),s=r(71439),h=r(67294),g=r(28859),d=r(10515),f=r(99361),m=r(19692),v=r(98701),E=r(28309),x=r(80637),y=r(65441);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(){var e=o()(["\n  fragment ParagraphStyleGrouping_privateNote on Note {\n    ...PostBodyParagraph_privateNote\n  }\n  ","\n"]);return b=function(){return e},e}function R(){var e=o()(["\n  fragment ParagraphStyleGrouping_highlight on Quote {\n    ...PostBodyParagraph_highlight\n  }\n  ","\n"]);return R=function(){return e},e}function P(e){var t=e.styleGroup,r=e.postBodyInserts,a=e.richTextStyle,n=(0,E.Iq)(),i=N(t),o=t.paragraphViewModels.map((function(e){var i=e.paragraph.name,o=r&&r[i],c=h.createElement(f.ZP,p()({key:e.paragraph.name,inserts:o},e));return"Title"===e.paragraphStyle||"Subtitle"===e.paragraphStyle?h.createElement(g.TA,{name:"title",type:"byline",offset:{left:-600},key:"".concat(e.paragraph.name,"-wb"),className:"SHORTFORM_CARD"===a?n((function(e){return u()({zIndex:2,position:"absolute",bottom:"".concat(t.paragraphViewModels[0].marginBottomOverride||0,"px"),margin:"48px 40px"},x.md(e),{margin:"32px 24px"})})):""},c):c}));return i?h.createElement(d.M.Consumer,null,(function(e){return h.createElement(i,{className:n([k({paragraphStyle:t.paragraphStyle,topSpacing:t.topSpacing,paragraphLayout:t.paragraphLayout,richTextStyle:t.paragraphViewModels[0].richTextStyle,isEmbedded:e})])},o)})):o}var w=h.memo(P),_=(0,s.Ps)(R(),f.Jj),I=(0,s.Ps)(b(),f._V),O=function(e){var t=[];return e.forEach((function(e){var r=e.paragraphStyle,a=e.paragraph.layout,n=t[t.length-1];n&&W(n,e)?n.paragraphViewModels.push(e):t.push({paragraphStyle:r,paragraphLayout:a,topSpacing:e.sequenceSpaceTop||0,paragraphViewModels:[e]})})),t},W=function(e,t){if(e.paragraphStyle!==t.paragraphStyle)return!1;var r=t.paragraph.layout;return"OUTSET_ROW"===e.paragraphLayout?"OUTSET_ROW_CONTINUE"===r:e.paragraphLayout===r},k=function(e){var t=e.paragraphStyle,r=e.topSpacing,a=e.paragraphLayout,i=e.richTextStyle,o=e.isEmbedded;return function(e){var c={};switch(r&&(c.marginTop=(0,v.mu)((function(e){var t=n()(e,1)[0];return"".concat(t,"px")}),r)),t){case"BQ":var u=e.baseColor.border.darker||"";return T(T({},c),{},{boxShadow:"inset ".concat(3,"px 0 0 0 ").concat(u),paddingLeft:"".concat(23,"px"),marginLeft:(0,y.jH)(i)?"0px":"-20px"});case"PRE":return T(T({},c),{},{padding:"20px",background:e.baseColor.background.normal,overflowX:"auto"});case"PQ":return T(T({},c),{},{paddingLeft:"SERIES"===i?"0px":"30px"});case"ULI":if(o)return m.Pq}switch(a){case"OUTSET_ROW":return T(T({},c),{},{display:"flex",flexDirection:"row"})}return c}},N=function(e){var t=e.paragraphStyle,r=e.paragraphLayout;switch(t){case"OLI":return"ol";case"ULI":return"ul";case"BQ":case"PQ":return"blockquote";case"PRE":return"pre"}switch(r){case"OUTSET_ROW":return"div"}return null}},93340:(e,t,r)=>{"use strict";function a(e){e&&e.iframe&&e.height&&e.iframe.getAttribute&&"number"==typeof e.height&&o({context:"iframe.resize",height:e.height,src:e.iframe.getAttribute("src")||""})}function n(e){if(e.data&&"string"==typeof e.data){var t;try{t=JSON.parse(e.data)}catch(e){return}o(t,e.source)}}r.d(t,{x:()=>c});var i=[];function o(e,t){i.forEach((function(r){return r(e,t)}))}function c(e){return window._resizeIframe||(window._resizeIframe=a,window.addEventListener("message",n)),i.push(e),{destructor:function(){0===(i=i.filter((function(t){return e!==t}))).length&&"undefined"!=typeof window&&(window._resizeIframe=null,window.removeEventListener("message",n))}}}},98587:(e,t,r)=>{"use strict";r.d(t,{Zl:()=>H,ck:()=>A,T_:()=>F,ZP:()=>M});var a=r(28655),n=r.n(a),i=r(59713),o=r.n(i),c=r(67154),u=r.n(c),l=r(59854),p=r.n(l),s=r(71439),h=r(67294),g=r(7647),d=r(69677),f=r(87815),m=r(16660),v=r(65922),E=r(203),x=r(28309),y=r(90038),S=function(e){return{backgroundColor:e.brandColor.sage.light}},T=function(e,t){var r=(0,y.W6)({freezeGifs:!1,miroId:e,strategy:y._S.Resample,width:t.breakpoints.sm}),a=(0,y.W6)({freezeGifs:!1,miroId:e,strategy:y._S.Resample,width:t.breakpoints.md}),n=(0,y.W6)({freezeGifs:!1,miroId:e,strategy:y._S.Resample,width:t.breakpoints.lg}),i=(0,y.W6)({freezeGifs:!1,miroId:e,strategy:y._S.Resample,width:t.breakpoints.xl});return{xl:"url('".concat(i,"')"),lg:"url('".concat(i,"')"),md:"url('".concat(n,"')"),sm:"url('".concat(a,"')"),xs:"url('".concat(r,"')")}};function b(e){var t=e.metadata,r=(0,x.Iq)();return h.createElement(E.Yi,null,(function(e){return h.createElement("div",{className:r(S)},h.createElement(v.Z,{backgroundImage:T(t.id,e),miroId:t.id,height:"60vh",width:"100%",minHeight:{xl:500,lg:400,md:400,sm:300,xs:300},imgHeight:500,imgWidth:2e3,focusPercent:null===t.focusPercentX||void 0===t.focusPercentX||null===t.focusPercentY||void 0===t.focusPercentY?void 0:[t.focusPercentX,t.focusPercentY]}))}))}var R=r(99985),P=r(17742),w=r(8558),_=r(62031),I=r(80637),O=r(53006),W=r(69703),k=r(8667),N=r(65441);function q(){var e=n()(["\n  fragment ImageParagraph_privateNote on Note {\n    ...PostAnnotationsMarker_privateNote\n  }\n  ","\n"]);return q=function(){return e},e}function C(){var e=n()(["\n  fragment ImageParagraph_highlight on Quote {\n    id\n    ...Markups_highlight\n  }\n  ","\n"]);return C=function(){return e},e}function L(){var e=n()(["\n  fragment ImageParagraph_paragraph on Paragraph {\n    href\n    layout\n    metadata {\n      id\n      originalHeight\n      originalWidth\n      focusPercentX\n      focusPercentY\n      alt\n    }\n    ...Markups_paragraph\n    ...PostAnnotationsMarker_paragraph\n  }\n  ","\n  ","\n"]);return L=function(){return e},e}var B=function(e){var t=e.highlights,r=e.isSequenceCover,a=void 0!==r&&r,n=e.marginTopOverride,i=e.paragraph,c=e.paragraphStyle,l=e.privateNotes,s=e.richTextStyle,v=e.sequenceAspectRatio,S=e.spaceTop,T=e.updateWatchedBounds,q=(0,x.Iq)(),C=h.useRef(null),L=(0,d.CF)(i,c),B=h.useContext(g.U);return h.useEffect((function(){if(T){var e=i.name,t=i.metadata&&i.metadata.id;if(e&&t){var r="";C.current&&(r=C.current.offsetTop.toString()),T("".concat(e,"-").concat(t,"-").concat(r),C,{type:"image"})}}}),[]),h.useMemo((function(){var e=i.metadata,r=i.layout;if(!e)return null;var g,d=e.id,x=e.originalHeight,T=e.originalWidth,M=e.alt,A=(0,y.JI)(d),H="CARD"===s||"SHORTFORM_CARD"===s,F=(0,k.jg)({layout:r,originalWidth:T||0,originalHeight:x||0,sequenceAspectRatio:v,richTextStyle:s}),U=F.width,j=F.height,D=F.strategy,Z=F.otherWidths;if("OUTSET_ROW_CONTINUE"===r&&T&&x&&v){var z=T/x;g=p()(v/z,2)}var G,X=i.text?h.createElement(R.Z,{ref:L,richTextStyle:s,textAlign:a?"left":"center",extendLeftRatio:g},l&&h.createElement(m.A7,{paragraph:i,privateNotes:l}),h.createElement(f.T2,{highlights:t,paragraph:i,paragraphStyle:c,richTextStyle:s})):null;if(a)G=h.createElement(b,{metadata:{id:d,focusPercentX:e.focusPercentX,focusPercentY:e.focusPercentY}});else{var Q=B?[{maxWidth:"100%",height:"auto"}]:j?[O.m]:[{maxWidth:"100%"}],V={isAmp:!1,alt:M||"Image for post",miroId:d,height:j,width:U,rules:Q,maxWidth:j?void 0:"100%",strategy:D,freezeGifs:"STREAM"===s||"RESAMPLE"!==D,focusPercentX:e.focusPercentX,focusPercentY:e.focusPercentY,expectedWidth:U,otherWidths:Z};if((0,N.jH)(s)){var Y=function(){var e={};return U>0&&(e.maxWidth="".concat(U,"px")),H&&("INSET_CENTER"===r||"OUTSET_LEFT"===r)&&T&&(e.marginLeft="auto",e.marginRight="auto"),h.createElement("div",{className:q(e)},h.createElement(w.Fh,V))};if(!U||!j)return h.createElement("div",{className:q((0,W.qB)(S))},h.createElement(Y,null));G=h.createElement(Y,null)}else if("OUTSET_LEFT"===r||"INSET_LEFT"===r||"INSET_CENTER"===r&&T||"OUTSET_CENTER"===r&&T){var J=T&&(A?T/2:T);G=h.createElement(_.X1,{isLinked:!!i.href,width:V.width,height:V.height,originalHeight:e.originalHeight,originalWidth:e.originalWidth,paragraphRef:C},h.createElement("div",{className:q((function(e){return{marginLeft:"auto",marginRight:"auto",maxWidth:"OUTSET_CENTER"===r&&J&&J<e.maxWidths.outset?"".concat(e.maxWidths.outset,"px"):"".concat(J,"px")}}))},h.createElement(w.Fh,u()({},V,{height:e.originalHeight||V.height,width:e.originalWidth||V.width}))))}else G=T&&"INSET_CENTER"!==r?h.createElement(_.X1,{isLinked:!!i.href,width:V.width,height:V.height,originalHeight:e.originalHeight,originalWidth:e.originalWidth,paragraphRef:C},h.createElement(w.Fh,u()({},V,{height:e.originalHeight||V.height,width:e.originalWidth||V.width}))):h.createElement(E.xu,{display:"flex",justifyContent:"center",alignItems:"flex-start",sm:{display:"block"}},h.createElement(_.X1,{isLinked:!!i.href,width:V.width,height:V.height,originalHeight:e.originalHeight,originalWidth:e.originalWidth,paragraphRef:C},h.createElement(w.Fh,u()({},V,{width:null,maxWidth:"100%",strategy:null}))));i.href&&(G=h.createElement("a",{href:i.href},G))}var $="SHORTFORM_CARD"===s?[]:[n?(0,W.qB)(n):(0,W.qB)(S)];if($.push({clear:"both"}),a)$.push((function(e){return o()({},I.lg(e),{paddingLeft:"0px",paddingRight:"0px"})}));else if(("OUTSET_ROW"===r||"OUTSET_ROW_CONTINUE"===r)&&T&&x&&v){var K=T/x,ee=p()(K/v*100,2);$.push({width:"".concat(ee,"%"),marginRight:"10px",paddingTop:"5px",paddingBottom:"5px",":last-of-type":{marginRight:0}})}else"OUTSET_CENTER"===r?$.push({paddingBottom:"5px",paddingTop:"5px"}):"OUTSET_LEFT"===r&&H?$.push({marginLeft:"auto",marginRight:"auto"}):"OUTSET_LEFT"!==r||H?"INSET_LEFT"===r?$.push({float:"left",width:"50%",paddingBottom:"10px",paddingRight:"30px",marginBottom:"16px"}):"FULL_WIDTH"===r?$.push({width:"100%"}):"INSET_CENTER"===r&&$.push({marginLeft:"auto",marginRight:"auto"}):$.push((function(e){var t;return t={background:e.backgroundColor,borderWidth:e.borderWidthThick+"px",borderStyle:e.borderStyle,borderColor:e.backgroundColor,float:"left",marginLeft:"-150px",marginRight:"30px",width:"75%",padding:"0",paddingBottom:"10px"},o()(t,I.lg(e),{float:"none",marginLeft:"0",marginRight:"0",width:"100%"}),o()(t,"marginBottom","16px"),t}));return h.createElement(P.B,{className:"".concat(q($)," paragraph-image"),figCaption:X,figureRef:C},G)}),[JSON.stringify(i),JSON.stringify(l)])};const M=h.memo(B);var A=(0,s.Ps)(L(),f.Zr,m.Mx),H=(0,s.Ps)(C(),f.DV),F=(0,s.Ps)(q(),m.uR)},99985:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var a=r(319),n=r.n(a),i=r(59713),o=r.n(i),c=r(67294),u=r(67995),l=r(24438),p=r(28309),s=r(80637),h=function(e){return function(t){return o()({marginTop:"10px",textAlign:e,maxWidth:"".concat((0,l.G)(t,8,!0),"px"),marginLeft:"left"===e?"0":"auto",marginRight:"auto"},s.lg(t),{marginLeft:"auto",textAlign:"center"})}},g=function(e){return function(){var t=e&&100*e;return{width:"".concat(t,"%"),position:"relative",left:"calc(".concat(100-t/2,"% - 8px)"),transform:"translateX(-50%)"}}};const d=c.forwardRef((function(e,t){var r=e.children,a=e.richTextStyle,i=e.textAlign,o=void 0===i?"center":i,l=e.extendLeftRatio,s=(0,p.Iq)(),d=(0,u.n)({name:"detail",scale:"CARD"===a||"SHORTFORM_CARD"===a?"S":"M",color:"LIGHTER"});return c.createElement("figcaption",{className:s([h(o),d].concat(n()(l?[g(l)]:[]))),ref:t},r)}))},17742:(e,t,r)=>{"use strict";r.d(t,{B:()=>n});var a=r(67294);function n(e){var t=e.children,r=e.figCaption,n=e.className,i=e.figureRef;return a.createElement("figure",{className:n,ref:i},t,r)}},65922:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var a=r(63038),n=r.n(a),i=r(67294),o=r(98701),c=r(28309),u=r(90038),l=function(e){var t=n()(e,1)[0];return"number"==typeof t?"".concat(t,"px"):t},p=function(e){var t=n()(e,1)[0];return"".concat(t[0],"% ").concat(t[1],"%")},s=function(e){return n()(e,1)[0]};function h(e){var t=e.backgroundImage,r=e.boxShadowRules,a=e.miroId,n=e.height,h=e.width,g=e.minHeight,d=e.minWidth,f=e.imgHeight,m=e.imgWidth,v=e.focusPercent,E=e.strategy,x=void 0===E?u._S.Resample:E,y=e.darken,S=e.freezeGifs,T=(0,c.Iq)(),b=t;if(!b){var R=(0,u.W6)({miroId:a,height:f,width:m,strategy:x,darken:y,freezeGifs:S});b="url(".concat(R,")")}var P=(0,o.mu)(l,n),w=(0,o.mu)(l,h),_=g&&(0,o.mu)(l,g),I=d&&(0,o.mu)(l,d),O=(0,o.mu)(p,v),W={backgroundImage:(0,o.mu)(s,b),display:"block",backgroundOrigin:"border-box",backgroundSize:"cover",height:P,width:w,minHeight:_,minWidth:I,backgroundPosition:O,maxWidth:"100%"};return i.createElement("div",{className:T([W,r])})}h.defaultProps={focusPercent:[50,50]}},41331:(e,t,r)=>{"use strict";r.d(t,{v:()=>c});var a=r(63038),n=r.n(a),i=r(67294),o=r(72955),c=function(e){var t=e.rootMargin,r=e.children,a=e.target,c=i.useState(!1),u=n()(c,2),l=u[0],p=u[1],s=i.useCallback((function(e){!l&&e.isIntersecting&&p(!0)}),[l]);return(0,o.S1)({onIntersect:s,target:a,disconnect:function(){return l},rootMargin:t},[l]),"function"==typeof r?i.createElement(i.Fragment,null,r(l)):l?i.createElement(i.Fragment,null,r):null}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5064.8cb1757e.chunk.js.map