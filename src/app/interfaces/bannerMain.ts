export interface BannerInfo{
    id: number;
    textoBienvenida: string;
    urlImagen: string | null;
    textoDescriptivo: string | null;
    textoBuscador: string;
    seccion: number;
    fechaModificacion: string;
    usuario: string;
    idMapaSitio: number;
    textoAuxiliar: string;
    textoBotonAuxiliar: string;
    urlBotonAuxiliar: string;
    estadoBotonAuxiliar: number;
    urlExterna: number;
    mapaDeSitio: SiteMap;
    listaImagenes: ImageList[];
}

export interface SiteMap{
    id: number;
    tituloSeccion: string;
    itemsSeccion: string;
    activo: number;
    tipo: number;
    seccion: number;
    permiteInactivar: boolean;
    bannerInformativo: string | null;
}

export interface ImageList{
    id: number;
    idBanner: number;
    urlImagen: string;
    textoDescriptivo: string;
    borrado: number;
}










