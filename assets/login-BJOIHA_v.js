import{ak as A,S as $,W as T,Z as F,R as P,a8 as R,a2 as q,$ as B,Y as l,L as o,a6 as m,a4 as p,aF as C,a0 as s,aE as g,a7 as I,a3 as L}from"./index-DmVHqK86.js";import{c as M,a as f,u as N,e as b}from"./index.esm-Da0F1db-.js";import{v as U}from"./index-NaHXii0j.js";import{b as V}from"./route-block-B_A1xBdJ.js";import{a as D,b as v,V as E}from"./VRow-w2TbxwqS.js";import{V as j}from"./VDivider-CosHWVEo.js";import{V as W}from"./VForm-Cl_C5upl.js";const Y={class:"text-center"},Z={class:"text-center"},h={__name:"login",setup(z){const{t:e}=$(),{api:w}=R(),c=T(),_=F(),x=P(),S=M({account:f().required(e("api.userAccountRequired")).min(4,e("api.userAccountTooShort")).max(20,e("api.userAccountTooLong")).test("isAlphanumeric",e("api.userAccountInvalid"),a=>U.isAlphanumeric(a)),password:f().required(e("api.userPasswordRequired")).min(4,e("api.userPasswordTooShort")).max(20,e("api.userPasswordTooLong"))}),{handleSubmit:k,isSubmitting:d}=N({validationSchema:S}),u=b("account"),i=b("password"),y=k(async a=>{var t,r;try{const{data:n}=await w.post("/user/login",{account:a.account,password:a.password});x.login(n.result),c({text:e("login.success"),snackbarProps:{color:"green"}}),_.push("/")}catch(n){console.log(n),c({text:e("api."+(((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.message)||"unknownError")),snackbarProps:{color:"red"}})}});return(a,t)=>(B(),q(E,null,{default:l(()=>[o(D,{justify:"center"},{default:l(()=>[o(v,{cols:"6"},{default:l(()=>[m("h1",Y,p(a.$t("nav.login")),1)]),_:1}),o(j),o(v,{cols:"12",sm:"4"},{default:l(()=>[o(W,{disabled:s(d),onSubmit:C(s(y),["prevent"])},{default:l(()=>[o(g,{modelValue:s(u).value.value,"onUpdate:modelValue":t[0]||(t[0]=r=>s(u).value.value=r),"error-messages":s(u).errorMessage.value,label:a.$t("user.account"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),o(g,{modelValue:s(i).value.value,"onUpdate:modelValue":t[1]||(t[1]=r=>s(i).value.value=r),type:"password","error-messages":s(i).errorMessage.value,label:a.$t("user.password"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),m("div",Z,[o(I,{loading:s(d),type:"submit",color:"green"},{default:l(()=>[L(p(a.$t("login.submit")),1)]),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}};typeof V=="function"&&V(h);const ee=A(h,[["__scopeId","data-v-e1ec8280"]]);export{ee as default};
