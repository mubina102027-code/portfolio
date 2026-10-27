const dict={
uz:{nav_about:"Men haqimda",nav_skills:"Ko'nikmalar",nav_projects:"Loyihalar",nav_contact:"Aloqa",hello:"Salom, men",cta1:"Ishlarimni ko'ring",cta2:"Bog'laning",
about_t:"Men haqimda",about_p:"Men dasturchiman. Oddiy g'oyani qulay, chiroyli va tez ishlaydigan veb-sahifaga aylantirishni yaxshi ko'raman. Har bir loyihada tartib va detalga e'tibor beraman.",
f1:"yillik tajriba",f2:"tugatilgan loyiha",f3:"ishchi tillar",skills_t:"Ko'nikmalar",proj_t:"Loyihalar",view:"Ko'rish",
p1_t:"Onlayn do'kon",p1_d:"Kiyim do'koni uchun katalog va savat sahifasi.",p2_t:"Vazifalar ro'yxati",p2_d:"JavaScript'da yozilgan tezkor to'-do ilova.",
p3_t:"Landing sahifa",p3_d:"Kichik biznes uchun moslashuvchan landing.",contact_t:"Birga ishlaymizmi?",
roles:["Frontend dasturchi","Veb-sahifa yaratuvchi","Kodni sevaman"]},
en:{nav_about:"About",nav_skills:"Skills",nav_projects:"Projects",nav_contact:"Contact",hello:"Hi, I'm",cta1:"See my work",cta2:"Get in touch",
about_t:"About me",about_p:"I'm a developer. I love turning a simple idea into a web page that is comfortable, good-looking and fast. I care about order and detail in every project.",
f1:"years of experience",f2:"finished projects",f3:"working languages",skills_t:"Skills",proj_t:"Projects",view:"View",
p1_t:"Online store",p1_d:"Catalog and cart pages for a clothing shop.",p2_t:"Task list",p2_d:"A fast to-do app written in JavaScript.",
p3_t:"Landing page",p3_d:"A responsive landing page for a small business.",contact_t:"Shall we work together?",
roles:["Frontend developer","Web page builder","I love code"]}};
const root=document.documentElement;
let lang=localStorage.getItem("lang")||"uz";
let theme=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
let role=0,ch=0,del=false;
function setLang(l){lang=l;localStorage.setItem("lang",l);root.lang=l;
 document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=dict[l][e.dataset.i18n]);
 document.getElementById("langBtn").textContent=l==="uz"?"EN":"UZ";role=0;ch=0;del=false}
function setTheme(t){theme=t;localStorage.setItem("theme",t);root.dataset.theme=t}
document.getElementById("langBtn").onclick=()=>setLang(lang==="uz"?"en":"uz");
document.getElementById("themeBtn").onclick=()=>setTheme(theme==="dark"?"light":"dark");
const out=document.getElementById("typed");
(function type(){const w=dict[lang].roles[role%3];
 ch+=del?-1:1;out.textContent=w.slice(0,ch);
 let t=del?40:90;
 if(!del&&ch===w.length){del=true;t=1400}else if(del&&ch===0){del=false;role++;t=300}
 setTimeout(type,t)})();
const g=document.getElementById("glow");
addEventListener("pointermove",e=>{g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});
setTheme(theme);setLang(lang);
