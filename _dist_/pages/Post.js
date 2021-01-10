import"./Post.css.proxy.js";import{SvelteComponent as W,add_render_callback as X,append as p,attr as B,check_outros as G,create_component as H,create_in_transition as Y,destroy_component as J,destroy_each as Z,detach as I,element as v,empty as x,group_outros as K,init as ee,insert as z,listen as te,mount_component as L,noop as M,safe_not_equal as oe,set_data as $,space as Q,text as h,transition_in as k,transition_out as w}from"../../web_modules/svelte/internal.js";import{pop as ne}from"../../web_modules/svelte-spa-router.js";import{fade as re}from"../../web_modules/svelte/transition.js";import le from"../components/IconButton.js";import ie from"../components/PostCard.js";import{assert as S}from"../util.js";function R(s,t,l){const e=s.slice();return e[7]=t[l],e}function se(s){let t,l,e,o=s[0].id+"",u;return{c(){t=v("h3"),l=h("Post not found: "),e=v("code"),u=h(o)},m(i,_){z(i,t,_),p(t,l),p(t,e),p(e,u)},p(i,_){_&1&&o!==(o=i[0].id+"")&&$(u,o)},i:M,o:M,d(i){i&&I(t)}}}function ae(s){var E;let t,l,e,o,u,i,_,f,b,n=((E=s[1].author)==null?void 0:E.username)+"",m,P,O=s[0].id+"",q,A,N,C,j,T,D;o=new le({props:{icon:"arrow-left",size:32,iconSize:20}});let g=S(s[2]),a=[];for(let r=0;r<g.length;r+=1)a[r]=U(R(s,g,r));const V=r=>w(a[r],1,1,()=>{a[r]=null});return{c(){t=v("header"),l=v("div"),e=v("div"),H(o.$$.fragment),u=Q(),i=v("span"),_=h("Post by "),f=v("b"),b=h("@"),m=h(n),P=h(" ("),q=h(O),A=h(")"),N=Q();for(let r=0;r<a.length;r+=1)a[r].c();C=x(),B(l,"id","back-button-wrapper"),B(l,"class","svelte-1jvdo9p"),B(t,"class","svelte-1jvdo9p")},m(r,d){z(r,t,d),p(t,l),p(l,e),L(o,e,null),p(t,u),p(t,i),p(i,_),p(i,f),p(f,b),p(f,m),p(i,P),p(i,q),p(i,A),z(r,N,d);for(let y=0;y<a.length;y+=1)a[y].m(r,d);z(r,C,d),j=!0,T||(D=te(e,"click",ne),T=!0)},p(r,d){var y;if((!j||d&2)&&n!==(n=((y=r[1].author)==null?void 0:y.username)+"")&&$(m,n),(!j||d&1)&&O!==(O=r[0].id+"")&&$(q,O),d&28){g=S(r[2]);let c;for(c=0;c<g.length;c+=1){const F=R(r,g,c);a[c]?(a[c].p(F,d),k(a[c],1)):(a[c]=U(F),a[c].c(),k(a[c],1),a[c].m(C.parentNode,C))}for(K(),c=g.length;c<a.length;c+=1)V(c);G()}},i(r){if(!j){k(o.$$.fragment,r);for(let d=0;d<g.length;d+=1)k(a[d]);j=!0}},o(r){w(o.$$.fragment,r),a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)w(a[d]);j=!1},d(r){r&&I(t),J(o),r&&I(N),Z(a,r),r&&I(C),T=!1,D()}}}function U(s){let t,l;return t=new ie({props:{post:s[7],interactive:s[4](s[7]),type:s[3](s[7])}}),{c(){H(t.$$.fragment)},m(e,o){L(t,e,o),l=!0},p(e,o){const u={};o&4&&(u.post=e[7]),o&4&&(u.interactive=e[4](e[7])),o&4&&(u.type=e[3](e[7])),t.$set(u)},i(e){l||(k(t.$$.fragment,e),l=!0)},o(e){w(t.$$.fragment,e),l=!1},d(e){J(t,e)}}}function ue(s){let t,l,e,o,u,i;const _=[ae,se],f=[];function b(n,m){return n[1]?0:1}return e=b(s,-1),o=f[e]=_[e](s),{c(){t=v("div"),l=v("div"),o.c(),B(l,"id","post"),B(l,"class","svelte-1jvdo9p")},m(n,m){z(n,t,m),p(t,l),f[e].m(l,null),i=!0},p(n,[m]){let P=e;e=b(n,m),e===P?f[e].p(n,m):(K(),w(f[P],1,1,()=>{f[P]=null}),G(),o=f[e],o?o.p(n,m):(o=f[e]=_[e](n),o.c()),k(o,1),o.m(l,null))},i(n){i||(k(o),u||X(()=>{u=Y(t,re,{duration:100}),u.start()}),i=!0)},o(n){w(o),i=!1},d(n){n&&I(t),f[e].d()}}}function de(s,t,l){let e,{hydrator:o}=t,{params:u={id:void 0}}=t,i=o.getPost(u.id);const _=(...n)=>n[0].parent?_(n[0].parent,...n):n,f=n=>{if((e==null?void 0:e.length)!==1)return(e==null?void 0:e.indexOf(n))===0?"linked-bottom":(e==null?void 0:e.indexOf(n))!==S(e==null?void 0:e.length)-1?"linked-full":"linked-top"},b=n=>n.id===S(i).id?"header":"full";return s.$$set=n=>{"hydrator"in n&&l(5,o=n.hydrator),"params"in n&&l(0,u=n.params)},s.$$.update=()=>{if(s.$$.dirty&33){e:l(1,i=o.getPost(u.id))}if(s.$$.dirty&2){e:l(2,e=i?_(i):void 0)}},[u,i,e,f,b,o]}class fe extends W{constructor(t){super();ee(this,t,de,ue,oe,{hydrator:5,params:0})}}export default fe;
