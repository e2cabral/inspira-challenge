export class Moeda {
  constructor(simbolo: string, nomeFormatado: string, tipoMoeda: string) {
    this.simbolo = simbolo;
    this.nomeFormatado = nomeFormatado;
    this.tipoMoeda = tipoMoeda;
  }
  simbolo: string;
  nomeFormatado: string;
  tipoMoeda: string;
}
