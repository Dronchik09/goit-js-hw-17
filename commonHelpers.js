import{S as b,i as n,a as m}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function l(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function f(r){if(r.ep)return;r.ep=!0;const a=l(r);fetch(r.href,a)}})();const s={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadmore:document.querySelector(".loadmore-button")},g=new b(".gallery a",{captionDelay:250,overlayOpacity:.8,scrollZoom:!1});g.on("show.simplelightbox",function(){});n.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:25,messageSize:25,backgroundColor:"rgba(255, 182, 66, 0.8)"});function L(e){return e.map(t=>`<li class="card">
            <a href="${t.largeImageURL}" class="big gallery-link">
              <img
                src="${t.previewURL}"
                alt="${t.tags}"
                title="${t.tags}"
                class="card-img"
            /></a>
            <ul class="card-title">
              <li class="card-text-blok">
                <h2 class="card-title-text">Likes</h2>
                <p class="card-text-value">${t.likes}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Views</h2>
                <p class="card-text-value">${t.views}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Comments</h2>
                <p class="card-text-value">${t.comments}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Downloads</h2>
                <p class="card-text-value">${t.downloads}</p>
              </li>
            </ul>
          </li>`).join("")}let h=!1;function d(e){if(!h){switch(s.loader.classList.remove("loader"),e){case"outdata":n.warning({title:"Error",message:"Введіть данні для пошуку!"});break;case"nodata":n.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});break;default:n.error({title:"Error",message:"We're sorry, but you've reached the end of search results."});break}h=!0}}function v(){const e=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({left:0,top:Math.ceil(e*2),behavior:"smooth"})}function p(e){s.loader.classList.remove("loader"),s.gallery.insertAdjacentHTML("beforeend",L(e)),g.refresh()}m.defaults.baseURL="https://pixabay.com/api";const c={key:"44850950-a38c775cff20ba6a666909e04",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};async function y(){return(await m.get("/",{params:c})).data}s.searchForm.addEventListener("submit",x);let o,i;function x(e){e.preventDefault(),o=1,i=1;const t=e.target.searchtext.value.trim().toLowerCase();if(!t){d("outdata");return}c.q=t,c.page=o,s.gallery.innerHTML="",s.loader.classList.add("loader"),y().then(l=>{if(i=Math.ceil(l.totalHits/c.per_page),i===0){d("nodata");return}p(l.hits),i>o&&(o+=1,w())}).catch(l=>{d(l)}).finally(s.searchForm.reset())}function w(){s.loadmore.style.setProperty("--lmb-dispay","block"),s.loadmore.addEventListener("click",()=>{s.loader.classList.add("loader"),c.page=o,y().then(e=>{if(p(e.hits),v(),i===o){s.loadmore.style.setProperty("--lmb-dispay","none"),iziToast.info({title:"Info",message:"We're sorry, but you've reached the end of search results."});return}else o+=1}).catch(e=>{d(e)})})}
//# sourceMappingURL=commonHelpers.js.map
