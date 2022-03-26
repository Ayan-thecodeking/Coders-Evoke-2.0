const upcomming_btn=document.getElementById("upcoming_btn");
const past_btn=document.getElementById("past_btn");

const upcoming=document.getElementById("upcoming");
const past=document.getElementById("past");

upcomming_btn.addEventListener("click",()=>{
  upcoming.style.display="block";
  past.style.display="none";
})
past_btn.addEventListener("click",()=>{
  upcoming.style.display="none";
  past.style.display="block";
})