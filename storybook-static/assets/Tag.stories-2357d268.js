import{d as M,u as P,o as d,b as g,g as m,A as Q,f as v,n as f,j as U,l as X,t as Y}from"./vue.esm-bundler-1418c22f.js";const Z={key:0,class:"tag__value"},J=M({name:"FtpTag",__name:"Tag",props:{value:{default:null},color:{default:"neutral"},icon:{default:null},rounded:{type:Boolean,default:!1}},setup(e){const p=e,K=P(),L=U(()=>[`tag--color-${p.color}`,p.rounded?"tag--rounded":""].filter(Boolean).join(" "));return(i,ee)=>(d(),g("span",{class:f(["tag",L.value])},[m(i.$slots,"icon",{},()=>[e.icon?(d(),g("i",{key:0,class:f([e.icon,"tag__icon"])},null,2)):v("",!0)]),e.value||Q(K).default?(d(),g("span",Z,[m(i.$slots,"default",{},()=>[X(Y(e.value),1)])])):v("",!0)],2))}});const re={title:"Components/Tag",component:J,tags:["autodocs"],argTypes:{value:{control:"text"},color:{control:"select",options:["brand","accent","neutral","success","warning","danger","info"]},rounded:{control:"boolean"},icon:{control:"text"}},args:{value:"Tag",color:"brand"}},a={args:{value:"Brand",color:"brand"}},r={args:{value:"Accent",color:"accent"}},o={args:{value:"Success",color:"success"}},n={args:{value:"Warning",color:"warning"}},s={args:{value:"Danger",color:"danger"}},c={args:{value:"Info",color:"info"}},l={args:{value:"Neutral",color:"neutral"}},t={args:{value:"Rounded",color:"accent",rounded:!0}},u={render:()=>({components:{Tag:J},template:`
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <Tag value="Brand" color="brand" />
        <Tag value="Accent" color="accent" />
        <Tag value="Neutral" color="neutral" />
        <Tag value="Success" color="success" />
        <Tag value="Warning" color="warning" />
        <Tag value="Danger" color="danger" />
        <Tag value="Info" color="info" />
      </div>
    `})};var T,S,_;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 'Brand',
    color: 'brand'
  }
}`,...(_=(S=a.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var x,y,B;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 'Accent',
    color: 'accent'
  }
}`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var w,A,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 'Success',
    color: 'success'
  }
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var N,C,D;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 'Warning',
    color: 'warning'
  }
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,W,k;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: 'Danger',
    color: 'danger'
  }
}`,...(k=(W=s.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var R,$,h;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 'Info',
    color: 'info'
  }
}`,...(h=($=c.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var j,E,V;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 'Neutral',
    color: 'neutral'
  }
}`,...(V=(E=l.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var z,F,O;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: 'Rounded',
    color: 'accent',
    rounded: true
  }
}`,...(O=(F=t.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var q,G,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tag
    },
    template: \`
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <Tag value="Brand" color="brand" />
        <Tag value="Accent" color="accent" />
        <Tag value="Neutral" color="neutral" />
        <Tag value="Success" color="success" />
        <Tag value="Warning" color="warning" />
        <Tag value="Danger" color="danger" />
        <Tag value="Info" color="info" />
      </div>
    \`
  })
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const oe=["Brand","Accent","Success","Warning","Danger","Info","Neutral","Rounded","AllColors"];export{r as Accent,u as AllColors,a as Brand,s as Danger,c as Info,l as Neutral,t as Rounded,o as Success,n as Warning,oe as __namedExportsOrder,re as default};
