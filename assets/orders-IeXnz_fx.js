import{S as y,W as V,v as h,c as g,a2 as v,$ as n,Y as o,L as s,a6 as d,a4 as l,X as u,P as b,a1 as w,a8 as x}from"./index-Cm7_cx15.js";import{b as p}from"./route-block-B_A1xBdJ.js";import{a as A,b as m,V as D}from"./VRow-CKhcj0fS.js";import{V as B}from"./VDivider-CXKQV0dB.js";import{V as S}from"./VDataTable-BD6KHpfK.js";import"./VPagination-DJGvyzdT.js";import"./VSelect-D9e9B6m0.js";import"./VList-DWF9D-pQ.js";import"./VMenu-dzlEDb9I.js";import"./VCheckboxBtn-DOy8uNY-.js";const C={class:"text-center"},L={__name:"orders",setup(O){const{apiAuth:f}=x(),{t:a}=y(),_=V(),i=h([]),k=g(()=>[{title:"ID",key:"_id"},{title:a("order.account"),key:"user.account"},{title:a("order.createdAt"),key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:a("order.cart"),key:"cart",sortable:!1},{title:a("order.price"),key:"price",value:t=>t.cart.reduce((r,e)=>r+e.product.price*e.quantity,0)}]);return(async()=>{var t,r;try{const{data:e}=await f.get("/order/all");i.value=e.result}catch(e){console.log(e),_({text:a("api."+(((r=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:r.message)||"unknownError")),snackbarProps:{color:"red"}})}})(),(t,r)=>(n(),v(D,null,{default:o(()=>[s(A,null,{default:o(()=>[s(m,{cols:"12"},{default:o(()=>[d("h1",C,l(t.$t("nav.adminOrders")),1)]),_:1}),s(B),s(m,{cols:"12"},{default:o(()=>[s(S,{items:i.value,headers:k.value},{"item.cart":o(e=>[d("ul",null,[(n(!0),u(b,null,w(e.item.cart,c=>(n(),u("li",{key:c._id},l(c.product.name)+" ： "+l(c.product.price),1))),128))])]),_:2},1032,["items","headers"])]),_:1})]),_:1})]),_:1}))}};typeof p=="function"&&p(L);export{L as default};
