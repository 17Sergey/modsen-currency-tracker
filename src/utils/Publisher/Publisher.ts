type SubscriberFunction = VoidFunction;

export class Publisher {
    public subscribers: SubscriberFunction[];

    constructor() {
        this.subscribers = [];
    }

    subscribe(callback: SubscriberFunction) {
        this.subscribers.push(callback);
    }

    unsubscribe(callback: SubscriberFunction) {
        this.subscribers = this.subscribers.filter((subscriber) => subscriber !== callback);
    }

    notifySubscribers() {
        this.subscribers.forEach((subscriberCallback) => subscriberCallback());
    }
}
