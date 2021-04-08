import { Observable } from "rxjs";
import { BookDto } from "./bookDto";

export class CategoryDto {
    id: number;
    name: string;
    books: Array<BookDto>
}