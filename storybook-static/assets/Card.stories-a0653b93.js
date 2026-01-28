import{d as y,o as a,b as s,g as r,f as n,e as H,n as T,j as k}from"./vue.esm-bundler-1418c22f.js";const S=["aria-labelledby"],w={key:0,class:"card__header"},B={class:"card__body"},z={key:0,class:"card__caption"},F={key:1,class:"card__subtitle"},I={key:1,class:"card__content"},j={key:1,class:"card__footer"},i=y({name:"FtpCard",__name:"Card",props:{variant:{default:"default"}},setup(t){const p=`card-title-${Math.random().toString(36).substring(2,9)}`,c=t,$=k(()=>[c.variant!=="default"&&`card--${c.variant}`].filter(Boolean).join(" "));return(e,D)=>(a(),s("article",{class:T(["card",$.value]),"aria-labelledby":e.$slots.title?p:void 0},[e.$slots.header?(a(),s("div",w,[r(e.$slots,"header")])):n("",!0),H("div",B,[e.$slots.title||e.$slots.subtitle?(a(),s("div",z,[e.$slots.title?(a(),s("div",{key:0,id:p,class:"card__title"},[r(e.$slots,"title")])):n("",!0),e.$slots.subtitle?(a(),s("div",F,[r(e.$slots,"subtitle")])):n("",!0)])):n("",!0),e.$slots.content||e.$slots.default?(a(),s("div",I,[r(e.$slots,"content",{},()=>[r(e.$slots,"default")])])):n("",!0)]),e.$slots.footer?(a(),s("div",j,[r(e.$slots,"footer")])):n("",!0)],10,S))}});const N={title:"Components/Card",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","highlighted"]}},args:{variant:"default"}},o={render:t=>({components:{Card:i},setup(){return{args:t}},template:`
      <Card v-bind="args">
        <template #title>Card Title</template>
        <template #subtitle>Subtitle text</template>
        <template #content><p>Card content goes here. This is a basic card component.</p></template>
        <template #footer><span style="color: #9ea5c2; font-size: 13px;">Footer content</span></template>
      </Card>
    `})},l={render:t=>({components:{Card:i},setup(){return{args:t}},template:`
      <Card v-bind="args">
        <template #title>Highlighted Card</template>
        <template #content><p>This card uses the highlighted variant.</p></template>
      </Card>
    `}),args:{variant:"highlighted"}},d={render:t=>({components:{Card:i},setup(){return{args:t}},template:`
      <Card v-bind="args">
        <template #header><img src="https://placehold.co/600x200/11162d/f97316?text=Header+Image" style="width:100%;border-radius:8px 8px 0 0;" /></template>
        <template #title>Card with Header</template>
        <template #content><p>This card has an image header slot.</p></template>
      </Card>
    `})};var m,h,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">
        <template #title>Card Title</template>
        <template #subtitle>Subtitle text</template>
        <template #content><p>Card content goes here. This is a basic card component.</p></template>
        <template #footer><span style="color: #9ea5c2; font-size: 13px;">Footer content</span></template>
      </Card>
    \`
  })
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,C,_;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">
        <template #title>Highlighted Card</template>
        <template #content><p>This card uses the highlighted variant.</p></template>
      </Card>
    \`
  }),
  args: {
    variant: 'highlighted'
  }
}`,...(_=(C=l.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var b,v,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">
        <template #header><img src="https://placehold.co/600x200/11162d/f97316?text=Header+Image" style="width:100%;border-radius:8px 8px 0 0;" /></template>
        <template #title>Card with Header</template>
        <template #content><p>This card has an image header slot.</p></template>
      </Card>
    \`
  })
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const V=["Default","Highlighted","WithHeader"];export{o as Default,l as Highlighted,d as WithHeader,V as __namedExportsOrder,N as default};
