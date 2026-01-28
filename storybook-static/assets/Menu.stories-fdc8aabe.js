import{d as ee,D as ne,o as l,b as c,e as R,F as P,m as te,n as E,p as oe,f as T,k as g,j as z,z as D,C as Y,B as se,t as ae}from"./vue.esm-bundler-1418c22f.js";const ie={class:"menu__list"},re={key:0,class:"menu__separator",role:"separator"},le=["aria-disabled","onClick","onKeydown"],ce={class:"menu__item-label"},x=ee({name:"FtpMenu",__name:"Menu",props:{model:{default:()=>[]},popup:{type:Boolean,default:!1}},emits:["item-click","show","hide"],setup(a,{expose:X,emit:$}){const u=a,w=$,p=g(null),d=g(!1),_=g(null),f=g({top:0,left:0}),C=g(0),A=z(()=>[u.popup&&"menu--popup",d.value&&"menu--visible"].filter(Boolean).join(" ")),O=z(()=>u.popup?{top:`${f.value.top}px`,left:`${f.value.left}px`}:{}),b=(n,e)=>{e.disabled||(w("item-click",{originalEvent:n,item:e}),typeof e.command=="function"&&e.command({originalEvent:n,item:e}),u.popup&&i())},L=n=>{u.popup&&(_.value=n.currentTarget||n.target,C.value=window.scrollY,q(n),d.value=!0,w("show"),D(()=>{document.addEventListener("click",y),document.addEventListener("keydown",k),window.addEventListener("scroll",M,!0)}))},i=()=>{u.popup&&(d.value=!1,w("hide"),document.removeEventListener("click",y),document.removeEventListener("keydown",k),window.removeEventListener("scroll",M,!0))},U=n=>{d.value?i():L(n)},q=n=>{var B;const e=((B=n.currentTarget)==null?void 0:B.getBoundingClientRect())||{top:n.clientY,bottom:n.clientY,left:n.clientX,right:n.clientX},t=8,r=4;let o=e.bottom+r,m=e.left;f.value={top:o,left:m},D(()=>{if(!p.value)return;const s=p.value.getBoundingClientRect(),I=window.innerWidth,S=window.innerHeight,G=S-e.bottom-t,J=e.top-t;s.height<=G?o=e.bottom+r:s.height<=J?o=e.top-s.height-r:o=Math.max(t,Math.min(e.bottom+r,S-s.height-t));const Q=I-e.left-t,Z=e.right-t;s.width<=Q?m=e.left:s.width<=Z?m=e.right-s.width:m=Math.max(t,Math.min(e.left,I-s.width-t)),f.value={top:o,left:m}})},y=n=>{var e;p.value&&!p.value.contains(n.target)&&_.value!==n.target&&!((e=_.value)!=null&&e.contains(n.target))&&i()},k=n=>{n.key==="Escape"&&i()},M=()=>{Math.abs(window.scrollY-C.value)>15&&i()};return ne(()=>{document.removeEventListener("click",y),document.removeEventListener("keydown",k),window.removeEventListener("scroll",M,!0)}),X({show:L,hide:i,toggle:U}),(n,e)=>!a.popup||d.value?(l(),c("div",{key:0,ref_key:"menuRef",ref:p,class:E(["menu",A.value]),role:"menu",style:oe(O.value)},[R("ul",ie,[(l(!0),c(P,null,te(a.model,(t,r)=>(l(),c(P,{key:r},[t.separator?(l(),c("li",re)):(l(),c("li",{key:1,class:E(["menu__item",{"menu__item--disabled":t.disabled}]),role:"menuitem","aria-disabled":t.disabled||void 0,tabindex:"0",onClick:o=>b(o,t),onKeydown:[Y(o=>b(o,t),["enter"]),Y(se(o=>b(o,t),["prevent"]),["space"])]},[t.icon?(l(),c("i",{key:0,class:E([t.icon,"menu__item-icon"]),"aria-hidden":"true"},null,2)):T("",!0),R("span",ce,ae(t.label),1)],42,le))],64))),128))])],6)):T("",!0)}});const N=[{label:"Dashboard",icon:"pi pi-home"},{label:"Projects",icon:"pi pi-folder"},{label:"Settings",icon:"pi pi-cog"},{separator:!0},{label:"Logout",icon:"pi pi-sign-out"}],pe={title:"Components/Menu",component:x,tags:["autodocs"],argTypes:{popup:{control:"boolean"}}},h={render:a=>({components:{Menu:x},setup(){return{args:a,menuItems:N}},template:'<Menu v-bind="args" :model="menuItems" />'})},v={render:a=>({components:{Menu:x},setup(){return{args:a,menuItems:N}},template:`
      <div>
        <p style="color: #9ea5c2; font-size: 14px;">Popup menus are triggered programmatically via a ref. This shows the inline fallback.</p>
        <Menu v-bind="args" :model="menuItems" :popup="false" />
      </div>
    `})};var K,j,F;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Menu
    },
    setup() {
      return {
        args,
        menuItems
      };
    },
    template: \`<Menu v-bind="args" :model="menuItems" />\`
  })
}`,...(F=(j=h.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var V,W,H;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Menu
    },
    setup() {
      return {
        args,
        menuItems
      };
    },
    template: \`
      <div>
        <p style="color: #9ea5c2; font-size: 14px;">Popup menus are triggered programmatically via a ref. This shows the inline fallback.</p>
        <Menu v-bind="args" :model="menuItems" :popup="false" />
      </div>
    \`
  })
}`,...(H=(W=v.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const de=["Inline","Popup"];export{h as Inline,v as Popup,de as __namedExportsOrder,pe as default};
