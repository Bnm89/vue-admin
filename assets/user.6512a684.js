import{G as u,H as e,I as o,J as a,K as i}from"./index.961a3509.js";function l(){e().remove(o.TOKEN_NAME),i().info=null,a.push("/")}async function c(t){var s;const{result:{token:n}}=await u.login(t);e().set(o.TOKEN_NAME,{expire:13e4,token:n});const r=(s=e().get(o.REDIRECT_ROUTE_NAME))!=null?s:"home";a.push({name:r})}export{l as a,c as l};
