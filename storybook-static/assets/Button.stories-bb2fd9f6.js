import{_ as M}from"./Button.scss_vue_type_style_index_0_src_true_lang-1352d920.js";import"./vue.esm-bundler-1418c22f.js";const R={title:"Components/Button",component:M,tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["primary","secondary","outlined","text"]},size:{control:"select",options:["sm","md","lg"]},isDisabled:{control:"boolean"},isLoading:{control:"boolean"},pill:{control:"boolean"},icon:{control:"text"},iconPos:{control:"select",options:["left","right"]}},args:{label:"Button",variant:"primary",size:"md"}},r={args:{label:"Primary",variant:"primary"}},s={args:{label:"Secondary",variant:"secondary"}},o={args:{label:"Outlined",variant:"outlined"}},t={args:{label:"Text",variant:"text"}},n={args:{label:"Small",size:"sm"}},l={args:{label:"Large",size:"lg"}},i={args:{label:"Loading",isLoading:!0}},c={args:{label:"Disabled",isDisabled:!0}},p={args:{label:"Pill Button",pill:!0}},m={args:{label:"Save",icon:"pi pi-check",iconPos:"left"}},d={render:()=>({components:{Button:M},setup(){return()=>[["primary","secondary","outlined","text"].map(e=>["sm","md","lg"].map(a=>({v:e,s:a}))).flat().map(({v:e,s:a})=>({variant:e,size:a,label:`${e} ${a}`}))]},template:`
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <Button v-for="(v, i) in ['primary','secondary','outlined','text']" :key="i" :label="v" :variant="v" />
      </div>
    `})};var u,g,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,y,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,f,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Outlined',
    variant: 'outlined'
  }
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var P,z,B;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Text',
    variant: 'text'
  }
}`,...(B=(z=t.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var D,h,O;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    size: 'sm'
  }
}`,...(O=(h=n.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var T,_,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Large',
    size: 'lg'
  }
}`,...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var w,$,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Loading',
    isLoading: true
  }
}`,...(A=($=i.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var I,V,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    isDisabled: true
  }
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var C,E,j;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Pill Button',
    pill: true
  }
}`,...(j=(E=p.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var q,F,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    icon: 'pi pi-check',
    iconPos: 'left'
  }
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    setup() {
      return () => [['primary', 'secondary', 'outlined', 'text'].map(v => ['sm', 'md', 'lg'].map(s => ({
        v,
        s
      }))).flat().map(({
        v,
        s
      }) => ({
        variant: v,
        size: s,
        label: \`\${v} \${s}\`
      }))];
    },
    template: \`
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <Button v-for="(v, i) in ['primary','secondary','outlined','text']" :key="i" :label="v" :variant="v" />
      </div>
    \`
  })
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const U=["Primary","Secondary","Outlined","Text","Small","Large","Loading","Disabled","Pill","WithIcon","AllVariants"];export{d as AllVariants,c as Disabled,l as Large,i as Loading,o as Outlined,p as Pill,r as Primary,s as Secondary,n as Small,t as Text,m as WithIcon,U as __namedExportsOrder,R as default};
