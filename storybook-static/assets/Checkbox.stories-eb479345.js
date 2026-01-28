import{d as S,o,b as a,e as u,g as z,f as j,n as N,j as E,l as $,t as A,k as m}from"./vue.esm-bundler-1418c22f.js";const L=["checked","disabled","name","value","aria-invalid"],M={class:"checkbox__box"},O={class:"checkbox__icon",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},T={key:0,d:"M10 3L4.5 8.5L2 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},F={key:1,d:"M2.5 6H9.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},H={key:0,class:"checkbox__label"},s=S({name:"FtpCheckbox",__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},label:{},name:{},value:{type:[String,Number,Boolean,Object],default:!0},size:{default:"md"},isDisabled:{type:Boolean,default:!1},isInvalid:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:n}){const t=e,k=n,V=c=>{const h=c.target.checked;k("update:modelValue",h),k("change",{checked:h,originalEvent:c})},w=E(()=>[`checkbox--size-${t.size}`,t.isDisabled&&"checkbox--disabled",t.isInvalid&&"checkbox--invalid",t.modelValue&&"checkbox--checked",t.indeterminate&&"checkbox--indeterminate"].filter(Boolean).join(" "));return(c,h)=>(o(),a("label",{class:N(["checkbox",w.value])},[u("input",{type:"checkbox",class:"checkbox__input",checked:e.modelValue,disabled:e.isDisabled,name:e.name,value:e.value,"aria-invalid":e.isInvalid||void 0,onChange:V},null,40,L),u("span",M,[(o(),a("svg",O,[e.indeterminate?(o(),a("path",F)):(o(),a("path",T))]))]),e.label||c.$slots.default?(o(),a("span",H,[z(c.$slots,"default",{},()=>[$(A(e.label),1)])])):j("",!0)],2))}});const G={title:"Components/Checkbox",component:s,tags:["autodocs"],argTypes:{label:{control:"text"},size:{control:"select",options:["sm","md","lg"]},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},indeterminate:{control:"boolean"}}},r={render:e=>({components:{Checkbox:s},setup(){const n=m(!1);return{args:e,checked:n}},template:'<Checkbox v-bind="args" v-model="checked" label="Accept terms" />'})},l={render:e=>({components:{Checkbox:s},setup(){const n=m(!0);return{args:e,checked:n}},template:'<Checkbox v-bind="args" v-model="checked" label="Checked" />'})},d={render:()=>({components:{Checkbox:s},setup(){return{checked:m(!1)}},template:'<Checkbox v-model="checked" :indeterminate="true" label="Indeterminate" />'})},i={render:()=>({components:{Checkbox:s},setup(){return{checked:m(!0)}},template:'<Checkbox v-model="checked" :isDisabled="true" label="Disabled checked" />'})};var b,p,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: \`<Checkbox v-bind="args" v-model="checked" label="Accept terms" />\`
  })
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var C,f,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(true);
      return {
        args,
        checked
      };
    },
    template: \`<Checkbox v-bind="args" v-model="checked" label="Checked" />\`
  })
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,_,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(false);
      return {
        checked
      };
    },
    template: \`<Checkbox v-model="checked" :indeterminate="true" label="Indeterminate" />\`
  })
}`,...(y=(_=d.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var D,B,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(true);
      return {
        checked
      };
    },
    template: \`<Checkbox v-model="checked" :isDisabled="true" label="Disabled checked" />\`
  })
}`,...(I=(B=i.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const J=["Default","Checked","Indeterminate","Disabled"];export{l as Checked,r as Default,i as Disabled,d as Indeterminate,J as __namedExportsOrder,G as default};
