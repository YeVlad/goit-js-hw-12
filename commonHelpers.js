import{a as C,S as w,i as n}from"./assets/vendor-f736e62a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function p(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=p(e);fetch(e.href,o)}})();async function f(s,t){return await C({url:"https://pixabay.com/api/",params:{key:"16991331-df0a6792d36af314f174a3b15",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}function m(s){return s.hits.map(({webformatURL:p,largeImageURL:l,tags:e,likes:o,views:c,comments:g,downloads:b})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${l}">
                    <img src="${p}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${o}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${c}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${g}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${b}</span>
                </div>
            </div>
        </li>`).join("")}const v=document.querySelector(".form-search"),r=document.querySelector(".loader");r.style.borderColor="white";r.style.borderBottomColor="transparent";const d=document.querySelector(".images-place"),i=document.querySelector(".buttonMore"),y=new w(".card .place-for-image a",{captionsData:"alt",captionDelay:250});v.addEventListener("submit",L);i.addEventListener("click",S);let a=1,u,h;async function L(s){s.preventDefault(),i.hidden=!0,d.innerHTML="",r.style.borderColor="black",r.style.borderBottomColor="transparent",h=s.currentTarget.elements.inputSearch.value,a=1,f(h,a).then(t=>{if(t.total==0){n.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"});return}else d.insertAdjacentHTML("beforeend",m(t.data)),d.children.length&&(i.hidden=!1),y.refresh(),s.target.reset(),a=a+1,u=Math.floor(t.data.totalHits/15),a==u&&(n.show({titleColor:"white",message:"We're sorry, but you've reached the end of search results.!",messageColor:"white",color:"blue",position:"topCenter",timeout:"5000"}),i.hidden=!0)}).catch(t=>{n.show({title:"Ops.",titleColor:"white",message:t,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})}).finally(()=>{r.style.borderColor="white",r.style.borderBottomColor="transparent"})}async function S(s){i.hidden=!0,r.style.borderColor="black",r.style.borderBottomColor="transparent",f(h,a).then(t=>{if(t.total==0){n.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"});return}else d.insertAdjacentHTML("beforeend",m(t.data)),d.children.length&&(i.hidden=!1),y.refresh(),a=a+1,a>u&&(n.show({titleColor:"white",message:"We're sorry, but you've reached the end of search results.!",messageColor:"white",color:"blue",position:"topCenter",timeout:"5000"}),i.hidden=!0)}).catch(t=>{n.show({title:"Ops.",titleColor:"white",message:t,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})}).finally(()=>{r.style.borderColor="white",r.style.borderBottomColor="transparent"})}
//# sourceMappingURL=commonHelpers.js.map
