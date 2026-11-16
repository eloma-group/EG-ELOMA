(function(){
var tabs=[].slice.call(document.querySelectorAll('#tabs .tab'));
function show(i){tabs.forEach(function(t,j){t.setAttribute('aria-selected',i===j);t.tabIndex=i===j?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=i!==j})}
tabs.forEach(function(t,i){t.onclick=function(){show(i)};t.onkeydown=function(e){var d={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(d){e.preventDefault();var n=(i+d+tabs.length)%tabs.length;show(n);tabs[n].focus()}}});
var nav=document.getElementById('nav'),mb=document.getElementById('menuBtn');
if(mb){mb.onclick=function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
[].forEach.call(document.querySelectorAll('#drawer a'),function(a){a.addEventListener('click',function(){nav.classList.remove('open');mb.setAttribute('aria-expanded',false)})})}

// Enquiry form (home and contact pages): posted to /api/contact (Azure Function, emails connect@egeloma.com.au
// through Microsoft 365), then the visitor goes to /thank-you, which counts the lead.
var f=document.getElementById('form');
if(f){
  var v=function(id){var e=document.getElementById(id);return e?e.value.trim():''};
  var btn=f.querySelector('button[type=submit]'),err=document.getElementById('form-err'),label=btn.textContent;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(!f.checkValidity()){f.reportValidity();return}
    var data={name:v('f-name'),business:v('f-biz'),email:v('f-email'),phone:v('f-phone'),country:v('f-country'),service:v('f-product'),message:v('f-msg'),website:v('f-hp')};
    btn.disabled=true;btn.textContent='Sending…';if(err)err.hidden=true;
    fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
      .then(function(r){if(!r.ok)throw r.status;
        if(window.egTrack)egTrack.flagLead();
        // A full page load, so Google Ads and GTM count the /thank-you visit.
        location.assign('/thank-you')})
      .catch(function(){btn.disabled=false;btn.textContent=label;if(err)err.hidden=false});
  });
}
})();
