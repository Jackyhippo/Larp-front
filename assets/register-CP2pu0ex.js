import{ak as I,S as N,W as O,Z as L,v as w,a8 as j,a2 as D,$ as Z,Y as u,L as r,a6 as $,a4 as c,aR as A,a0 as e,aQ as t,a7 as y,a3 as C,aK as z,bZ as K}from"./index-BMJgFNGR.js";import{c as Q,a as V,g as W,u as Y,e as b,V as U}from"./index.esm-DKkAaIMC.js";import{v as q}from"./index-BG_sk6k5.js";import{b as x}from"./route-block-B_A1xBdJ.js";import{a as G,b as S,V as H}from"./VRow-CPOOV4qi.js";import{V as J}from"./VDivider-D7u7hL_A.js";import{V as X}from"./VCheckbox-CcbPZjPu.js";import"./VCheckboxBtn-CEUlY6vz.js";const _={class:"text-center"},ee={class:"text-center"},ae={class:"text-center"},R={__name:"register",setup(se){const{t:o}=N(),{api:P}=j(),M=O(),T=L(),E=Q({account:V().required(o("api.userAccountRequired")).min(4,o("api.userAccountTooShort")).max(20,o("api.userAccountTooLong")).test("isAlphanumeric",o("api.userAccountInvalid"),l=>q.isAlphanumeric(l)),email:V().required(o("api.userEmailRequired")).test("isEmail",o("api.userEmailInvalid"),l=>q.isEmail(l)),password:V().required(o("api.userPasswordRequired")).min(4,o("api.userPasswordTooShort")).max(20,o("api.userPasswordTooLong")),passwordConfirm:V().required(o("api.passwordConfirmRequired")).oneOf([W("password")],o("api.userPasswordNotMatch"))}),{handleSubmit:B,isSubmitting:p}=Y({validationSchema:E}),n=b("account"),i=b("email"),d=b("password"),m=b("passwordConfirm"),f=w(!1),h=w(!0),v=w(!1),F=()=>{v.value=!v.value},k=B(async l=>{var s,a;try{await P.post("/user",{account:l.account,email:l.email,password:l.password,role:f.value?1:0}),M({text:o("register.success"),snackbarProps:{color:"green"}}),T.push("/login")}catch(g){console.log(g),M({text:o("api."+(((a=(s=g==null?void 0:g.response)==null?void 0:s.data)==null?void 0:a.message)||"unknownError")),snackbarProps:{color:"red"}})}});return(l,s)=>(Z(),D(H,null,{default:u(()=>[r(G,{justify:"center"},{default:u(()=>[r(S,{cols:"6"},{default:u(()=>[$("h1",_,c(l.$t("nav.register")),1)]),_:1}),r(J),r(S,{cols:"6",sm:"4"},{default:u(()=>[r(U,{disabled:e(p),onSubmit:A(e(k),["prevent"])},{default:u(()=>[r(t,{modelValue:e(n).value.value,"onUpdate:modelValue":s[0]||(s[0]=a=>e(n).value.value=a),"error-messages":e(n).errorMessage.value,label:l.$t("user.account"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),r(t,{modelValue:e(i).value.value,"onUpdate:modelValue":s[1]||(s[1]=a=>e(i).value.value=a),"error-messages":e(i).errorMessage.value,label:l.$t("user.email")},null,8,["modelValue","error-messages","label"]),r(t,{modelValue:e(d).value.value,"onUpdate:modelValue":s[2]||(s[2]=a=>e(d).value.value=a),type:"password","error-messages":e(d).errorMessage.value,label:l.$t("user.password"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),r(t,{modelValue:e(m).value.value,"onUpdate:modelValue":s[3]||(s[3]=a=>e(m).value.value=a),type:"password","error-messages":e(m).errorMessage.value,label:l.$t("user.passwordConfirm"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),$("div",ee,[r(y,{loading:e(p),type:"submit",color:"green"},{default:u(()=>[C(c(l.$t("register.submit")),1)]),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1}),r(S,{cols:"6",sm:"4",class:"position-relative"},{default:u(()=>[r(z,{modelValue:h.value,"onUpdate:modelValue":s[4]||(s[4]=a=>h.value=a),contained:"",persistent:"",class:K(["admin-overlay d-flex align-center justify-center",{"move-left":v.value}])},{default:u(()=>[r(y,{onClick:F},{default:u(()=>[C(c(v.value?"成為一般會員":"想成為管理員"),1)]),_:1})]),_:1},8,["modelValue","class"]),r(U,{disabled:e(p),onSubmit:A(e(k),["prevent"])},{default:u(()=>[r(t,{modelValue:e(n).value.value,"onUpdate:modelValue":s[5]||(s[5]=a=>e(n).value.value=a),"error-messages":e(n).errorMessage.value,label:l.$t("user.account"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),r(t,{modelValue:e(i).value.value,"onUpdate:modelValue":s[6]||(s[6]=a=>e(i).value.value=a),"error-messages":e(i).errorMessage.value,label:l.$t("user.email")},null,8,["modelValue","error-messages","label"]),r(t,{modelValue:e(d).value.value,"onUpdate:modelValue":s[7]||(s[7]=a=>e(d).value.value=a),type:"password","error-messages":e(d).errorMessage.value,label:l.$t("user.password"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),r(t,{modelValue:e(m).value.value,"onUpdate:modelValue":s[8]||(s[8]=a=>e(m).value.value=a),type:"password","error-messages":e(m).errorMessage.value,label:l.$t("user.passwordConfirm"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),r(X,{modelValue:f.value,"onUpdate:modelValue":s[9]||(s[9]=a=>f.value=a),label:l.$t("user.isAdmin"),rules:[a=>a===!0||l.$t("api.userAdminRequired")]},null,8,["modelValue","label","rules"]),$("div",ae,[r(y,{loading:e(p),type:"submit",color:"green"},{default:u(()=>[C(c(l.$t("register.submit")),1)]),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}};typeof x=="function"&&x(R);const me=I(R,[["__scopeId","data-v-f20bddf4"]]);export{me as default};
