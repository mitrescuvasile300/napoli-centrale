let data, activeCat, cart=[];

fetch('menu.json').then(r=>r.json()).then(j=>{
  data=j; activeCat=j.categories[0].id;
  document.getElementById('meta').textContent = `${j.restaurant.description}`;
  renderCats(); renderGrid(); renderCart();
});

function renderCats(){
  const el=document.getElementById('cats');
  el.innerHTML='';
  data.categories.forEach(c=>{
    const b=document.createElement('button');
    b.textContent=c.name; if(c.id===activeCat) b.classList.add('active');
    b.onclick=()=>{activeCat=c.id; renderCats(); renderGrid();};
    el.appendChild(b);
  });
}

function renderGrid(){
  const cat=data.categories.find(c=>c.id===activeCat);
  const grid=document.getElementById('grid');
  grid.innerHTML='';
  cat.products.forEach(p=>{
    const d=document.createElement('div'); d.className='card';
    d.innerHTML=`<h4>${p.name}</h4><p>${p.description||''}</p><p>${p.gramaj||''}g</p><p class='price'>${p.price} lei</p><button class='btn'>Adaugă</button>`;
    d.querySelector('button').onclick=()=>addToCart(p);
    grid.appendChild(d);
  });
}

function addToCart(p){
  const i=cart.findIndex(x=>x.id===p.id);
  if(i>-1) cart[i].qty++; else cart.push({id:p.id,name:p.name,price:p.price,qty:1});
  renderCart();
}

function renderCart(){
  const el=document.getElementById('cart');
  if(!el) return;
  el.innerHTML='';
  let total=0;
  cart.forEach(i=>{ total+=i.price*i.qty;
    const r=document.createElement('div'); r.className='cartrow';
    r.innerHTML=`<span>${i.qty}x ${i.name}</span><span>${i.price*i.qty} lei</span>`;
    el.appendChild(r);
  });
  const t=document.createElement('div'); t.className='total'; t.textContent=`Total: ${total} lei`;
  el.appendChild(t);
}

document.getElementById('orderForm').addEventListener('submit', e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const order={
    customer:{name:f.get('name'), phone:f.get('phone'), address:f.get('address'), notes:f.get('notes')},
    items:cart,
    createdAt:new Date().toISOString()
  };
  localStorage.setItem('lastOrder', JSON.stringify(order));
  document.getElementById('ok').textContent='✅ Comanda a fost salvată (demo local).';
  cart=[]; renderCart(); e.target.reset();
});
