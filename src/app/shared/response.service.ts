import { Subject } from 'rxjs';

export class ResponseService {
  fireResponse = new Subject<{ok: boolean, menssage: string}>();

  sendResponse(status: boolean, menssage: string) {
    this.fireResponse.next({ok: status, menssage: menssage});
  }
}
