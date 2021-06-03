import"./Followers.svelte.css.proxy.js";import{SvelteComponent as O,add_render_callback as P,append as p,attr as N,check_outros as I,create_component as D,create_in_transition as Q,destroy_component as E,destroy_each as R,detach as y,element as b,empty as G,group_outros as S,init as T,insert as j,listen as V,mount_component as H,noop as $,safe_not_equal as W,set_data as J,space as K,text as z,transition_in as h,transition_out as g}from"../../_snowpack/pkg/svelte/internal.js";import{pop as X}from"../../_snowpack/pkg/svelte-spa-router.js";import{fade as Y}from"../../_snowpack/pkg/svelte/transition.js";import Z from"../components/IconButton.svelte.js";import ee from"../components/UserCard.svelte.js";function L(i,r,o){const t=i.slice();return t[3]=r[o],t}function te(i){let r,o,t=i[0].username+"",e;return{c(){r=b("h3"),o=z("User not found: @"),e=z(t)},m(s,l){j(s,r,l),p(r,o),p(r,e)},p(s,l){l&1&&t!==(t=s[0].username+"")&&J(e,t)},i:$,o:$,d(s){s&&y(r)}}}function re(i){let r,o,t,e,s,l,c,n,m=i[1].username+"",u,k,w,f,_,U,B,F,q;e=new Z({props:{icon:"arrow-left",size:32,iconSize:20}});const x=[oe,le],v=[];function A(a,d){var C;return((C=a[1].followers)==null?void 0:C.length)?0:1}return f=A(i,-1),_=v[f]=x[f](i),{c(){r=b("header"),o=b("div"),t=b("div"),D(e.$$.fragment),s=K(),l=b("span"),c=b("b"),n=z("@"),u=z(m),k=z("'s followers"),w=K(),_.c(),U=G(),N(o,"id","back-button-wrapper"),N(o,"class","svelte-tiia25"),N(r,"class","svelte-tiia25")},m(a,d){j(a,r,d),p(r,o),p(o,t),H(e,t,null),p(r,s),p(r,l),p(l,c),p(c,n),p(c,u),p(l,k),j(a,w,d),v[f].m(a,d),j(a,U,d),B=!0,F||(q=V(t,"click",X),F=!0)},p(a,d){(!B||d&2)&&m!==(m=a[1].username+"")&&J(u,m);let C=f;f=A(a,d),f===C?v[f].p(a,d):(S(),g(v[C],1,1,()=>{v[C]=null}),I(),_=v[f],_?_.p(a,d):(_=v[f]=x[f](a),_.c()),h(_,1),_.m(U.parentNode,U))},i(a){B||(h(e.$$.fragment,a),h(_),B=!0)},o(a){g(e.$$.fragment,a),g(_),B=!1},d(a){a&&y(r),E(e),a&&y(w),v[f].d(a),a&&y(U),F=!1,q()}}}function le(i){let r;return{c(){r=b("h2"),r.textContent="No followers"},m(o,t){j(o,r,t)},p:$,i:$,o:$,d(o){o&&y(r)}}}function oe(i){let r,o,t=i[1].followers,e=[];for(let l=0;l<t.length;l+=1)e[l]=M(L(i,t,l));const s=l=>g(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();r=G()},m(l,c){for(let n=0;n<e.length;n+=1)e[n].m(l,c);j(l,r,c),o=!0},p(l,c){if(c&2){t=l[1].followers;let n;for(n=0;n<t.length;n+=1){const m=L(l,t,n);e[n]?(e[n].p(m,c),h(e[n],1)):(e[n]=M(m),e[n].c(),h(e[n],1),e[n].m(r.parentNode,r))}for(S(),n=t.length;n<e.length;n+=1)s(n);I()}},i(l){if(!o){for(let c=0;c<t.length;c+=1)h(e[c]);o=!0}},o(l){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)g(e[c]);o=!1},d(l){R(e,l),l&&y(r)}}}function M(i){let r,o;return r=new ee({props:{user:i[3],interactive:!0}}),{c(){D(r.$$.fragment)},m(t,e){H(r,t,e),o=!0},p(t,e){const s={};e&2&&(s.user=t[3]),r.$set(s)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){g(r.$$.fragment,t),o=!1},d(t){E(r,t)}}}function ne(i){let r,o,t,e,s,l;const c=[re,te],n=[];function m(u,k){return u[1]?0:1}return t=m(i,-1),e=n[t]=c[t](i),{c(){r=b("div"),o=b("div"),e.c(),N(o,"id","following"),N(o,"class","svelte-tiia25")},m(u,k){j(u,r,k),p(r,o),n[t].m(o,null),l=!0},p(u,[k]){let w=t;t=m(u,k),t===w?n[t].p(u,k):(S(),g(n[w],1,1,()=>{n[w]=null}),I(),e=n[t],e?e.p(u,k):(e=n[t]=c[t](u),e.c()),h(e,1),e.m(o,null))},i(u){l||(h(e),s||P(()=>{s=Q(r,Y,{duration:100}),s.start()}),l=!0)},o(u){g(e),l=!1},d(u){u&&y(r),n[t].d()}}}function ie(i,r,o){let t,{hydrator:e}=r,{params:s={username:void 0}}=r;return i.$$set=l=>{"hydrator"in l&&o(2,e=l.hydrator),"params"in l&&o(0,s=l.params)},i.$$.update=()=>{if(i.$$.dirty&5){e:o(1,t=e.getUser(s.username))}},[s,t,e]}class se extends O{constructor(r){super();T(this,r,ie,ne,W,{hydrator:2,params:0})}}export default se;