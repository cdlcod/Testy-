const RESTAURANT_PHONE = "201119977761"; // WhatsApp format for Egypt
const CART_KEY = "tasalyOrderCart";

const MENU = [
  // البيتزا
  {id:1,cat:"البيتزا",name:"مارجريتا",prices:{L:155,M:130,S:85}},
  {id:2,cat:"البيتزا",name:"خطوط",prices:{L:175,M:145,S:115}},
  {id:3,cat:"البيتزا",name:"مشكل جبن",prices:{L:200,M:170,S:125}},
  {id:4,cat:"البيتزا",name:"تشيكن كرسبي",prices:{L:200,M:170,S:125}},
  {id:5,cat:"البيتزا",name:"تشيكن رانش / باربكيو",prices:{L:235,M:185,S:135}},
  {id:6,cat:"البيتزا",name:"تشيكن جريل رانش / باربكيو",prices:{L:235,M:185,S:135}},
  {id:7,cat:"البيتزا",name:"لحمة مفرومة",prices:{L:200,M:160,S:110}},
  {id:8,cat:"البيتزا",name:"مشكل لحوم",prices:{L:235,M:185,S:135}},
  {id:9,cat:"البيتزا",name:"هوت دوج",prices:{L:235,M:185,S:135}},
  {id:10,cat:"البيتزا",name:"سجق",prices:{L:200,M:165,S:120}},
  {id:11,cat:"البيتزا",name:"بيف",prices:{L:185,M:155,S:120}},
  {id:12,cat:"البيتزا",name:"سوبر سوبرم",prices:{L:200,M:165,S:125}},

  // الكريب
  {id:20,cat:"الكريب",name:"مشكل جبن",prices:{R:85,M:105,L:125}},
  {id:21,cat:"الكريب",name:"سجق كيري",prices:{R:115,M:155,L:195}},
  {id:22,cat:"الكريب",name:"بسطرمة كيري",prices:{R:115,M:155,L:195}},
  {id:23,cat:"الكريب",name:"سجق بسطرمة كيري",prices:{R:145,M:165,L:215}},
  {id:24,cat:"الكريب",name:"تشيكن كرسبي",prices:{R:125,M:160,L:200}},
  {id:25,cat:"الكريب",name:"تشيكن كرسبي رانش",prices:{R:125,M:160,L:200}},
  {id:26,cat:"الكريب",name:"تشيكن كرسبي باربكيو",prices:{R:125,M:160,L:200}},
  {id:27,cat:"الكريب",name:"تشيكن جريل رانش",prices:{R:135,M:165,L:205}},
  {id:28,cat:"الكريب",name:"تشيكن جريل باربكيو",prices:{R:135,M:165,L:205}},

  // الفطير
  {id:40,cat:"الفطير",name:"مشكل جبن",prices:{R:85,M:105,L:125}},
  {id:41,cat:"الفطير",name:"سجق كيري",prices:{R:115,M:155,L:195}},
  {id:42,cat:"الفطير",name:"بسطرمة كيري",prices:{R:115,M:155,L:195}},
  {id:43,cat:"الفطير",name:"سجق بسطرمة كيري",prices:{R:145,M:165,L:215}},
  {id:44,cat:"الفطير",name:"تشيكن كرسبي",prices:{R:125,M:160,L:200}},

  // وجبات
  {id:60,cat:"الوجبات",name:"ربع كفتة",price:115},
  {id:61,cat:"الوجبات",name:"نصف كفتة",price:210},
  {id:62,cat:"الوجبات",name:"كفتة + شيش طاووق",price:115},
  {id:63,cat:"الوجبات",name:"2 كفتة",price:115},
  {id:64,cat:"الوجبات",name:"2 شيش طاووق",price:115},
  {id:65,cat:"الوجبات",name:"وجبة البركة",price:125},
  {id:66,cat:"الوجبات",name:"وجبة كرسبي",price:150},
  {id:67,cat:"الوجبات",name:"وجبة سوبر التوفير",price:175},
  {id:68,cat:"الوجبات",name:"وجبة الزراف",price:200},

  // سندوتشات
  {id:80,cat:"السندوتشات",name:"كفتة",prices:{S:45,L:75}},
  {id:81,cat:"السندوتشات",name:"طرب",prices:{S:55,L:85}},
  {id:82,cat:"السندوتشات",name:"شرائح لحمة",prices:{S:70,L:110}},
  {id:83,cat:"السندوتشات",name:"كبدة",prices:{S:45,L:75}},
  {id:84,cat:"السندوتشات",name:"سجق",prices:{S:45,L:75}},
  {id:85,cat:"السندوتشات",name:"كبدة اسكندراني",prices:{S:45,L:75}},

  // حواوشي
  {id:100,cat:"حواوشي",name:"حواوشي",prices:{S:50,L:90}},
  {id:101,cat:"حواوشي",name:"حواوشي جبنة",prices:{S:55,L:110}},
  {id:102,cat:"حواوشي",name:"حواوشي لحمة",prices:{S:60,L:110}},

  // مشاوي
  {id:120,cat:"مشاوي",name:"مشكل مشاوي",price:110},
  {id:121,cat:"مشاوي",name:"سوبر مشاوي",price:75},
  {id:122,cat:"مشاوي",name:"ميكس جريل",price:110},

  // مقبلات
  {id:140,cat:"مقبلات",name:"صوص أحمر",price:60},
  {id:141,cat:"مقبلات",name:"صوص أبيض",price:120},
  {id:142,cat:"مقبلات",name:"مكرونة باللحمة",price:100},
  {id:143,cat:"مقبلات",name:"نجرسكو فراخ",price:120},
  {id:144,cat:"مقبلات",name:"مكرونة سجق",price:90},
  {id:145,cat:"مقبلات",name:"نجرسكو سجق",price:105},

  // برجر
  {id:160,cat:"برجر",name:"كلاسيك بيف",price:120},
  {id:161,cat:"برجر",name:"دبل كلاسيك بيف",price:175},
  {id:162,cat:"برجر",name:"كلاسيك تشيكن",price:90},
  {id:163,cat:"برجر",name:"دبل كلاسيك تشيكن",price:130},

  // فرايد تشيكن
  {id:180,cat:"فرايد تشيكن",name:"استربس بوكس",price:120},
  {id:181,cat:"فرايد تشيكن",name:"سوبر استربس بوكس",price:165},
  {id:182,cat:"فرايد تشيكن",name:"جامبو استربس بوكس",price:205},
  {id:183,cat:"فرايد تشيكن",name:"ميجا ميكس",price:190},
  {id:184,cat:"فرايد تشيكن",name:"جوانا",price:280},
  {id:185,cat:"فرايد تشيكن",name:"جوانا ميكس",price:380},
  {id:186,cat:"فرايد تشيكن",name:"وجبة كرسبي",price:450},

  // سندوتشات فراخ
  {id:200,cat:"سندوتشات فراخ",name:"تشيكن رول",price:90},
  {id:201,cat:"سندوتشات فراخ",name:"توست تشيكن تشيز",price:100},
  {id:202,cat:"سندوتشات فراخ",name:"توست تشيكن فليفر",price:120},
  {id:203,cat:"سندوتشات فراخ",name:"توست تشيكن سوبرم",price:120},

  // بطاطس
  {id:220,cat:"بطاطس",name:"بطاطس سادة",prices:{S:30,L:45}},
  {id:221,cat:"بطاطس",name:"تشيكن سوبرم",prices:{S:65,L:100}},

  // إضافات
  {id:240,cat:"الإضافات",name:"أرز",price:35},
  {id:241,cat:"الإضافات",name:"مكرونة",price:35},
  {id:242,cat:"الإضافات",name:"صوصات",price:10},
  {id:243,cat:"الإضافات",name:"سلطات",price:10},
  {id:244,cat:"الإضافات",name:"جبنة موتزاريلا",price:20},
  {id:245,cat:"الإضافات",name:"جبنة شيدر",price:35},
  {id:246,cat:"الإضافات",name:"مشروم",price:35},

  // الحلويات
  {id:260,cat:"الحلويات",name:"بغاشة بالسكر",price:70},
  {id:261,cat:"الحلويات",name:"كاستر مكسرات",price:80},
  {id:262,cat:"الحلويات",name:"شيكولاتة موز / بندق",price:120},
  {id:263,cat:"الحلويات",name:"شيكولاتة أوريو",price:95},
  {id:264,cat:"الحلويات",name:"لوتس",price:105},
  {id:265,cat:"الحلويات",name:"الفورسيزون",price:150}
];

