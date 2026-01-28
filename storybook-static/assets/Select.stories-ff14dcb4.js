import{d as w,o,b as r,e as d,t as b,f as C,F as x,m as z,n as j,k as u,j as v}from"./vue.esm-bundler-1418c22f.js";const I=["value","disabled","name","aria-invalid","aria-describedby"],E=["selected"],F=["value","disabled"],p=w({name:"FtpSelect",__name:"Select",props:{modelValue:{type:[String,Number,Boolean,Object,null],default:null},options:{default:()=>[]},optionLabel:{default:"label"},optionValue:{default:"value"},placeholder:{},name:{},size:{default:"md"},isDisabled:{type:Boolean,default:!1},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=e,m=t,k=u(null),_=v(()=>a.options.map(l=>typeof l=="string"||typeof l=="number"?{label:l,value:l}:{label:l[a.optionLabel],value:l[a.optionValue],disabled:l.disabled})),L=l=>{const s=l.target.value;m("update:modelValue",s),m("change",{value:s,originalEvent:l})},B=v(()=>[`select--size-${a.size}`,a.isDisabled&&"select--disabled",a.isInvalid&&"select--invalid",!a.modelValue&&a.placeholder&&"select--placeholder"].filter(Boolean).join(" "));return(l,s)=>(o(),r("div",{class:j(["select",B.value])},[d("select",{ref_key:"selectRef",ref:k,class:"select__input",value:e.modelValue,disabled:e.isDisabled,name:e.name,"aria-invalid":e.isInvalid||void 0,"aria-describedby":l.ariaDescribedby||void 0,onChange:L},[e.placeholder?(o(),r("option",{key:0,value:"",disabled:"",selected:!e.modelValue},b(e.placeholder),9,E)):C("",!0),(o(!0),r(x,null,z(_.value,n=>(o(),r("option",{key:n.value,value:n.value,disabled:n.disabled},b(n.label),9,F))),128))],40,I),s[0]||(s[0]=d("span",{class:"select__icon"},[d("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[d("path",{d:"M4 6L8 10L12 6",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))],2))}});const V=[{label:"Amsterdam",value:"ams"},{label:"Berlin",value:"ber"},{label:"London",value:"lon"},{label:"Paris",value:"par"},{label:"Tokyo",value:"tok"}],O={title:"Components/Select",component:p,tags:["autodocs"],argTypes:{placeholder:{control:"text"},size:{control:"select",options:["sm","md","lg"]},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}}},i={render:e=>({components:{Select:p},setup(){const t=u(null);return{args:e,selected:t,options:V}},template:'<Select v-bind="args" v-model="selected" :options="options" optionLabel="label" optionValue="value" placeholder="Select a city" />'})},c={render:e=>({components:{Select:p},setup(){const t=u(null);return{args:e,selected:t,options:V}},template:'<Select v-bind="args" v-model="selected" :options="options" optionLabel="label" optionValue="value" placeholder="Disabled" :isDisabled="true" />'})};var f,g,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select
    },
    setup() {
      const selected = ref(null);
      return {
        args,
        selected,
        options
      };
    },
    template: \`<Select v-bind="args" v-model="selected" :options="options" optionLabel="label" optionValue="value" placeholder="Select a city" />\`
  })
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,S,D;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select
    },
    setup() {
      const selected = ref(null);
      return {
        args,
        selected,
        options
      };
    },
    template: \`<Select v-bind="args" v-model="selected" :options="options" optionLabel="label" optionValue="value" placeholder="Disabled" :isDisabled="true" />\`
  })
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const R=["Default","Disabled"];export{i as Default,c as Disabled,R as __namedExportsOrder,O as default};
