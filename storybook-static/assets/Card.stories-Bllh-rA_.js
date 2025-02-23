import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const $=r.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${e=>e.disabled?"#f5f5f5":e.backgroundColor||"white"};
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"auto"};
  overflow: hidden;
  cursor: ${e=>e.onClick&&!e.disabled?"pointer":e.disabled?"not-allowed":"default"};
  opacity: ${e=>e.disabled?.7:1};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    ${e=>!e.disabled&&e.onClick&&`
      transform: translateY(-4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `}
  }
`,I=r.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,R=r.div`
  padding: 16px;
`,_=r.h3`
  margin: 0 0 8px 0;
  font-size: 1.25rem;
  color: ${e=>e.disabled?"#999":"#333"};
`,A=r.h4`
  margin: 0 0 16px 0;
  font-size: 1rem;
  color: ${e=>e.disabled?"#999":"#666"};
  font-weight: normal;
`,T=({title:e,subtitle:o,children:y,image:l,imageAlt:v,disabled:a=!1,backgroundColor:q,onClick:j,width:D,height:S})=>t.jsxs($,{disabled:a,backgroundColor:q,onClick:a?void 0:j,width:D,height:S,children:[l&&t.jsx(I,{src:l,alt:v||""}),t.jsxs(R,{children:[e&&t.jsx(_,{disabled:a,children:e}),o&&t.jsx(A,{disabled:a,children:o}),y]})]});T.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},image:{required:!1,tsType:{name:"string"},description:""},imageAlt:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/Card",component:T,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},width:{control:"text"},height:{control:"text"}}},i={args:{title:"Card Title",subtitle:"Card Subtitle",children:"This is the card content",width:"300px"}},s={args:{title:"Card with Image",subtitle:"Featured image card",image:"https://via.placeholder.com/300x200",imageAlt:"Card featured image",children:"Card content with image",width:"300px"}},d={args:{title:"Disabled Card",subtitle:"This card is disabled",children:"Disabled card content",disabled:!0,width:"300px"}},n={args:{title:"Clickable Card",subtitle:"Click me!",children:"This card is clickable",onClick:()=>alert("Card clicked!"),width:"300px"}};var c,m,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    children: 'This is the card content',
    width: '300px'
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Card with Image',
    subtitle: 'Featured image card',
    image: 'https://via.placeholder.com/300x200',
    imageAlt: 'Card featured image',
    children: 'Card content with image',
    width: '300px'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,C,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Disabled Card',
    subtitle: 'This card is disabled',
    children: 'Disabled card content',
    disabled: true,
    width: '300px'
  }
}`,...(x=(C=d.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var f,w,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Clickable Card',
    subtitle: 'Click me!',
    children: 'This card is clickable',
    onClick: () => alert('Card clicked!'),
    width: '300px'
  }
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const W=["Default","WithImage","Disabled","Clickable"];export{n as Clickable,i as Default,d as Disabled,s as WithImage,W as __namedExportsOrder,F as default};
