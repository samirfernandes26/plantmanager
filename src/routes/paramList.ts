import {IPlantProps} from '../libs/storage'

export type RootStackParamList = {
    BemVindo: undefined;
    Confirmacao: undefined;
    Comecar: { primeiraVez: boolean };
    EscolhaPlanta: undefined;
    MinhasPlantas: undefined;
    Planta: {dataPlanta:IPlantProps};
    TudoCerto: undefined;
}