export class Adresse {
    constructor(private _rue: string = "", private _ville: string = "", private _codePostal: string = "") {
    }

    public set rue(v : string) {
        this._rue = v;
    }
    
    public get rue() : string {
        return this._rue;
    }
    
    public set ville(v : string) {
        this._ville = v;
    }
    
    public get ville() : string {
        return this._ville;
    }

    public set codePostal(v : string) {
        this._codePostal = v;
    }
    
    public get codePostal() : string {
        return this._codePostal;
    }
}