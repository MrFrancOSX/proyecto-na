import axios, { AxiosInstance, AxiosError } from 'axios';
import qs, { ParsedUrlQueryInput } from 'querystring';
import {
  Token,
  User,
  UserMetadata,
  BankAccount,
  Contract,
  Bank,
  BankAccountType
} from './types';

type BaseResponse = {
  bEsCorrecto: boolean;
  nCodigoStatus: number;
};

export type APIResponse<T> = BaseResponse & {
  oData: T;
};

export type APIError = BaseResponse & {
  cMensajeError: string;
};

export type SendSMSCodeError = {
  bEsCorrecto: boolean;
  nCodigoStatus: number;
  oData: string[];
};

export type LoginError = {
  error: string;
  error_description: string;
};

export type ValidateAddContractError = {
  bEsCorrecto: boolean;
  nCodigoStatus: number;
  oData: string;
};

export type ValidateUserVariables = {
  pnTipoDoc: number;
  pcDocumento: string;
  pnVerificador: number;
  pcCelular: string;
};

export type ValidateUserData = APIResponse<{
  nCodPers: number;
}>;

export type SendSMSCodeVariables = {
  nCodPers: number;
  cNroCelular: string;
  nCodSistema: number;
};

export type SendSMSCodeData = APIResponse<{
  nCodigoAleatorioGenerado: number;
  cMensajeRespuesta: string;
}>;

export type RegisterUserVariables = {
  nTipoDoc: number;
  cNroDocumento: string;
  nCodSMS: number;
  cClave: string;
  nCodSistema: number;
};

export type RegisterUserData = APIResponse<number>;

export type ValidateExistingUserVariables = {
  pnTipoDoc: number;
  pcDocumento: string;
  pnVerificador: number;
  pnCodSistema: number;
};

export type ValidateExistingUserData = ValidateUserData;

export type UpdateUserVariables = RegisterUserVariables;

export type UpdateUserData = RegisterUserData;

export type LoginVariables = {
  username: string;
  password: string;
};

export type LoginData = Token;

export type UserInfoData = APIResponse<UserMetadata>;

export type GetProfileInfoData = APIResponse<User>;

export type GetBankAccountsData = APIResponse<BankAccount[]>;

export type GetAvailableContractsData = APIResponse<Contract[]>;

export type ValidateAddContractVariables = {
  pcContratoNuevo: Contract;
  pcContratos: Contract[];
};

export type ValidateAddContractData = APIResponse<{
  bPermite: boolean;
}>;

export type GetBankListData = APIResponse<Bank[]>;

export type GetBankAccountTypeListData = APIResponse<BankAccountType[]>;

export type QueryForContractsVariables = {
  pcNrosContratos: Contract[];
};

export type QueryForContractsData = APIResponse<Contract[]>;

export type SubmitContractRequestVariables = {
  nCodBanco: number;
  nTipoCuenta: number;
  cNroCuenta: string;
  nCodSistema: number;
  cCodUsu: string;
  lSolicitudPignocashDetalle: {
    cContrato: string;
    nMontoDisponible: number;
  };
};

export type SubmitContractRequestData = APIResponse<{
  nIdSolicitud: number;
}>;

function isToken(response?: Token | LoginError): response is Token {
  return (response as Token).access_token !== undefined;
}

function isAPIResponse<T>(
  response?: APIResponse<T> | APIError
): response is APIResponse<T> {
  return response?.nCodigoStatus === 200;
}

export default class APIClient {
  token?: Token;
  userID?: number;
  ipAddress?: string;
  client?: AxiosInstance;

