import"./IconButton.css.proxy.js";import{SvelteComponent as u,attr as l,create_component as f,destroy_component as a,detach as m,element as h,init as _,insert as g,mount_component as z,safe_not_equal as d,transition_in as w,transition_out as S}from"../../web_modules/svelte/internal.js";import b from"./Icon.js";function j(o){let e,i,c,s;return i=new b({props:{icon:o[1],attrs:{width:o[2],height:o[2]}}}),{c(){e=h("button"),f(i.$$.fragment),l(e,"style",c=`width: ${o[0]}px; height: ${o[0]}px;`),l(e,"class","svelte-1jxidni")},m(t,n){g(t,e,n),z(i,e,null),s=!0},p(t,[n]){const r={};n&2&&(r.icon=t[1]),n&4&&(r.attrs={width:t[2],height:t[2]}),i.$set(r),(!s||n&1&&c!==(c=`width: ${t[0]}px; height: ${t[0]}px;`))&&l(e,"style",c)},i(t){s||(w(i.$$.fragment,t),s=!0)},o(t){S(i.$$.fragment,t),s=!1},d(t){t&&m(e),a(i)}}}function I(o,e,i){let{size:c=40}=e,{icon:s}=e,{iconSize:t=18}=e;return o.$$set=n=>{"size"in n&&i(0,c=n.size),"icon"in n&&i(1,s=n.icon),"iconSize"in n&&i(2,t=n.iconSize)},[c,s,t]}class p extends u{constructor(e){super();_(this,e,I,j,d,{size:0,icon:1,iconSize:2})}}export default p;
