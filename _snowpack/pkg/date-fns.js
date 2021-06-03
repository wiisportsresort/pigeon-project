import{r as m,t as g}from"./common/index-d52892f5.js";function l(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function R(e,t){m(2,arguments);var r=g(e).getTime(),a=l(t);return new Date(r+a)}function X(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function _(e){m(1,arguments);var t=g(e);return!isNaN(t)}var P={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function G(e,t,r){r=r||{};var a;return typeof P[e]=="string"?a=P[e]:t===1?a=P[e].one:a=P[e].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"in "+a:a+" ago":a}function x(e){return function(t){var r=t||{},a=r.width?String(r.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}}var I={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},A={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},B={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},j={date:x({formats:I,defaultWidth:"full"}),time:x({formats:A,defaultWidth:"full"}),dateTime:x({formats:B,defaultWidth:"full"})},V={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function J(e,t,r,a){return V[e]}function C(e){return function(t,r){var a=r||{},n=a.context?String(a.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,d=a.width?String(a.width):u;i=e.formattingValues[d]||e.formattingValues[u]}else{var s=e.defaultWidth,c=a.width?String(a.width):e.defaultWidth;i=e.values[c]||e.values[s]}var f=e.argumentCallback?e.argumentCallback(t):t;return i[f]}}var K={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},z={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Z={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ee={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},te={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};function re(e,t){var r=Number(e),a=r%100;if(a>20||a<10)switch(a%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"}var ae={ordinalNumber:re,era:C({values:K,defaultWidth:"wide"}),quarter:C({values:$,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:C({values:z,defaultWidth:"wide"}),day:C({values:Z,defaultWidth:"wide"}),dayPeriod:C({values:ee,defaultWidth:"wide",formattingValues:te,defaultFormattingWidth:"wide"})};function ne(e){return function(t,r){var a=String(t),n=r||{},i=a.match(e.matchPattern);if(!i)return null;var u=i[0],d=a.match(e.parsePattern);if(!d)return null;var s=e.valueCallback?e.valueCallback(d[0]):d[0];return s=n.valueCallback?n.valueCallback(s):s,{value:s,rest:a.slice(u.length)}}}function M(e){return function(t,r){var a=String(t),n=r||{},i=n.width,u=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=a.match(u);if(!d)return null;var s=d[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],f;return Object.prototype.toString.call(c)==="[object Array]"?f=oe(c,function(v){return v.test(s)}):f=ie(c,function(v){return v.test(s)}),f=e.valueCallback?e.valueCallback(f):f,f=n.valueCallback?n.valueCallback(f):f,{value:f,rest:a.slice(s.length)}}}function ie(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}function oe(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return r}var ue=/^(\d+)(th|st|nd|rd)?/i,se=/\d+/i,de={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ce={any:[/^b/i,/^(a|c)/i]},fe={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},he={any:[/1/i,/2/i,/3/i,/4/i]},me={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},le={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ve={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ge={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},we={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ye={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},be={ordinalNumber:ne({matchPattern:ue,parsePattern:se,valueCallback:function(e){return parseInt(e,10)}}),era:M({matchPatterns:de,defaultMatchWidth:"wide",parsePatterns:ce,defaultParseWidth:"any"}),quarter:M({matchPatterns:fe,defaultMatchWidth:"wide",parsePatterns:he,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:M({matchPatterns:me,defaultMatchWidth:"wide",parsePatterns:le,defaultParseWidth:"any"}),day:M({matchPatterns:ve,defaultMatchWidth:"wide",parsePatterns:ge,defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:we,defaultMatchWidth:"any",parsePatterns:ye,defaultParseWidth:"any"})},Te={code:"en-US",formatDistance:G,formatLong:j,formatRelative:J,localize:ae,match:be,options:{weekStartsOn:0,firstWeekContainsDate:1}};function pe(e,t){m(2,arguments);var r=l(t);return R(e,-r)}function o(e,t){for(var r=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return r+a}var y={y:function(e,t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return o(t==="yy"?a%100:a,t.length)},M:function(e,t){var r=e.getUTCMonth();return t==="M"?String(r+1):o(r+1,2)},d:function(e,t){return o(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,t){return o(e.getUTCHours()%12||12,t.length)},H:function(e,t){return o(e.getUTCHours(),t.length)},m:function(e,t){return o(e.getUTCMinutes(),t.length)},s:function(e,t){return o(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,a=e.getUTCMilliseconds(),n=Math.floor(a*Math.pow(10,r-3));return o(n,t.length)}},Ce=864e5;function Me(e){m(1,arguments);var t=g(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=r-a;return Math.floor(n/Ce)+1}function W(e){m(1,arguments);var t=1,r=g(e),a=r.getUTCDay(),n=(a<t?7:0)+a-t;return r.setUTCDate(r.getUTCDate()-n),r.setUTCHours(0,0,0,0),r}function S(e){m(1,arguments);var t=g(e),r=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var n=W(a),i=new Date(0);i.setUTCFullYear(r,0,4),i.setUTCHours(0,0,0,0);var u=W(i);return t.getTime()>=n.getTime()?r+1:t.getTime()>=u.getTime()?r:r-1}function De(e){m(1,arguments);var t=S(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var a=W(r);return a}var Pe=6048e5;function We(e){m(1,arguments);var t=g(e),r=W(t).getTime()-De(t).getTime();return Math.round(r/Pe)+1}function O(e,t){m(1,arguments);var r=t||{},a=r.locale,n=a&&a.options&&a.options.weekStartsOn,i=n==null?0:l(n),u=r.weekStartsOn==null?i:l(r.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=g(e),s=d.getUTCDay(),c=(s<u?7:0)+s-u;return d.setUTCDate(d.getUTCDate()-c),d.setUTCHours(0,0,0,0),d}function U(e,t){m(1,arguments);var r=g(e,t),a=r.getUTCFullYear(),n=t||{},i=n.locale,u=i&&i.options&&i.options.firstWeekContainsDate,d=u==null?1:l(u),s=n.firstWeekContainsDate==null?d:l(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(a+1,0,s),c.setUTCHours(0,0,0,0);var f=O(c,t),v=new Date(0);v.setUTCFullYear(a,0,s),v.setUTCHours(0,0,0,0);var T=O(v,t);return r.getTime()>=f.getTime()?a+1:r.getTime()>=T.getTime()?a:a-1}function Oe(e,t){m(1,arguments);var r=t||{},a=r.locale,n=a&&a.options&&a.options.firstWeekContainsDate,i=n==null?1:l(n),u=r.firstWeekContainsDate==null?i:l(r.firstWeekContainsDate),d=U(e,t),s=new Date(0);s.setUTCFullYear(d,0,u),s.setUTCHours(0,0,0,0);var c=O(s,t);return c}var xe=6048e5;function ke(e,t){m(1,arguments);var r=g(e),a=O(r,t).getTime()-Oe(r,t).getTime();return Math.round(a/xe)+1}var p={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Se={G:function(e,t,r){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){var a=e.getUTCFullYear(),n=a>0?a:1-a;return r.ordinalNumber(n,{unit:"year"})}return y.y(e,t)},Y:function(e,t,r,a){var n=U(e,a),i=n>0?n:1-n;if(t==="YY"){var u=i%100;return o(u,2)}return t==="Yo"?r.ordinalNumber(i,{unit:"year"}):o(i,t.length)},R:function(e,t){var r=S(e);return o(r,t.length)},u:function(e,t){var r=e.getUTCFullYear();return o(r,t.length)},Q:function(e,t,r){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return o(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,r){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return o(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,r){var a=e.getUTCMonth();switch(t){case"M":case"MM":return y.M(e,t);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,r){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return o(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,r,a){var n=ke(e,a);return t==="wo"?r.ordinalNumber(n,{unit:"week"}):o(n,t.length)},I:function(e,t,r){var a=We(e);return t==="Io"?r.ordinalNumber(a,{unit:"week"}):o(a,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):y.d(e,t)},D:function(e,t,r){var a=Me(e);return t==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):o(a,t.length)},E:function(e,t,r){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,r,a){var n=e.getUTCDay(),i=(n-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return o(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})}},c:function(e,t,r,a){var n=e.getUTCDay(),i=(n-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return o(i,t.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})}},i:function(e,t,r){var a=e.getUTCDay(),n=a===0?7:a;switch(t){case"i":return String(n);case"ii":return o(n,t.length);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,r){var a=e.getUTCHours(),n=a/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,r){var a=e.getUTCHours(),n;switch(a===12?n=p.noon:a===0?n=p.midnight:n=a/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,r){var a=e.getUTCHours(),n;switch(a>=17?n=p.evening:a>=12?n=p.afternoon:a>=4?n=p.morning:n=p.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){var a=e.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return y.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):y.H(e,t)},K:function(e,t,r){var a=e.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(a,{unit:"hour"}):o(a,t.length)},k:function(e,t,r){var a=e.getUTCHours();return a===0&&(a=24),t==="ko"?r.ordinalNumber(a,{unit:"hour"}):o(a,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):y.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):y.s(e,t)},S:function(e,t){return y.S(e,t)},X:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return E(i);case"XXXX":case"XX":return b(i);case"XXXXX":case"XXX":default:return b(i,":")}},x:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"x":return E(i);case"xxxx":case"xx":return b(i);case"xxxxx":case"xxx":default:return b(i,":")}},O:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Y(i,":");case"OOOO":default:return"GMT"+b(i,":")}},z:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Y(i,":");case"zzzz":default:return"GMT"+b(i,":")}},t:function(e,t,r,a){var n=a._originalDate||e,i=Math.floor(n.getTime()/1e3);return o(i,t.length)},T:function(e,t,r,a){var n=a._originalDate||e,i=n.getTime();return o(i,t.length)}};function Y(e,t){var r=e>0?"-":"+",a=Math.abs(e),n=Math.floor(a/60),i=a%60;if(i===0)return r+String(n);var u=t||"";return r+String(n)+u+o(i,2)}function E(e,t){if(e%60==0){var r=e>0?"-":"+";return r+o(Math.abs(e)/60,2)}return b(e,t)}function b(e,t){var r=t||"",a=e>0?"-":"+",n=Math.abs(e),i=o(Math.floor(n/60),2),u=o(n%60,2);return a+i+r+u}function F(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function N(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function Ue(e,t){var r=e.match(/(P+)(p+)?/),a=r[1],n=r[2];if(!n)return F(e,t);var i;switch(a){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",F(a,t)).replace("{{time}}",N(n,t))}var Ye={p:N,P:Ue},Ee=["D","DD"],Fe=["YY","YYYY"];function Ne(e){return Ee.indexOf(e)!==-1}function qe(e){return Fe.indexOf(e)!==-1}function q(e,t,r){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"))}var Le=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,He=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Qe=/^'([^]*?)'?$/,Re=/''/g,Xe=/[a-zA-Z]/;function _e(e,t,r){m(2,arguments);var a=String(t),n=r||{},i=n.locale||Te,u=i.options&&i.options.firstWeekContainsDate,d=u==null?1:l(u),s=n.firstWeekContainsDate==null?d:l(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,f=c==null?0:l(c),v=n.weekStartsOn==null?f:l(n.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var T=g(e);if(!_(T))throw new RangeError("Invalid time value");var L=X(T),H=pe(T,L),k={firstWeekContainsDate:s,weekStartsOn:v,locale:i,_originalDate:T},Q=a.match(He).map(function(h){var w=h[0];if(w==="p"||w==="P"){var D=Ye[w];return D(h,i.formatLong,k)}return h}).join("").match(Le).map(function(h){if(h==="''")return"'";var w=h[0];if(w==="'")return Ge(h);var D=Se[w];if(D)return!n.useAdditionalWeekYearTokens&&qe(h)&&q(h,t,e),!n.useAdditionalDayOfYearTokens&&Ne(h)&&q(h,t,e),D(H,h,i.localize,k);if(w.match(Xe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return h}).join("");return Q}function Ge(e){return e.match(Qe)[1].replace(Re,"'")}export{_e as format};