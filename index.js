let subahanAllah = 0;
document.getElementById("subahanAllahIncBtn").addEventListener("click", () => {
  subahanAllah++;
  let value=document.getElementById("subahanAllahCount").innerText = subahanAllah;
  console.log(value);
  if (parseInt(value) >= 33) {
    subahanAllah=0
  }
});

document.getElementById("subahanAllahDecBtn").addEventListener("click", () => {
  subahanAllah--;
  document.getElementById("subahanAllahCount").innerText = subahanAllah;
  if (subahanAllah <= 1) {
    subahanAllah=1

  } 
});

// subahanAllah task end
let alhamdulillah = 0;
document.getElementById("alhamdilillahIncBtn").addEventListener("click", () => {
    alhamdulillah++;
  let value=document.getElementById("alhamdulillahCount").innerText = alhamdulillah;
  console.log(value);
  if (parseInt(value) >= 33) {
    alhamdulillah=0
  }
});

document.getElementById("alhamdulillahDecBtn").addEventListener("click", () => {
    alhamdulillah--;
  document.getElementById("alhamdulillahCount").innerText = alhamdulillah;
  if (alhamdulillah <= 1) {
    alhamdulillah=1

  } 
});

// subahanAllah task end
let allahuakber = 0;
document.getElementById("allahuAkbarIncBtn").addEventListener("click", () => {
    allahuakber++;
  let value=document.getElementById("allahuAkbarCount").innerText = allahuakber;
  console.log(value);
  if (parseInt(value) >= 34) {
    allahuakber=0
  }
});

document.getElementById("allahuAkbarDecBtn").addEventListener("click", () => {
    allahuakber--;
  document.getElementById("allahuAkbarCount").innerText = allahuakber;
  if (allahuakber <= 1) {
    allahuakber=1

  } 
});

// subahanAllah task end

