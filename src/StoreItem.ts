export default class StoreItem {
    constructor(public price: number, public happiness: number) {}

    public equals (si: StoreItem): boolean {
        return si instanceof StoreItem && si.price == this.price && si.happiness == this.happiness;
    }
}