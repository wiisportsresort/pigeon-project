import"./NotFound.svelte.css.proxy.js";import{SvelteComponent as s,add_render_callback as i,attr as c,create_in_transition as l,detach as d,element as p,init as f,insert as m,noop as r,safe_not_equal as u}from"../../_snowpack/pkg/svelte/internal.js";import{fade as h}from"../../_snowpack/pkg/svelte/transition.js";function _(o){let t,n;return{c(){t=p("div"),t.innerHTML=`<section class="svelte-1g9hwfx"><h2>Not Found</h2> 
    <h3>Nice job, <a href="#/">return to home</a>?</h3></section>`,c(t,"class","svelte-1g9hwfx")},m(e,a){m(e,t,a)},p:r,i(e){n||i(()=>{n=l(t,h,{duration:100}),n.start()})},o:r,d(e){e&&d(t)}}}function v(o,t,n){let{params:e}=t;return o.$$set=a=>{"params"in a&&n(0,e=a.params)},[e]}class x extends s{constructor(t){super();f(this,t,v,_,u,{params:0})}}export default x;