import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as o}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const S=o.div`
  position: relative;
  width: 100%;
  height: ${e=>e.height||"500px"};
  overflow: hidden;
  background-color: ${e=>e.backgroundColor||"#000"};
  opacity: ${e=>e.disabled?.7:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
`,$=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,z=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${e=>e.overlayColor||"rgba(0, 0, 0, 0.4)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,W=o.h1`
  color: ${e=>e.textColor||"#fff"};
  font-size: 3rem;
  text-align: center;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,k=o.p`
  color: ${e=>e.textColor||"#fff"};
  font-size: 1.5rem;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,T=({src:e,alt:D,title:n,subtitle:l,height:H,disabled:w=!1,overlayColor:j,backgroundColor:q,textColor:c})=>t.jsxs(S,{height:H,disabled:w,backgroundColor:q,children:[t.jsx($,{src:e,alt:D}),t.jsxs(z,{overlayColor:j,children:[n&&t.jsx(W,{textColor:c,children:n}),l&&t.jsx(k,{textColor:c,children:l})]})]});T.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},overlayColor:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Components/HeroImage",component:T,argTypes:{backgroundColor:{control:"color"},overlayColor:{control:"color"},textColor:{control:"color"},disabled:{control:"boolean"},height:{control:"text"}}},r={args:{src:"https://via.placeholder.com/1200x400",alt:"Hero banner",title:"Welcome to Our Site",subtitle:"Discover amazing things with us"}},s={args:{src:"https://via.placeholder.com/1200x400",alt:"Hero banner without text"}},a={args:{src:"https://via.placeholder.com/1200x400",alt:"Disabled hero banner",title:"Disabled Hero",subtitle:"This hero section is disabled",disabled:!0}},i={args:{src:"https://via.placeholder.com/1200x400",alt:"Custom colored hero",title:"Custom Colors",subtitle:"With custom overlay and text colors",overlayColor:"rgba(0, 100, 200, 0.5)",textColor:"#FFD700"}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero banner',
    title: 'Welcome to Our Site',
    subtitle: 'Discover amazing things with us'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero banner without text'
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,x,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Disabled hero banner',
    title: 'Disabled Hero',
    subtitle: 'This hero section is disabled',
    disabled: true
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,v,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Custom colored hero',
    title: 'Custom Colors',
    subtitle: 'With custom overlay and text colors',
    overlayColor: 'rgba(0, 100, 200, 0.5)',
    textColor: '#FFD700'
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const E=["Default","WithoutText","Disabled","CustomColors"];export{i as CustomColors,r as Default,a as Disabled,s as WithoutText,E as __namedExportsOrder,_ as default};
