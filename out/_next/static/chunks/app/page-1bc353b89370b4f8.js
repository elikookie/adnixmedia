(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9308:(e,t,s)=>{Promise.resolve().then(s.bind(s,9809))},7025:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var i=s(5155),r=s(7396),n=s(2115),l=s(1169);function a(){let[e,t]=(0,n.useState)(!1);return(0,i.jsxs)("nav",{className:"bg-white text-blue-500 p-5 shadow-lg fixed w-full top-0 left-0 z-50",children:[(0,i.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,i.jsx)("div",{className:"text-2xl font-extrabold tracking-wide",children:"Adnix Media"}),(0,i.jsxs)("div",{className:"hidden md:flex space-x-6 text-lg",children:[(0,i.jsx)(r.default,{href:"/",className:"hover:underline transition duration-200",children:"Home"}),(0,i.jsx)(r.default,{href:"/services",className:"hover:underline transition duration-200",children:"Services"}),(0,i.jsx)(r.default,{href:"/about",className:"hover:underline transition duration-200",children:"About"}),(0,i.jsx)(r.default,{href:"/contact",className:"hover:underline transition duration-200",children:"Contact"})]}),(0,i.jsx)("div",{className:"md:hidden",children:(0,i.jsx)("button",{onClick:()=>t(!e),children:e?(0,i.jsx)(l.zhF,{size:24}):(0,i.jsx)(l.mu4,{size:24})})})]}),e&&(0,i.jsxs)("div",{className:"md:hidden flex flex-col bg-white p-5 space-y-4",children:[(0,i.jsx)(r.default,{href:"/",className:"hover:underline transition duration-200",onClick:()=>t(!1),children:"Home"}),(0,i.jsx)(r.default,{href:"/services",className:"hover:underline transition duration-200",onClick:()=>t(!1),children:"Services"}),(0,i.jsx)(r.default,{href:"/about",className:"hover:underline transition duration-200",onClick:()=>t(!1),children:"About"}),(0,i.jsx)(r.default,{href:"/contact",className:"hover:underline transition duration-200",onClick:()=>t(!1),children:"Contact"})]})]})}},9809:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var i=s(5155),r=s(7396),n=s(2115),l=s(7025);function a(){let[e,t]=(0,n.useState)(0);return(0,n.useEffect)(()=>{document.querySelectorAll(".dot").forEach((e,t)=>{e.addEventListener("click",()=>{let e=document.getElementById("section-".concat(t));e&&e.scrollIntoView({behavior:"smooth",block:"start"})})});let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t(parseInt(e.target.id.split("-")[1],10))})},{root:null,rootMargin:"0px",threshold:.5}),s=document.querySelectorAll("section");return s.forEach(t=>e.observe(t)),()=>{e&&s.forEach(t=>e.unobserve(t))}},[]),(0,i.jsxs)("div",{className:"relative h-full overflow-hidden",children:[(0,i.jsx)(l.default,{}),(0,i.jsx)("div",{className:"fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10",children:[void 0,void 0,void 0,void 0].map((t,s)=>(0,i.jsx)("div",{className:"dot w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition ".concat(e===s?"bg-blue-500":"bg-gray-400")},s))}),(0,i.jsxs)("div",{className:"snap-y snap-mandatory overflow-y-auto h-full w-full",children:[(0,i.jsx)("section",{id:"section-0",className:"snap-start bg-gradient-to-r from-blue-400 to-blue-600 text-white h-screen flex items-center justify-center p-8 md:p-16",children:(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h1",{className:"text-3xl md:text-5xl font-extrabold mb-4",children:"Welcome to Adnix Media"}),(0,i.jsx)("p",{className:"text-lg md:text-2xl",children:"Driving Bookings, Maximizing Revenue, and Growing Your Vacation Rental Business."})]})}),(0,i.jsx)("section",{id:"section-1",className:"snap-start bg-white text-blue-900 h-screen flex items-center justify-center p-8 md:p-16",children:(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center",children:[(0,i.jsxs)("div",{className:"text-center md:text-left md:pl-8",children:[(0,i.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:"Who We Are"}),(0,i.jsx)("p",{className:"text-base md:text-xl",children:"Adnix Media is a digital marketing agency dedicated to helping vacation property owners succeed. We specialize in strategies designed to fill your calendar with bookings, boost your property's online visibility, and increase your revenue—all while saving you time."})]}),(0,i.jsx)("img",{src:"teamwork.png",alt:"Teamwork illustration",className:"w-full max-w-xs md:max-w-sm mx-auto"})]})}),(0,i.jsx)("section",{id:"section-2",className:"snap-start bg-blue-50 text-blue-900 h-screen flex items-center justify-center p-8 md:p-16",children:(0,i.jsxs)("div",{className:"max-w-screen-lg mx-auto",children:[(0,i.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-12 text-center",children:"What We Offer"}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8",children:[(0,i.jsxs)("div",{className:"bg-white border-2 border-indigo-200 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2 hover:shadow-2xl",children:[(0,i.jsxs)("div",{className:"flex items-center mb-4",children:[(0,i.jsx)("div",{className:"w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-500 text-white",children:"\uD83C\uDF10"}),(0,i.jsx)("h3",{className:"text-xl md:text-2xl font-semibold ml-4",children:"Targeted Advertising"})]}),(0,i.jsx)("p",{className:"text-sm md:text-lg text-gray-600",children:"Reach the right guests with precision advertising that targets travelers actively looking for vacation rentals."})]}),(0,i.jsxs)("div",{className:"bg-white border-2 border-indigo-200 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2 hover:shadow-2xl",children:[(0,i.jsxs)("div",{className:"flex items-center mb-4",children:[(0,i.jsx)("div",{className:"w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-green-500 text-white",children:"\uD83D\uDD0D"}),(0,i.jsx)("h3",{className:"text-xl md:text-2xl font-semibold ml-4",children:"SEO Optimization"})]}),(0,i.jsx)("p",{className:"text-sm md:text-lg text-gray-600",children:"Enhance your property's online visibility with effective SEO strategies that bring organic traffic to your listings."})]}),(0,i.jsxs)("div",{className:"bg-white border-2 border-indigo-200 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2 hover:shadow-2xl",children:[(0,i.jsxs)("div",{className:"flex items-center mb-4",children:[(0,i.jsx)("div",{className:"w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white",children:"\uD83D\uDCF1"}),(0,i.jsx)("h3",{className:"text-xl md:text-2xl font-semibold ml-4",children:"Social Media Management"})]}),(0,i.jsx)("p",{className:"text-sm md:text-lg text-gray-600",children:"Engage with travelers through well-crafted posts and ads that convert followers into bookings."})]}),(0,i.jsxs)("div",{className:"bg-white border-2 border-indigo-200 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2 hover:shadow-2xl",children:[(0,i.jsxs)("div",{className:"flex items-center mb-4",children:[(0,i.jsx)("div",{className:"w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-purple-500 text-white",children:"\uD83D\uDD8B"}),(0,i.jsx)("h3",{className:"text-xl md:text-2xl font-semibold ml-4",children:"Custom Content Creation"})]}),(0,i.jsx)("p",{className:"text-sm md:text-lg text-gray-600",children:"Make your listings shine with compelling property descriptions, engaging blogs, and optimized content tailored to attract guests."})]})]})]})}),(0,i.jsx)("section",{id:"section-3",className:"snap-start bg-gradient-to-t from-blue-400 to-indigo-600 text-white h-screen flex items-center justify-center p-8 md:p-16",children:(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:"Why Choose Us?"}),(0,i.jsx)("p",{className:"text-base md:text-xl max-w-screen-md mx-auto",children:"With a focus on results and a money-back guarantee, we are committed to your success. Our personalized approach ensures strategies tailored to your property's unique needs."}),(0,i.jsx)("br",{}),(0,i.jsx)(r.default,{href:"/contact",children:(0,i.jsx)("p",{className:"mt-10 inline-block bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform",children:"Take Action Today!"})})]})})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[380,234,441,517,358],()=>t(9308)),_N_E=e.O()}]);