import{d as N,o as a,b as r,e as D,p as F,g as j,f as z,n as E,j as i,l as I,t as T}from"./vue.esm-bundler-1418c22f.js";const $=["aria-valuenow","aria-valuemin","aria-valuemax"],O={class:"progress-bar__track"},q={key:0,class:"progress-bar__label"},A={key:1,class:"progress-bar__fill progress-bar__fill--indeterminate"},b=N({name:"FtpProgressBar",__name:"ProgressBar",props:{value:{default:0},showValue:{type:Boolean,default:!0},mode:{default:"determinate"}},setup(e){const u=e,S=i(()=>({width:`${u.value}%`})),k=i(()=>[u.mode==="indeterminate"&&"progress-bar--indeterminate"].filter(Boolean).join(" "));return(C,G)=>(a(),r("div",{class:E(["progress-bar",k.value]),role:"progressbar","aria-valuenow":e.mode==="determinate"?e.value:void 0,"aria-valuemin":e.mode==="determinate"?0:void 0,"aria-valuemax":e.mode==="determinate"?100:void 0},[D("div",O,[e.mode==="determinate"?(a(),r("div",{key:0,class:"progress-bar__fill",style:F(S.value)},[e.showValue?(a(),r("span",q,[j(C.$slots,"default",{},()=>[I(T(e.value)+"%",1)])])):z("",!0)],4)):(a(),r("div",A))])],10,$))}});const J={title:"Components/ProgressBar",component:b,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},showValue:{control:"boolean"},mode:{control:"select",options:["determinate","indeterminate"]}},args:{value:60,showValue:!0,mode:"determinate"}},s={args:{value:65,showValue:!0}},o={args:{value:100,showValue:!0}},t={args:{value:40,showValue:!1}},n={args:{mode:"indeterminate"}},l={render:()=>({components:{ProgressBar:b},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <ProgressBar :value="25" :showValue="true" />
        <ProgressBar :value="50" :showValue="true" />
        <ProgressBar :value="75" :showValue="true" />
        <ProgressBar :value="100" :showValue="true" />
        <ProgressBar mode="indeterminate" />
      </div>
    `})};var d,m,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 65,
    showValue: true
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,g,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 100,
    showValue: true
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,w,V;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 40,
    showValue: false
  }
}`,...(V=(w=t.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var B,f,_;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    mode: 'indeterminate'
  }
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var P,x,y;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ProgressBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <ProgressBar :value="25" :showValue="true" />
        <ProgressBar :value="50" :showValue="true" />
        <ProgressBar :value="75" :showValue="true" />
        <ProgressBar :value="100" :showValue="true" />
        <ProgressBar mode="indeterminate" />
      </div>
    \`
  })
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const K=["Determinate","Full","NoValue","Indeterminate","ProgressSteps"];export{s as Determinate,o as Full,n as Indeterminate,t as NoValue,l as ProgressSteps,K as __namedExportsOrder,J as default};
