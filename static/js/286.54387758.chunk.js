"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[286],{286:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(2791),c=n(9439),r=n(9434),s=n(241),i=n(8969),o=n(6151),l=n(5218),u="ContactForm_form__dhl+T",d=n(184);function m(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.contacts.items})),n=(0,a.useState)(""),m=(0,c.Z)(n,2),h=m[0],v=m[1],f=(0,a.useState)(""),x=(0,c.Z)(f,2),j=x[0],b=x[1],p=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":v(a);break;case"number":b(a);break;default:return}};return(0,d.jsxs)("form",{className:u,onSubmit:function(n){n.preventDefault();var a=t.some((function(e){return e.name===h}));if(a)l.Am.error("".concat(h," is already in contacts"));else{var c={name:h,number:j};e((0,s.el)(c)),l.Am.success("".concat(h," has been added to the contacts.")),v(""),b("")}},children:[(0,d.jsx)(i.Z,{id:"outlined-basic",label:"Name",variant:"outlined",name:"name",type:"text",value:h,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsx)(i.Z,{id:"outlined-basic",label:"Outlined",variant:"outlined",type:"tel",name:"number",value:j,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsx)("div",{children:(0,d.jsx)(o.Z,{style:{margin:"0 auto"},variant:"outlined",type:"submit",children:"Add contact"})})]})}var h="ContactListItem_item__UAAix",v="ContactListItem_decor__KKqPK",f="ContactListItem_thumbBtn__oQnzJ",x="ContactListItem_btn__Kdzd+",j=n(5607),b=n(1675),p=n(9634),Z=n(7861),C=function(e){var t=e.contact,n=(0,a.useState)(!1),o=(0,c.Z)(n,2),u=o[0],m=o[1],C=(0,a.useState)(t.name),_=(0,c.Z)(C,2),g=_[0],z=_[1],L=(0,a.useState)(""),y=(0,c.Z)(L,2),k=y[0],A=y[1];(0,a.useEffect)((function(){u&&A(t.number)}),[u,t]);var M=(0,r.I0)();return(0,d.jsxs)("li",{className:h,children:[(0,d.jsx)("span",{className:v}),u?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z,{style:{marginRight:10},id:"outlined-basic",label:"Change name",variant:"outlined",type:"text",value:g,onChange:function(e){return z(e.target.value)}}),(0,d.jsx)(i.Z,{id:"outlined-basic",label:"Change number",variant:"outlined",type:"text",value:k,onChange:function(e){return A(e.target.value)}}),(0,d.jsx)("button",{className:x,onClick:function(){M((0,s.Tk)({contactId:t.id,name:g,number:k})).then((function(){m(!1),M((0,s.yF)()),l.Am.success("".concat(g," has been modified."))})).catch((function(e){console.log(e),l.Am.error("Some error")}))},children:(0,d.jsx)(p.Z,{})}),(0,d.jsx)("button",{className:x,onClick:function(){m(!1),l.Am.success("".concat(g," has not been modified."))},children:(0,d.jsx)(Z.Z,{})})]}):(0,d.jsxs)(d.Fragment,{children:[t.name,": ",t.number,(0,d.jsxs)("div",{className:f,children:[(0,d.jsx)("button",{className:x,onClick:function(){m(!0),A(t.number)},children:(0,d.jsx)(b.Z,{})}),(0,d.jsx)("button",{className:x,onClick:function(){M((0,s.GK)(t.id)),l.Am.success("".concat(g," has been deleted from the contacts."))},children:(0,d.jsx)(j.Z,{})})]})]})]},t.id)},_=function(e){return e.filter},g=function(){var e=(0,r.v9)((function(e){return e.contacts.items})),t=(0,r.v9)(_),n=function(){var n=t.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,d.jsx)("ul",{style:{width:460,margin:"20px auto"},children:n.map((function(e){return(0,d.jsx)(C,{contact:e},e.id)}))})},z=n(2155),L=function(){var e=(0,r.I0)(),t=(0,r.v9)(_);return(0,d.jsx)(i.Z,{style:{minWidth:360},id:"outlined-basic",label:"Find contacts by name",variant:"outlined",type:"text",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,z.Tv)(n))}})},y="Contacts_wrapper__g0qS5",k="Contacts_thumb__gJVlM",A=function(){var e=(0,r.v9)((function(e){return e.contacts})).items;return(0,d.jsxs)("div",{className:y,children:[(0,d.jsx)("h1",{children:"Phone Book"}),(0,d.jsx)(m,{}),e.length>0?(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsxs)("div",{className:k,children:[(0,d.jsx)(L,{}),(0,d.jsx)(g,{})]})]}):(0,d.jsx)("p",{children:"There are no contacts in the phone book."})]})},M=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(A,{})})}},7861:function(e,t,n){var a=n(4836);t.Z=void 0;var c=a(n(5649)),r=n(184),s=(0,c.default)([(0,r.jsx)("path",{d:"M7.06 5 2.4 12l4.67 7H22V5H7.06c.01 0 .01 0 0 0zM9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59 17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41z",opacity:".3"},"0"),(0,r.jsx)("path",{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"},"1")],"BackspaceTwoTone");t.Z=s},5607:function(e,t,n){var a=n(4836);t.Z=void 0;var c=a(n(5649)),r=n(184),s=(0,c.default)([(0,r.jsx)("path",{d:"M16 9H8v10h8V9zm-.47 7.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12z",opacity:".3"},"0"),(0,r.jsx)("path",{d:"M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"},"1")],"DeleteForeverTwoTone");t.Z=s},1675:function(e,t,n){var a=n(4836);t.Z=void 0;var c=a(n(5649)),r=n(184),s=(0,c.default)([(0,r.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,r.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");t.Z=s},9634:function(e,t,n){var a=n(4836);t.Z=void 0;var c=a(n(5649)),r=n(184),s=(0,c.default)((0,r.jsx)("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"}),"SaveAltTwoTone");t.Z=s}}]);
//# sourceMappingURL=286.54387758.chunk.js.map