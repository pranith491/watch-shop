const nav=document.getElementById("nav"), menu=document.getElementById("menu"), toast=document.getElementById("toast");
function notify(msg){toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3500)}
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelectorAll("[data-watch]").forEach(btn=>btn.addEventListener("click",()=>{document.getElementById("watchChoice").value=btn.dataset.watch;document.getElementById("booking").scrollIntoView({behavior:"smooth"});}));
document.getElementById("bookingForm").addEventListener("submit",e=>{e.preventDefault();const name=e.target.elements.name.value.trim();notify(`Thank you ${name}! Your booking request is ready. Connect a backend to save it.`);e.target.reset()});
document.getElementById("loginForm").addEventListener("submit",e=>{e.preventDefault();notify("Demo login only. Connect a secure backend for real authentication.")});
document.getElementById("year").textContent=new Date().getFullYear();