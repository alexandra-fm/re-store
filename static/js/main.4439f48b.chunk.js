(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{31:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),o=n(13),a=n.n(o),s=n(6),i=n(5),l=n(20),u=function(t,e){if(void 0===t)return{books:[],loading:!0,error:null};switch(e.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:e.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:e.payload};default:return t.bookList}},d=n(11),j=function(t,e,n){var r=t.bookList.books,c=t.shoppingCart.cartItems,o=r.find((function(t){return t.id===e})),a=c.findIndex((function(t){return t.id===e})),s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.id,c=void 0===r?t.id:r,o=e.count,a=void 0===o?0:o,s=e.title,i=void 0===s?t.title:s,l=e.total;return{id:c,title:i,count:a+n,total:(void 0===l?0:l)+n*t.price}}(o,c[a],n),i=function(t,e,n){return 0===e.count?[].concat(Object(d.a)(t.slice(0,n)),Object(d.a)(t.slice(n+1))):-1===n?[].concat(Object(d.a)(t),[e]):[].concat(Object(d.a)(t.slice(0,n)),[e],Object(d.a)(t.slice(n+1)))}(c,s,a),l=function(t){return t.reduce((function(t,e){return t+e.total}),0)}(i),u=function(t){return t.reduce((function(t,e){return t+e.count}),0)}(i);return{cartItems:i,oredrTotal:l,orderCount:u}},b=function(t,e){if(void 0===t)return{cartItems:[],oredrTotal:0,orderCount:0};switch(e.type){case"BOOK_ADDED_TO_CART":return j(t,e.payload,1);case"BOOK_REMOVED_FROM_CART":return j(t,e.payload,-1);case"ALL_BOOKS_REMOVED_FROM_CART":var n=t.shoppingCart.cartItems.find((function(t){return t.id===e.payload}));return j(t,e.payload,-n.count);default:return t.shoppingCart}},O=function(t,e){return{bookList:u(t,e),shoppingCart:b(t,e)}},h=Object(l.a)(O),f=n(9),m=n(10),x=function(){function t(){Object(f.a)(this,t),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX258_BO1,204,203,200_.jpg"}]}return Object(m.a)(t,[{key:"getBooks",value:function(){var t=this;return new Promise((function(e,n){setTimeout((function(){Math.random()>.8?n(new Error("Something bad happend")):e(t.data)}),700)}))}}]),t}(),p=n(2),v=(n(31),n(1)),g=Object(s.b)((function(t){var e=t.shoppingCart;return{numItems:e.orderCount,total:e.oredrTotal}}))((function(t){var e=t.numItems,n=t.total;return Object(v.jsxs)("header",{className:"shop-header ",children:[Object(v.jsx)(i.b,{className:"logo text-dark",to:"/",children:"ReStore"}),Object(v.jsxs)(i.b,{to:"/cart",className:"shopping-cart",children:[e,"items ($",n,")",Object(v.jsx)("i",{className:"cart-icon bi bi-bag-check"})]})]})})),k=n(15),C=n(14),y=n(18),_=c.a.createContext(),E=_.Provider,T=_.Consumer,N=function(){return function(t){return function(e){return Object(v.jsx)(T,{children:function(n){return Object(v.jsx)(t,Object(y.a)(Object(y.a)({},e),{},{bookstoreService:n}))}})}}},S=(n(33),function(t){var e=t.book,n=t.onAddedToCart,r=e.title,c=e.author,o=e.price,a=e.coverImage;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"book-list-item",children:[Object(v.jsx)("div",{className:"book-cover",children:Object(v.jsx)(i.b,{to:"/",children:Object(v.jsx)("img",{src:a,alt:"cover"})})}),Object(v.jsxs)("div",{className:"book-details",children:[Object(v.jsx)(i.b,{to:"/",className:"book-title",children:r}),Object(v.jsx)("div",{className:"book-author",children:c}),Object(v.jsxs)("div",{className:"book-price",children:["$",o]}),Object(v.jsx)("button",{className:"btn btn-outline-secondary add-to-cart",onClick:n,children:"Add to cart"})]})]})})}),R=function(t){return{type:"BOOK_ADDED_TO_CART",payload:t}},A=function(t,e){return function(){e({type:"FETCH_BOOKS_REQUEST"}),t.getBooks().then((function(t){e({type:"FETCH_BOOKS_SUCCESS",payload:t})})).catch((function(t){return e({type:"FETCH_BOOKS_FAILURE",payload:t})}))}},I=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}},B=(n(34),function(){return Object(v.jsx)("div",{className:"gooey-container",children:Object(v.jsxs)("div",{className:"gooey",children:[Object(v.jsx)("span",{className:"dot"}),Object(v.jsxs)("div",{className:"dots",children:[Object(v.jsx)("span",{}),Object(v.jsx)("span",{}),Object(v.jsx)("span",{})]})]})})}),D=(n(35),function(){return Object(v.jsx)("div",{children:"Something went terribly wrong"})}),F=(n(36),function(t){var e=t.books,n=t.onAddedToCart;return Object(v.jsx)("ul",{className:"book-list",children:e.map((function(t){return Object(v.jsx)("li",{className:"book-list-item-container",children:Object(v.jsx)(S,{book:t,onAddedToCart:function(){return n(t.id)}})},t.id)}))})}),w=function(t){Object(k.a)(n,t);var e=Object(C.a)(n);function n(){return Object(f.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var t=this.props,e=t.books,n=t.loading,r=t.error,c=t.onAddedToCart;return r?Object(v.jsx)(D,{}):n?Object(v.jsx)(B,{}):Object(v.jsx)(F,{books:e,onAddedToCart:c})}}]),n}(r.Component),L=I(N(),Object(s.b)((function(t){var e=t.bookList;return{books:e.books,loading:e.loading,error:e.error}}),(function(t,e){var n=e.bookstoreService;return{fetchBooks:A(n,t),onAddedToCart:function(e){return t(R(e))}}})))(w),K=(n(37),{onIncrease:R,onDecrease:function(t){return{type:"BOOK_REMOVED_FROM_CART",payload:t}},onDelete:function(t){return{type:"ALL_BOOKS_REMOVED_FROM_CART",payload:t}}}),M=Object(s.b)((function(t){var e=t.shoppingCart;return{items:e.cartItems,total:e.oredrTotal}}),K)((function(t){var e=t.items,n=t.total,r=t.onIncrease,c=t.onDecrease,o=t.onDelete;return Object(v.jsxs)("div",{className:"shopping-cart-table",children:[Object(v.jsx)("h2",{children:"Your Order"}),Object(v.jsxs)("table",{className:"table",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"#"}),Object(v.jsx)("th",{children:"Item"}),Object(v.jsx)("th",{children:"Count"}),Object(v.jsx)("th",{children:"Price"}),Object(v.jsx)("th",{children:"Action"})]})}),Object(v.jsx)("tbody",{children:e.map((function(t,e){var n=t.id,a=t.title,s=t.count,i=t.total;return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e+1}),Object(v.jsx)("td",{children:a}),Object(v.jsx)("td",{children:s}),Object(v.jsxs)("td",{children:["$",i]}),Object(v.jsxs)("td",{children:[Object(v.jsx)("button",{className:"btn btn-outline-secondary btn-sm float-end",onClick:function(){return o(n)},children:Object(v.jsx)("i",{className:"bi bi-x-lg"})}),Object(v.jsx)("button",{className:"btn btn-outline-secondary btn-sm float-end",onClick:function(){return c(n)},children:Object(v.jsx)("i",{className:"bi bi-dash-lg"})}),Object(v.jsx)("button",{className:"btn btn-outline-secondary btn-sm float-end",onClick:function(){return r(n)},children:Object(v.jsx)("i",{className:"bi bi-plus-lg"})})]})]},n)}))})]}),Object(v.jsxs)("div",{className:"total",children:["Total: $",n]})]})})),H=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L,{}),Object(v.jsx)(M,{})]})},U=function(){return Object(v.jsx)(M,{})},P=(n(38),function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("main",{role:"main",className:"container",children:[Object(v.jsx)(g,{}),Object(v.jsx)(p.c,{children:Object(v.jsxs)(p.a,{path:"/",children:[Object(v.jsx)(p.a,{index:!0,element:Object(v.jsx)(H,{})}),Object(v.jsx)(p.a,{path:"cart",element:Object(v.jsx)(U,{})}),Object(v.jsx)(p.a,{path:"*",element:Object(v.jsx)("h2",{children:"Page not found"})})]})})]})})}),V=function(t){Object(k.a)(n,t);var e=Object(C.a)(n);function n(){var t;Object(f.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={hasError:!1},t}return Object(m.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(v.jsx)(D,{}):this.props.children}}]),n}(r.Component),J=V,$=new x;a.a.render(Object(v.jsx)(s.a,{store:h,children:Object(v.jsx)(J,{children:Object(v.jsx)(E,{value:$,children:Object(v.jsx)(i.a,{children:Object(v.jsx)(P,{})})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.4439f48b.chunk.js.map