let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
let activeCategory = "الكل";

const money = n => `${Number(n).toLocaleString("ar-EG")} جنيه`;
const $ = s => document.querySelector(s);

function saveCart(){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function toast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(()=>t.classList.remove("show"),2200);
}

function getBasePrice(item){
  if(item.price) return {label:"", price:item.price};
  const first = Object.entries(item.prices)[0];
  return {label:first[0], price:first[1]};
}

function addItem(id, size=""){
  const item = MENU.find(x=>x.id===id);
  const selectedPrice = item.price ?? item.prices[size];
  const key = `${id}-${size || "single"}`;
  const found = cart.find(x=>x.key===key);
  if(found) found.qty++;
  else cart.push({key,id,size,qty:1,price:selectedPrice});
  saveCart(); renderCart(); toast("تمت إضافة الصنف للسلة ✅");
}

function changeQty(key, delta){
  const row = cart.find(x=>x.key===key);
  if(!row) return;
  row.qty += delta;
  if(row.qty <= 0) cart = cart.filter(x=>x.key!==key);
  saveCart(); renderCart();
}

function removeItem(key){
  cart = cart.filter(x=>x.key!==key);
  saveCart(); renderCart();
}

function renderFilters(){
  const cats = ["الكل", ...new Set(MENU.map(x=>x.cat))];
  $("#filters").innerHTML = cats.map(cat =>
    `<button class="filter ${cat===activeCategory?"active":""}" onclick="setCategory('${cat}')">${cat}</button>`
  ).join("");
}

