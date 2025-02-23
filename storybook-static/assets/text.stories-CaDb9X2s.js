import{j as z}from"./jsx-runtime-D_zvdyIk.js";import{d as $}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const w=$.p`
  margin: 0;
  color: ${e=>e.disabled?"#999999":e.color||"#333333"};
  
  ${e=>{switch(e.variant){case"heading":return`
          font-weight: bold;
          font-size: ${e.size==="small"?"18px":e.size==="large"?"32px":"24px"};
        `;case"caption":return`
          font-size: ${e.size==="small"?"12px":e.size==="large"?"16px":"14px"};
          color: #666666;
        `;default:return`
          font-size: ${e.size==="small"?"14px":e.size==="large"?"18px":"16px"};
        `}}}

  @media (max-width: 768px) {
    ${e=>e.variant==="heading"&&`
      font-size: ${e.size==="small"?"16px":e.size==="large"?"28px":"20px"};
    `}
  }
`,f=({children:e,variant:b="body",disabled:v=!1,color:y,size:T="medium"})=>z.jsx(w,{variant:b,disabled:v,color:y,size:T,children:e});f.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'body' | 'heading' | 'caption'",elements:[{name:"literal",value:"'body'"},{name:"literal",value:"'heading'"},{name:"literal",value:"'caption'"}]},description:"",defaultValue:{value:"'body'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const _={title:"Components/Text",component:f,argTypes:{variant:{control:"select",options:["body","heading","caption"]},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},color:{control:"color"},children:{control:"text"}}},a={args:{children:"This is a body text example",variant:"body"}},r={args:{children:"This is a heading",variant:"heading"}},t={args:{children:"This is a caption text",variant:"caption"}},i={args:{children:"This text is disabled",disabled:!0}};var s,n,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'This is a body text example',
    variant: 'body'
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'This is a heading',
    variant: 'heading'
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a caption text',
    variant: 'caption'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,x,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'This text is disabled',
    disabled: true
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const j=["Body","Heading","Caption","Disabled"];export{a as Body,t as Caption,i as Disabled,r as Heading,j as __namedExportsOrder,_ as default};
