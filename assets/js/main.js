(function(){
  var root=document.documentElement,saved=null;
  try{saved=localStorage.getItem('rs-theme')}catch(e){}
  root.setAttribute('data-bs-theme',saved||'light');
  document.addEventListener('DOMContentLoaded',function(){
    var t=document.getElementById('themeToggle'),s=document.getElementById('menuToggle');
    if(t)t.addEventListener('click',function(){
      var n=root.getAttribute('data-bs-theme')==='dark'?'light':'dark';
      root.setAttribute('data-bs-theme',n);try{localStorage.setItem('rs-theme',n)}catch(e){}
    });
    if(s)s.addEventListener('click',function(){document.querySelector('.sidebar').classList.toggle('open')});
    var c=document.getElementById('revenueChart');
    if(c&&window.Chart)new Chart(c,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
      datasets:[{label:'Revenue',data:[12,15,14,19,23,22,28,31,36],borderColor:'#e8912d',backgroundColor:'rgba(232,145,45,.15)',fill:true,tension:.35}]},
      options:{plugins:{legend:{display:false}},scales:{y:{ticks:{callback:function(v){return '$'+v+'k'}}}}}});
    var tc=document.getElementById('trafficChart');
    if(tc&&window.Chart)new Chart(tc,{type:'bar',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{data:[7.2,8.1,8.8,8.4,9.3,5.6,4.9],backgroundColor:'#e8912d'}]},options:{plugins:{legend:{display:false}},scales:{y:{ticks:{callback:function(v){return v+'k'}}}}}});
    var sc=document.getElementById('sourcesChart');
    if(sc&&window.Chart)new Chart(sc,{type:'doughnut',data:{labels:['Search','Direct','Social','Referral'],datasets:[{data:[44,27,18,11],backgroundColor:['#14213d','#e8912d','#5b7db1','#b8c2d9'],borderWidth:0}]},options:{plugins:{legend:{position:'bottom'}}}});
    var sl=document.getElementById('salesChart');
    if(sl&&window.Chart)new Chart(sl,{type:'bar',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{data:[142,168,155,190,210,121,98],backgroundColor:'#14213d'}]},options:{plugins:{legend:{display:false}}}});
  });
})();
