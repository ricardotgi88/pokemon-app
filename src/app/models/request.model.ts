export class RequestModel {
    /**
     * URL.
     */
    url: string;
    /**
     * Objeto a ser enviado no corpo (body).
     */
    data?: any;
    /**
     * Parâmetros de URL, se houverem.
     */
    params: any[] = [];

    constructor(init?: Partial<RequestModel>) {
        if (init) {
            Object.assign(this, init);
        }
    }
}
