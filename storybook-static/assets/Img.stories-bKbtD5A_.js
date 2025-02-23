import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{d as T}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const $=T.img`
  display: block;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width||"100%"};
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"auto"};
  object-fit: ${e=>e.objectFit||"cover"};
  border-radius: ${e=>e.rounded?"8px":"0"};
  opacity: ${e=>e.disabled?.6:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
  background-color: ${e=>e.backgroundColor||"transparent"};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`,p=({src:e,alt:h,disabled:g=!1,width:b,height:f,objectFit:v="cover",rounded:w=!1,backgroundColor:x})=>y.jsx($,{src:e,alt:h,disabled:g,width:b,height:f,objectFit:v,rounded:w,backgroundColor:x});p.__docgenInfo={description:"",methods:[],displayName:"Img",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},objectFit:{required:!1,tsType:{name:"union",raw:"'cover' | 'contain' | 'fill'",elements:[{name:"literal",value:"'cover'"},{name:"literal",value:"'contain'"},{name:"literal",value:"'fill'"}]},description:"",defaultValue:{value:"'cover'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Components/Img",component:p,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},rounded:{control:"boolean"},width:{control:"text"},height:{control:"text"},objectFit:{control:"select",options:["cover","contain","fill"]}}},t={args:{src:"https://via.placeholder.com/300x200",alt:"Placeholder image",width:300,height:200}},a={args:{src:"https://via.placeholder.com/300x200",alt:"Rounded image",width:300,height:200,rounded:!0}},r={args:{src:"https://via.placeholder.com/300x200",alt:"Disabled image",width:300,height:200,disabled:!0}};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Placeholder image',
    width: 300,
    height: 200
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Rounded image',
    width: 300,
    height: 200,
    rounded: true
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Disabled image',
    width: 300,
    height: 200,
    disabled: true
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const I=["Default","Rounded","Disabled"];export{t as Default,r as Disabled,a as Rounded,I as __namedExportsOrder,k as default};
