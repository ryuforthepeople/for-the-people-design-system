import{d as B,G as K,I as E,w as $,o as u,b as p,e as g,F as q,m as H,p as M,g as L,n as I,k as v,j as h,z as k,t as N,H as V,D as G,A as P,f as R}from"./vue.esm-bundler-1418c22f.js";const U=["aria-label"],W=["id","aria-selected","aria-controls","tabindex","disabled","onClick","onKeydown"],X={class:"tabs__panels"},O=B({name:"FtpTabs",__name:"Tabs",props:{activeIndex:{default:0},ariaLabel:{default:"Tabs"}},emits:["update:activeIndex","tabChange","tabClick"],setup(i,{emit:c}){const o=i,s=c,r=`tabs-${Math.random().toString(36).substring(2,9)}`,t=v([]);K("tabs",{registerTab:a=>{const l=`tab-${t.value.length}`;return t.value.push({...a,id:l}),t.value.length-1},unregisterTab:a=>{t.value.splice(a,1)},activeIndex:h(()=>o.activeIndex),tabsId:r});const T=v({}),m=async()=>{await k();const a=document.querySelector(`#${r}-tab-${o.activeIndex}`);a&&(T.value={width:`${a.offsetWidth}px`,transform:`translateX(${a.offsetLeft}px)`})};E(()=>{m()}),$(()=>o.activeIndex,m),$(()=>t.value.length,m);const F=(a,l)=>{var n;(n=t.value[a])!=null&&n.disabled||(s("tabClick",{originalEvent:l,index:a}),a!==o.activeIndex&&(s("update:activeIndex",a),s("tabChange",{originalEvent:l,index:a})))},j=(a,l)=>{var d,_,y,w,x;const n=t.value.length;let e=l;switch(a.key){case"ArrowLeft":for(a.preventDefault(),e=l-1,e<0&&(e=n-1);(d=t.value[e])!=null&&d.disabled&&e!==l;)e=e-1,e<0&&(e=n-1);break;case"ArrowRight":for(a.preventDefault(),e=l+1,e>=n&&(e=0);(_=t.value[e])!=null&&_.disabled&&e!==l;)e=e+1,e>=n&&(e=0);break;case"Home":for(a.preventDefault(),e=0;(y=t.value[e])!=null&&y.disabled&&e<n-1;)e++;break;case"End":for(a.preventDefault(),e=n-1;(w=t.value[e])!=null&&w.disabled&&e>0;)e--;break;default:return}e!==l&&!((x=t.value[e])!=null&&x.disabled)&&(s("update:activeIndex",e),s("tabChange",{originalEvent:a,index:e}),k(()=>{const f=document.querySelector(`#${r}-tab-${e}`);f==null||f.focus()}))},z=h(()=>[].filter(Boolean).join(" "));return(a,l)=>(u(),p("div",{class:I(["tabs",z.value])},[g("div",{class:"tabs__nav",role:"tablist","aria-label":i.ariaLabel},[(u(!0),p(q,null,H(t.value,(n,e)=>(u(),p("button",{key:n.id,type:"button",role:"tab",class:I(["tabs__tab",{"tabs__tab--active":e===i.activeIndex,"tabs__tab--disabled":n.disabled}]),id:`${r}-tab-${e}`,"aria-selected":e===i.activeIndex,"aria-controls":`${r}-panel-${e}`,tabindex:e===i.activeIndex?0:-1,disabled:n.disabled,onClick:d=>F(e,d),onKeydown:d=>j(d,e)},N(n.header),43,W))),128)),g("span",{class:"tabs__indicator",style:M(T.value)},null,4)],8,U),g("div",X,[L(a.$slots,"default")])],2))}});const J=["id","aria-labelledby"],Q=B({name:"FtpTabPanel",__name:"TabPanel",props:{header:{},disabled:{type:Boolean,default:!1}},setup(i){const c=i,o=V("tabs"),s=v(-1);E(()=>{s.value=o.registerTab({header:c.header,disabled:c.disabled})}),G(()=>{s.value!==-1&&o.unregisterTab(s.value)});const r=h(()=>o.activeIndex.value===s.value);return(t,A)=>r.value?(u(),p("div",{key:0,class:"tabs__panel",role:"tabpanel",id:`${P(o).tabsId}-panel-${s.value}`,"aria-labelledby":`${P(o).tabsId}-tab-${s.value}`,tabindex:0},[L(t.$slots,"default")],8,J)):R("",!0)}}),ee={title:"Components/Tabs",component:O,tags:["autodocs"],argTypes:{activeIndex:{control:"number"}}},b={render:i=>({components:{Tabs:O,TabPanel:Q},setup(){const c=v(0);return{args:i,active:c}},template:`
      <Tabs v-bind="args" v-model:activeIndex="active">
        <TabPanel header="Overview">
          <p style="color: #9ea5c2; padding: 16px 0;">Overview content goes here.</p>
        </TabPanel>
        <TabPanel header="Details">
          <p style="color: #9ea5c2; padding: 16px 0;">Details content with more information.</p>
        </TabPanel>
        <TabPanel header="Settings">
          <p style="color: #9ea5c2; padding: 16px 0;">Settings panel content.</p>
        </TabPanel>
      </Tabs>
    `})};var C,D,S;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Tabs,
      TabPanel
    },
    setup() {
      const active = ref(0);
      return {
        args,
        active
      };
    },
    template: \`
      <Tabs v-bind="args" v-model:activeIndex="active">
        <TabPanel header="Overview">
          <p style="color: #9ea5c2; padding: 16px 0;">Overview content goes here.</p>
        </TabPanel>
        <TabPanel header="Details">
          <p style="color: #9ea5c2; padding: 16px 0;">Details content with more information.</p>
        </TabPanel>
        <TabPanel header="Settings">
          <p style="color: #9ea5c2; padding: 16px 0;">Settings panel content.</p>
        </TabPanel>
      </Tabs>
    \`
  })
}`,...(S=(D=b.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const ae=["Default"];export{b as Default,ae as __namedExportsOrder,ee as default};
