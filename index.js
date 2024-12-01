import{S as d,i as h}from"./assets/vendor-B2mb6eXk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S=document.querySelector(".loader"),w="47396202-c5f2839f415e9ee9a67459191";function b(t){const r=new URLSearchParams({key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(s=>{if(!s.ok)throw u(n.error.type,n.error.message),new Error("Failed to fetch data");return s.json()}).catch(s=>{console.error("Error:",s.message),S.style.display="none"})}const L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function v(t,r){r.innerHTML=q(t),L.refresh()}function q(t){return t.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:o,comments:i,downloads:y})=>`<li class = 'list-item'>
            <a class='gallery-link' href='${s}'>
                <img
                    class = 'gallery-image'
                    src = '${r}'
                    alt =  '${l}'>
                <ul class = 'description-list'>
                    <li class = 'description-item'>
                        <h3>Likes</h3>
                        <p>${e}</p>
                    </li>
                    <li class = 'description-item'>
                        <h3>Views</h3>
                        <p>${o}</p>
                    </li>
                    <li class = 'description-item'>
                        <h3>Comments</h3>
                        <p>${i}</p>
                    </li>
                    <li class = 'description-item'>
                        <h3>Downloads</h3>
                        <p>${y}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("")}const g=document.querySelector(".search-form"),E=document.querySelector('[name="search"]'),c=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";g.addEventListener("input",I);g.addEventListener("submit",$);const f="input-name-image",p=JSON.parse(localStorage.getItem(f)),m={search:""};p&&(E.value=p.search,m.search=p.search);function I(t){m.search=t.target.value.trim(),localStorage.setItem(f,JSON.stringify(m))}function $(t){t.preventDefault(),c.innerHTML="",a.style.display="block";const r=t.target.elements.search;if(!r.value.trim()){a.style.display="none",u(n.info.type,n.info.message),c.innerHTML="";return}b(r.value.trim()).then(s=>{if(!s.hits.length){a.style.display="none",u(n.warning.type,n.warning.message),c.innerHTML="";return}a.style.display="none",u(n.success.type,n.success.message),v(s.hits,c)}).finally(()=>{a.style.display="none",localStorage.removeItem(f),m.search="",g.reset()})}const n={success:{type:"success",message:"Request completed successfully"},info:{type:"info",message:"The field must be filled"},warning:{type:"warning",message:"Sorry, there are no images matching your search query. Please try again!"},error:{type:"error",message:"Something went wrong. Please try again later!"}};function u(t,r){const s={success:"rgb(0, 255, 128, 0.7)",info:"rgb(76, 153, 255, 0.7)",warning:"rgb(255, 193, 7, 0.7)",error:"rgb(255, 76, 76, 0.7)"};h.show({message:r,messageColor:"white",position:"topRight",backgroundColor:s[t]})}
//# sourceMappingURL=index.js.map
