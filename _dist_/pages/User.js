import"./User.css.proxy.js";import{SvelteComponent as Ee,add_render_callback as Ge,append as u,attr as a,check_outros as D,component_subscribe as He,create_component as re,create_in_transition as Je,destroy_component as ie,destroy_each as fe,detach as g,element as d,empty as E,group_outros as M,init as Ke,insert as j,listen as Le,mount_component as ce,noop as C,safe_not_equal as Oe,set_data as G,space as P,text as w,toggle_class as H,transition_in as b,transition_out as v}from"../../web_modules/svelte/internal.js";import Qe from"../../web_modules/qs.js";import{querystring as Re}from"../../web_modules/svelte-spa-router.js";import{fade as Te}from"../../web_modules/svelte/transition.js";import ae from"../components/PostCard.js";function Be(i,l,t){const e=i.slice();return e[8]=l[t],e}function Ie(i,l,t){const e=i.slice();return e[8]=l[t],e}function Fe(i,l,t){const e=i.slice();return e[8]=l[t],e}function Ve(i){let l,t,e=i[0].username+"",s;return{c(){l=d("h3"),t=w("User not found: @"),s=w(e)},m(c,n){j(c,l,n),u(l,t),u(l,s)},p(c,n){n&1&&e!==(e=c[0].username+"")&&G(s,e)},i:C,o:C,d(c){c&&g(l)}}}function We(i){var qe,Pe;let l,t,e,s,c,n,r,o=i[1].displayName+"",f,_,m,ue,K=i[1].username+"",x,_e,J,L=i[1].bio+"",ee,pe,S,z,O,Q=((qe=i[1].followers)==null?void 0:qe.length)+"",te,me,R,he,A,T,V=((Pe=i[1].following)==null?void 0:Pe.length)+"",le,de,W,se,q,U,y,be,X,ve,B,ke,Y,ge,I,je,Z,we,N,$,k,ne,Ne;const $e=[Ye,Xe],F=[];function Ce(p,h){return p[1].posts?0:1}return N=Ce(i,-1),$=F[N]=$e[N](i),{c(){l=d("aside"),t=d("div"),e=d("img"),c=P(),n=d("div"),r=d("h1"),f=w(o),_=P(),m=d("span"),ue=w("@"),x=w(K),_e=P(),J=d("span"),ee=w(L),pe=P(),S=d("div"),z=d("a"),O=d("b"),te=w(Q),me=w(`
            Followers`),he=P(),A=d("a"),T=d("b"),le=w(V),de=w(`
            Following`),se=P(),q=d("section"),U=d("nav"),y=d("a"),be=w("Posts"),ve=P(),B=d("a"),ke=w("Posts and comments"),ge=P(),I=d("a"),je=w("Media"),we=P(),$.c(),e.src!==(s=i[2].src)&&a(e,"src",s),a(e,"alt","profile"),a(e,"id","pfp"),a(e,"class","svelte-12jjnfs"),a(t,"id","pfp-wrapper"),a(t,"class","svelte-12jjnfs"),a(r,"class","svelte-12jjnfs"),a(m,"id","username"),a(m,"class","svelte-12jjnfs"),a(J,"id","bio"),a(J,"class","svelte-12jjnfs"),a(O,"class","number svelte-12jjnfs"),a(z,"href",R=`#/user/${i[1].username}/followers`),a(z,"class","svelte-12jjnfs"),a(T,"class","number svelte-12jjnfs"),a(A,"href",W=`#/user/${i[1].username}/following`),a(A,"class","svelte-12jjnfs"),a(S,"id","interactions"),a(S,"class","svelte-12jjnfs"),a(n,"id","aside-content"),a(n,"class","svelte-12jjnfs"),a(l,"class","svelte-12jjnfs"),a(y,"class","tab-item svelte-12jjnfs"),a(y,"href",X=`#/user/${i[1].username}?tab=posts`),H(y,"selected",i[3]==="posts"||!i[3]),a(B,"class","tab-item svelte-12jjnfs"),a(B,"href",Y=`#/user/${i[1].username}?tab=posts_with_comments`),H(B,"selected",i[3]==="posts_with_comments"),a(I,"class","tab-item svelte-12jjnfs"),a(I,"href",Z=`#/user/${i[1].username}?tab=media`),H(I,"selected",i[3]==="media"),a(U,"class","tab-list svelte-12jjnfs"),a(q,"id","posts"),a(q,"class","svelte-12jjnfs")},m(p,h){j(p,l,h),u(l,t),u(t,e),u(l,c),u(l,n),u(n,r),u(r,f),u(n,_),u(n,m),u(m,ue),u(m,x),u(n,_e),u(n,J),u(J,ee),u(n,pe),u(n,S),u(S,z),u(z,O),u(O,te),u(z,me),u(S,he),u(S,A),u(A,T),u(T,le),u(A,de),j(p,se,h),j(p,q,h),u(q,U),u(U,y),u(y,be),u(U,ve),u(U,B),u(B,ke),u(U,ge),u(U,I),u(I,je),u(q,we),F[N].m(q,null),k=!0,ne||(Ne=Le(e,"error",i[4]),ne=!0)},p(p,h){var Ue,ye;(!k||h&4&&e.src!==(s=p[2].src))&&a(e,"src",s),(!k||h&2)&&o!==(o=p[1].displayName+"")&&G(f,o),(!k||h&2)&&K!==(K=p[1].username+"")&&G(x,K),(!k||h&2)&&L!==(L=p[1].bio+"")&&G(ee,L),(!k||h&2)&&Q!==(Q=((Ue=p[1].followers)==null?void 0:Ue.length)+"")&&G(te,Q),(!k||h&2&&R!==(R=`#/user/${p[1].username}/followers`))&&a(z,"href",R),(!k||h&2)&&V!==(V=((ye=p[1].following)==null?void 0:ye.length)+"")&&G(le,V),(!k||h&2&&W!==(W=`#/user/${p[1].username}/following`))&&a(A,"href",W),(!k||h&2&&X!==(X=`#/user/${p[1].username}?tab=posts`))&&a(y,"href",X),h&8&&H(y,"selected",p[3]==="posts"||!p[3]),(!k||h&2&&Y!==(Y=`#/user/${p[1].username}?tab=posts_with_comments`))&&a(B,"href",Y),h&8&&H(B,"selected",p[3]==="posts_with_comments"),(!k||h&2&&Z!==(Z=`#/user/${p[1].username}?tab=media`))&&a(I,"href",Z),h&8&&H(I,"selected",p[3]==="media");let oe=N;N=Ce(p,h),N===oe?F[N].p(p,h):(M(),v(F[oe],1,1,()=>{F[oe]=null}),D(),$=F[N],$?$.p(p,h):($=F[N]=$e[N](p),$.c()),b($,1),$.m(q,null))},i(p){k||(b($),k=!0)},o(p){v($),k=!1},d(p){p&&g(l),p&&g(se),p&&g(q),F[N].d(),ne=!1,Ne()}}}function Xe(i){let l;return{c(){l=d("h3"),l.textContent="No posts",a(l,"class","svelte-12jjnfs")},m(t,e){j(t,l,e)},p:C,i:C,o:C,d(t){t&&g(l)}}}function Ye(i){let l,t,e,s;const c=[et,xe,Ze],n=[];function r(o,f){return o[3]==="posts"||!o[3]?0:o[3]==="posts_with_comments"?1:o[3]==="media"?2:-1}return~(l=r(i,-1))&&(t=n[l]=c[l](i)),{c(){t&&t.c(),e=E()},m(o,f){~l&&n[l].m(o,f),j(o,e,f),s=!0},p(o,f){let _=l;l=r(o,f),l===_?~l&&n[l].p(o,f):(t&&(M(),v(n[_],1,1,()=>{n[_]=null}),D()),~l?(t=n[l],t?t.p(o,f):(t=n[l]=c[l](o),t.c()),b(t,1),t.m(e.parentNode,e)):t=null)},i(o){s||(b(t),s=!0)},o(o){v(t),s=!1},d(o){~l&&n[l].d(o),o&&g(e)}}}function Ze(i){let l,t,e,s,c;const n=[lt,tt],r=[];function o(f,_){return _&2&&(l=!!f[1].posts.some(it)),l?0:1}return t=o(i,-1),e=r[t]=n[t](i),{c(){e.c(),s=E()},m(f,_){r[t].m(f,_),j(f,s,_),c=!0},p(f,_){let m=t;t=o(f,_),t===m?r[t].p(f,_):(M(),v(r[m],1,1,()=>{r[m]=null}),D(),e=r[t],e?e.p(f,_):(e=r[t]=n[t](f),e.c()),b(e,1),e.m(s.parentNode,s))},i(f){c||(b(e),c=!0)},o(f){v(e),c=!1},d(f){r[t].d(f),f&&g(s)}}}function xe(i){let l,t,e=i[1].posts,s=[];for(let n=0;n<e.length;n+=1)s[n]=Me(Ie(i,e,n));const c=n=>v(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();l=E()},m(n,r){for(let o=0;o<s.length;o+=1)s[o].m(n,r);j(n,l,r),t=!0},p(n,r){if(r&2){e=n[1].posts;let o;for(o=0;o<e.length;o+=1){const f=Ie(n,e,o);s[o]?(s[o].p(f,r),b(s[o],1)):(s[o]=Me(f),s[o].c(),b(s[o],1),s[o].m(l.parentNode,l))}for(M(),o=e.length;o<s.length;o+=1)c(o);D()}},i(n){if(!t){for(let r=0;r<e.length;r+=1)b(s[r]);t=!0}},o(n){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)v(s[r]);t=!1},d(n){fe(s,n),n&&g(l)}}}function et(i){let l,t,e,s,c;const n=[nt,st],r=[];function o(f,_){return _&2&&(l=!!f[1].posts.some(rt)),l?0:1}return t=o(i,-1),e=r[t]=n[t](i),{c(){e.c(),s=E()},m(f,_){r[t].m(f,_),j(f,s,_),c=!0},p(f,_){let m=t;t=o(f,_),t===m?r[t].p(f,_):(M(),v(r[m],1,1,()=>{r[m]=null}),D(),e=r[t],e?e.p(f,_):(e=r[t]=n[t](f),e.c()),b(e,1),e.m(s.parentNode,s))},i(f){c||(b(e),c=!0)},o(f){v(e),c=!1},d(f){r[t].d(f),f&&g(s)}}}function tt(i){let l;return{c(){l=d("h3"),l.textContent="No posts",a(l,"class","svelte-12jjnfs")},m(t,e){j(t,l,e)},p:C,i:C,o:C,d(t){t&&g(l)}}}function lt(i){let l,t,e=i[1].posts.filter(Ae),s=[];for(let n=0;n<e.length;n+=1)s[n]=De(Be(i,e,n));const c=n=>v(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();l=E()},m(n,r){for(let o=0;o<s.length;o+=1)s[o].m(n,r);j(n,l,r),t=!0},p(n,r){if(r&2){e=n[1].posts.filter(Ae);let o;for(o=0;o<e.length;o+=1){const f=Be(n,e,o);s[o]?(s[o].p(f,r),b(s[o],1)):(s[o]=De(f),s[o].c(),b(s[o],1),s[o].m(l.parentNode,l))}for(M(),o=e.length;o<s.length;o+=1)c(o);D()}},i(n){if(!t){for(let r=0;r<e.length;r+=1)b(s[r]);t=!0}},o(n){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)v(s[r]);t=!1},d(n){fe(s,n),n&&g(l)}}}function De(i){let l,t;return l=new ae({props:{post:i[8],interactive:"full"}}),{c(){re(l.$$.fragment)},m(e,s){ce(l,e,s),t=!0},p(e,s){const c={};s&2&&(c.post=e[8]),l.$set(c)},i(e){t||(b(l.$$.fragment,e),t=!0)},o(e){v(l.$$.fragment,e),t=!1},d(e){ie(l,e)}}}function Me(i){let l,t;return l=new ae({props:{post:i[8],interactive:"full"}}),{c(){re(l.$$.fragment)},m(e,s){ce(l,e,s),t=!0},p(e,s){const c={};s&2&&(c.post=e[8]),l.$set(c)},i(e){t||(b(l.$$.fragment,e),t=!0)},o(e){v(l.$$.fragment,e),t=!1},d(e){ie(l,e)}}}function st(i){let l;return{c(){l=d("h3"),l.textContent="No posts",a(l,"class","svelte-12jjnfs")},m(t,e){j(t,l,e)},p:C,i:C,o:C,d(t){t&&g(l)}}}function nt(i){let l,t,e=i[1].posts.filter(ze),s=[];for(let n=0;n<e.length;n+=1)s[n]=Se(Fe(i,e,n));const c=n=>v(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();l=E()},m(n,r){for(let o=0;o<s.length;o+=1)s[o].m(n,r);j(n,l,r),t=!0},p(n,r){if(r&2){e=n[1].posts.filter(ze);let o;for(o=0;o<e.length;o+=1){const f=Fe(n,e,o);s[o]?(s[o].p(f,r),b(s[o],1)):(s[o]=Se(f),s[o].c(),b(s[o],1),s[o].m(l.parentNode,l))}for(M(),o=e.length;o<s.length;o+=1)c(o);D()}},i(n){if(!t){for(let r=0;r<e.length;r+=1)b(s[r]);t=!0}},o(n){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)v(s[r]);t=!1},d(n){fe(s,n),n&&g(l)}}}function Se(i){let l,t;return l=new ae({props:{post:i[8],interactive:"full"}}),{c(){re(l.$$.fragment)},m(e,s){ce(l,e,s),t=!0},p(e,s){const c={};s&2&&(c.post=e[8]),l.$set(c)},i(e){t||(b(l.$$.fragment,e),t=!0)},o(e){v(l.$$.fragment,e),t=!1},d(e){ie(l,e)}}}function ot(i){let l,t,e,s,c;const n=[We,Ve],r=[];function o(f,_){return f[1]?0:1}return t=o(i,-1),e=r[t]=n[t](i),{c(){l=d("div"),e.c(),a(l,"id","user-wrapper"),a(l,"class","svelte-12jjnfs")},m(f,_){j(f,l,_),r[t].m(l,null),c=!0},p(f,[_]){let m=t;t=o(f,_),t===m?r[t].p(f,_):(M(),v(r[m],1,1,()=>{r[m]=null}),D(),e=r[t],e?e.p(f,_):(e=r[t]=n[t](f),e.c()),b(e,1),e.m(l,null))},i(f){c||(b(e),s||Ge(()=>{s=Je(l,Te,{duration:100}),s.start()}),c=!0)},o(f){v(e),c=!1},d(f){f&&g(l),r[t].d()}}}const rt=i=>!i.parent,it=i=>i.media.length,ze=i=>!i.parent,Ae=i=>i.media.length;function ft(i,l,t){let e,s,c,n;He(i,Re,m=>t(7,n=m));var r;let{hydrator:o}=l,{params:f={username:void 0}}=l;const _=()=>t(2,s={type:"image",src:"default.png"});return i.$$set=m=>{"hydrator"in m&&t(5,o=m.hydrator),"params"in m&&t(0,f=m.params)},i.$$.update=()=>{if(i.$$.dirty&33){e:t(1,e=o.getUser(f.username))}if(i.$$.dirty&66){e:t(2,s=t(6,r=e==null?void 0:e.profileImage)!==null&&r!==void 0?r:{type:"image",src:"default.png"})}if(i.$$.dirty&128){e:t(3,c=Qe.parse(n!=null?n:"").tab)}},[f,e,s,c,_,o,r,n]}class ct extends Ee{constructor(l){super();Ke(this,l,ft,ot,Oe,{hydrator:5,params:0})}}export default ct;