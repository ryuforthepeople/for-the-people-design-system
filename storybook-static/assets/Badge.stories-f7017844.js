import{d as O,u as q,o as G,b as H,g as J,n as K,f as M,j as d,l as Q,t as R}from"./vue.esm-bundler-1418c22f.js";const U=["aria-label"],P=O({name:"FtpBadge",__name:"Badge",props:{value:{default:null},size:{default:"md"},severity:{default:"primary"}},setup(e){const a=e,T=q(),V=d(()=>a.value===null&&!T.default),W=d(()=>String(a.value??"").length===1),F=d(()=>[`badge--size-${a.size}`,`badge--severity-${a.severity}`,W.value?"badge--circle":""].filter(Boolean).join(" "));return(u,X)=>V.value?M("",!0):(G(),H("span",{key:0,class:K(["badge",F.value]),"aria-label":u.ariaLabel||(e.value!==null?`${e.value}`:void 0)},[J(u.$slots,"default",{},()=>[Q(R(e.value),1)])],10,U))}});const Z={title:"Components/Badge",component:P,tags:["autodocs"],argTypes:{value:{control:"text"},severity:{control:"select",options:["primary","success","warning","danger","info"]},size:{control:"select",options:["sm","md","lg"]}},args:{value:"5",severity:"primary",size:"md"}},s={args:{value:"3",severity:"primary"}},r={args:{value:"✓",severity:"success"}},n={args:{value:"!",severity:"warning"}},t={args:{value:"9+",severity:"danger"}},o={args:{value:"i",severity:"info"}},i={args:{value:"2",size:"sm"}},l={args:{value:"42",size:"lg"}},c={render:()=>({components:{Badge:P},template:`
      <div style="display: flex; gap: 12px; align-items: center;">
        <Badge value="3" severity="primary" />
        <Badge value="✓" severity="success" />
        <Badge value="!" severity="warning" />
        <Badge value="9+" severity="danger" />
        <Badge value="i" severity="info" />
      </div>
    `})};var g,m,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: '3',
    severity: 'primary'
  }
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var p,y,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: '✓',
    severity: 'success'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var B,S,_;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: '!',
    severity: 'warning'
  }
}`,...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var z,b,x;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: '9+',
    severity: 'danger'
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var C,w,h;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 'i',
    severity: 'info'
  }
}`,...(h=(w=o.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var $,k,D;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: '2',
    size: 'sm'
  }
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var E,L,j;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: '42',
    size: 'lg'
  }
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var A,I,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display: flex; gap: 12px; align-items: center;">
        <Badge value="3" severity="primary" />
        <Badge value="✓" severity="success" />
        <Badge value="!" severity="warning" />
        <Badge value="9+" severity="danger" />
        <Badge value="i" severity="info" />
      </div>
    \`
  })
}`,...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const ee=["Primary","Success","Warning","Danger","Info","Small","Large","AllSeverities"];export{c as AllSeverities,t as Danger,o as Info,l as Large,s as Primary,i as Small,r as Success,n as Warning,ee as __namedExportsOrder,Z as default};
