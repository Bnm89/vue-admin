import{l as f,q as B,v as x,d,o,c as r,b as e,M as p,N as y,e as u,w as a,E as g,f as i,Q as s,O as v}from"./index.79b99562.js";const w={title:{},tooltip:{},xAxis:{data:["\u886C\u886B","\u7F8A\u6BDB\u886B","\u96EA\u7EBA\u886B","\u88E4\u5B50","\u9AD8\u8DDF\u978B","\u889C\u5B50"]},yAxis:{},series:[{name:"\u9500\u91CF",type:"bar",data:[5,20,36,10,10,20]}]},b={title:{text:"\u524D\u7AEF\u6280\u672F",subtext:"\u6280\u672F\u6808",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"\u6280\u672F\u6808",type:"pie",radius:"50%",data:[{value:1048,name:"JavaScript"},{value:735,name:"Vue3"},{value:580,name:"React"},{value:484,name:"webpack"},{value:300,name:"vite"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},A={class:"grid md:grid-flow-col gap-3"},E={class:"flex justify-between items-center"},C=i("\u6708"),D={class:"flex justify-between items-center"},F={class:"text-2xl"},k={class:"text-xs flex justify-between mt-5"},T={class:"mt-5 grid md:grid-cols-2 gap-3"},N=e("div",{slot:"header"},[e("span",null,"\u7528\u6237\u7EDF\u8BA1")],-1),O=e("div",{id:"echart",style:{height:"400px"},class:"w-full h-[80px] md:w-[600px]"},null,-1),V=e("div",{slot:"header"},[e("span",null,"\u9500\u552E\u989D")],-1),j=e("div",{id:"echart1",style:{height:"400px"},class:"w-full h-[80px] md:w-[600px]"},null,-1),S={route:{name:"home",meta:{}}},I=f({...S,__name:"home",setup(q){const _=B([{title:"\u603B\u4EBA\u6570",icon:"fab fa-alipay",price:233343,total:87685678,totalTitle:"\u603B\u4EBA\u6570"},{title:"\u9500\u552E\u989D",icon:"fab fa-apple",price:233343,total:87685678,totalTitle:"\u603B\u9500\u552E\u989D"},{title:"\u8BA2\u5355\u6570",icon:"fab fa-behance-square",price:233343,total:87685678,totalTitle:"\u603B\u8BA2\u5355\u6570"},{title:"\u8BC4\u8BBA\u6570",icon:"fab fa-centercode",price:233343,total:87685678,totalTitle:"\u603B\u8BC4\u8BBA\u6570"}]);return x(()=>{var n=echarts.init(document.getElementById("echart")),c=echarts.init(document.getElementById("echart1"));n.setOption(w),c.setOption(b)}),(n,c)=>{const h=d("el-tag"),l=d("el-card");return o(),r(p,null,[e("div",A,[(o(!0),r(p,null,y(_.value,(t,m)=>(o(),g(l,{shadow:"hover","body-style":{padding:"20px"},key:m},{header:a(()=>[e("div",E,[i(s(t.title)+" ",1),u(h,{type:"danger",size:"small",effect:"dark"},{default:a(()=>[C]),_:1})])]),default:a(()=>[e("section",D,[e("span",F,s(t.price),1),e("i",{class:v(["text-violet-500 text-4xl",t.icon])},null,2)]),e("section",k,[i(s(t.totalTitle),1),e("span",null,s(t.total),1)])]),_:2},1024))),128))]),e("div",T,[u(l,{shadow:"always","body-style":{padding:"20px"}},{default:a(()=>[N,O]),_:1}),u(l,{shadow:"always","body-style":{padding:"20px"}},{default:a(()=>[V,j]),_:1})])],64)}}});export{I as default};