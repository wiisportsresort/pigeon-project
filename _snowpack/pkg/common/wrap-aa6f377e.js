function t(n){if(!n)throw Error("Parameter args is required");if(!n.component==!n.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(n.component&&(n.asyncComponent=()=>Promise.resolve(n.component)),typeof n.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(n.conditions){Array.isArray(n.conditions)||(n.conditions=[n.conditions]);for(let o=0;o<n.conditions.length;o++)if(!n.conditions[o]||typeof n.conditions[o]!="function")throw Error("Invalid parameter conditions["+o+"]")}return n.loadingComponent&&(n.asyncComponent.loading=n.loadingComponent,n.asyncComponent.loadingParams=n.loadingParams||void 0),{component:n.asyncComponent,userData:n.userData,conditions:n.conditions&&n.conditions.length?n.conditions:void 0,props:n.props&&Object.keys(n.props).length?n.props:{},_sveltesparouter:!0}}export{t as w};