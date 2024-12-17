
export interface CreateBookModel {
     title:string;
     editorial:string;
     year_publication:string;
     description:string; 
     categoriesId: string;
     author: string;
     file_path:string;
}

export interface CategoriesModel {
     id:string;
     name:string;
}
