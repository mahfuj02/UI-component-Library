import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as D}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const O=D.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: ${e=>e.disabled?"#f5f5f5":e.backgroundColor||"white"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  width: 100%;
  font-size: 14px;
  color: ${e=>e.disabled?"#999":"#333"};

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`,v=({options:e,value:w,onChange:t,disabled:h=!1,placeholder:d,backgroundColor:y})=>n.jsxs(O,{value:w,onChange:o=>t==null?void 0:t(o.target.value),disabled:h,backgroundColor:y,children:[d&&n.jsx("option",{value:"",disabled:!0,children:d}),e.map(o=>n.jsx("option",{value:o.value,children:o.label},o.value))]});v.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Components/Dropdown",component:v,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},placeholder:{control:"text"}}},i=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],r={args:{options:i,placeholder:"Select an option"}},a={args:{options:i,value:"option2"}},s={args:{options:i,disabled:!0,placeholder:"Disabled dropdown"}};var l,p,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: 'Select an option'
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    value: 'option2'
  }
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,f,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    disabled: true,
    placeholder: 'Disabled dropdown'
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const k=["Default","WithValue","Disabled"];export{r as Default,s as Disabled,a as WithValue,k as __namedExportsOrder,j as default};
