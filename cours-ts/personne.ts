import { Adresse } from "./adresse";

export class Personne {
    // private _num: number;
    // private _nom: string;
    // private _prenom: string;

    // constructor(num: number = 0, nom: string = "", prenom: string = "") {
        // this._num = num;
        // this._nom = nom;
        // this._prenom = prenom;
    // }

    constructor(private _num: number = 0, private _nom: string = "", private _prenom: string = "", private _adresse: Adresse[] = new Array<Adresse>()) {
    }

    public set num(v : number) {
        this._num = v;
    }
    
    public get num() : number {
        return this._num;
    }
    
    public set nom(v : string) {
        this._nom = v;
    }
    
    public get nom() : string {
        return this._nom;
    }

    public set prenom(v : string) {
        this._prenom = v;
    }
    
    public get prenom() : string {
        return this._prenom;
    }

    public set adresse(v : Adresse[]) {
        this._adresse = v;
    }
    
    public get adresse() : Adresse[] {
        return this._adresse;
    }
}