(function(n){function e(e){for(var o,i,c=e[0],r=e[1],l=e[2],u=0,h=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,i=1;i<t.length;i++){var c=t[i];0!==s[c]&&(o=!1)}o&&(a.splice(e--,1),n=r(r.s=t[0]))}return n}var o={},i={app:0},s={app:0},a=[];function c(n){return r.p+"js/"+({}[n]||n)+"."+{"chunk-1615aa74":"253f9a37","chunk-2e9f79c2":"32fe6e95","chunk-609ff1c5":"337a75d4","chunk-72427460":"2fc31a43","chunk-78d508e8":"d0ccb691","chunk-984c1368":"4f2b1fa6","chunk-bb2b758a":"980c2f2e","chunk-d4083f90":"f8074cc8","chunk-eb8dacae":"ba235b0b"}[n]+".js"}function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(n){var e=[],t={"chunk-1615aa74":1,"chunk-2e9f79c2":1,"chunk-609ff1c5":1,"chunk-72427460":1,"chunk-78d508e8":1,"chunk-984c1368":1,"chunk-bb2b758a":1,"chunk-d4083f90":1,"chunk-eb8dacae":1};i[n]?e.push(i[n]):0!==i[n]&&t[n]&&e.push(i[n]=new Promise((function(e,t){for(var o="css/"+({}[n]||n)+"."+{"chunk-1615aa74":"8ac4e392","chunk-2e9f79c2":"c244d61d","chunk-609ff1c5":"d2dac83b","chunk-72427460":"ae3ffee4","chunk-78d508e8":"e5714045","chunk-984c1368":"8846826f","chunk-bb2b758a":"4e66d46b","chunk-d4083f90":"40ae4723","chunk-eb8dacae":"858924e3"}[n]+".css",s=r.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===s))return e()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){l=h[c],u=l.getAttribute("data-href");if(u===o||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||s,a=new Error("Loading CSS chunk "+n+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[n],d.parentNode.removeChild(d),t(a)},d.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){i[n]=0})));var o=s[n];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,t){o=s[n]=[e,t]}));e.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=c(n);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var t=s[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;h.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",h.name="ChunkLoadError",h.type=o,h.request=i,t[1](h)}s[n]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=n,r.c=o,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/",r.oe=function(n){throw console.error(n),n};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"21bb":function(n,e,t){"use strict";t("2dad")},"21f5":function(n,e,t){},"2dad":function(n,e,t){},"3bd4":function(n,e,t){"use strict";t("501e")},"501e":function(n,e,t){},5056:function(n){n.exports=JSON.parse('{"questionMark":{"path":"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z"},"box":{"path":"M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-16.91 1.584l8 4.363v8.607l-8-4.268v-8.702zm10 12.97v-8.6l8-4.269v8.6l-8 4.269z"},"github":{"url":"https://github.com/richardeakin","path":"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},"email":{"url":"mailto:rtepub@gmail.com","path":"M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"},"vimeo":{"url":"https://vimeo.com/richardeakin","path":"M22.875 10.063c-2.442 5.217-8.337 12.319-12.063 12.319-3.672 0-4.203-7.831-6.208-13.043-.987-2.565-1.624-1.976-3.474-.681l-1.128-1.455c2.698-2.372 5.398-5.127 7.057-5.28 1.868-.179 3.018 1.098 3.448 3.832.568 3.593 1.362 9.17 2.748 9.17 1.08 0 3.741-4.424 3.878-6.006.243-2.316-1.703-2.386-3.392-1.663 2.673-8.754 13.793-7.142 9.134 2.807z"},"twitter":{"url":"https://twitter.com/rteakin","path":"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"},"linkedin":{"url":"https://www.linkedin.com/in/rteakin/","path":"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}}')},5559:function(n,e,t){"use strict";t("9b30")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("0cdd");var o=t("2b0e"),i=t("5f5b");t("ab8b"),t("2dd8");o["default"].use(i["a"]);var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("background-gl"),t("div",{attrs:{id:"ui"}},[t("top-header"),n.debug?t("info-overlay"):n._e(),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)],1)},a=[],c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"container"}})},r=[],l=(t("b680"),{debug:0,backgroundIsInteractive:!1,info:[],updateCallback:null,debugChangedCallback:null,set:function(n,e,t){this.info[n]=e+": "+t,null!=this.updateCallback&&this.updateCallback()},clear:function(){this.info=[]},setUpdateCallback:function(n){this.updateCallback=n},setDebugChangedCallback:function(n){this.debugChangedCallback=n},toggleDebug:function(){this.debug=!this.debug,this.debugChangedCallback&&this.debugChangedCallback()}}),u=l,h=t("e213"),d=t.n(h),p="precision mediump float;\nattribute vec2 position;\n\nvoid main()\n{\n    gl_Position = vec4( position, 0.0, 1.0 );\n}",f="precision mediump float;\n\nuniform vec2 uResolution;\nuniform float uTime;\nuniform vec3 uTouchPos;\nuniform float uTouchAnim;\nuniform float uInteractiveAnim;\nuniform int uCurrentShapeIndex;\nuniform vec2 uShapePositions[3];\n\nfloat sdCircle( in vec2 p, in float r ) \n{\n    return length(p)-r;\n}\n\nfloat ndot(vec2 a, vec2 b ) { return a.x*b.x - a.y*b.y; }\n\nfloat sdRhombus( in vec2 p, in vec2 b ) \n{\n    vec2 q = abs(p);\n    float h = clamp((-2.0*ndot(q,b)+ndot(b,b))/dot(b,b),-1.0,1.0);\n    float d = length( q - 0.5*b*vec2(1.0-h,1.0+h) );\n    return d * sign( q.x*b.y + q.y*b.x - b.x*b.y );\n}\n\nfloat sdPentagon( in vec2 p, in float r )\n{\n    const vec3 k = vec3(0.809016994,0.587785252,0.726542528); // pi/5: cos, sin, tan\n    p.y = -p.y;\n    p.x = abs(p.x);\n    p -= 2.0*min(dot(vec2(-k.x,k.y),p),0.0)*vec2(-k.x,k.y);\n    p -= 2.0*min(dot(vec2( k.x,k.y),p),0.0)*vec2( k.x,k.y);\n\tp -= vec2(clamp(p.x,-r*k.z,r*k.z),r);    \n    return length(p)*sign(p.y);\n}\n\nfloat msign(in float x) { return (x<0.0)?-1.0:1.0; }\n\n// note: both elements of ab cannot be the same or you will get nans\n// - see comments in https://www.shadertoy.com/view/4sS3zz\nfloat sdEllipse( vec2 p, in vec2 ab )\n{\n\tp = abs( p ); if( ab.x > ab.y ){ p=p.yx; ab=ab.yx; }\n\t\n\tfloat l = ab.y*ab.y - ab.x*ab.x;\n\t\n    float m = ab.x*p.x/l; \n\tfloat n = ab.y*p.y/l; \n\tfloat m2 = m*m;\n\tfloat n2 = n*n;\n\t\n    float c = (m2 + n2 - 1.0)/3.0; \n\tfloat c3 = c*c*c;\n\n    float q = c3 + m2*n2*2.0;\n    float d = c3 + m2*n2;\n    float g = m + m*n2;\n\n    float co;\n\n    if( d<0.0 )\n    {\n        float h = acos(q/c3)/3.0;\n        float s = cos(h);\n        float t = sin(h)*sqrt(3.0);\n        float rx = sqrt( -c*(s + t + 2.0) + m2 );\n        float ry = sqrt( -c*(s - t + 2.0) + m2 );\n        co = ( ry + sign(l)*rx + abs(g)/(rx*ry) - m)/2.0;\n    }\n    else\n    {\n        float h = 2.0*m*n*sqrt(d);\n        float s = msign(q+h)*pow( abs(q+h), 1.0/3.0 );\n        float u = msign(q-h)*pow( abs(q-h), 1.0/3.0 );\n        float rx = -s - u - c*4.0 + 2.0*m2;\n        float ry = (s - u)*sqrt(3.0);\n        float rm = sqrt( rx*rx + ry*ry );\n        co = (ry/sqrt(rm-rx) + 2.0*g/rm - m)/2.0;\n    }\n\n    float si = sqrt( max(1.0-co*co,0.0) );\n \n    vec2 r = ab * vec2(co,si);\n\t\n    return length(r-p) * msign(p.y-r.y);\n}\n\nfloat sdEllipsoidApproximated( in vec2 p, in vec2 r ) \n{\n    float k0 = length(p/r);\n    float k1 = length(p/(r*r));\n    return k0*(k0-1.0)/k1;\n}\n\n// -------------------------------------------------------------------\n// https://www.shadertoy.com/view/XttyWN\n\nfloat suv(vec2 a) { return a.x + a.y; }\n\n// closed-form solver(without special-case checks)from\n// https://www.shadertoy.com/view/XdKyRR\nvec4 solve_quartic(vec4 p) {\n  ;\n  float quadrant = sign(p.x),\n        s = p.w  // form resolvent cubic and solve it to obtain one real root\n      ,\n        j = p.x * p.z - 4. * p.w,\n        k = 4. * p.y * p.w - p.z * p.z - p.x * p.x * p.w,\n        b = (-2. * p.y * p.y * p.y + 9. * p.y * j + 27. * k) /\n            27.  // coefficients of normal form\n      ,\n        delta1 = b * b / 4., a = (3. * j - p.y * p.y) / 3.,\n        delta2 = a * a * a / 27., z1;\n  if (delta1 + delta2 < 0.)\n    z1 = 2. * sqrt(-a / 3.) * cos(acos(-sign(b) * sqrt(delta1 / -delta2)) / 3.);\n  else\n    z1 = suv(pow(abs(-.5 * b + vec2(1, -1) * sqrt(max(delta1 + delta2, 0.))),\n                 vec2(1. / 3.)))  // sum of 2 cubic roots\n        ;\n  z1 += p.y / 3.  // shift back from normal form to root of resolvent cubic\n      ;\n  float R2 =\n      p.x * p.x / 4. - p.y + z1  // form quartic roots from resolvent cubic root\n      ;\n  bool R_ok = (R2 >= 0.);\n  float R = sqrt(max(R2, 0.)), foo, bar;\n  if (R == 0.  // i do not call this elegant!\n  ) {\n    float z124s = z1 * z1 - 4. * p.w;\n    R_ok = R_ok && (z124s >= 0.);\n    foo = 3. * p.x * p.x / 4. - 2. * p.y;\n    bar = 2. * sqrt(max(z124s, 0.));\n  } else {\n    ;\n    foo = 3. * p.x * p.x / 4. - R2 - 2. * p.y;\n    bar = (4. * p.x * p.y - 8. * p.z - p.x * p.x * p.x) / (4. * R);\n  };\n  float D = sqrt(max(foo + bar, 0.)), E = sqrt(max(foo - bar, 0.));\n  vec4 roots = vec4(-p.x / 4.) + .5 * vec4(R + D, R - D, -R + E, -R - E);\n  roots = mix(roots, roots.xzyw,\n              step(sign(p.x), 0.))  // optional root sorting within homotopy\n      ;\n  return roots;\n}\n\nvec2 from_cos(float u) {\n  u = clamp(u, -1., 1.);\n  return vec2(u, sqrt(1. - u * u));\n}\n\n//float ellipse_dist(vec2 p, vec2 ab, out vec4 coeffs, out vec4 roots, out bool is_circle, out int k)\nfloat ellipse_dist(vec2 p, vec2 ab)\n{\n  float sig = sign(p.y);\n  p.y = abs(p.y);\n  vec2 ds = vec2(1e5, -1);  // signed distance\n  bool is_circle = abs((ab.x - ab.y) / ab.x) < 1e-2; // is important for precision reasons,is a useful BVH-shortcut.\n  vec4 coeffs, roots;\n  if (is_circle ) // near-circles are special quadratic case of a quartic ellipse\n  {\n    float dc = length(p) - ab.x;\n    float u = normalize(p).x;\n    roots = vec4(u, 0, 0, -u);\n    coeffs = vec4(0, 1, 0, -u * u);\n    ds = vec2(abs(dc), dc);\n  }\n  else {  // ellipse\n    // formulate quartic polynomial of ellipse. solve for position\n    // u=cos(theta)along ellipse so that the tangent at the point\n    // [a*u,b*sqrt(1-u^2)] is perpendicular to the displacement between p and the\n    // point itself this gets 2 or 4 solutions. we need to inspect each of them\n    // in the arc case\n    float l = ab.y * ab.y - ab.x * ab.x, ax = ab.x * p.x / l,\n          by = ab.y * p.y / l, a2x2 = ax * ax, b2y2 = by * by;\n    coeffs = vec4(2. * ax, (a2x2 + b2y2) - 1., -2. * ax,\n                  -a2x2)  // vector of polynomial coefficients\n        ;\n    roots = solve_quartic(coeffs)  // solve for up to 4 roots\n        ;\n    roots = mix(roots.xzyw, roots,\n                step(-sig, 0.))  // optional root sorting within homotopy,green\n                                 // always on top,disregarding u.y\n        ;\n    roots =\n        mix(roots, roots.xzyw,\n            step(ab.y, ab.x))  // optional root sorting within homotopy,green\n                               // always on top,disregarding ellypsoid/ratio.\n        ;\n    for (int i = 0; i < 4; ++i  // for each root\n    ) {\n      vec2 c =\n          ab * from_cos(roots[i])  // get absolute distance to the closest point\n                                   // on the ellipse,as well as its sign\n          ;\n      vec2 b = vec2(length(p - c), dot(p - c, c));\n      float s = sign(ds.x - b.x) * .5 + .5;\n      //k = k + i * int(s);\n      ds = mix(ds, b, s);\n    }\n  }\n  return ds.x * sign(ds.y);\n}\n// --------------------------------------------------\n\n// polynomial smooth min (k = 0.1);\nfloat smin( float a, float b, float k )\n{\n    float h = max( k-abs(a-b), 0.0 )/k;\n    return min( a, b ) - h*h*k*(1.0/4.0);\n}\n\nbool isnan( float val )\n{\n  return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;\n}\n\nvoid colorTouching( inout vec3 col, float d, float dN, int shapeIndex )\n{\n  vec3 centerColor = vec3( 0.02, 0.02, 0.05 );\n  // vec3 touchingColor = vec3( 0.4, 0.95, 0.85 ) * 1.2;\n  vec3 touchingColor = vec3(49, 255, 66) / 255.0;\n  if( dN < -0.005 ) {\n    if( uTouchAnim > 0.001 && uCurrentShapeIndex == shapeIndex ) {\n      float x = smoothstep( 0.0, 1.0, uTouchAnim );\n      x = mix( d, x, 0.5 );\n      vec3 ring = mix( col, touchingColor, smoothstep( -0.01, -0.025, dN ) - smoothstep( -0.025, -0.06, dN ) );\n      col = mix( col, ring, x );\n      centerColor = mix( centerColor, touchingColor, x );\n    }\n\n    // TODO: fix this for the mouth, it's not big enough there\n    col = mix( col, centerColor, smoothstep( -0.1, -0.22, dN ) );\n  }\n}\n\n#define PI 3.1415926538\n\nvoid main()\n{\n  vec2 p = ( 2.0 * gl_FragCoord.xy - uResolution ) / uResolution.y;\n\n  vec2 sp0 = uShapePositions[0];\n  vec2 sp1 = uShapePositions[1];\n  vec2 sp2 = uShapePositions[2];\n\n  // slightly move shapes to make them look like a face looking side to side\n  {\n    float t = uTime * 0.2;\n    sp0.x -= 0.12 * ( cos( t + PI ) * 0.5 + 0.5 );\n    sp0.y -= 0.05 * ( pow( cos( t + PI ) * 0.5 + 0.5, 2.0 ) );\n    sp1.x += 0.12 * ( cos( t ) * 0.5 + 0.5 );\n    sp1.y -= 0.05 * ( pow( cos( t ) * 0.5 + 0.5, 2.0 ) );\n    sp2.x -= 0.06 * cos( t );\n    sp2.y -= 0.02 * abs( sin( t ) );\n  }\n\n  // scale size based params based on pixel ratio, so it looks decent on both mobile and desktop\n  float sizeScale = 0.7;\n\n  float d = 10e6;\n  float d0 = d;\n  float d1 = d;\n  float d2 = d;\n\n  // left eye\n  {\n    float blink = min( 1.0, mod( uTime, 6.3 ) ); // blink = 0 means eye is open, 1 means eye is shut\n    blink *= min( 1.0, mod( uTime, 7.1 ) ); // second blink\n    blink = smoothstep( 0.0, 0.11, blink ) - smoothstep( 0.17, 0.5, blink ); // shaping the mod\n    blink += 0.06 * ( cos( uTime * 2.0 ) * 0.5 + 0.5 );\n\n    // Trying various things for ellipse blinding (might just use another shape)\n\n    // iq version, but has nans along the axes of symmetry (and everywhere for perfect circle)\n    // d = sdEllipse( p - sp0, sizeScale * vec2( 0.31, 0.1 + 0.2 * blink ) );\n\n    // iq's approx version - no artifact, but blink turns into 2 eye pupils\n    //   - could maybe overcome that by using actual eyeballs and ignoring the center of the sdf\n    // d0 = sdEllipsoidApproximated( p - sp0, sizeScale * vec2( 0.29, 0.28 - 0.2 * blink ) );\n    // crazy version I found in the comments for iq's version\n    // - still an artifact, but much improved\n    // d = ellipse_dist( p - sp0, sizeScale * vec2( 0.31, 0.27 - 0.2 * blink ) );\n\n    // left eye is also a rhumbus\n    d0 = sdRhombus( p - sp0, sizeScale * vec2( 0.5, 0.27 - 0.2 * blink ) );\n\n    d = d0;\n  }\n\n  // right eye\n  {\n    float blink = min( 1.0, mod( uTime + 13.1, 6.51 ) ); // blink = 0 means eye is open, 1 means eye is shut\n    blink *= min( 1.0, mod( uTime + 5.1, 6.9 ) ); // second blink\n    blink = smoothstep( 0.0, 0.11, blink ) - smoothstep( 0.17, 0.5, blink ); // shaping the mod\n    blink += 0.06 * ( cos( uTime * 2.0 ) * 0.5 + 0.5 );\n    d1 = sdRhombus( p - sp1, sizeScale * vec2( 0.5, 0.27 - 0.2 * blink ) );\n\n    d = smin( d, d1, 0.3 );\n\n  }\n\n  // mouth\n  // float openMouth = 1.0 - 0.2 * pow( min( 0.1 + ( sin( uTime + 123.45 ) * 0.5 + 0.5 ), 1.0 ), 5.0 );\n  float openMouth = min( 1.0, mod( uTime, 3.1 ) );\n  float stayOpen = 0.2 * ( cos( uTime * 0.2 ) * 0.5 + 0.5 );\n  openMouth = smoothstep( 0.0, 0.33, openMouth ) - smoothstep( 0.4 + stayOpen, 0.75 + stayOpen, openMouth );\n  d2 = sdPentagon( p - sp2, sizeScale * ( 0.2 + 0.03 * openMouth ) );\n\n  float nose = sdCircle( p - sp2 - vec2( 0.0, 0.2 ), sizeScale * 0.03 );\n  d2 = smin( d2, nose, 0.13 );\n\n  d = smin( d, d2, 0.4 );\n\n\n  // Debugging positions using circles\n#if 0\n  float ssize = 0.2;\n  d = sdCircle( p, 0.05 );\n  d = smin( d, sdCircle( p - sp0, ssize ), 0.1 );\n  d = smin( d, sdCircle( p - sp1, ssize ), 0.1 );\n  d = smin( d, sdCircle( p - sp2, ssize ), 0.1 );\n  // d = sdCircle( p - vec2( 0.4, 0.3 ), ssize );\n  // d = smin( d, sdCircle( p - vec2( -0.4, 0.3 ), ssize ), 0.1 );\n  // d = smin( d, sdCircle( p - vec2( 0.0, -0.3 ), ssize ), 0.1 );\n#endif\n\n  // coloring\n  vec3 col = vec3( 0 );\n  col = vec3( 1.0 ) - sign( d ) * vec3( 0.1 ); // white inside, darker outside\n  col *= 1.0 - exp( -2.0 * abs( d ) ); // shadow at border\n\n  col = vec3( 1.0 ) - col;\n\n  // df stripes\n  // col *= 0.8 + 0.2 * cos( 80.0 * d );\n  // col =  mix( col, vec3( 0.2 ), ( cos( 80.0 * d ) * 0.5 + 0.5 ) * 0.4 );\n\n\n  // little experiment with moving the stripes based on time\n  // if( d > 0.0 ) {\n  //   d = mix( d, mod( - uTime, -10.0 ), d );\n  // }\n\n  // TODO: make stripes more interesting here, with a pulse\n  // - can tie pulses to animation values?\n  // - would like something along the lines of the commented out line, but have the rings pulsing \n  vec3 stripes = vec3( 1.0 ) * 0.8 + 0.2 * cos( 80.0 * d );\n  stripes =  mix( stripes, vec3( 0.2 ), ( cos( 80.0 * d ) * 0.5 + 0.5 ) * 0.4 );\n  col *= stripes;\n  // col *= mix( stripes, vec3( 1.0 ), ( cos( uTime + 10.0 + sin( uTime * 0.3 ) ) * 0.5 + 0.5 ) );\n\n  float pulseSpeed = mix( 1.0, 1.5, uTouchAnim );\n\n  col *= mix( stripes, vec3( 1.0 ), ( cos( uTime * 1.0 - d * 13.0 * pulseSpeed ) * 0.5 + 0.5 ) );\n\n  // white line on borders\n  vec3 borderColor = vec3( 0.9, 1.0, 0.9 ) * 0.85;\n\n  col = mix( col, borderColor, 1.0 - smoothstep( 0.0, 0.01, abs( d ) ) );\n\n  // if( d.y == 0.0 ) {\n  //   borderColor = vec3( 1.0, 0.0, 0.0 );\n  // }\n\n  // some visual feedback when user is interacting\n  colorTouching( col, d, d0, 0 );\n  colorTouching( col, d, d1, 1 );\n  colorTouching( col, d, d2, 2 );\n\n  // color shift based on time\n  col.r -= cos( d * 2.5 - uTime ) * 0.2 + 0.2;\n  col.g -= cos( d * 2.1 - uTime ) * 0.1 + 0.1;\n  col.b -= cos( d * 2.7 - uTime ) * 0.05 + 0.05;\n\n  // fade out from shape border to far distant\n  col = mix( col, vec3( 0.08 ), clamp( d, 0.0, 1.0 ) );\n\n  // fade out when turned non-interactive\n  {\n    float x = smoothstep( 0.0, 1.0, uInteractiveAnim );\n      col *= ( 0.6 + x * 0.4 );\n  }\n\n  gl_FragColor = vec4( col, 1.0 );\n}",m=0,v=1,b=0;function g(n){return null==n?"null":n[0].toFixed(3)+", "+n[1].toFixed(3)}function x(n,e){d.a.mul(n,n,d.a.fromValues(2,2)),d.a.subtract(n,n,e),d.a.divide(n,n,d.a.fromValues(e[1],e[1]))}var k={name:"BackgroundRectGL",data:function(){return{resolution:null,isTouching:!1,touchPos:null,touchDownPos:null,touchAnim:0,interactiveAnim:0,closestShapeStartPos:null,shapePositions:[],currentShapeIndex:-1,regl:null}},mounted:function(){u.clear(),this.initRegl(),this.initShapePositions(),console.log("adding listeners"),window.addEventListener("resize",this.onResize),window.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchstart",this.onTouchStart),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),window.addEventListener("touchcancel",this.onTouchCancel)},beforeDestroy:function(){console.log("removing listeners"),window.removeEventListener("resize",this.onResize),window.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),window.removeEventListener("touchcancel",this.onTouchCancel)},methods:{initRegl:function(){var n=this,e=document.getElementById("container"),o=[];if(m&&o.push("EXT_disjoint_timer_query"),this.regl=t("7dbb")({container:e,optionalExtensions:o}),m){var i=this.regl.hasExtension("EXT_disjoint_timer_query");console.log("has timerQuery: "+i),u.set(0,"hasTimerQuery",i)}this.setResolution(e.clientWidth,e.clientHeight),console.log("(init) container resolution: "+this.resolution);var s=this.regl({profile:m,vert:p,frag:f,attributes:{position:[-1,-1,1,-1,1,1,1,1,-1,1,-1,-1]},uniforms:{uTime:function(n){var e=n.time;return e},uResolution:function(){return n.resolution},uTouchAnim:function(){return n.touchAnim},uInteractiveAnim:function(){return n.interactiveAnim},uCurrentShapeIndex:function(){return n.currentShapeIndex},"uShapePositions[0]":function(){return n.shapePositions[0]},"uShapePositions[1]":function(){return n.shapePositions[1]},"uShapePositions[2]":function(){return n.shapePositions[2]}},depth:{enable:!1},count:6}),a=0,c=0,r=this.regl.frame((function(e){try{if(v?n.debugShowResolutions(e):b?n.debugShowShapePositions():u.set(0,"time",e.time.toFixed(4)),n.isTouching?n.touchAnim=Math.min(1,n.touchAnim+5/60):n.touchAnim=Math.max(0,n.touchAnim-2/60),u.backgroundIsInteractive?n.interactiveAnim=Math.min(1,n.interactiveAnim+5/60):n.interactiveAnim=Math.max(0,n.interactiveAnim-2/60),n.regl.clear({color:[0,0,0,1]}),s(),m){var t=s.stats.cpuTime-a;a=s.stats.cpuTime,u.set(1,"cpu",t.toFixed(4));var o=s.stats.gpuTime-c;c=s.stats.gpuTime,u.set(2,"gpu",o.toFixed(4))}}catch(i){throw r.cancel(),i}}))},uninit:function(){},onResize:function(){var n=document.getElementById("container");this.setResolution(n.clientWidth,n.clientHeight),this.initShapePositions()},onMouseDown:function(n){u.backgroundIsInteractive&&(this.isTouching=!0,this.setTouchPosFromMouse(n.offsetX,n.offsetY),this.touchDownPos=d.a.clone(this.touchPos),this.pickClosestShape(),this.moveClosestShape())},onMouseMove:function(n){u.backgroundIsInteractive&&this.isTouching&&(this.setTouchPosFromMouse(n.offsetX,n.offsetY),this.moveClosestShape())},onMouseUp:function(n){u.backgroundIsInteractive&&(this.isTouching=!1,this.setTouchPosFromMouse(n.offsetX,n.offsetY))},onTouchStart:function(n){u.backgroundIsInteractive&&(this.isTouching=!0,this.setTouchPos(n.touches),this.touchDownPos=d.a.clone(this.touchPos),this.pickClosestShape(),this.moveClosestShape())},onTouchMove:function(n){u.backgroundIsInteractive&&(this.setTouchPos(n.touches),this.moveClosestShape())},onTouchEnd:function(n){u.backgroundIsInteractive&&(this.isTouching=!1,this.setTouchPos(n.touches))},onTouchCancel:function(n){u.backgroundIsInteractive&&(this.isTouching=!1,this.setTouchPos(n.touches))},setTouchPosFromMouse:function(n,e){var t=window.devicePixelRatio;this.touchPos=d.a.fromValues(n*t,this.resolution[1]-e*t)},setTouchPos:function(n){if(0!=n.length){var e=n.item(0),t=window.devicePixelRatio;this.touchPos=d.a.fromValues(e.clientX*t,this.resolution[1]-e.clientY*t)}else console.log("empty touches")},setResolution:function(n,e){var t=window.devicePixelRatio;this.resolution=d.a.fromValues(n*t,e*t)},initShapePositions:function(){window.devicePixelRatio;this.shapePositions=[d.a.fromValues(-.35,.2),d.a.fromValues(.35,.2),d.a.fromValues(0,-.28)]},pickClosestShape:function(){var n=d.a.fromValues(this.touchPos[0],this.touchPos[1]);x(n,this.resolution);for(var e=-1,t=1e7,o=.2,i=0;i<this.shapePositions.length;i++){var s=this.shapePositions[i],a=d.a.distance(n,s);a<o&&a<t&&(e=i,t=a)}e>=0?(console.log("closest: "+e),this.currentShapeIndex=e,this.closestShapeStartPos=d.a.clone(this.shapePositions[this.currentShapeIndex])):this.currentShapeIndex=-1},moveClosestShape:function(){if(this.currentShapeIndex>=0){var n=d.a.fromValues(this.touchPos[0],this.touchPos[1]);x(n,this.resolution);var e=d.a.fromValues(this.touchDownPos[0],this.touchDownPos[1]);x(e,this.resolution);var t=d.a.subtract(d.a.create(),n,e);d.a.add(this.shapePositions[this.currentShapeIndex],this.closestShapeStartPos,t)}},debugShowResolutions:function(n){var e=document.getElementById("container");u.set(0,"viewport size",[n.viewportWidth,n.viewportHeight]),u.set(1,"container size",[e.clientWidth,e.clientHeight]),u.set(2,"resolution",this.resolution),u.set(3,"pixel ratio",window.devicePixelRatio),u.set(4,"window inner size",[window.innerWidth,window.innerHeight]),u.set(5,"interactive",this.interactiveAnim)},debugShowShapePositions:function(){u.set(0,"touch",g(this.touchPos)),u.set(1,"s0",this.shapePositions[0][0].toFixed(2)+", "+this.shapePositions[0][1].toFixed(2)),u.set(2,"s1",this.shapePositions[1][0].toFixed(2)+", "+this.shapePositions[1][1].toFixed(2)),u.set(3,"s2",this.shapePositions[2][0].toFixed(2)+", "+this.shapePositions[2][1].toFixed(2)),u.set(4,"touching",this.isTouching),u.set(5,"shape index",this.currentShapeIndex),u.set(6,"touch anim",this.touchAnim)}}},y=k,w=(t("a3b4"),t("2877")),P=Object(w["a"])(y,c,r,!1,null,"0cffa436",null),C=P.exports,T=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"nav"}},[t("b-navbar",{staticClass:"rte-nav",attrs:{toggleable:"md",type:"dark",variant:"dark"}},[t("b-navbar-brand",{staticClass:"logo",attrs:{href:"#"},nativeOn:{click:function(e){return n.onLogoClicked(e)}}},[n._v("Richard Eakin")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item",{attrs:{to:"/"}},[n._v("Home")]),t("b-nav-item",{attrs:{to:"/projects"}},[n._v("Projects")]),t("b-nav-item",{attrs:{href:"rte_resume.pdf"}},[n._v("Resume")])],1)],1)],1)],1)},S=[],z={methods:{onLogoClicked:function(n){u.toggleDebug()}}},_=z,I=(t("8cd7"),Object(w["a"])(_,T,S,!1,null,"e0d79d9a",null)),E=I.exports,q=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"info"}},n._l(n.infoList,(function(e,o){return t("p",{key:e,staticClass:"infoItem"},[n._v("["+n._s(o)+"] "+n._s(e))])})),0)},M=[],j=(t("fb6a"),{name:"InfoOverlay",data:function(){return{infoList:[]}},methods:{onDataUpdated:function(){this.infoList=u.info.slice(0)}},beforeMount:function(){u.setUpdateCallback(this.onDataUpdated)},mounted:function(){}}),R=j,A=(t("5559"),Object(w["a"])(R,q,M,!1,null,"ac386032",null)),L=A.exports,O={components:{"top-header":E,"info-overlay":L,"background-gl":C},data:function(){return{debug:0}},beforeMount:function(){var n=this;this.debug=u.debug,u.setDebugChangedCallback((function(){n.debug=u.debug}))}},D=O,N=(t("5c0b"),Object(w["a"])(D,s,a,!1,null,null,null)),F=N.exports,V=(t("d3b7"),t("8c4f")),H=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"home"},[t("h2",{staticClass:"spiel"},[n._v(" Creative software programmer observing Earth ")]),t("div",{staticClass:"social"},n._l(n.socialLinks,(function(n){return t("SvgIcon",{key:n,attrs:{name:n,"icon-name":n,width:"36",height:"36"}})})),1)])},B=[],U=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a",{attrs:{href:n.url(),target:"_blank"}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:n.width,height:n.height,viewBox:"0 0 24 24","aria-labelledby":n.iconName,role:"presentation"}},[t("title",{attrs:{id:n.iconName,lang:"en"}},[n._v(n._s(n.iconName)+" icon")]),t("g",{attrs:{fill:n.iconColor}},[t("path",{attrs:{d:n.svgPath()}})])])])},X=[],W=(t("a9e3"),t("5056")),$={name:"SvgIcon",props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:24},height:{type:[Number,String],default:24},iconColor:{type:String,default:"currentColor"}},data:function(){return{}},methods:{getIcon:function(){return W[this.iconName in W?this.iconName:"questionMark"]},svgPath:function(){return this.getIcon().path},url:function(){var n=this.getIcon();"url"in n&&n["url"];return"url"in n?n["url"]:""}}},Y=$,J=(t("756c"),Object(w["a"])(Y,U,X,!1,null,"3729a1f1",null)),K=J.exports,G={name:"Home",components:{SvgIcon:K},data:function(){return{socialLinks:["vimeo","github","twitter","linkedin","email"]}},mounted:function(){u.backgroundIsInteractive=!0,document.body.style.overflow="hidden",console.log("Home mounted")},beforeDestroy:function(){u.backgroundIsInteractive=!1,document.body.style.overflow="visible",console.log("Home destroyed")}},Q=G,Z=(t("21bb"),t("3bd4"),Object(w["a"])(Q,H,B,!1,null,"57ca881e",null)),nn=Z.exports;o["default"].use(V["a"]);var en=[{path:"/",name:"Home",component:nn},{path:"/projects",name:"Projects",component:function(){return t.e("chunk-d4083f90").then(t.bind(null,"acca"))}},{path:"/projects/kelproom",name:"KelpProject",component:function(){return t.e("chunk-2e9f79c2").then(t.bind(null,"7a52"))}},{path:"/projects/flowparticles",name:"FlowParticles",component:function(){return t.e("chunk-72427460").then(t.bind(null,"6e4c"))}},{path:"/projects/connections-wall",name:"ConnectionsWallProject",component:function(){return t.e("chunk-78d508e8").then(t.bind(null,"bf64"))}},{path:"/projects/intel-tunnel",name:"IntelTunnelProject",component:function(){return t.e("chunk-609ff1c5").then(t.bind(null,"9d60"))}},{path:"/projects/cinder-audio",name:"CinderAudioProject",component:function(){return t.e("chunk-bb2b758a").then(t.bind(null,"4fe8"))}},{path:"/projects/glimpse",name:"GlimpseProject",component:function(){return t.e("chunk-eb8dacae").then(t.bind(null,"c8ea"))}},{path:"/projects/centerstage",name:"CenterstageProject",component:function(){return t.e("chunk-1615aa74").then(t.bind(null,"8cee"))}},{path:"/projects/cinder-view",name:"CinderViewProject",component:function(){return t.e("chunk-984c1368").then(t.bind(null,"b817"))}}],tn=new V["a"]({mode:"history",base:"/",routes:en}),on=tn,sn=t("2f62");o["default"].use(sn["a"]);var an=new sn["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["default"].config.productionTip=!1,new o["default"]({router:on,store:an,render:function(n){return n(F)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";t("9c0c")},"756c":function(n,e,t){"use strict";t("f148")},"8cd7":function(n,e,t){"use strict";t("91ef")},"91ef":function(n,e,t){},"9b30":function(n,e,t){},"9c0c":function(n,e,t){},a3b4:function(n,e,t){"use strict";t("21f5")},f148:function(n,e,t){}});
//# sourceMappingURL=app.37988f15.js.map