export interface Actualidad{
    id: number;
    codigo: string;
    titulo: string;
    descripcion: string;
    mensaje: string | null;
    botonTexto: string;
    botonTextoAlternativo: string;
}

export interface ActualidadInfo{
    id: number;
    usuarioId: number;
    titulo: string;
    sumario: string;
    cuerpo: string;
    fecha: string;
    fechaExpira: string;
    imagen: string;
    palabrasClave: string;
    idEstado: number;
    idSector: number | null;
    certificaLibreUso: boolean;
    fechaCreacion: string;
    razonBorrado: string | null;
    fechaActualizacion: string;
    codigoEntidad: string | null;
    urlCorta: string | null;
    categoriaMvId: string | null;
    subcategoriaMvId: string | null;
    idSubCategoria: string | null;
    textoAlternativo: string;
    idCategoria: number | null;
    textoFecha: string;
    estado: string | null;
    noticiaSector: any[];
}