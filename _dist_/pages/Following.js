import"./Following.css.proxy.js";import{SvelteComponent as O,add_render_callback as P,append as m,attr as B,check_outros as N,create_component as D,create_in_transition as Q,destroy_component as E,destroy_each as R,detach as y,element as b,empty as G,group_outros as S,init as T,insert as j,listen as V,mount_component as H,noop as F,safe_not_equal as W,set_data as J,space as K,text as $,transition_in as h,transition_out as g}from"../../web_modules/svelte/internal.js";import{pop as X}from"../../web_modules/svelte-spa-router.js";import{fade as Y}from"../../web_modules/svelte/transition.js";import Z from"../components/IconButton.js";import ee from"../components/UserCard.js";function L(i,l,r){const t=i.slice();return t[3]=l[r],t}function te(i){let l,r,t=i[0].username+"",e;return{c(){l=b("h3"),r=$("User not found: @"),e=$(t)},m(s,n){j(s,l,n),m(l,r),m(l,e)},p(s,n){n&1&&t!==(t=s[0].username+"")&&J(e,t)},i:F,o:F,d(s){s&&y(l)}}}function le(i){let l,r,t,e,s,n,u,o,k,a=i[1].username+"",p,w,f,_,C,U,I,q;e=new Z({props:{icon:"arrow-left",size:32,iconSize:20}});const x=[re,ne],v=[];function A(c,d){var z;return((z=c[1].following)==null?void 0:z.length)?0:1}return f=A(i,-1),_=v[f]=x[f](i),{c(){l=b("header"),r=b("div"),t=b("div"),D(e.$$.fragment),s=K(),n=b("span"),u=$("Followed by "),o=b("b"),k=$("@"),p=$(a),w=K(),_.c(),C=G(),B(r,"id","back-button-wrapper"),B(r,"class","svelte-13z9gpv"),B(l,"class","svelte-13z9gpv")},m(c,d){j(c,l,d),m(l,r),m(r,t),H(e,t,null),m(l,s),m(l,n),m(n,u),m(n,o),m(o,k),m(o,p),j(c,w,d),v[f].m(c,d),j(c,C,d),U=!0,I||(q=V(t,"click",X),I=!0)},p(c,d){(!U||d&2)&&a!==(a=c[1].username+"")&&J(p,a);let z=f;f=A(c,d),f===z?v[f].p(c,d):(S(),g(v[z],1,1,()=>{v[z]=null}),N(),_=v[f],_?_.p(c,d):(_=v[f]=x[f](c),_.c()),h(_,1),_.m(C.parentNode,C))},i(c){U||(h(e.$$.fragment,c),h(_),U=!0)},o(c){g(e.$$.fragment,c),g(_),U=!1},d(c){c&&y(l),E(e),c&&y(w),v[f].d(c),c&&y(C),I=!1,q()}}}function ne(i){let l;return{c(){l=b("h2"),l.textContent="no following"},m(r,t){j(r,l,t)},p:F,i:F,o:F,d(r){r&&y(l)}}}function re(i){let l,r,t=i[1].following,e=[];for(let n=0;n<t.length;n+=1)e[n]=M(L(i,t,n));const s=n=>g(e[n],1,1,()=>{e[n]=null});return{c(){for(let n=0;n<e.length;n+=1)e[n].c();l=G()},m(n,u){for(let o=0;o<e.length;o+=1)e[o].m(n,u);j(n,l,u),r=!0},p(n,u){if(u&2){t=n[1].following;let o;for(o=0;o<t.length;o+=1){const k=L(n,t,o);e[o]?(e[o].p(k,u),h(e[o],1)):(e[o]=M(k),e[o].c(),h(e[o],1),e[o].m(l.parentNode,l))}for(S(),o=t.length;o<e.length;o+=1)s(o);N()}},i(n){if(!r){for(let u=0;u<t.length;u+=1)h(e[u]);r=!0}},o(n){e=e.filter(Boolean);for(let u=0;u<e.length;u+=1)g(e[u]);r=!1},d(n){R(e,n),n&&y(l)}}}function M(i){let l,r;return l=new ee({props:{user:i[3],interactive:!0}}),{c(){D(l.$$.fragment)},m(t,e){H(l,t,e),r=!0},p(t,e){const s={};e&2&&(s.user=t[3]),l.$set(s)},i(t){r||(h(l.$$.fragment,t),r=!0)},o(t){g(l.$$.fragment,t),r=!1},d(t){E(l,t)}}}function oe(i){let l,r,t,e,s,n;const u=[le,te],o=[];function k(a,p){return a[1]?0:1}return t=k(i,-1),e=o[t]=u[t](i),{c(){l=b("div"),r=b("div"),e.c(),B(r,"id","following"),B(r,"class","svelte-13z9gpv")},m(a,p){j(a,l,p),m(l,r),o[t].m(r,null),n=!0},p(a,[p]){let w=t;t=k(a,p),t===w?o[t].p(a,p):(S(),g(o[w],1,1,()=>{o[w]=null}),N(),e=o[t],e?e.p(a,p):(e=o[t]=u[t](a),e.c()),h(e,1),e.m(r,null))},i(a){n||(h(e),s||P(()=>{s=Q(l,Y,{duration:100}),s.start()}),n=!0)},o(a){g(e),n=!1},d(a){a&&y(l),o[t].d()}}}function ie(i,l,r){let t,{hydrator:e}=l,{params:s={username:void 0}}=l;return i.$$set=n=>{"hydrator"in n&&r(2,e=n.hydrator),"params"in n&&r(0,s=n.params)},i.$$.update=()=>{if(i.$$.dirty&5){e:r(1,t=e.getUser(s.username))}},[s,t,e]}class se extends O{constructor(l){super();T(this,l,ie,oe,W,{hydrator:2,params:0})}}export default se;