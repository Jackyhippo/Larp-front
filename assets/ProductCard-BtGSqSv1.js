import{_ as f,a2 as o,$ as s,Y as t,L as e,V as m,aT as g,a3 as a,a4 as n,aY as d,a5 as i,aU as y,a6 as c,aS as S}from"./index-DhmPxDvU.js";const b={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},image:{type:String,default:""},description:{type:String,default:""},category:{type:String,default:""},difficulty:{type:String,default:""},players:{type:Number,default:0},location:{type:String,default:""}},setup(l){return(V,u)=>{const r=f("router-link");return s(),o(S,null,{default:t(()=>[e(m,{src:l.image,height:"200",cover:""},null,8,["src"]),e(g,null,{default:t(()=>[e(r,{to:"/product/"+l._id},{default:t(()=>[a(n(l.name),1)]),_:1},8,["to"])]),_:1}),e(d,null,{default:t(()=>[e(i,null,{default:t(()=>u[0]||(u[0]=[a("mdi-bookshelf")])),_:1}),a(" "+n(l.category),1)]),_:1}),e(d,null,{default:t(()=>[e(i,null,{default:t(()=>u[1]||(u[1]=[a("mdi-currency-usd")])),_:1}),a(" "+n(l.price),1)]),_:1}),e(d,null,{default:t(()=>[e(i,null,{default:t(()=>u[2]||(u[2]=[a("mdi-head-lightbulb")])),_:1}),a(" "+n(l.difficulty),1)]),_:1}),e(d,null,{default:t(()=>[e(i,null,{default:t(()=>u[3]||(u[3]=[a("mdi-account-group")])),_:1}),a(" "+n(l.players),1)]),_:1}),e(d,null,{default:t(()=>[e(i,null,{default:t(()=>u[4]||(u[4]=[a("mdi-map-marker")])),_:1}),a(" "+n(l.location),1)]),_:1}),e(y,null,{default:t(()=>[c("span",null,n(l.description&&l.description.length>20?l.description.substring(0,20)+"...":l.description),1)]),_:1})]),_:1})}}};export{b as _};
