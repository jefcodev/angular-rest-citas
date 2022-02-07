export interface ModelCitas{
    cita_id:number;
    pac_cedula:number;
    med_cedula:number;
    con_sala_id:number;
    cita_fecha:Date;
    cita_hora:Date
    cita_observaciones:string;
    cita_activa:boolean;
    cita_estado:boolean;
}