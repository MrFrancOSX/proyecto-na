export type Contract = {
  nCodPignoraticio: number;
  nCodAgencia: number;
  numerocontrato: string;
  nSaldoCap: number;
  nCapital: number;
  nMora: number;
  nGastos: number;
  nComision: number;
  nDeudaMinimaALaFecha: number;
  nDeudaTotalALaFecha: number;
  nSaldoDisponible: number;
  nITF: number;
  nEstado: number;
  dFecVencimiento: string;
  nDiasAtraso: number;
  bVE: boolean;
  nCampaña: number;
  nEstadoCamp: number;
  nProducto: number;
  bBloqueado: boolean;
  bBloqueoLegal: boolean;
  nCodPersTitular: boolean;
  lObservaciones: any;
};

export type BankAccount = {
  nCodPersonaCuenta: number;
  nCodPers: number;
  nCodBanco: number;
  nCodTipoCuenta: number;
  cNroCuentaBanco: string;
  cActualiza: string;
};

export type Bank = {
  nCodigo: string;
  cNomCod: string;
  nValor: string;
};

export type BankAccountType = Bank;

export type UserMetadata = {
  nIdUsuario: number;
  nCodPers: number;
  cNomUsu: string;
  cCodUsu: string;
  cClave: string;
  nCodSistema: number;
  nCodSMS: number;
  nTipoDoc: number;
  cNroDocumento: string;
  dFecReg: string;
  bActivo: boolean;
};

export type User = {
  cDNI: string;
  cApePat: string;
  cApeMat: string;
  cNombres: string;
  cApeCas: string;
  nEstadoCivil: number;
  nSexo: number;
  dFecNac: string;
  nNacionalidad: string;
  cMail: string;
  nRelacIns: number;
  nDigitoVerificadorDocumento: number;
  nCodPers: number;
  nTipoPersona: number;
  nCategoria: number;
  nScore: number;
  nPuntaje: number;
  cActualiza: string;
  nTipoDoc: number;
  cDireccionPrincipal: string;
  cTelefonoPrincipal: string;
  lMotivosActualizacion: any;
};

export type Token = {
  access_token: string;
  token_type: string;
  expires_in: number;
};
