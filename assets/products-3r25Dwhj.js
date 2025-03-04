import{g as le,p as oe,q as re,r as se,ay as ie,c,v as C,M as W,A as ue,az as j,L as o,aA as ne,aB as de,aC as ce,ak as pe,S as me,W as ve,aD as ge,a8 as fe,_ as Ve,X as ye,$ as J,Y as s,a6 as L,a4 as p,an as be,ao as xe,a7 as B,a3 as b,a2 as ke,am as Pe,a5 as Ce,V as $e,al as Se,aE as N,aF as we,a0 as r,aG as qe,aH as Ae,aI as Re,aJ as De,aK as Oe,P as Ue}from"./index-DmVHqK86.js";import{c as Me,a as x,b as Te,d as he,u as Fe,e as v}from"./index.esm-Da0F1db-.js";import{b as K}from"./route-block-B_A1xBdJ.js";import{a as Ie,b as X,V as Be}from"./VRow-w2TbxwqS.js";import{V as ze}from"./VDivider-CosHWVEo.js";import{V as Ee}from"./VDataTable-DbbKf9P1.js";import{V as Le}from"./VToolbar-BJI7kaF3.js";import{V as Ne}from"./VForm-Cl_C5upl.js";import{V as w}from"./VSelect-uRTf8U4_.js";import{V as Ge}from"./VCheckbox-BgdYWUrR.js";import{V as He}from"./VTextarea-DBfLbMie.js";import"./VPagination-Byn5LPhz.js";import"./VChip-BOb5jj0S.js";import"./VCheckboxBtn-BgjCsuWu.js";import"./VList-CbSjJOY2.js";import"./VMenu-CxrYZI7z.js";const We=oe({id:String,text:String,...de(ce({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),je=le()({name:"VTooltip",props:We(),emits:{"update:modelValue":i=>!0},setup(i,a){let{slots:g}=a;const f=re(i,"modelValue"),{scopeId:k}=se(),$=ie(),q=c(()=>i.id||`v-tooltip-${$}`),S=C(),n=c(()=>i.location.split(" ").length>1?i.location:i.location+" center"),A=c(()=>i.origin==="auto"||i.origin==="overlap"||i.origin.split(" ").length>1||i.location.split(" ").length>1?i.origin:i.origin+" center"),R=c(()=>i.transition?i.transition:f.value?"scale-transition":"fade-transition"),z=c(()=>W({"aria-describedby":q.value},i.activatorProps));return ue(()=>{const E=j.filterProps(i);return o(j,W({ref:S,class:["v-tooltip",i.class],style:i.style,id:q.value},E,{modelValue:f.value,"onUpdate:modelValue":V=>f.value=V,transition:R.value,absolute:!0,location:n.value,origin:A.value,persistent:!0,role:"tooltip",activatorProps:z.value,_disableGlobalStack:!0},k),{activator:g.activator,default:function(){var y;for(var V=arguments.length,D=new Array(V),m=0;m<V;m++)D[m]=arguments[m];return((y=g.default)==null?void 0:y.call(g,...D))??i.text}})}),ne({},S)}}),Je={class:"text-center"},Ke={class:"tooltip-content"},Y={__name:"products",setup(i){const{t:a}=me(),{apiAuth:g}=fe(),f=ve(),k=ge([]),$=C(""),q=c(()=>[{title:a("product.name"),key:"name",sortable:!0},{title:a("product.image"),key:"image",sortable:!1},{title:a("product.description"),key:"description",sortable:!0},{title:a("product.price"),key:"price",sortable:!0},{title:a("product.category"),key:"category",sortable:!0},{title:a("product.difficulty"),key:"difficulty",sortable:!1},{title:a("product.players"),key:"players",sortable:!1},{title:a("product.location"),key:"location",sortable:!1},{title:a("product.sell"),key:"sell",sortable:!0},{title:a("product.createdAt"),key:"createdAt",sortable:!0},{title:a("product.updatedAt"),key:"updatedAt",sortable:!0},{title:a("adminProduct.edit"),key:"edit",sortable:!1}]),S=async()=>{var t,l;try{const{data:d}=await g.get("/product/all");k.push(...d.result)}catch(d){console.log(d),f({text:a("api."+(((l=(t=d==null?void 0:d.response)==null?void 0:t.data)==null?void 0:l.message)||"unknownError")),snackbarProps:{color:"red"}})}};S();const n=C({open:!1,id:""}),A=t=>{t&&(n.value.id=t._id,m.value.value=t.name,y.value.value=t.price,O.value.value=t.description,U.value.value=t.category,M.value.value=t.sell,T.value.value=t.difficulty,h.value.value=t.players,F.value.value=t.location,I.value.value=t.dressCode),n.value.open=!0},R=()=>{D(),n.value.id="",n.value.open=!1,G.value.deleteFileRecord()},z=Me({name:x().required(a("api.productNameRequired")),price:he().typeError(a("api.productPriceRequired")).required(a("api.productPriceRequired")).min(0,a("api.productPriceTooSmall")),description:x().required(a("api.productDescriptionRequired")),category:x().required(a("api.productCategoryRequired")).oneOf(["硬核推理","情感沈浸","恐怖驚悚","機制陣營","歡樂搞笑","真相還原"],a("api.productCategoryInvalid")),sell:Te().required(a("api.productSellRequired")),difficulty:x().required(a("api.productDifficultyRequired")).oneOf(["新手入門","新手進階","中等難度","中等偏難","高手挑戰"],a("api.productDifficultyInvalid")),players:x().required(a("api.productPlayersRequired")).oneOf(["3人","4人","5人","6人","7人","8人","9人","10人以上"],a("api.productPlayersInvalid")),location:x().required(a("api.productLocationRequired")).oneOf(["台北市","新北市","桃園市","新竹縣/市","台中市","台南市","高雄市"],a("api.productLocationInvalid")),dressCode:x().required(a("api.productDressCodeRequired")).oneOf(["需換裝","不需換裝"],a("api.productDressCodeInvalid"))}),{handleSubmit:E,isSubmitting:V,resetForm:D}=Fe({validationSchema:z,initialValues:{name:"",price:0,description:"",category:"",sell:!1,difficulty:"",players:"",location:"",dressCode:""}}),m=v("name"),y=v("price"),O=v("description"),U=v("category"),M=v("sell"),T=v("difficulty"),h=v("players"),F=v("location"),I=v("dressCode"),Q=c(()=>[{text:"硬核推理",value:"硬核推理"},{text:"情感沈浸",value:"情感沈浸"},{text:"恐怖驚悚",value:"恐怖驚悚"},{text:"機制陣營",value:"機制陣營"},{text:"歡樂搞笑",value:"歡樂搞笑"},{text:"真相還原",value:"真相還原"}]),Z=c(()=>[{text:"新手入門",value:"新手入門"},{text:"新手進階",value:"新手進階"},{text:"中等難度",value:"中等難度"},{text:"中等偏難",value:"中等偏難"},{text:"高手挑戰",value:"高手挑戰"}]),_=c(()=>[{text:"3人",value:"3人"},{text:"4人",value:"4人"},{text:"5人",value:"5人"},{text:"6人",value:"6人"},{text:"7人",value:"7人"},{text:"8人",value:"8人"},{text:"9人",value:"9人"},{text:"10人以上",value:"10人以上"}]),ee=c(()=>[{text:"台北市",value:"台北市"},{text:"新北市",value:"新北市"},{text:"桃園市",value:"桃園市"},{text:"新竹縣/市",value:"新竹縣/市"},{text:"台中市",value:"台中市"},{text:"台南市",value:"台南市"},{text:"高雄市",value:"高雄市"}]),te=c(()=>[{text:"需換裝",value:"需換裝"},{text:"不需換裝",value:"不需換裝"}]),G=C(null),P=C([]),H=C([]),ae=E(async t=>{var l,d,e;if(!((l=P.value[0])!=null&&l.error)){if(n.value.id.length===0&&P.value.length===0){f({text:a("api.productImageRequired"),snackbarProps:{color:"red"}});return}try{const u=new FormData;u.append("name",t.name),u.append("price",t.price),u.append("description",t.description),u.append("category",t.category),u.append("sell",t.sell),u.append("difficulty",t.difficulty),u.append("players",t.players),u.append("location",t.location),u.append("dressCode",t.dressCode),P.value.length>0&&u.append("image",P.value[0].file),n.value.id.length>0?await g.patch("/product/"+n.value.id,u):await g.post("/product",u),k.splice(0,k.length),S(),f({text:a(n.value.id.length>0?"adminProduct.editSuccess":"adminProduct.newSuccess"),snackbarProps:{color:"green"}}),R()}catch(u){console.log(u),f({text:a("api."+(((e=(d=u==null?void 0:u.response)==null?void 0:d.data)==null?void 0:e.message)||"unknownError")),snackbarProps:{color:"red"}})}}});return(t,l)=>{const d=Ve("VueFileAgent");return J(),ye(Ue,null,[o(Be,null,{default:s(()=>[o(Ie,null,{default:s(()=>[o(X,{cols:"12"},{default:s(()=>[L("h1",Je,p(t.$t("nav.adminProducts")),1)]),_:1}),o(ze),o(X,{cols:"12"},{default:s(()=>[o(Ee,{items:k,headers:q.value,search:$.value},{top:s(()=>[o(Le,null,{default:s(()=>[o(B,{"prepend-icon":"mdi-book-edit",onClick:l[0]||(l[0]=e=>A(null))},{default:s(()=>[b(p(t.$t("adminProduct.new")),1)]),_:1}),o(Se),o(N,{modelValue:$.value,"onUpdate:modelValue":l[1]||(l[1]=e=>$.value=e),"prepend-inner-icon":"mdi-magnify",variant:"underlined"},null,8,["modelValue"])]),_:1})]),"item.image":s(({value:e})=>[o($e,{src:e,height:"70"},null,8,["src"])]),"item.sell":s(({value:e})=>[e?(J(),ke(Ce,{key:0,icon:"mdi-check"})):Pe("",!0)]),"item.createdAt":s(({value:e})=>[b(p(new Date(e).toLocaleDateString()),1)]),"item.updatedAt":s(({value:e})=>[b(p(new Date(e).toLocaleDateString()),1)]),"item.category":s(({value:e})=>[b(p(e),1)]),"item.edit":s(({item:e})=>[o(B,{icon:"mdi-pencil",variant:"text",onClick:u=>A(e)},null,8,["onClick"])]),"item.description":s(({value:e})=>[o(je,{location:"bottom",style:{"max-width":"900px"}},{activator:s(({props:u})=>[L("span",be(xe(u)),p(e.length>20?e.substring(0,20)+"...":e),17)]),default:s(()=>[L("div",Ke,p(e),1)]),_:2},1024)]),_:2},1032,["items","headers","search"])]),_:1})]),_:1})]),_:1}),o(Oe,{modelValue:n.value.open,"onUpdate:modelValue":l[13]||(l[13]=e=>n.value.open=e),persistent:"","max-width":"600"},{default:s(()=>[o(Ne,{disabled:r(V),onSubmit:we(r(ae),["prevent"])},{default:s(()=>[o(qe,null,{default:s(()=>[o(Ae,null,{default:s(()=>[b(p(t.$t(n.value.id?"adminProduct.edit":"adminProduct.new")),1)]),_:1}),o(Re,null,{default:s(()=>[o(N,{modelValue:r(m).value.value,"onUpdate:modelValue":l[2]||(l[2]=e=>r(m).value.value=e),label:t.$t("product.name"),"error-messages":r(m).errorMessage.value},null,8,["modelValue","label","error-messages"]),o(N,{modelValue:r(y).value.value,"onUpdate:modelValue":l[3]||(l[3]=e=>r(y).value.value=e),label:t.$t("product.price"),"error-messages":r(y).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","label","error-messages"]),o(w,{modelValue:r(U).value.value,"onUpdate:modelValue":l[4]||(l[4]=e=>r(U).value.value=e),"error-messages":r(U).errorMessage.value,items:Q.value,label:t.$t("product.category"),"item-title":"text","item-value":"value"},null,8,["modelValue","error-messages","items","label"]),o(w,{modelValue:r(T).value.value,"onUpdate:modelValue":l[5]||(l[5]=e=>r(T).value.value=e),"error-messages":r(T).errorMessage.value,items:Z.value,label:t.$t("product.difficulty"),"item-title":"text","item-value":"value"},null,8,["modelValue","error-messages","items","label"]),o(w,{modelValue:r(h).value.value,"onUpdate:modelValue":l[6]||(l[6]=e=>r(h).value.value=e),"error-messages":r(h).errorMessage.value,items:_.value,label:t.$t("product.players"),"item-title":"text","item-value":"value"},null,8,["modelValue","error-messages","items","label"]),o(w,{modelValue:r(F).value.value,"onUpdate:modelValue":l[7]||(l[7]=e=>r(F).value.value=e),"error-messages":r(F).errorMessage.value,items:ee.value,label:t.$t("product.location"),"item-title":"text","item-value":"value"},null,8,["modelValue","error-messages","items","label"]),o(w,{modelValue:r(I).value.value,"onUpdate:modelValue":l[8]||(l[8]=e=>r(I).value.value=e),"error-messages":r(I).errorMessage.value,items:te.value,label:t.$t("product.dressCode"),"item-title":"text","item-value":"value"},null,8,["modelValue","error-messages","items","label"]),o(Ge,{modelValue:r(M).value.value,"onUpdate:modelValue":l[9]||(l[9]=e=>r(M).value.value=e),label:t.$t("product.onSell"),"error-messages":r(M).errorMessage.value},null,8,["modelValue","label","error-messages"]),o(He,{modelValue:r(O).value.value,"onUpdate:modelValue":l[10]||(l[10]=e=>r(O).value.value=e),label:t.$t("product.description"),"error-messages":r(O).errorMessage.value},null,8,["modelValue","label","error-messages"]),o(d,{ref_key:"fileAgent",ref:G,modelValue:P.value,"onUpdate:modelValue":l[11]||(l[11]=e=>P.value=e),"raw-model-value":H.value,"onUpdate:rawModelValue":l[12]||(l[12]=e=>H.value=e),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":t.$t("fileAgent.helpText"),"error-text":{type:t.$t("fileAgent.errorType"),size:t.$t("fileAgent.errorSize")}},null,8,["modelValue","raw-model-value","help-text","error-text"])]),_:1}),o(De,null,{default:s(()=>[o(B,{onClick:R},{default:s(()=>[b(p(t.$t("adminProduct.cancel")),1)]),_:1}),o(B,{type:"submit",loading:r(V)},{default:s(()=>[b(p(t.$t("adminProduct.submit")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};typeof K=="function"&&K(Y);const ct=pe(Y,[["__scopeId","data-v-34d52bdc"]]);export{ct as default};
