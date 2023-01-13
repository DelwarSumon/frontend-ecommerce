export interface Category{
    id: number
    name: string
    image: string
}

export interface CategoryList{
    list: Category[]
}

export interface Price {
    id: number
    min: number
    max: number
}