import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{d as s}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const x=s.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${e=>e.disabled?"#f5f5f5":e.backgroundColor||"white"};
  opacity: ${e=>e.disabled?.7:1};
  border: 1px solid #ddd;
`,g=s.th`
  padding: 12px;
  background-color: ${e=>e.disabled?"#e0e0e0":e.backgroundColor||"#f8f9fa"};
  border: 1px solid #ddd;
  font-weight: bold;
  cursor: ${e=>e.disabled?"not-allowed":"default"};
`,j=s.tr`
  &:nth-child(even) {
    background-color: ${e=>e.disabled?"#f5f5f5":e.backgroundColor||"#f8f9fa"};
  }
  cursor: ${e=>e.disabled?"not-allowed":"default"};
`,R=s.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: ${e=>e.align||"left"};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
  background-color: ${e=>e.backgroundColor};
`,y=s.tfoot`
  background-color: ${e=>e.disabled?"#e0e0e0":e.backgroundColor||"#f8f9fa"};
  font-weight: bold;
  cursor: ${e=>e.disabled?"not-allowed":"default"};
`,c=({children:e,disabled:a,backgroundColor:d})=>l.jsx(x,{disabled:a,backgroundColor:d,children:e}),n=({children:e,disabled:a,backgroundColor:d})=>l.jsx(g,{disabled:a,backgroundColor:d,children:e}),o=({children:e,disabled:a,backgroundColor:d})=>l.jsx(j,{disabled:a,backgroundColor:d,children:e}),r=({children:e,disabled:a,backgroundColor:d,align:f})=>l.jsx(R,{disabled:a,backgroundColor:d,align:f,children:e}),m=({children:e,disabled:a,backgroundColor:d})=>l.jsx(y,{disabled:a,backgroundColor:d,children:e});c.__docgenInfo={description:"",methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"TableFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/Table",component:c,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"}}},t={render:e=>l.jsxs(c,{...e,children:[l.jsx("thead",{children:l.jsxs(o,{children:[l.jsx(n,{children:"Header 1"}),l.jsx(n,{children:"Header 2"}),l.jsx(n,{children:"Header 3"})]})}),l.jsxs("tbody",{children:[l.jsxs(o,{children:[l.jsx(r,{children:"Cell 1"}),l.jsx(r,{children:"Cell 2"}),l.jsx(r,{children:"Cell 3"})]}),l.jsxs(o,{children:[l.jsx(r,{children:"Cell 4"}),l.jsx(r,{children:"Cell 5"}),l.jsx(r,{children:"Cell 6"})]})]}),l.jsx(m,{children:l.jsxs(o,{children:[l.jsx(r,{children:"Footer 1"}),l.jsx(r,{children:"Footer 2"}),l.jsx(r,{children:"Footer 3"})]})})]})},i={render:e=>l.jsxs(c,{...e,disabled:!0,children:[l.jsx("thead",{children:l.jsxs(o,{disabled:!0,children:[l.jsx(n,{disabled:!0,children:"Header 1"}),l.jsx(n,{disabled:!0,children:"Header 2"})]})}),l.jsx("tbody",{children:l.jsxs(o,{disabled:!0,children:[l.jsx(r,{disabled:!0,children:"Cell 1"}),l.jsx(r,{disabled:!0,children:"Cell 2"})]})})]})};var b,T,p;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Table {...args}>\r
      <thead>\r
        <TableRow>\r
          <TableHeader>Header 1</TableHeader>\r
          <TableHeader>Header 2</TableHeader>\r
          <TableHeader>Header 3</TableHeader>\r
        </TableRow>\r
      </thead>\r
      <tbody>\r
        <TableRow>\r
          <TableCell>Cell 1</TableCell>\r
          <TableCell>Cell 2</TableCell>\r
          <TableCell>Cell 3</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>Cell 4</TableCell>\r
          <TableCell>Cell 5</TableCell>\r
          <TableCell>Cell 6</TableCell>\r
        </TableRow>\r
      </tbody>\r
      <TableFooter>\r
        <TableRow>\r
          <TableCell>Footer 1</TableCell>\r
          <TableCell>Footer 2</TableCell>\r
          <TableCell>Footer 3</TableCell>\r
        </TableRow>\r
      </TableFooter>\r
    </Table>
}`,...(p=(T=t.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};var u,h,C;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Table {...args} disabled>\r
      <thead>\r
        <TableRow disabled>\r
          <TableHeader disabled>Header 1</TableHeader>\r
          <TableHeader disabled>Header 2</TableHeader>\r
        </TableRow>\r
      </thead>\r
      <tbody>\r
        <TableRow disabled>\r
          <TableCell disabled>Cell 1</TableCell>\r
          <TableCell disabled>Cell 2</TableCell>\r
        </TableRow>\r
      </tbody>\r
    </Table>
}`,...(C=(h=i.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const N=["Default","Disabled"];export{t as Default,i as Disabled,N as __namedExportsOrder,q as default};
