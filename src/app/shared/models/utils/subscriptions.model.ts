import { Subscription } from 'rxjs';

class SubscriptionsError extends Error {

  constructor(key: string) {
    super(`No Subscription with Key(${key})`);
  }

}

export class Subscriptions {

  private subscriptions: Map<string, Subscription>;

  constructor() {
    this.subscriptions = new Map();
  }

  public addSubscription(key: string, subscription: Subscription): void {
    if (!this.subscriptions.has(key)) {
      this.subscriptions.set(key, subscription);
    }
  }

  public updateSubscription(key: string, subscription: Subscription): void {
    if (this.subscriptions.has(key)) {
      this.removeSubscription(key);
    }

    this.subscriptions.set(key, subscription);

  }

  public removeSubscription(key: string): void {

    if (this.subscriptions.has(key)) {
      const sub = this.subscriptions.get(key);
      if (sub && !sub.closed) {
        sub.unsubscribe();
      }
      this.subscriptions.delete(key);
    }

  }

  public getSubscription(key: string): Subscription {

    const sub: Subscription | undefined = this.subscriptions.get(key);

    if (sub) {
      return sub;
    } else {
      throw new SubscriptionsError(key);
    }

  }

  public unsubscribeAll(): void {
    this.subscriptions.forEach((_: Subscription, key: string) => this.removeSubscription(key));
  }

}
