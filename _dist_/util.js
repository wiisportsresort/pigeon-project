export function assert(r){return r}export const formatUserContent=(r="")=>r.replace(/\n/g,"<br />").replace(/(?<=\b|\s|^)@(\w+)(?=\b|\s|$)/g,'<a href="#/user/$1">@$1</a>');
