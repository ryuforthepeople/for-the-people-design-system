import{d as B,k as s,w as M,G as $,o as k,b as O,g as A,n as D,j as v,H as E,I as F,e as i,l as N,t as z}from"./vue.esm-bundler-1418c22f.js";const m=B({name:"FtpAccordion",__name:"Accordion",props:{activeIndex:{default:null},multiple:{type:Boolean,default:!1}},emits:["update:activeIndex","tab-open","tab-close"],setup(t,{emit:a}){const o=t,c=a,n=s(o.multiple?Array.isArray(o.activeIndex)?[...o.activeIndex]:o.activeIndex!==null?[o.activeIndex]:[]:o.activeIndex!==null?[o.activeIndex]:[]);M(()=>o.activeIndex,e=>{o.multiple?n.value=Array.isArray(e)?[...e]:e!==null?[e]:[]:n.value=e!==null?[e]:[]});let r=s(0);$("accordion",{registerTab:()=>{const e=r.value;return r.value++,e},isTabActive:e=>n.value.includes(e),toggleTab:(e,_)=>{if(_)return;const h=n.value.includes(e);if(o.multiple)h?(n.value=n.value.filter(l=>l!==e),c("tab-close",{index:e})):(n.value=[...n.value,e],c("tab-open",{index:e})),c("update:activeIndex",[...n.value]);else if(h)n.value=[],c("tab-close",{index:e}),c("update:activeIndex",null);else{const l=n.value[0];l!==void 0&&c("tab-close",{index:l}),n.value=[e],c("tab-open",{index:e}),c("update:activeIndex",e)}}});const d=v(()=>[o.multiple&&"accordion--multiple"].filter(Boolean).join(" "));return(e,_)=>(k(),O("div",{class:D(["accordion",d.value])},[A(e.$slots,"default")],2))}});const G=["disabled","aria-expanded","aria-controls"],H={class:"accordion__header-text"},q=["id","aria-hidden"],w={class:"accordion__content"},j=B({name:"FtpAccordionTab",__name:"AccordionTab",props:{header:{default:""},isDisabled:{type:Boolean,default:!1}},setup(t){const a=t,o=E("accordion"),c=s(-1),n=v(()=>`accordion-content-${c.value}`);F(()=>{o&&(c.value=o.registerTab())});const r=v(()=>!o||c.value===-1?!1:o.isTabActive(c.value)),T=()=>{o&&!a.isDisabled&&o.toggleTab(c.value,a.isDisabled)},f=v(()=>[r.value&&"accordion__tab--active",a.isDisabled&&"accordion__tab--disabled"].filter(Boolean).join(" "));return(b,d)=>(k(),O("div",{class:D(["accordion__tab",f.value])},[i("button",{type:"button",class:"accordion__header",disabled:t.isDisabled,"aria-expanded":r.value,"aria-controls":n.value,onClick:T},[i("span",H,[A(b.$slots,"header",{},()=>[N(z(t.header),1)])]),d[0]||(d[0]=i("span",{class:"accordion__icon"},[i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[i("polyline",{points:"6 9 12 15 18 9"})])],-1))],8,G),i("div",{id:n.value,class:"accordion__content-wrapper","aria-hidden":!r.value},[i("div",w,[A(b.$slots,"default")])],8,q)],2))}}),K={title:"Components/Accordion",component:m,tags:["autodocs"],argTypes:{multiple:{control:"boolean"}}},p={render:t=>({components:{Accordion:m,AccordionTab:j},setup(){const a=s(0);return{args:t,active:a}},template:`
      <Accordion v-bind="args" v-model:activeIndex="active">
        <AccordionTab header="Section 1">
          <p style="color: #9ea5c2;">Content for the first section. Only one tab open at a time.</p>
        </AccordionTab>
        <AccordionTab header="Section 2">
          <p style="color: #9ea5c2;">Content for the second section.</p>
        </AccordionTab>
        <AccordionTab header="Section 3">
          <p style="color: #9ea5c2;">Content for the third section.</p>
        </AccordionTab>
      </Accordion>
    `})},u={render:t=>({components:{Accordion:m,AccordionTab:j},setup(){const a=s([0,2]);return{args:t,active:a}},template:`
      <Accordion v-bind="args" :multiple="true" v-model:activeIndex="active">
        <AccordionTab header="Section A">
          <p style="color: #9ea5c2;">Multiple sections can be open simultaneously.</p>
        </AccordionTab>
        <AccordionTab header="Section B">
          <p style="color: #9ea5c2;">Second section content.</p>
        </AccordionTab>
        <AccordionTab header="Section C">
          <p style="color: #9ea5c2;">Third section content.</p>
        </AccordionTab>
      </Accordion>
    `})};var y,g,I;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Accordion,
      AccordionTab
    },
    setup() {
      const active = ref(0);
      return {
        args,
        active
      };
    },
    template: \`
      <Accordion v-bind="args" v-model:activeIndex="active">
        <AccordionTab header="Section 1">
          <p style="color: #9ea5c2;">Content for the first section. Only one tab open at a time.</p>
        </AccordionTab>
        <AccordionTab header="Section 2">
          <p style="color: #9ea5c2;">Content for the second section.</p>
        </AccordionTab>
        <AccordionTab header="Section 3">
          <p style="color: #9ea5c2;">Content for the third section.</p>
        </AccordionTab>
      </Accordion>
    \`
  })
}`,...(I=(g=p.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var S,x,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Accordion,
      AccordionTab
    },
    setup() {
      const active = ref([0, 2]);
      return {
        args,
        active
      };
    },
    template: \`
      <Accordion v-bind="args" :multiple="true" v-model:activeIndex="active">
        <AccordionTab header="Section A">
          <p style="color: #9ea5c2;">Multiple sections can be open simultaneously.</p>
        </AccordionTab>
        <AccordionTab header="Section B">
          <p style="color: #9ea5c2;">Second section content.</p>
        </AccordionTab>
        <AccordionTab header="Section C">
          <p style="color: #9ea5c2;">Third section content.</p>
        </AccordionTab>
      </Accordion>
    \`
  })
}`,...(C=(x=u.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const L=["SingleOpen","MultipleOpen"];export{u as MultipleOpen,p as SingleOpen,L as __namedExportsOrder,K as default};
