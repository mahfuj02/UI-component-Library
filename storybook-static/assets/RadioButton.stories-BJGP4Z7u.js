import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const T=i.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.7:1};
`,q=i.input.attrs({type:"radio"})`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${e=>e.disabled?"#cccccc":"#007bff"};
  border-radius: 50%;
  background-color: ${e=>e.backgroundColor||"white"};
  position: relative;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  &:checked {
    &:after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${e=>e.disabled?"#cccccc":"#007bff"};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
  }
`,w=i.span`
  color: ${e=>e.disabled?"#999999":"#333333"};
`,x=({label:e,name:h,value:v,checked:y=!1,disabled:t=!1,onChange:n,backgroundColor:k})=>s.jsxs(T,{disabled:t,children:[s.jsx(q,{name:h,value:v,checked:y,disabled:t,onChange:R=>n==null?void 0:n(R.target.value),backgroundColor:k}),s.jsx(w,{disabled:t,children:e})]});x.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Components/RadioButton",component:x,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},checked:{control:"boolean"},label:{control:"text"},name:{control:"text"},value:{control:"text"}}},o={args:{label:"Radio Option",name:"radioGroup",value:"option1"}},a={args:{label:"Selected Option",name:"radioGroup",value:"option1",checked:!0}},r={args:{label:"Disabled Option",name:"radioGroup",value:"option1",disabled:!0}};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Radio Option',
    name: 'radioGroup',
    value: 'option1'
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Selected Option',
    name: 'radioGroup',
    value: 'option1',
    checked: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,g,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Option',
    name: 'radioGroup',
    value: 'option1',
    disabled: true
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const S=["Default","Checked","Disabled"];export{a as Checked,o as Default,r as Disabled,S as __namedExportsOrder,G as default};
