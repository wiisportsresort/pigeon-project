function m(){}const P=t=>t;function B(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function I(){return Object.create(null)}function g(t){t.forEach(G)}function E(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function at(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return m;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function lt(t,e,n){t.$$.on_destroy.push(J(e,n))}function ft(t,e,n,s){if(t){const i=K(t,e,n,s);return t[0](i)}}function K(t,e,n,s){return t[1]&&s?B(n.ctx.slice(),t[1](s(e))):n.ctx}function dt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],u=Math.max(e.dirty.length,i.length);for(let c=0;c<u;c+=1)o[c]=e.dirty[c]|i[c];return o}return e.dirty|i}return e.dirty}function ht(t,e,n,s,i,o,u){const c=dt(e,s,i,o);if(c){const r=K(e,n,s,u);t.p(r,c)}}function _t(t){const e={};for(const n in t)e[n]=!0;return e}function mt(t){return t&&E(t.destroy)?t.destroy:m}const U=typeof window!="undefined";let pt=U?()=>window.performance.now():()=>Date.now(),L=U?t=>requestAnimationFrame(t):m;const b=new Set;function Q(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&L(Q)}function yt(t){let e;return b.size===0&&L(Q),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}function gt(t,e){t.appendChild(e)}function V(t,e,n){t.insertBefore(e,n||null)}function z(t){t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function $t(){return M(" ")}function vt(){return M("")}function xt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function Et(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function jt(t,e,n){t.classList[n?"add":"remove"](e)}function W(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}class At{constructor(e=null){this.a=e,this.e=this.n=null}m(e,n,s=null){this.e||(this.e=D(n.nodeName),this.t=n,this.h(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)V(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(z)}}const R=new Set;let j=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e,n,s,i,o,u,c=0){const r=16.666/s;let d=`{
`;for(let _=0;_<=1;_+=r){const w=e+(n-e)*o(_);d+=_*100+`%{${u(w,1-w)}}
`}const a=d+`100% {${u(n,1-n)}}
}`,f=`__svelte_${Ct(a)}_${c}`,l=t.ownerDocument;R.add(l);const h=l.__svelte_stylesheet||(l.__svelte_stylesheet=l.head.appendChild(D("style")).sheet),y=l.__svelte_rules||(l.__svelte_rules={});y[f]||(y[f]=!0,h.insertRule(`@keyframes ${f} ${a}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${s}ms linear ${i}ms 1 both`,j+=1,f}function X(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),j-=i,j||Ot())}function Ot(){L(()=>{j||(R.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),R.clear())})}let A;function C(t){A=t}function Y(){if(!A)throw new Error("Function called outside component initialization");return A}function St(t){Y().$$.after_update.push(t)}function Lt(){const t=Y();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const i=W(e,n);s.slice().forEach(o=>{o.call(t,i)})}}}function zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s(e))}const v=[],Z=[],N=[],tt=[],et=Promise.resolve();let T=!1;function nt(){T||(T=!0,et.then(st))}function Dt(){return nt(),et}function x(t){N.push(t)}let q=!1;const F=new Set;function st(){if(!q){q=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];C(e),Mt(e.$$)}for(C(null),v.length=0;Z.length;)Z.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];F.has(e)||(F.add(e),e())}N.length=0}while(v.length);for(;tt.length;)tt.pop()();T=!1,q=!1,F.clear()}}function Mt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}let k;function Rt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function it(t,e,n){t.dispatchEvent(W(`${e?"intro":"outro"}${n}`))}const O=new Set;let p;function Tt(){p={r:0,c:[],p}}function qt(){p.r||g(p.c),p=p.p}function rt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function Ft(t,e,n,s){if(t&&t.o){if(O.has(t))return;O.add(t),p.c.push(()=>{O.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Ht={duration:0};function Pt(t,e,n){let s=e(t,n),i=!1,o,u,c=0;function r(){o&&X(t,o)}function d(){const{delay:f=0,duration:l=300,easing:h=P,tick:y=m,css:$}=s||Ht;$&&(o=Nt(t,0,1,l,f,h,$,c++)),y(0,1);const _=pt()+f,w=_+l;u&&u.abort(),i=!0,x(()=>it(t,!0,"start")),u=yt(S=>{if(i){if(S>=w)return y(1,0),it(t,!0,"end"),r(),i=!1;if(S>=_){const H=h((S-_)/l);y(H,1-H)}}return i})}let a=!1;return{start(){a||(X(t),E(s)?(s=s(),Rt().then(d)):d())},invalidate(){a=!1},end(){i&&(r(),i=!1)}}}function Bt(t,e){const n={},s={},i={$$scope:1};let o=t.length;for(;o--;){const u=t[o],c=e[o];if(c){for(const r in u)r in c||(s[r]=1);for(const r in c)i[r]||(n[r]=c[r],i[r]=1);t[o]=c}else for(const r in u)i[r]=1}for(const u in s)u in n||(n[u]=void 0);return n}function Gt(t){return typeof t=="object"&&t!==null?t:{}}function It(t){t&&t.c()}function ot(t,e,n,s){const{fragment:i,on_mount:o,on_destroy:u,after_update:c}=t.$$;i&&i.m(e,n),s||x(()=>{const r=o.map(G).filter(E);u?u.push(...r):g(r),t.$$.on_mount=[]}),c.forEach(x)}function ct(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(v.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,s,i,o,u=[-1]){const c=A;C(t);const r=t.$$={fragment:null,ctx:null,props:o,update:m,not_equal:i,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:e.context||[]),callbacks:I(),dirty:u,skip_bound:!1};let d=!1;if(r.ctx=n?n(t,e.props||{},(a,f,...l)=>{const h=l.length?l[0]:f;return r.ctx&&i(r.ctx[a],r.ctx[a]=h)&&(!r.skip_bound&&r.bound[a]&&r.bound[a](h),d&&Jt(t,a)),f}):[],r.update(),d=!0,g(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){const a=wt(e.target);r.fragment&&r.fragment.l(a),a.forEach(z)}else r.fragment&&r.fragment.c();e.intro&&rt(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),st()}C(c)}class Ut{$destroy(){ct(this,1),this.$destroy=m}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{kt as A,ft as B,xt as C,jt as D,ht as E,mt as F,_t as G,At as H,bt as I,Et as J,M as K,x as L,Pt as M,lt as N,P as O,Ut as S,J as a,Kt as b,Lt as c,V as d,vt as e,Ft as f,Tt as g,qt as h,E as i,rt as j,z as k,St as l,zt as m,m as n,It as o,ot as p,Bt as q,g as r,ut as s,Dt as t,Gt as u,ct as v,B as w,D as x,$t as y,gt as z};
