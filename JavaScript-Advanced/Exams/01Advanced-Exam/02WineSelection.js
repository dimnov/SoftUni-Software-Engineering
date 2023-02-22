class WineSelection {
  constructor(space, wines, bill) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space === this.wines.length) {
      throw new Error('Not enough space in the cellar.');
    }
    this.wines.push({
      wineName, wineType, price, paid: false,
    });
    return `You reserved a bottle of ${wineName} ${wineType} wine.`
  }

  payWineBottle(wineName, price) {
    for (const wine of this.wines) {
      if (wine.wineName === wineName) {
        if (wine.paid) {
          throw new Error(`${wineName} has already been paid.`);
        } else {
          wine.paid = true;
          this.bill += price;
          return `You bought a ${wineName} for a ${price}$.`
        }
      }
    }
    throw new Error(`${wineName} is not in the cellar.`);
  }

  openBottle(wineName) {
    for (let i = 0; i < this.wines.length; i++) {
      const el = this.wines[i];
      if (el.wineName === wineName) {
        if (!el.paid) {
          throw new Error(`${wineName} need to be paid before open the bottle.`)
        } else {
          this.wines.splice(i, 1);
          return `You drank a bottle of ${wineName}.`;
        }
      }
    }
    throw new Error("The wine, you're looking for, is not found.");
  }

  cellarRevision(wineType) {
    if (!wineType) {
      let cellarInfo = `You have space for ${this.space - this.wines.length} bottles more.\nYou paid ${this.bill}$ for the wine.`;
      const sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

      for (const wine of sortedWines) {
        cellarInfo += (`\n${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`)
      }
      return cellarInfo;
    }

    const cellarInfo = [];

    for (const wine of this.wines) {
      if (wine.wineType === wineType) {
        cellarInfo.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
      }
      return cellarInfo.join('\n');
    }
    throw new Error(`There is no ${wineType} in the cellar.`);
  }
}
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());