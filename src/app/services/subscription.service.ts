import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
    /**
     * Delete List Of Subscription
     * @param listOfSubscription 
     */
    public delete(...listOfSubscription: Subscription[]): void {
        if (listOfSubscription?.length > 0) {
            for (let i = 0; i < listOfSubscription.length; i++) {
                if (listOfSubscription[i]) {
                    listOfSubscription[i].unsubscribe();
                }
            }
        }
    }

}
