export interface movie {
    page: number;
    results: Array<object>;
    poster_path: string;
    adult:boolean;
    overView:string;
    release_date:string;
    genre_ids:Array<number>;
    id : number;
    original_title:string;
    original_language:string;
    title:string;
    backdrop_path:string;
    popularity:number;
    vote_count:number;
    video:boolean;
    vote_average:number;
    total_results:number;
    total_pages:number;
}
