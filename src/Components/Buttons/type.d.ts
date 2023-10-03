export enum ButtonVariant {
    normal,
    primary,
    light,
    disabled
}

export type ButtonType = {
    onClick ? : ()=>void,
    variant ?: ButtonVariant,
    icon?:boolean,
    price?:number

}