  private async setup() {
    const { data } = await axios.get(
      'https://www.cloudflare.com/cdn-cgi/trace'
    );
    const [, ipAddress] = data.match(/ip=(.*)$/m);
    this.ipAddress = ipAddress;
    return axios.create({
      baseURL: process.env.API_BASE_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        direccionIP: ipAddress,
        hashSoftware: process.env.API_KEY
      }
    });
  }

  private async request<D, E>(callback: (client: AxiosInstance) => Promise<D>) {
    if (!this.client) {
      this.client = await this.setup();
    }

    try {
      return callback(this.client);
    } catch (err) {
      if (err && err.response) {
        const axiosError = err as AxiosError<E>;
        return axiosError.response?.data;
      }

      throw err;
    }
  }

  private async apiGET<D, E = APIError>(path: string, headers = {}) {
    return this.request<D, E>(async (client: AxiosInstance) => {
      const response = await client.get<D>(path, { headers });
      return response.data;
    });
  }

  private async apiPOST<D, E = APIError>(
    path: string,
    payload: object,
    headers = {}
  ) {
    return this.request<D, E>(async (client: AxiosInstance) => {
      const response = await client.post<D>(
        path,
        qs.stringify(payload as ParsedUrlQueryInput),
        { headers }
      );
      return response.data;
    });
  }

  private async apiPUT<D, E = APIError>(path: string, payload: object) {
    return this.request<D, E>(async (client: AxiosInstance) => {
      const response = await client.put<D>(path, payload);
      return response.data;
    });
  }

  private apiAuthGET<D, E = APIError>(path: string) {
    if (!this.token) {
      throw new Error('Method called without a logged in user.');
    }

    return this.apiGET<D, E>(path, { Authorization: this.token.access_token });
  }

  private apiAuthPOST<D, E = APIError>(path: string, payload: object) {
    if (!this.token) {
      throw new Error('Method called without a logged in user.');
    }

    return this.apiPOST<D, E>(path, payload, {
      Authorization: this.token.access_token
    });
  }

  validateUser({
    pnTipoDoc,
    pcDocumento,
    pnVerificador,
    pcCelular
  }: ValidateUserVariables) {
    return this.apiGET<ValidateUserData>(
      `/personas/${pnTipoDoc}/${pcDocumento}/${pnVerificador}/${pcCelular}/validar`
    );
  }

  sendSMSCode(payload: SendSMSCodeVariables) {
    return this.apiPOST<SendSMSCodeData, SendSMSCodeError>(
      '/sms/enviar-codigo',
      payload
    );
  }

  registerUser(payload: RegisterUserVariables) {
    return this.apiPOST<RegisterUserData>('/usuarios-banking', payload);
  }

  validateExistingUser({
    pnTipoDoc,
    pcDocumento,
    pnVerificador,
    pnCodSistema
  }: ValidateExistingUserVariables) {
    return this.apiGET<ValidateExistingUserData>(
      `/usuarios-banking/${pnTipoDoc}/${pcDocumento}/${pnVerificador}/${pnCodSistema}/validar`
    );
  }

  updateUser(payload: UpdateUserVariables) {
    return this.apiPUT<UpdateUserData>('/usuarios-banking', payload);
  }

  async login(payload: LoginVariables) {
    if (!this.client) {
      this.client = await this.setup();
    }
    console.log('the hash is', process.env.API_KEY);
    const response = await this.apiPOST<LoginData, LoginError>('/ILC/Token', {
      ...payload,
      grant_type: 'password',
      hashSoftware: process.env.API_KEY,
      direccionIPCliente: this.ipAddress,
      Imei: ''
    });
    if (isToken(response)) {
      this.token = response;
    }
    const userMetadata = await this.apiAuthGET<UserInfoData>(
      `/usuarios-banking/${payload.username}`
    );
    if (isAPIResponse<UserMetadata>(userMetadata)) {
      this.userID = userMetadata.oData.nCodPers;
    }
  }

  getProfileInfo() {
    return this.apiAuthGET<GetProfileInfoData>(
      `/personas/natural/${this.userID}`
    );
  }

  getBankAccounts() {
    return this.apiAuthGET<GetBankAccountsData>(
      `/personas/${this.userID}/cuentas-bancarias`
    );
  }

  getAvailableContracts() {
    return this.apiAuthGET<GetAvailableContractsData>(
      `/personas/${this.userID}/contratos-pignocash`
    );
  }

  validateAddContract({
    pcContratoNuevo,
    pcContratos
  }: ValidateAddContractVariables) {
    const newContract = pcContratoNuevo.numerocontrato;
    const existingContracts = pcContratos
      .map(({ numerocontrato }) => numerocontrato)
      .join(',');

    return this.apiAuthGET<ValidateAddContractData, ValidateAddContractError>(
      `/solicitudes-pignocash/${this.userID}/${newContract}/${existingContracts}/validar`
    );
  }

  getBankList() {
    return this.apiAuthGET<GetBankListData>('/catalogos/12042');
  }

  getBankAccountTypeList() {
    return this.apiAuthGET<GetBankAccountTypeListData>('/catalogos/12041');
  }

  queryForContracts({ pcNrosContratos }: QueryForContractsVariables) {
    const contractIDs = pcNrosContratos
      .map(({ numerocontrato }) => numerocontrato)
      .join(',');
    return this.apiAuthGET<QueryForContractsData>(
      `/pignoraticios/${contractIDs}`
    );
  }

  submitContractRequest(payload: SubmitContractRequestVariables) {
    return this.apiAuthPOST('/solicitudes-pignocash', {
      ...payload,
      nCodPers: this.userID
    });
  }
}
