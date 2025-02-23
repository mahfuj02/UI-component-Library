import{j as x}from"./jsx-runtime-D_zvdyIk.js";import{d as q}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const y=q.label`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.disabled?"#999999":"#333333"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  background-color: ${e=>e.disabled?"#f5f5f5":e.backgroundColor||"transparent"};
  padding: 4px 8px;
  border-radius: 4px;

  ${e=>e.required&&`
    &:after {
      content: '*';
      color: #ff4444;
      margin-left: 4px;
    }
  `}

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px 6px;
  }
`,m=({children:e,disabled:b=!1,htmlFor:f,required:g=!1,backgroundColor:h})=>x.jsx(y,{disabled:b,htmlFor:f,required:g,backgroundColor:h,children:e});m.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},htmlFor:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/Label",component:m,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},required:{control:"boolean"},htmlFor:{control:"text"},children:{control:"text"}}},r={args:{children:"Username",htmlFor:"username"}},a={args:{children:"Password",htmlFor:"password",required:!0}},o={args:{children:"Disabled Label",disabled:!0}};var s,t,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Username',
    htmlFor: 'username'
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var d,l,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Password',
    htmlFor: 'password',
    required: true
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Label',
    disabled: true
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const L=["Default","Required","Disabled"];export{r as Default,o as Disabled,a as Required,L as __namedExportsOrder,F as default};
