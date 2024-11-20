(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9308:(e,t,s)=>{Promise.resolve().then(s.bind(s,9809))},3074:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var l=s(5155),r=s(7396);function i(){return(0,l.jsxs)("footer",{className:"bg-white text-blue pb-4",children:[(0,l.jsx)("hr",{className:"pt-4"}),(0,l.jsxs)("div",{className:"flex justify-center space-x-10 mb-4",children:[(0,l.jsx)(r.default,{href:"/",className:"hover:underline transition duration-500",children:"Home"}),(0,l.jsx)(r.default,{href:"/services",className:"hover:underline transition duration-500",children:"Services"}),(0,l.jsx)(r.default,{href:"/about",className:"hover:underline transition duration-500",children:"About"}),(0,l.jsx)(r.default,{href:"/contact",className:"hover:underline transition duration-500",children:"Contact"})]}),(0,l.jsx)("div",{className:"text-center text-gray-400 text-sm",children:"\xa9 Adnix Media 2024"})]})}},7025:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var l=s(5155),r=s(7396),i=s(2115),a=s(1169);function n(){let[e,t]=(0,i.useState)(!1);return(0,l.jsxs)("nav",{className:"bg-white text-blue-500 p-5 shadow-lg fixed w-full top-0 left-0 z-50",children:[(0,l.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,l.jsx)("div",{className:"w-48",children:(0,l.jsx)(r.default,{href:"/",className:"",children:(0,l.jsx)("img",{src:"/logo.png"})})}),(0,l.jsxs)("div",{className:"hidden md:flex space-x-6 text-lg",children:[(0,l.jsx)(r.default,{href:"/",children:(0,l.jsx)("p",{className:"text-md hover:text-blue-400 transition",children:"Home"})}),(0,l.jsx)(r.default,{href:"/services",children:(0,l.jsx)("p",{className:"text-md hover:text-blue-400 transition",children:"Services"})}),(0,l.jsx)(r.default,{href:"/about",children:(0,l.jsx)("p",{className:"text-md hover:text-blue-400 transition",children:"About"})}),(0,l.jsx)(r.default,{href:"/contact",children:(0,l.jsx)("p",{className:"text-md hover:text-blue-400 transition",children:"Contact"})})]}),(0,l.jsx)("div",{className:"md:hidden",children:(0,l.jsx)("button",{onClick:()=>t(!e),children:e?(0,l.jsx)(a.zhF,{size:24}):(0,l.jsx)(a.mu4,{size:24})})})]}),e&&(0,l.jsxs)("div",{className:"md:hidden flex flex-col bg-white p-5 space-y-4",children:[(0,l.jsx)(r.default,{href:"/",className:"hover:underline transition duration-200",onClick:()=>t(!1),children:"Home"}),(0,l.jsx)(r.default,{href:"/services",className:"hover:underline transition duration-200",onClick:()=>t(!1),children:"Services"}),(0,l.jsx)(r.default,{href:"/about",className:"hover:underline transition duration-200",onClick:()=>t(!1),children:"About"}),(0,l.jsx)(r.default,{href:"/contact",className:"hover:underline transition duration-200",onClick:()=>t(!1),children:"Contact"})]})]})}},9809:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var l=s(5155),r=s(7396),i=s(2115),a=s(7025),n=s(3074);function d(){let[e,t]=(0,i.useState)(0);return(0,i.useEffect)(()=>{document.querySelectorAll(".dot").forEach((e,t)=>{e.addEventListener("click",()=>{let e=document.getElementById("section-".concat(t));e&&e.scrollIntoView({behavior:"smooth",block:"start"})})});let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t(parseInt(e.target.id.split("-")[1],10))})},{root:null,rootMargin:"0px",threshold:.5}),s=document.querySelectorAll("section");return s.forEach(t=>e.observe(t)),()=>{e&&s.forEach(t=>e.unobserve(t))}},[]),(0,l.jsxs)("div",{className:"relative h-full overflow-hidden font-sans",children:[(0,l.jsx)(a.default,{}),(0,l.jsx)("div",{className:"fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10",children:[void 0,void 0,void 0,void 0].map((t,s)=>(0,l.jsx)("div",{className:"dot w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all duration-300 ".concat(e===s?"bg-gradient-to-r from-blue-500 to-teal-400":"bg-gray-400")},s))}),(0,l.jsxs)("div",{className:"snap-y snap-mandatory overflow-y-auto h-full w-full scroll-smooth",children:[(0,l.jsx)("section",{id:"section-0",className:"bg-fixed bg-cover bg-center h-screen flex items-center justify-center p-8 md:p-16",style:{backgroundImage:"url('/backdrop.jpg')"},children:(0,l.jsxs)("div",{className:"text-center text-white drop-shadow-md animate-fade-in",children:[(0,l.jsx)("h1",{className:"text-4xl md:text-6xl font-extrabold mb-4",children:"Welcome to Adnix Media"}),(0,l.jsx)("p",{className:"text-lg md:text-2xl font-light",children:"Driving Bookings, Maximizing Revenue, and Growing Your Vacation Rental Business."}),(0,l.jsx)("div",{className:"mt-8",children:(0,l.jsx)(r.default,{href:"#section-1",children:(0,l.jsx)("p",{className:"inline-block bg-blue-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-110 shadow-lg",children:"Learn More"})})})]})}),(0,l.jsx)("section",{id:"section-1",className:"relative bg-gradient-to-r from-white to-gray-100 min-h-screen flex items-center justify-center px-8 md:px-16",children:(0,l.jsxs)("div",{className:"max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[(0,l.jsxs)("div",{className:"text-center lg:text-left space-y-6",children:[(0,l.jsx)("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-snug",children:"Who We Are"}),(0,l.jsx)("p",{className:"text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed",children:"Adnix Media is a digital marketing agency dedicated to helping vacation property owners succeed. We specialize in strategies designed to fill your calendar with bookings, boost your property's online visibility, and increase your revenue—all while saving you time."}),(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)(r.default,{href:"#section-2",children:(0,l.jsx)("p",{className:"inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 shadow-lg",children:"Explore Our Services"})})})]}),(0,l.jsx)("div",{className:"relative group",children:(0,l.jsx)("img",{src:"/up.jpg",alt:"Adnix Media Team",className:"w-full h-full object-cover rounded-lg shadow-lg"})})]})}),(0,l.jsx)("section",{id:"section-2",className:"relative bg-gradient-to-tr from-blue-50 to-indigo-100 min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16",children:(0,l.jsxs)("div",{className:"max-w-screen-xl w-full",children:[(0,l.jsx)("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12",children:"What We Offer"}),(0,l.jsxs)("div",{className:"relative py-2",children:[(0,l.jsx)("div",{className:"absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-400 to-indigo-500 hidden md:block"}),(0,l.jsxs)("div",{className:"relative flex flex-col md:flex-row items-center mb-12 md:mb-16",children:[(0,l.jsxs)("div",{className:"w-full md:w-1/2 md:pr-8 text-center md:text-right",children:[(0,l.jsx)("h3",{className:"text-2xl sm:text-3xl font-bold mb-4",children:"Targeted Advertising"}),(0,l.jsx)("p",{className:"text-base sm:text-lg text-gray-700 leading-relaxed",children:"Reach the right guests with precision advertising that targets travelers actively looking for vacation rentals. Tailored campaigns ensure your property stands out."})]}),(0,l.jsx)("div",{className:"relative w-full md:w-1/2 flex justify-center md:pl-8 mt-4 md:mt-0"})]}),(0,l.jsxs)("div",{className:"relative flex flex-col md:flex-row items-center mb-12 md:mb-16",children:[(0,l.jsx)("div",{className:"relative w-full md:w-1/2 flex justify-center md:pr-8 mt-4 md:mt-0 order-2 md:order-1"}),(0,l.jsxs)("div",{className:"w-full md:w-1/2 md:pl-8 text-center md:text-left order-1 md:order-2",children:[(0,l.jsx)("h3",{className:"text-2xl sm:text-3xl font-bold mb-4",children:"SEO Optimization"}),(0,l.jsx)("p",{className:"text-base sm:text-lg text-gray-700 leading-relaxed",children:"Enhance your property's online visibility with effective SEO strategies. Drive organic traffic and improve search rankings for your listings."})]})]}),(0,l.jsxs)("div",{className:"relative flex flex-col md:flex-row items-center mb-12 md:mb-16",children:[(0,l.jsxs)("div",{className:"w-full md:w-1/2 md:pr-8 text-center md:text-right",children:[(0,l.jsx)("h3",{className:"text-2xl sm:text-3xl font-bold mb-4",children:"Social Media Management"}),(0,l.jsx)("p",{className:"text-base sm:text-lg text-gray-700 leading-relaxed",children:"Engage with travelers through impactful social media campaigns. Create meaningful connections that convert followers into bookings."})]}),(0,l.jsx)("div",{className:"relative w-full md:w-1/2 flex justify-center md:pl-8 mt-4 md:mt-0"})]}),(0,l.jsxs)("div",{className:"relative flex flex-col md:flex-row items-center",children:[(0,l.jsx)("div",{className:"relative w-full md:w-1/2 flex justify-center md:pr-8 mt-4 md:mt-0 order-2 md:order-1"}),(0,l.jsxs)("div",{className:"w-full md:w-1/2 md:pl-8 text-center md:text-left order-1 md:order-2",children:[(0,l.jsx)("h3",{className:"text-2xl sm:text-3xl font-bold mb-4",children:"Custom Content Creation"}),(0,l.jsx)("p",{className:"text-base sm:text-lg text-gray-700 leading-relaxed",children:"Make your listings shine with compelling property descriptions, engaging blogs, and optimized content tailored to attract guests."})]})]})]})]})}),(0,l.jsx)("section",{id:"section-3",className:"relative bg-gradient-to-b from-blue-600 to-indigo-800 h-screen flex items-center justify-center p-8 md:p-16",children:(0,l.jsxs)("div",{className:"text-center text-white",children:[(0,l.jsx)("h2",{className:"text-4xl md:text-5xl font-bold mb-6",children:"Why Choose Us?"}),(0,l.jsx)("p",{className:"text-lg md:text-xl max-w-screen-md mx-auto",children:"With a focus on results and a money-back guarantee, we are committed to your success. Our personalized approach ensures strategies tailored to your property's unique needs."}),(0,l.jsx)("div",{className:"mt-8",children:(0,l.jsx)(r.default,{href:"/contact",children:(0,l.jsx)("p",{className:"inline-block bg-white text-black px-6 py-3 rounded-lg shadow-lg transform hover:scale-110",children:"Take Action Today!"})})})]})}),(0,l.jsx)(n.A,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[380,234,441,517,358],()=>t(9308)),_N_E=e.O()}]);