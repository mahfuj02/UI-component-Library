import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{d as g}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const f=g.button`
  padding: ${e=>e.size==="small"?"8px 16px":e.size==="large"?"16px 32px":"12px 24px"};
  border-radius: 4px;
  border: none;
  background-color: ${e=>e.disabled?"#cccccc":e.backgroundColor||"#007bff"};
  color: white;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  
  &:hover {
    opacity: ${e=>e.disabled?1:.8};
  }
  
  @media (max-width: 768px) {
    padding: ${e=>e.size==="small"?"6px 12px":e.size==="large"?"14px 28px":"10px 20px"};
  }
`,d=({children:e,disabled:m=!1,backgroundColor:c,onClick:u,size:p="medium"})=>b.jsx(f,{disabled:m,backgroundColor:c,onClick:u,size:p,children:e});d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const z={title:"Components/Button",component:d,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},children:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]}}},r={args:{children:"Click me",backgroundColor:"#007bff",size:"medium"}},a={args:{children:"Disabled Button",disabled:!0,size:"medium"}};var o,s,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    backgroundColor: '#007bff',
    size: 'medium'
  }
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var i,n,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true,
    size: 'medium'
  }
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const k=["Primary","Disabled"];export{a as Disabled,r as Primary,k as __namedExportsOrder,z as default};
