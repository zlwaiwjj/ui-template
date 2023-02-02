import{u as D}from"./vue-i18n.runtime.esm-bundler-789c3ea9.js";import{M as u}from"./motion-4c285644.js";import{m as k}from"./message-ceee817c.js";import{u as x,a as E}from"./verifyCode-d10a32c0.js";import{c as p,$ as f,o as N}from"./index-b4c37bb4.js";import{u as m}from"./hooks-57129334.js";import{d as h}from"./lock-fill-bf46ba8d.js";import{d as T}from"./iphone-bcaa848c.js";import{d as z}from"./user-3-fill-697da25a.js";import{h as F,r as C,J as I,a3 as c,j,v as A,x as o,D as l,u as e,l as M,B as g,C as _}from"./runtime-core.esm-bundler-1f6332ae.js";const q={class:"w-full flex justify-between"},ee=F({__name:"regist",setup(G){const{t}=D(),V=C(!1),i=C(!1),s=I({username:"",phone:"",verifyCode:"",password:"",repeatPassword:""}),v=C(),{isDisabled:R,text:b}=x(),U=[{validator:(y,a,n)=>{a===""?n(new Error(p(f("login.passwordSureReg")))):s.password!==a?n(new Error(p(f("login.passwordDifferentReg")))):n()},trigger:"blur"}],P=async y=>{i.value=!0,y&&await y.validate((a,n)=>{if(a)V.value?setTimeout(()=>{k(p(f("login.registerSuccess")),{type:"success"}),i.value=!1},2e3):(i.value=!1,k(p(f("login.tickPrivacy")),{type:"warning"}));else return i.value=!1,n})};function $(){x().end(),N().SET_CURRENTPAGE(0)}return(y,a)=>{const n=c("el-input"),d=c("el-form-item"),w=c("el-button"),B=c("el-checkbox"),S=c("el-form");return j(),A(S,{ref_key:"ruleFormRef",ref:v,model:s,rules:e(E),size:"large"},{default:o(()=>[l(e(u),null,{default:o(()=>[l(d,{rules:[{required:!0,message:e(p)(e(f)("login.usernameReg")),trigger:"blur"}],prop:"username"},{default:o(()=>[l(n,{clearable:"",modelValue:s.username,"onUpdate:modelValue":a[0]||(a[0]=r=>s.username=r),placeholder:e(t)("login.username"),"prefix-icon":e(m)(e(z))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"])]),_:1}),l(e(u),{delay:100},{default:o(()=>[l(d,{prop:"phone"},{default:o(()=>[l(n,{clearable:"",modelValue:s.phone,"onUpdate:modelValue":a[1]||(a[1]=r=>s.phone=r),placeholder:e(t)("login.phone"),"prefix-icon":e(m)(e(T))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(u),{delay:150},{default:o(()=>[l(d,{prop:"verifyCode"},{default:o(()=>[M("div",q,[l(n,{clearable:"",modelValue:s.verifyCode,"onUpdate:modelValue":a[2]||(a[2]=r=>s.verifyCode=r),placeholder:e(t)("login.smsVerifyCode"),"prefix-icon":e(m)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),l(w,{disabled:e(R),class:"ml-2",onClick:a[3]||(a[3]=r=>e(x)().start(v.value,"phone"))},{default:o(()=>[g(_(e(b).length>0?e(b)+e(t)("login.info"):e(t)("login.getVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),l(e(u),{delay:200},{default:o(()=>[l(d,{prop:"password"},{default:o(()=>[l(n,{clearable:"","show-password":"",modelValue:s.password,"onUpdate:modelValue":a[4]||(a[4]=r=>s.password=r),placeholder:e(t)("login.password"),"prefix-icon":e(m)(e(h))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(u),{delay:250},{default:o(()=>[l(d,{rules:U,prop:"repeatPassword"},{default:o(()=>[l(n,{clearable:"","show-password":"",modelValue:s.repeatPassword,"onUpdate:modelValue":a[5]||(a[5]=r=>s.repeatPassword=r),placeholder:e(t)("login.sure"),"prefix-icon":e(m)(e(h))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(u),{delay:300},{default:o(()=>[l(d,null,{default:o(()=>[l(B,{modelValue:V.value,"onUpdate:modelValue":a[6]||(a[6]=r=>V.value=r)},{default:o(()=>[g(_(e(t)("login.readAccept")),1)]),_:1},8,["modelValue"]),l(w,{link:"",type:"primary"},{default:o(()=>[g(_(e(t)("login.privacyPolicy")),1)]),_:1})]),_:1})]),_:1}),l(e(u),{delay:350},{default:o(()=>[l(d,null,{default:o(()=>[l(w,{class:"w-full",size:"default",type:"primary",loading:i.value,onClick:a[7]||(a[7]=r=>P(v.value))},{default:o(()=>[g(_(e(t)("login.definite")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),l(e(u),{delay:400},{default:o(()=>[l(d,null,{default:o(()=>[l(w,{class:"w-full",size:"default",onClick:$},{default:o(()=>[g(_(e(t)("login.back")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{ee as _};