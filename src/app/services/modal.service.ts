import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ModalRequirements {
    component: Type<unknown> | null;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
    modalRequirements: BehaviorSubject<ModalRequirements> = new BehaviorSubject<ModalRequirements>({
        component: null
    });
    
    create(ModalRequirements: ModalRequirements): void {
        this.modalRequirements.next(ModalRequirements);
    }

    dismiss(): void {
        this.modalRequirements.next({ component: null });
    }
}
