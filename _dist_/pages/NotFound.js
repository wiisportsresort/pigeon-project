import"./NotFound.css.proxy.js";import{SvelteComponent as a,add_render_callback as i,attr as l,create_in_transition as c,detach as d,element as m,init as u,insert as f,noop as s,safe_not_equal as p}from"../../web_modules/svelte/internal.js";import{fade as h}from"../../web_modules/svelte/transition.js";function _(r){let t,n;return{c(){t=m("div"),t.innerHTML=`<section class="svelte-1g9hwfx"><h2>Not Found</h2> 
    <h3>Nice job, <a href="#/">return to home</a>?</h3></section>`,l(t,"class","svelte-1g9hwfx")},m(e,o){f(e,t,o)},p:s,i(e){n||i(()=>{n=c(t,h,{duration:100}),n.start()})},o:s,d(e){e&&d(t)}}}function v(r,t,n){let{params:e}=t;return r.$$set=o=>{"params"in o&&n(0,e=o.params)},[e]}class x extends a{constructor(t){super();u(this,t,v,_,p,{params:0})}}export default x;