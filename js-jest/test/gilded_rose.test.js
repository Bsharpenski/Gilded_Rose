const { Item, Shop } = require("../src/gilded_rose.js");
// You need more tests than just the ones written here, this is just to get you started.
// USE COVERAGE GUTTERS TO GUIDE YOUR TEST WRITING
describe("Gilded Rose Pin Down Tests", () => {
  test("Normal items should degrade in quality by 1 each day", () => {
    let normalItem = new Item("normal", 10, 20); //build
    const gildedRose = new Shop([normalItem]);

    const items = gildedRose.updateQuality(); //operate

    expect(items[0].quality).toBe(19); //check
  });

  test('Quality of "Aged Brie" should increase by 1 each day', () => {
    let agedBrie = new Item("Aged Brie", 10, 20);
    const gildedRose = new Shop([agedBrie]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(21);
  });

  test('Quality of "Backstage passes" should increase by 3 when there are 5 days or less', () => {
    let backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      20
    );
    const gildedRose = new Shop([backstagePass]);

    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(23);
  });

  test("Sellin should go down by 1 each day", () => {
    let normalItem = new Item("normal", 10, 20); //build
    const gildedRose = new Shop([normalItem]);

    const items = gildedRose.updateQuality(); //operate

    expect(items[0].sellIn).toBe(9); //check
  });

  test("Once the sell by date has passed, Quality degrades twice as fast", () => {
    let normalItem = new Item("normal", 0, 20); //build
    const gildedRose = new Shop([normalItem]);

    const items = gildedRose.updateQuality(); //operate

    expect(items[0].quality).toBe(18); //check
  });

  test("The Quality of an item is never negative", () => {
    let normalItem = new Item("normal", 10, 0); //build
    const gildedRose = new Shop([normalItem]);

    const items = gildedRose.updateQuality(); //operate

    expect(items[0].quality).toBe(0); //check
  });
  
  test('The Quality of brie is never more than 50', () => {
    let agedBrie = new Item("Aged Brie", 10, 50);
    const gildedRose = new Shop([agedBrie]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });

  

  test('Sulfuras", being a legendary item, never has to be sold or decreases in Quality', () => {
    let agedBrie = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    const gildedRose = new Shop([agedBrie]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });

  test('Quality of "Backstage passes" should increase by 2 when there are 10 days or less', () => {
    let backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      20
    );
    const gildedRose = new Shop([backstagePass]);

    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(22);
  });

  test('Quality of "Backstage passes" drops to 0 after the concert', () => {
    let backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      20
    );
    const gildedRose = new Shop([backstagePass]);

    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(0);
  });

  test('The Quality of an item is never more than 50', () => {
    let backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      1,
      50
    );
    const gildedRose = new Shop([backstagePass]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });

});
