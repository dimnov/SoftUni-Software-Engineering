function changeBureau(input) {
  let bitcoin = Number(input[0]);
  let yuan = Number(input[1]);
  let commission = Number(input[2]);

  let bgnBTC = bitcoin * 1168;
  let usdYuan = yuan * 0.15;
  let bgnYuan = usdYuan * 1.76;

  let eur = (bgnBTC + bgnYuan) / 1.95;
  commission = (commission / 100 * eur);
  let total = eur - commission;

  console.log(total.toFixed(2));
}

changeBureau(["20",
  "5678",
  "2.4"])
