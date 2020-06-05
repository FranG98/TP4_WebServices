export class Noticia {
    id: number;
    seo: string;
    tit: string;
    con: string;
    img: string;
    des: string;
    noticia(id?: number, seo?: string, tit?: string, con?: string, img?: string, des?: string){
        this.id = id;
        this.seo = seo;
        this.tit = tit;
        this.con = con;
        this.img = img;
        this.des = des;
    }
}