function setCategory(cat){
  activeCategory=cat;
  renderFilters();
  renderMenu();
}

function renderMenu(){
  const q = $("#search").value.trim().toLowerCase();
  const list = MENU.filter(item=>{
    const categoryOk = activeCategory==="الكل" || item.cat===activeCategory;
    const searchOk = !q || `${item.name} ${item.cat}`.toLowerCase().includes(q);
    return categoryOk && searchOk;
  });

  $("#menuGrid").innerHTML = list.map(item=>{
    if(item.price){
      return `
        <article class="card">
          <div class="card-head">
            <h3>${item.name}</h3>
            <p class="desc">${item.cat}</p>
          </div>
          <div class="price-row">
            <span class="price">${money(item.price)}</span>
            <button class="add" onclick="addItem(${item.id})">+ أضف</button>
          </div>
        </article>`;
    }
    const sizes = Object.entries(item.prices);
    return `
      <article class="card">
        <div class="card-head">
          <h3>${item.name}</h3>
          <p class="desc">اختار الحجم</p>
        </div>
        ${sizes.map(([size,price])=>`
          <div class="price-row">
            <span class="price">${size} — ${money(price)}</span>
            <button class="add" onclick="addItem(${item.id},'${size}')">+ أضف</button>
          </div>
        `).join("")}
      </article>`;
  }).join("") || `<div class="empty">مش لاقي الصنف ده 😅</div>`;
}

function renderCart(){
  const box = $("#cartItems");
  if(!cart.length){
    box.innerHTML=`<div class="empty">السلة فاضية — اختار أكلك الأول 😋</div>`;
  }else{
    box.innerHTML = cart.map(row=>{
      const item = MENU.find(x=>x.id===row.id);
      const sizeText = row.size ? ` (${row.size})` : "";
      return `
        <div class="cart-row">
          <div>
            <strong>${item.name}${sizeText}</strong>
            <div class="price">${money(row.price * row.qty)}</div>
          </div>
          <div class="qty">
            <button onclick="changeQty('${row.key}',-1)">−</button>
            <b>${row.qty}</b>
            <button onclick="changeQty('${row.key}',1)">+</button>
          </div>
          <button class="remove" onclick="removeItem('${row.key}')">حذف</button>
        </div>`;
    }).join("");
  }
  const total = cart.reduce((sum,row)=>sum+row.price*row.qty,0);
  $("#total").textContent = money(total);
  $("#navCount").textContent = cart.reduce((sum,row)=>sum+row.qty,0);
}

$("#search").addEventListener("input",renderMenu);

$("#orderForm").addEventListener("submit",e=>{
  e.preventDefault();

  if(!cart.length){
    toast("أضف صنف واحد على الأقل للسلة ❗");
    location.hash="menu";
    return;
  }

  const name=$("#customerName").value.trim();
  const phone=$("#customerPhone").value.trim();
  const address=$("#customerAddress").value.trim();
  const notes=$("#customerNotes").value.trim();

  if(!name || !phone || !address){
    toast("من فضلك اكتب الاسم ورقم الموبايل والعنوان ❗");
    return;
  }

  const total=cart.reduce((sum,row)=>sum+row.price*row.qty,0);
  const lines=cart.map(row=>{
    const item=MENU.find(x=>x.id===row.id);
    const size=row.size?` - ${row.size}`:"";
    return `• ${item.name}${size} × ${row.qty} = ${row.price*row.qty} جنيه`;
  }).join("\n");

  const message =
`طلب جديد من موقع تسالي 🍴

👤 الاسم: ${name}
📱 رقم التواصل: ${phone}
🏠 العنوان: ${address}
${notes ? `📝 ملاحظات: ${notes}\n` : ""}
🛒 الطلب:
${lines}

💰 الإجمالي: ${total} جنيه

من فضلكم أكدوا الطلب ووقت التوصيل.`;

  window.open(`https://wa.me/${RESTAURANT_PHONE}?text=${encodeURIComponent(message)}`,"_blank");
});

renderFilters();
renderMenu();
renderCart();
