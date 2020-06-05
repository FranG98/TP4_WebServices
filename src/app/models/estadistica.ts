export class Estadistica {
    location: string;
    recovered: number;
    deaths: number;
    confirmed: number;
    totalCases: number;
    totalRecovered: number;
    totalDeaths: number;
    img: string;

    estadistica(location?: string,recovered?: number,deaths?: number,confirmed?: number,
        totalCases?: number, totalDeaths?: number, totalRecovered?: number, img?: string){
        this.location = location;
        this.recovered = recovered;
        this.deaths = deaths;
        this.confirmed = confirmed;
        this.totalCases = totalCases;
        this.totalDeaths = totalDeaths;
        this.totalRecovered = totalRecovered;
        this.img = img;
    }
}
