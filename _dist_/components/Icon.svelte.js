import{HtmlTag as a,SvelteComponent as f,detach as m,empty as l,init as u,insert as h,noop as s,safe_not_equal as _}from"../../_snowpack/pkg/svelte/internal.js";import{icons as g}from"../../_snowpack/pkg/feather-icons.js";function p(o){let n,e;return{c(){e=l(),n=new a(e)},m(t,i){n.m(o[0],t,i),h(t,e,i)},p(t,[i]){i&1&&n.p(t[0])},i:s,o:s,d(t){t&&m(e),t&&n.d()}}}function d(o,n,e){let{icon:t}=n,{attrs:i={width:18,height:18}}=n,r;return o.$$set=c=>{"icon"in c&&e(1,t=c.icon),"attrs"in c&&e(2,i=c.attrs)},o.$$.update=()=>{if(o.$$.dirty&6){t:e(0,r=t?g[t].toSvg(i):"")}},[r,t,i]}class k extends f{constructor(n){super();u(this,n,d,p,_,{icon:1,attrs:2})}}export default k;
