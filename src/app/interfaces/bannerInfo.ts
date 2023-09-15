export interface BannerInfo{
    id: number;
    estado: number;
    urlDestino: string;
    urlImagen: string;
    texto: string;
    colorTexto: string;
    colorFondo: string;
    tipoImagen: string;
    seccion: number;
    idMapaSitio: number;
    urlExterna: boolean;
    textoAuxiliar: string;
    recordarLuego: boolean;
    mapaDeSitio: string | null;
}