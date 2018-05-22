export class Site {

    private name: string;
    private maxCapacity: number;
    private location: string;
    private cost: number;
    private listImages: string[];
    private coin: string;

    public constructor(pName: string, pCapacity: number, plocation: string, pCost: number, pCoin: string, pListImages: string[]) {
        this.name = pName;
        this.maxCapacity = pCapacity;
        this.location = plocation;
        this.cost = pCost;
        this.coin = pCoin;
        this.listImages = pListImages;
    }

    public getName(): string {
        return this.name;
    }

    public getMaxCapacity(): number {
        return this.maxCapacity;
    }

    public getLocation(): string {
        console.log("hola");
        console.log(this.getListImages()[0]);
        return this.location;
    }

    public getListImages(): string[] {
        return this.listImages;
    }

    public getCost(): number {
        return this.cost;    
    }

    public getCoin(): string {
        return this.coin;
    }

}