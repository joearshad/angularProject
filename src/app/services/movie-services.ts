import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { movie } from "../models/movie";

@Injectable({
    providedIn: "root",
})
export class MovieServices {
    constructor(private httpClient: HttpClient){}
    
    getMovies(): Observable<movie>{
        return this.httpClient.get<movie>(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=0eea3bdc9b337bd6792466b79e752a2b&language=en-US&page=1"
        );
    }
    getMovieDetails(id: any): Observable<movie>{
        return this.httpClient.get<movie>(
            "https://api.themoviedb.org/3/movie/" + id + "?api_key=0eea3bdc9b337bd6792466b79e752a2b"
        );
    }
}