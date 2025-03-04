import{a$ as dt,p as D,s as xe,c as P,a0 as J,d as Ve,aM as Y,b0 as X,t as B,q as L,b1 as G,ax as K,v as E,b2 as te,b3 as Ce,w as ie,b4 as Be,a9 as ue,aa as le,b5 as ee,g as R,A as W,L as c,M as _,ag as N,b6 as ft,a as A,b7 as mt,b8 as vt,b9 as gt,j as ht,l as ce,ba as bt,P as j,bb as yt,H as de,a5 as Se,a7 as _e,a3 as Pe,aF as we,a4 as xt,bc as se,h as St,bd as Pt,B as wt,D as kt,be as pt,J as Dt,bf as It,z as Tt}from"./index-DmVHqK86.js";import{V as ke}from"./VPagination-Byn5LPhz.js";import{V as Oe}from"./VSelect-uRTf8U4_.js";import{V as Ft}from"./VChip-BOb5jj0S.js";import{V as fe}from"./VCheckboxBtn-BgjCsuWu.js";import{V as Vt}from"./VDivider-CosHWVEo.js";function pe(e,l,t){return Object.keys(e).filter(a=>dt(a)&&a.endsWith(l)).reduce((a,n)=>(a[n.slice(0,-l.length)]=r=>e[n](r,t(r)),a),{})}const Ct=(e,l,t)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),Bt=D({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function _t(e,l,t){var s;const a=[],n=(t==null?void 0:t.default)??Ct,r=t!=null&&t.filterKeys?Y(t.filterKeys):!1,u=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return a;e:for(let o=0;o<e.length;o++){const[i,m=i]=Y(e[o]),v={},g={};let x=-1;if((l||u>0)&&!(t!=null&&t.noFilter)){if(typeof i=="object"){const f=r||Object.keys(m);for(const b of f){const d=X(m,b),k=(s=t==null?void 0:t.customKeyFilter)==null?void 0:s[b];if(x=k?k(d,l,i):n(d,l,i),x!==-1&&x!==!1)k?v[b]=x:g[b]=x;else if((t==null?void 0:t.filterMode)==="every")continue e}}else x=n(i,l,i),x!==-1&&x!==!1&&(g.title=x);const h=Object.keys(g).length,y=Object.keys(v).length;if(!h&&!y||(t==null?void 0:t.filterMode)==="union"&&y!==u&&!h||(t==null?void 0:t.filterMode)==="intersection"&&(y!==u||!h))continue}a.push({index:o,matches:{...g,...v}})}return a}function Ot(e,l,t,a){const n=xe([]),r=xe(new Map),u=P(()=>a!=null&&a.transform?J(l).map(o=>[o,a.transform(o)]):J(l));Ve(()=>{const o=typeof t=="function"?t():J(t),i=typeof o!="string"&&typeof o!="number"?"":String(o),m=_t(u.value,i,{customKeyFilter:{...e.customKeyFilter,...J(a==null?void 0:a.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),v=J(l),g=[],x=new Map;m.forEach(h=>{let{index:y,matches:f}=h;const b=v[y];g.push(b),x.set(b.value,f)}),n.value=g,r.value=x});function s(o){return r.value.get(o.value)}return{filteredItems:n,filteredMatches:r,getMatches:s}}const At=D({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Ae=Symbol.for("vuetify:datatable:expanded");function $t(e){const l=B(e,"expandOnClick"),t=L(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function a(s,o){const i=new Set(t.value);o?i.add(s.value):i.delete(s.value),t.value=i}function n(s){return t.value.has(s.value)}function r(s){a(s,!n(s))}const u={expand:a,expanded:t,expandOnClick:l,isExpanded:n,toggleExpand:r};return K(Ae,u),u}function $e(){const e=G(Ae);if(!e)throw new Error("foo");return e}const Mt=D({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Me=Symbol.for("vuetify:data-table-group");function Rt(e){return{groupBy:L(e,"groupBy")}}function Ht(e){const{disableSort:l,groupBy:t,sortBy:a}=e,n=E(new Set),r=P(()=>t.value.map(m=>({...m,order:m.order??!1})).concat(l!=null&&l.value?[]:a.value));function u(m){return n.value.has(m.id)}function s(m){const v=new Set(n.value);u(m)?v.delete(m.id):v.add(m.id),n.value=v}function o(m){function v(g){const x=[];for(const h of g.items)"type"in h&&h.type==="group"?x.push(...v(h)):x.push(h);return[...new Set(x)]}return v({items:m})}const i={sortByWithGroups:r,toggleGroup:s,opened:n,groupBy:t,extractRows:o,isGroupOpen:u};return K(Me,i),i}function Re(){const e=G(Me);if(!e)throw new Error("Missing group!");return e}function Et(e,l){if(!e.length)return[];const t=new Map;for(const a of e){const n=te(a.raw,l);t.has(n)||t.set(n,[]),t.get(n).push(a)}return t}function He(e,l){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=Et(e,l[0]),r=[],u=l.slice(1);return n.forEach((s,o)=>{const i=l[0],m=`${a}_${i}_${o}`;r.push({depth:t,id:m,key:i,value:o,items:u.length?He(s,u,t+1,m):s,type:"group"})}),r}function Ee(e,l){const t=[];for(const a of e)"type"in a&&a.type==="group"?(a.value!=null&&t.push(a),(l.has(a.id)||a.value==null)&&t.push(...Ee(a.items,l))):t.push(a);return t}function Nt(e,l,t){return{flatItems:P(()=>{if(!l.value.length)return e.value;const n=He(e.value,l.value.map(r=>r.key));return Ee(n,t.value)})}}function Lt(e){let{page:l,itemsPerPage:t,sortBy:a,groupBy:n,search:r}=e;const u=Ce("VDataTable"),s=P(()=>({page:l.value,itemsPerPage:t.value,sortBy:a.value,groupBy:n.value,search:r.value}));let o=null;ie(s,()=>{Be(o,s.value)||(o&&o.search!==s.value.search&&(l.value=1),u.emit("update:options",s.value),o=s.value)},{deep:!0,immediate:!0})}const jt=D({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Ne=Symbol.for("vuetify:data-table-pagination");function Gt(e){const l=L(e,"page",void 0,a=>+(a??1)),t=L(e,"itemsPerPage",void 0,a=>+(a??10));return{page:l,itemsPerPage:t}}function Kt(e){const{page:l,itemsPerPage:t,itemsLength:a}=e,n=P(()=>t.value===-1?0:t.value*(l.value-1)),r=P(()=>t.value===-1?a.value:Math.min(a.value,n.value+t.value)),u=P(()=>t.value===-1||a.value===0?1:Math.ceil(a.value/t.value));ie([l,u],()=>{l.value>u.value&&(l.value=u.value)});function s(g){t.value=g,l.value=1}function o(){l.value=ue(l.value+1,1,u.value)}function i(){l.value=ue(l.value-1,1,u.value)}function m(g){l.value=ue(g,1,u.value)}const v={page:l,itemsPerPage:t,startIndex:n,stopIndex:r,pageCount:u,itemsLength:a,nextPage:o,prevPage:i,setPage:m,setItemsPerPage:s};return K(Ne,v),v}function Wt(){const e=G(Ne);if(!e)throw new Error("Missing pagination!");return e}function zt(e){const l=Ce("usePaginatedItems"),{items:t,startIndex:a,stopIndex:n,itemsPerPage:r}=e,u=P(()=>r.value<=0?t.value:t.value.slice(a.value,n.value));return ie(u,s=>{l.emit("update:currentItems",s)},{immediate:!0}),{paginatedItems:u}}const Ut={showSelectAll:!1,allSelected:()=>[],select:e=>{var a;let{items:l,value:t}=e;return new Set(t?[(a=l[0])==null?void 0:a.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Le={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,currentPage:t,selected:a}=e;return Le.select({items:t,value:l,selected:a})}},je={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,allItems:t,selected:a}=e;return je.select({items:t,value:l,selected:a})}},qt=D({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Be}},"DataTable-select"),Ge=Symbol.for("vuetify:data-table-selection");function Qt(e,l){let{allItems:t,currentPage:a}=l;const n=L(e,"modelValue",e.modelValue,b=>new Set(Y(b).map(d=>{var k;return((k=t.value.find(V=>e.valueComparator(d,V.value)))==null?void 0:k.value)??d})),b=>[...b.values()]),r=P(()=>t.value.filter(b=>b.selectable)),u=P(()=>a.value.filter(b=>b.selectable)),s=P(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Ut;case"all":return je;case"page":default:return Le}});function o(b){return Y(b).every(d=>n.value.has(d.value))}function i(b){return Y(b).some(d=>n.value.has(d.value))}function m(b,d){const k=s.value.select({items:b,value:d,selected:new Set(n.value)});n.value=k}function v(b){m([b],!o([b]))}function g(b){const d=s.value.selectAll({value:b,allItems:r.value,currentPage:u.value,selected:new Set(n.value)});n.value=d}const x=P(()=>n.value.size>0),h=P(()=>{const b=s.value.allSelected({allItems:r.value,currentPage:u.value});return!!b.length&&o(b)}),y=P(()=>s.value.showSelectAll),f={toggleSelect:v,select:m,selectAll:g,isSelected:o,isSomeSelected:i,someSelected:x,allSelected:h,showSelectAll:y};return K(Ge,f),f}function ne(){const e=G(Ge);if(!e)throw new Error("Missing selection!");return e}const Jt=D({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Ke=Symbol.for("vuetify:data-table-sort");function Xt(e){const l=L(e,"sortBy"),t=B(e,"mustSort"),a=B(e,"multiSort");return{sortBy:l,mustSort:t,multiSort:a}}function Yt(e){const{sortBy:l,mustSort:t,multiSort:a,page:n}=e,r=o=>{if(o.key==null)return;let i=l.value.map(v=>({...v}))??[];const m=i.find(v=>v.key===o.key);m?m.order==="desc"?t.value?m.order="asc":i=i.filter(v=>v.key!==o.key):m.order="desc":a.value?i=[...i,{key:o.key,order:"asc"}]:i=[{key:o.key,order:"asc"}],l.value=i,n&&(n.value=1)};function u(o){return!!l.value.find(i=>i.key===o.key)}const s={sortBy:l,toggleSort:r,isSorted:u};return K(Ke,s),s}function We(){const e=G(Ke);if(!e)throw new Error("Missing sort!");return e}function Zt(e,l,t,a){const n=le();return{sortedItems:P(()=>{var u,s;return t.value.length?ea(l.value,t.value,n.current.value,{transform:a==null?void 0:a.transform,sortFunctions:{...e.customKeySort,...(u=a==null?void 0:a.sortFunctions)==null?void 0:u.value},sortRawFunctions:(s=a==null?void 0:a.sortRawFunctions)==null?void 0:s.value}):l.value})}}function ea(e,l,t,a){const n=new Intl.Collator(t,{sensitivity:"accent",usage:"sort"});return e.map(u=>[u,a!=null&&a.transform?a.transform(u):u]).sort((u,s)=>{var o,i;for(let m=0;m<l.length;m++){let v=!1;const g=l[m].key,x=l[m].order??"asc";if(x===!1)continue;let h=te(u[1],g),y=te(s[1],g),f=u[0].raw,b=s[0].raw;if(x==="desc"&&([h,y]=[y,h],[f,b]=[b,f]),(o=a==null?void 0:a.sortRawFunctions)!=null&&o[g]){const d=a.sortRawFunctions[g](f,b);if(d==null)continue;if(v=!0,d)return d}if((i=a==null?void 0:a.sortFunctions)!=null&&i[g]){const d=a.sortFunctions[g](h,y);if(d==null)continue;if(v=!0,d)return d}if(!v){if(h instanceof Date&&y instanceof Date)return h.getTime()-y.getTime();if([h,y]=[h,y].map(d=>d!=null?d.toString().toLocaleLowerCase():d),h!==y)return ee(h)&&ee(y)?0:ee(h)?-1:ee(y)?1:!isNaN(h)&&!isNaN(y)?Number(h)-Number(y):n.compare(h,y)}}return 0}).map(u=>{let[s]=u;return s})}const ze=D({prevIcon:{type:N,default:"$prev"},nextIcon:{type:N,default:"$next"},firstIcon:{type:N,default:"$first"},lastIcon:{type:N,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),De=R()({name:"VDataTableFooter",props:ze(),setup(e,l){let{slots:t}=l;const{t:a}=le(),{page:n,pageCount:r,startIndex:u,stopIndex:s,itemsLength:o,itemsPerPage:i,setItemsPerPage:m}=Wt(),v=P(()=>e.itemsPerPageOptions.map(g=>typeof g=="number"?{value:g,title:g===-1?a("$vuetify.dataFooter.itemsPerPageAll"):String(g)}:{...g,title:isNaN(Number(g.title))?a(g.title):g.title}));return W(()=>{var x;const g=ke.filterProps(e);return c("div",{class:"v-data-table-footer"},[(x=t.prepend)==null?void 0:x.call(t),c("div",{class:"v-data-table-footer__items-per-page"},[c("span",null,[a(e.itemsPerPageText)]),c(Oe,{items:v.value,modelValue:i.value,"onUpdate:modelValue":h=>m(Number(h)),density:"compact",variant:"outlined","hide-details":!0},null)]),c("div",{class:"v-data-table-footer__info"},[c("div",null,[a(e.pageText,o.value?u.value+1:0,s.value,o.value)])]),c("div",{class:"v-data-table-footer__pagination"},[c(ke,_({modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},g),null)])])}),{}}}),ae=ft({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:t}=l;const a=e.tag??"td";return c(a,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:A(e.height),width:A(e.width),maxWidth:A(e.maxWidth),left:A(e.fixedOffset||null)}},{default:()=>{var n;return[(n=t.default)==null?void 0:n.call(t)]}})}),ta=D({headers:Array},"DataTable-header"),Ue=Symbol.for("vuetify:data-table-headers"),qe={title:"",sortable:!1},aa={...qe,width:48};function la(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(t=>({element:t,priority:0}));return{enqueue:(t,a)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>a){l.splice(r,0,{element:t,priority:a}),n=!0;break}n||l.push({element:t,priority:a})},size:()=>l.length,count:()=>{let t=0;if(!l.length)return 0;const a=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===a&&(t+=1);return t},dequeue:()=>l.shift()}}function oe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const t of e.children)oe(t,l);return l}function Qe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const t of e)t.key&&l.add(t.key),t.children&&Qe(t.children,l);return l}function na(e){if(e.key){if(e.key==="data-table-group")return qe;if(["data-table-expand","data-table-select"].includes(e.key))return aa}}function me(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(t=>me(t,l+1))):l}function ra(e){let l=!1;function t(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(u&&(r.fixed=!0),r.fixed)if(r.children)for(let s=r.children.length-1;s>=0;s--)t(r.children[s],!0);else l?isNaN(+r.width)&&vt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let s=r.children.length-1;s>=0;s--)t(r.children[s]);else l=!1}for(let r=e.length-1;r>=0;r--)t(e[r]);function a(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return u;if(r.children){r.fixedOffset=u;for(const s of r.children)u=a(s,u)}else r.fixed&&(r.fixedOffset=u,u+=parseFloat(r.width||"0")||0);return u}let n=0;for(const r of e)n=a(r,n)}function ua(e,l){const t=[];let a=0;const n=la(e);for(;n.size()>0;){let u=n.count();const s=[];let o=1;for(;u>0;){const{element:i,priority:m}=n.dequeue(),v=l-a-me(i);if(s.push({...i,rowspan:v??1,colspan:i.children?oe(i).length:1}),i.children)for(const g of i.children){const x=m%1+o/Math.pow(10,a+2);n.enqueue(g,a+v+x)}o+=1,u-=1}a+=1,t.push(s)}return{columns:e.map(u=>oe(u)).flat(),headers:t}}function Je(e){const l=[];for(const t of e){const a={...na(t),...t},n=a.key??(typeof a.value=="string"?a.value:null),r=a.value??n??null,u={...a,key:n,value:r,sortable:a.sortable??(a.key!=null||!!a.sort),children:a.children?Je(a.children):void 0};l.push(u)}return l}function sa(e,l){const t=E([]),a=E([]),n=E({}),r=E({}),u=E({});Ve(()=>{var y,f,b;const i=(e.headers||Object.keys(e.items[0]??{}).map(d=>({key:d,title:mt(d)}))).slice(),m=Qe(i);(y=l==null?void 0:l.groupBy)!=null&&y.value.length&&!m.has("data-table-group")&&i.unshift({key:"data-table-group",title:"Group"}),(f=l==null?void 0:l.showSelect)!=null&&f.value&&!m.has("data-table-select")&&i.unshift({key:"data-table-select"}),(b=l==null?void 0:l.showExpand)!=null&&b.value&&!m.has("data-table-expand")&&i.push({key:"data-table-expand"});const v=Je(i);ra(v);const g=Math.max(...v.map(d=>me(d)))+1,x=ua(v,g);t.value=x.headers,a.value=x.columns;const h=x.headers.flat(1);for(const d of h)d.key&&(d.sortable&&(d.sort&&(n.value[d.key]=d.sort),d.sortRaw&&(r.value[d.key]=d.sortRaw)),d.filter&&(u.value[d.key]=d.filter))});const s={headers:t,columns:a,sortFunctions:n,sortRawFunctions:r,filterFunctions:u};return K(Ue,s),s}function re(){const e=G(Ue);if(!e)throw new Error("Missing headers!");return e}const Xe=D({color:String,disableSort:Boolean,fixedHeader:Boolean,multiSort:Boolean,sortAscIcon:{type:N,default:"$sortAsc"},sortDescIcon:{type:N,default:"$sortDesc"},headerProps:{type:Object},sticky:Boolean,...de(),...yt()},"VDataTableHeaders"),Ie=R()({name:"VDataTableHeaders",props:Xe(),setup(e,l){let{slots:t}=l;const{t:a}=le(),{toggleSort:n,sortBy:r,isSorted:u}=We(),{someSelected:s,allSelected:o,selectAll:i,showSelectAll:m}=ne(),{columns:v,headers:g}=re(),{loaderClasses:x}=gt(e);function h(I,S){if(!(!(e.sticky||e.fixedHeader)&&!I.fixed))return{position:"sticky",left:I.fixed?A(I.fixedOffset):void 0,top:e.sticky||e.fixedHeader?`calc(var(--v-table-header-height) * ${S})`:void 0}}function y(I){const S=r.value.find(T=>T.key===I.key);return S?S.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:f,backgroundColorStyles:b}=ht(e,"color"),{displayClasses:d,mobile:k}=ce(e),V=P(()=>({headers:g.value,columns:v.value,toggleSort:n,isSorted:u,sortBy:r.value,someSelected:s.value,allSelected:o.value,selectAll:i,getSortIcon:y})),w=P(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky||e.fixedHeader},d.value,x.value]),z=I=>{let{column:S,x:T,y:p}=I;const F=S.key==="data-table-select"||S.key==="data-table-expand",O=_(e.headerProps??{},S.headerProps??{});return c(ae,_({tag:"th",align:S.align,class:[{"v-data-table__th--sortable":S.sortable&&!e.disableSort,"v-data-table__th--sorted":u(S),"v-data-table__th--fixed":S.fixed},...w.value],style:{width:A(S.width),minWidth:A(S.minWidth),maxWidth:A(S.maxWidth),...h(S,p)},colspan:S.colspan,rowspan:S.rowspan,onClick:S.sortable?()=>n(S):void 0,fixed:S.fixed,nowrap:S.nowrap,lastFixed:S.lastFixed,noPadding:F},O),{default:()=>{var H;const M=`header.${S.key}`,Z={column:S,selectAll:i,isSorted:u,toggleSort:n,sortBy:r.value,someSelected:s.value,allSelected:o.value,getSortIcon:y};return t[M]?t[M](Z):S.key==="data-table-select"?((H=t["header.data-table-select"])==null?void 0:H.call(t,Z))??(m.value&&c(fe,{modelValue:o.value,indeterminate:s.value&&!o.value,"onUpdate:modelValue":i},null)):c("div",{class:"v-data-table-header__content"},[c("span",null,[S.title]),S.sortable&&!e.disableSort&&c(Se,{key:"icon",class:"v-data-table-header__sort-icon",icon:y(S)},null),e.multiSort&&u(S)&&c("div",{key:"badge",class:["v-data-table-header__sort-badge",...f.value],style:b.value},[r.value.findIndex(q=>q.key===S.key)+1])])}})},U=()=>{const I=_(e.headerProps??{}??{}),S=P(()=>v.value.filter(p=>(p==null?void 0:p.sortable)&&!e.disableSort)),T=P(()=>{if(v.value.find(F=>F.key==="data-table-select")!=null)return o.value?"$checkboxOn":s.value?"$checkboxIndeterminate":"$checkboxOff"});return c(ae,_({tag:"th",class:[...w.value],colspan:g.value.length+1},I),{default:()=>[c("div",{class:"v-data-table-header__content"},[c(Oe,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:S.value,label:a("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:T.value,"onClick:append":()=>i(!o.value)},{...t,chip:p=>{var F;return c(Ft,{onClick:(F=p.item.raw)!=null&&F.sortable?()=>n(p.item.raw):void 0,onMousedown:O=>{O.preventDefault(),O.stopPropagation()}},{default:()=>[p.item.title,c(Se,{class:["v-data-table__td-sort-icon",u(p.item.raw)&&"v-data-table__td-sort-icon-active"],icon:y(p.item.raw),size:"small"},null)]})}})])]})};W(()=>k.value?c("tr",null,[c(U,null,null)]):c(j,null,[t.headers?t.headers(V.value):g.value.map((I,S)=>c("tr",null,[I.map((T,p)=>c(z,{column:T,x:p,y:S},null))])),e.loading&&c("tr",{class:"v-data-table-progress"},[c("th",{colspan:v.value.length},[c(bt,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:t.loader})])])]))}}),oa=D({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ia=R()({name:"VDataTableGroupHeaderRow",props:oa(),setup(e,l){let{slots:t}=l;const{isGroupOpen:a,toggleGroup:n,extractRows:r}=Re(),{isSelected:u,isSomeSelected:s,select:o}=ne(),{columns:i}=re(),m=P(()=>r([e.item]));return()=>c("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[i.value.map(v=>{var g,x;if(v.key==="data-table-group"){const h=a(e.item)?"$expand":"$next",y=()=>n(e.item);return((g=t["data-table-group"])==null?void 0:g.call(t,{item:e.item,count:m.value.length,props:{icon:h,onClick:y}}))??c(ae,{class:"v-data-table-group-header-row__column"},{default:()=>[c(_e,{size:"small",variant:"text",icon:h,onClick:y},null),c("span",null,[e.item.value]),c("span",null,[Pe("("),m.value.length,Pe(")")])]})}if(v.key==="data-table-select"){const h=u(m.value),y=s(m.value)&&!h,f=b=>o(m.value,b);return((x=t["data-table-select"])==null?void 0:x.call(t,{props:{modelValue:h,indeterminate:y,"onUpdate:modelValue":f}}))??c("td",null,[c(fe,{modelValue:h,indeterminate:y,"onUpdate:modelValue":f},null)])}return c("td",null,null)})])}}),ca=D({index:Number,item:Object,cellProps:[Object,Function],onClick:se(),onContextmenu:se(),onDblclick:se(),...de()},"VDataTableRow"),da=R()({name:"VDataTableRow",props:ca(),setup(e,l){let{slots:t}=l;const{displayClasses:a,mobile:n}=ce(e,"v-data-table__tr"),{isSelected:r,toggleSelect:u,someSelected:s,allSelected:o,selectAll:i}=ne(),{isExpanded:m,toggleExpand:v}=$e(),{toggleSort:g,sortBy:x,isSorted:h}=We(),{columns:y}=re();W(()=>c("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},a.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&y.value.map((f,b)=>{const d=e.item,k=`item.${f.key}`,V=`header.${f.key}`,w={index:e.index,item:d.raw,internalItem:d,value:te(d.columns,f.key),column:f,isSelected:r,toggleSelect:u,isExpanded:m,toggleExpand:v},z={column:f,selectAll:i,isSorted:h,toggleSort:g,sortBy:x.value,someSelected:s.value,allSelected:o.value,getSortIcon:()=>""},U=typeof e.cellProps=="function"?e.cellProps({index:w.index,item:w.item,internalItem:w.internalItem,value:w.value,column:f}):e.cellProps,I=typeof f.cellProps=="function"?f.cellProps({index:w.index,item:w.item,internalItem:w.internalItem,value:w.value}):f.cellProps;return c(ae,_({align:f.align,class:{"v-data-table__td--expanded-row":f.key==="data-table-expand","v-data-table__td--select-row":f.key==="data-table-select"},fixed:f.fixed,fixedOffset:f.fixedOffset,lastFixed:f.lastFixed,maxWidth:n.value?void 0:f.maxWidth,noPadding:f.key==="data-table-select"||f.key==="data-table-expand",nowrap:f.nowrap,width:n.value?void 0:f.width},U,I),{default:()=>{var T,p,F,O,M;if(t[k]&&!n.value)return(T=t[k])==null?void 0:T.call(t,w);if(f.key==="data-table-select")return((p=t["item.data-table-select"])==null?void 0:p.call(t,w))??c(fe,{disabled:!d.selectable,modelValue:r([d]),onClick:we(()=>u(d),["stop"])},null);if(f.key==="data-table-expand")return((F=t["item.data-table-expand"])==null?void 0:F.call(t,w))??c(_e,{icon:m(d)?"$collapse":"$expand",size:"small",variant:"text",onClick:we(()=>v(d),["stop"])},null);const S=xt(w.value);return n.value?c(j,null,[c("div",{class:"v-data-table__td-title"},[((O=t[V])==null?void 0:O.call(t,z))??f.title]),c("div",{class:"v-data-table__td-value"},[((M=t[k])==null?void 0:M.call(t,w))??S])]):S}})})]))}}),Ye=D({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...de()},"VDataTableRows"),Te=R()({name:"VDataTableRows",inheritAttrs:!1,props:Ye(),setup(e,l){let{attrs:t,slots:a}=l;const{columns:n}=re(),{expandOnClick:r,toggleExpand:u,isExpanded:s}=$e(),{isSelected:o,toggleSelect:i}=ne(),{toggleGroup:m,isGroupOpen:v}=Re(),{t:g}=le(),{mobile:x}=ce(e);return W(()=>{var h,y;return e.loading&&(!e.items.length||a.loading)?c("tr",{class:"v-data-table-rows-loading",key:"loading"},[c("td",{colspan:n.value.length},[((h=a.loading)==null?void 0:h.call(a))??g(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?c("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[c("td",{colspan:n.value.length},[((y=a["no-data"])==null?void 0:y.call(a))??g(e.noDataText)])]):c(j,null,[e.items.map((f,b)=>{var V;if(f.type==="group"){const w={index:b,item:f,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:o,toggleSelect:i,toggleGroup:m,isGroupOpen:v};return a["group-header"]?a["group-header"](w):c(ia,_({key:`group-header_${f.id}`,item:f},pe(t,":group-header",()=>w)),a)}const d={index:b,item:f.raw,internalItem:f,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:o,toggleSelect:i},k={...d,props:_({key:`item_${f.key??f.index}`,onClick:r.value?()=>{u(f)}:void 0,index:b,item:f,cellProps:e.cellProps,mobile:x.value},pe(t,":row",()=>d),typeof e.rowProps=="function"?e.rowProps({item:d.item,index:d.index,internalItem:d.internalItem}):e.rowProps)};return c(j,{key:k.props.key},[a.item?a.item(k):c(da,k.props,a),s(f)&&((V=a["expanded-row"])==null?void 0:V.call(a,d))])})])}),{}}}),Ze=D({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Dt(),...pt(),...kt(),...wt()},"VTable"),Fe=R()({name:"VTable",props:Ze(),setup(e,l){let{slots:t,emit:a}=l;const{themeClasses:n}=St(e),{densityClasses:r}=Pt(e);return W(()=>c(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var u,s,o;return[(u=t.top)==null?void 0:u.call(t),t.default?c("div",{class:"v-table__wrapper",style:{height:A(e.height)}},[c("table",null,[t.default()])]):(s=t.wrapper)==null?void 0:s.call(t),(o=t.bottom)==null?void 0:o.call(t)]}})),{}}}),fa=D({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function ma(e,l,t,a){const n=e.returnObject?l:X(l,e.itemValue),r=X(l,e.itemSelectable,!0),u=a.reduce((s,o)=>(o.key!=null&&(s[o.key]=X(l,o.value)),s),{});return{type:"item",key:e.returnObject?X(l,e.itemValue):n,index:t,value:n,selectable:r,columns:u,raw:l}}function va(e,l,t){return l.map((a,n)=>ma(e,a,n,t))}function ga(e,l){return{items:P(()=>va(e,e.items,l.value))}}const ha=D({...Ye(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...At(),...Mt(),...ta(),...fa(),...qt(),...Jt(),...Xe(),...Ze()},"DataTable"),ba=D({...jt(),...ha(),...Bt(),...ze()},"VDataTable"),pa=R()({name:"VDataTable",props:ba(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:t,slots:a}=l;const{groupBy:n}=Rt(e),{sortBy:r,multiSort:u,mustSort:s}=Xt(e),{page:o,itemsPerPage:i}=Gt(e),{disableSort:m}=It(e),{columns:v,headers:g,sortFunctions:x,sortRawFunctions:h,filterFunctions:y}=sa(e,{groupBy:n,showSelect:B(e,"showSelect"),showExpand:B(e,"showExpand")}),{items:f}=ga(e,v),b=B(e,"search"),{filteredItems:d}=Ot(e,f,b,{transform:$=>$.columns,customKeyFilter:y}),{toggleSort:k}=Yt({sortBy:r,multiSort:u,mustSort:s,page:o}),{sortByWithGroups:V,opened:w,extractRows:z,isGroupOpen:U,toggleGroup:I}=Ht({groupBy:n,sortBy:r,disableSort:m}),{sortedItems:S}=Zt(e,d,V,{transform:$=>({...$.raw,...$.columns}),sortFunctions:x,sortRawFunctions:h}),{flatItems:T}=Nt(S,n,w),p=P(()=>T.value.length),{startIndex:F,stopIndex:O,pageCount:M,setItemsPerPage:Z}=Kt({page:o,itemsPerPage:i,itemsLength:p}),{paginatedItems:H}=zt({items:T,startIndex:F,stopIndex:O,itemsPerPage:i}),q=P(()=>z(H.value)),{isSelected:et,select:tt,selectAll:at,toggleSelect:lt,someSelected:nt,allSelected:rt}=Qt(e,{allItems:f,currentPage:q}),{isExpanded:ut,toggleExpand:st}=$t(e);Lt({page:o,itemsPerPage:i,sortBy:r,groupBy:n,search:b}),Tt({VDataTableRows:{hideNoData:B(e,"hideNoData"),noDataText:B(e,"noDataText"),loading:B(e,"loading"),loadingText:B(e,"loadingText")}});const C=P(()=>({page:o.value,itemsPerPage:i.value,sortBy:r.value,pageCount:M.value,toggleSort:k,setItemsPerPage:Z,someSelected:nt.value,allSelected:rt.value,isSelected:et,select:tt,selectAll:at,toggleSelect:lt,isExpanded:ut,toggleExpand:st,isGroupOpen:U,toggleGroup:I,items:q.value.map($=>$.raw),internalItems:q.value,groupedItems:H.value,columns:v.value,headers:g.value}));return W(()=>{const $=De.filterProps(e),ot=Ie.filterProps(e),it=Te.filterProps(e),ct=Fe.filterProps(e);return c(Fe,_({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},ct,{fixedHeader:e.fixedHeader||e.sticky}),{top:()=>{var Q;return(Q=a.top)==null?void 0:Q.call(a,C.value)},default:()=>{var Q,ve,ge,he,be,ye;return a.default?a.default(C.value):c(j,null,[(Q=a.colgroup)==null?void 0:Q.call(a,C.value),!e.hideDefaultHeader&&c("thead",{key:"thead"},[c(Ie,ot,a)]),(ve=a.thead)==null?void 0:ve.call(a,C.value),!e.hideDefaultBody&&c("tbody",null,[(ge=a["body.prepend"])==null?void 0:ge.call(a,C.value),a.body?a.body(C.value):c(Te,_(t,it,{items:H.value}),a),(he=a["body.append"])==null?void 0:he.call(a,C.value)]),(be=a.tbody)==null?void 0:be.call(a,C.value),(ye=a.tfoot)==null?void 0:ye.call(a,C.value)])},bottom:()=>a.bottom?a.bottom(C.value):!e.hideDefaultFooter&&c(j,null,[c(Vt,null,null),c(De,$,{prepend:a["footer.prepend"]})])})}),{}}});export{pa as V};
