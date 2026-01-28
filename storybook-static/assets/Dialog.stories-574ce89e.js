import{d as H,w as J,q as Q,o as s,s as W,v as w,x as L,T as $,y as Z,z as ee,b as c,n as O,A as S,B as oe,g as D,e as u,t as le,f as g,C as ae,k as i,j as te}from"./vue.esm-bundler-1418c22f.js";import{_ as N}from"./Button.scss_vue_type_style_index_0_src_true_lang-1352d920.js";const se=["aria-modal","aria-labelledby"],ie={key:0,class:"dialog__header"},ne=["id"],re={class:"dialog__content"},de={key:1,class:"dialog__footer"},z='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',h=H({name:"FtpDialog",__name:"Dialog",props:{visible:{type:Boolean,default:!1},header:{default:""},closable:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0},size:{default:"md"}},emits:["update:visible","show","hide"],setup(o,{emit:n}){let R=0;const V=()=>"ftp-"+R++;let r=0;const X=()=>{r++,r===1&&(document.body.style.overflow="hidden")},k=()=>{r=Math.max(0,r-1),r===0&&(document.body.style.overflow="")},t=o,f=n,l=i(null),_=V(),B=i(!1),x=i({x:0,y:0}),b=i({x:0,y:0}),F=te(()=>[`dialog--size-${t.size}`,t.draggable&&"dialog--draggable"].filter(Boolean).join(" ")),p=()=>{f("update:visible",!1),f("hide")},I=()=>{t.dismissableMask&&p()},U=e=>{t.closeOnEscape&&t.visible&&(e.preventDefault(),p())},P=e=>{if(e.key!=="Tab"||!t.modal||!l.value)return;const a=[...l.value.querySelectorAll(z)];if(a.length===0){e.preventDefault();return}const E=a[0],C=a[a.length-1];e.shiftKey?(document.activeElement===E||!l.value.contains(document.activeElement))&&(e.preventDefault(),C.focus()):(document.activeElement===C||!l.value.contains(document.activeElement))&&(e.preventDefault(),E.focus())},y=()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",G),B.value=!1},Y=e=>{B.value&&(b.value={x:e.clientX-x.value.x,y:e.clientY-x.value.y},l.value&&(l.value.style.left=`${b.value.x}px`,l.value.style.top=`${b.value.y}px`,l.value.style.transform="none"))},G=()=>{y()};let d=!1;return J(()=>t.visible,async e=>{if(e){if(f("show"),t.modal&&(X(),d=!0),await ee(),l.value){const a=l.value.querySelector(z);a?a.focus():(l.value.setAttribute("tabindex","-1"),l.value.focus())}}else y(),d&&(k(),d=!1)}),Q(()=>{d&&(k(),d=!1),y()}),(e,a)=>(s(),W(Z,{to:"body"},[w($,{name:"dialog-fade"},{default:L(()=>[o.visible?(s(),c("div",{key:0,class:O(["dialog__overlay",{"dialog__overlay--modal":o.modal}]),onClick:I,onKeydown:ae(U,["escape"])},[w($,{name:"dialog-scale"},{default:L(()=>[o.visible?(s(),c("div",{key:0,ref_key:"dialogRef",ref:l,class:O(["dialog",F.value]),role:"dialog","aria-modal":o.modal,"aria-labelledby":S(_),onClick:a[0]||(a[0]=oe(()=>{},["stop"])),onKeydown:P},[e.$slots.header||o.header||o.closable?(s(),c("div",ie,[D(e.$slots,"header",{},()=>[u("span",{id:S(_),class:"dialog__title"},le(o.header),9,ne)]),o.closable?(s(),c("button",{key:0,type:"button",class:"dialog__close","aria-label":"Close",onClick:p},[...a[1]||(a[1]=[u("svg",{class:"dialog__close-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[u("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])):g("",!0)])):g("",!0),u("div",re,[D(e.$slots,"default")]),e.$slots.footer?(s(),c("div",de,[D(e.$slots,"footer")])):g("",!0)],42,se)):g("",!0)]),_:3})],34)):g("",!0)]),_:3})]))}});const ge={title:"Components/Dialog",component:h,tags:["autodocs"],argTypes:{header:{control:"text"},modal:{control:"boolean"},closable:{control:"boolean"},size:{control:"select",options:["sm","md","lg","xl"]},draggable:{control:"boolean"},dismissableMask:{control:"boolean"}}},v={render:o=>({components:{Dialog:h,Button:N},setup(){const n=i(!1);return{args:o,visible:n}},template:`
      <Button label="Open Dialog" @click="visible = true" />
      <Dialog v-bind="args" :visible="visible" @update:visible="visible = $event" header="Modal Dialog" :modal="true" size="md">
        <p style="color: #9ea5c2;">This is a modal dialog with backdrop overlay. Click the X or press Escape to close.</p>
      </Dialog>
    `})},m={render:o=>({components:{Dialog:h,Button:N},setup(){const n=i(!1);return{args:o,visible:n}},template:`
      <Button label="Open Large Dialog" @click="visible = true" />
      <Dialog v-bind="args" :visible="visible" @update:visible="visible = $event" header="Large Dialog" :modal="true" size="lg">
        <p style="color: #9ea5c2;">A larger dialog for more content.</p>
      </Dialog>
    `})};var M,T,A;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Dialog,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible
      };
    },
    template: \`
      <Button label="Open Dialog" @click="visible = true" />
      <Dialog v-bind="args" :visible="visible" @update:visible="visible = $event" header="Modal Dialog" :modal="true" size="md">
        <p style="color: #9ea5c2;">This is a modal dialog with backdrop overlay. Click the X or press Escape to close.</p>
      </Dialog>
    \`
  })
}`,...(A=(T=v.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var K,j,q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Dialog,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible
      };
    },
    template: \`
      <Button label="Open Large Dialog" @click="visible = true" />
      <Dialog v-bind="args" :visible="visible" @update:visible="visible = $event" header="Large Dialog" :modal="true" size="lg">
        <p style="color: #9ea5c2;">A larger dialog for more content.</p>
      </Dialog>
    \`
  })
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const ve=["Modal","LargeDialog"];export{m as LargeDialog,v as Modal,ve as __namedExportsOrder,ge as default};
