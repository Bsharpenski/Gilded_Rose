class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  
  updateQuality() {
    
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      let backstagePass = item.name === 'Backstage passes to a TAFKAL80ETC concert';
      let agedBrie = item.name === 'Aged Brie';
      let sulfuras = item.name === 'Sulfuras, Hand of Ragnaros';

      if ( !agedBrie && !backstagePass) {
        if (item.quality > 0 && !sulfuras) {
            item.quality = item.quality - 1;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;

          if (backstagePass && item.sellIn < 11 && item.quality < 50) {
            item.quality = item.quality + 1;

             if (item.sellIn < 6 && item.quality < 50) {
             item.quality = item.quality + 1;
              
            }
          }
        }
      }
      if (!sulfuras) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0 && item.quality > 0 && !sulfuras) {
        if (!agedBrie) {
          if (!backstagePass) {
            item.quality = item.quality - 1;
          } else {
            item.quality = item.quality - item.quality;
            }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
