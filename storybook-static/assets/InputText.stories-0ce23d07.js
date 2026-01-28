import{d as q,o as G,b as H,n as J,k as K,j as N}from"./vue.esm-bundler-1418c22f.js";const Q=["type","value","placeholder","disabled","name","aria-invalid","aria-describedby"],P=q({name:"FtpInputText",__name:"InputText",props:{modelValue:{default:""},type:{default:"text"},placeholder:{},name:{},size:{default:"md"},isDisabled:{type:Boolean,default:!1},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue","input","change","focus","blur"],setup(a,{expose:j,emit:A}){const p=a,s=A,t=K(null),F=e=>{const u=e.target.value;s("update:modelValue",u),s("input",{value:u,originalEvent:e})},M=e=>{s("change",{value:e.target.value,originalEvent:e})},R=e=>{s("focus",{originalEvent:e})},O=e=>{s("blur",{originalEvent:e})},$=N(()=>[`input-text--size-${p.size}`,p.isDisabled&&"input-text--disabled",p.isInvalid&&"input-text--invalid"].filter(Boolean).join(" "));return j({focus:()=>{var e;return(e=t.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=t.value)==null?void 0:e.blur()},select:()=>{var e;return(e=t.value)==null?void 0:e.select()},el:t}),(e,u)=>(G(),H("input",{ref_key:"inputRef",ref:t,class:J(["input-text",$.value]),type:a.type,value:a.modelValue,placeholder:a.placeholder,disabled:a.isDisabled,name:a.name,"aria-invalid":a.isInvalid||void 0,"aria-describedby":e.ariaDescribedby||void 0,onInput:F,onChange:M,onFocus:R,onBlur:O},null,42,Q))}});const W={title:"Components/InputText",component:P,tags:["autodocs"],argTypes:{modelValue:{control:"text"},placeholder:{control:"text"},size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","password","email","tel","url","search","number"]},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Enter text...",size:"md"}},l={},r={args:{size:"sm",placeholder:"Small input"}},n={args:{size:"lg",placeholder:"Large input"}},o={args:{isDisabled:!0,placeholder:"Disabled"}},i={args:{isInvalid:!0,placeholder:"Invalid input"}},d={args:{type:"password",placeholder:"Password"}},c={render:()=>({components:{InputText:P},template:`
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
        <InputText size="sm" placeholder="Small" />
        <InputText size="md" placeholder="Medium" />
        <InputText size="lg" placeholder="Large" />
      </div>
    `})};var m,g,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,h,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small input'
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,I,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large input'
  }
}`,...(y=(I=n.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var z,S,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'Disabled'
  }
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var T,w,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    placeholder: 'Invalid input'
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var _,B,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Password'
  }
}`,...(L=(B=d.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var C,V,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputText
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
        <InputText size="sm" placeholder="Small" />
        <InputText size="md" placeholder="Medium" />
        <InputText size="lg" placeholder="Large" />
      </div>
    \`
  })
}`,...(k=(V=c.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const X=["Default","Small","Large","Disabled","Invalid","Password","AllSizes"];export{c as AllSizes,l as Default,o as Disabled,i as Invalid,n as Large,d as Password,r as Small,X as __namedExportsOrder,W as default};
