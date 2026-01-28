import{d as D,o as e,b as r,t as O,n as d,g as T,k as w,j as G}from"./vue.esm-bundler-1418c22f.js";const H=["aria-label"],J=["src","alt"],K={key:1,class:"avatar__label"},j=D({name:"FtpAvatar",__name:"Avatar",props:{label:{},icon:{},image:{},size:{default:"medium"},shape:{default:"square"},ariaLabel:{}},emits:["error"],setup(a,{emit:B}){const g=a,M=B,p=w(!1),P=m=>{p.value=!0,M("error",m)},R=G(()=>[`avatar--size-${g.size}`,`avatar--shape-${g.shape}`].join(" "));return(m,N)=>(e(),r("div",{class:d(["avatar",R.value]),role:"img","aria-label":a.ariaLabel||a.label||"Avatar"},[a.image&&!p.value?(e(),r("img",{key:0,src:a.image,alt:a.ariaLabel||a.label||"avatar",class:"avatar__image",onError:P},null,40,J)):a.label?(e(),r("span",K,O(a.label),1)):a.icon?(e(),r("i",{key:2,class:d([a.icon,"avatar__icon"])},null,2)):T(m.$slots,"default",{key:3})],10,H))}});const U={title:"Components/Avatar",component:j,tags:["autodocs"],argTypes:{label:{control:"text"},image:{control:"text"},size:{control:"select",options:["small","medium","large","xlarge"]},shape:{control:"select",options:["square","circle"]},icon:{control:"text"}},args:{size:"medium",shape:"circle"}},s={args:{label:"RS"}},l={args:{image:"https://i.pravatar.cc/150?img=3"}},t={args:{label:"FP",shape:"square"}},c={args:{label:"S",size:"small"}},n={args:{label:"L",size:"large"}},o={args:{label:"XL",size:"xlarge"}},i={render:()=>({components:{Avatar:j},template:`
      <div style="display: flex; gap: 16px; align-items: center;">
        <Avatar label="S" size="small" shape="circle" />
        <Avatar label="M" size="medium" shape="circle" />
        <Avatar label="L" size="large" shape="circle" />
        <Avatar label="XL" size="xlarge" shape="circle" />
      </div>
    `})};var u,b,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'RS'
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,z,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    image: 'https://i.pravatar.cc/150?img=3'
  }
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var A,L,x;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'FP',
    shape: 'square'
  }
}`,...(x=(L=t.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var y,f,_;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'S',
    size: 'small'
  }
}`,...(_=(f=c.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var k,q,X;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'L',
    size: 'large'
  }
}`,...(X=(q=n.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};var E,C,W;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'XL',
    size: 'xlarge'
  }
}`,...(W=(C=o.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var F,I,$;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display: flex; gap: 16px; align-items: center;">
        <Avatar label="S" size="small" shape="circle" />
        <Avatar label="M" size="medium" shape="circle" />
        <Avatar label="L" size="large" shape="circle" />
        <Avatar label="XL" size="xlarge" shape="circle" />
      </div>
    \`
  })
}`,...($=(I=i.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};const V=["WithLabel","WithImage","Square","Small","Large","XLarge","AllSizes"];export{i as AllSizes,n as Large,c as Small,t as Square,l as WithImage,s as WithLabel,o as XLarge,V as __namedExportsOrder,U as default};
