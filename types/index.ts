import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setmanufacturer: (manufacturer : string) => void;
}

export interface CarProps {
    city_mpg:any;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg: number;
    make:string;
    model:string;
    transmission:string;
    year:any;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface optionProps {
    title: string;
    value: string;
}

export interface customFilteredProps {
    title: string;
    options: optionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}