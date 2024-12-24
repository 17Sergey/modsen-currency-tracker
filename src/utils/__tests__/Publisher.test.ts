import { Publisher } from "../Publisher/Publisher.ts";

describe("Publisher", () => {
    let publisher: Publisher;
    let callback1: jest.Mock;
    let callback2: jest.Mock;

    beforeEach(() => {
        publisher = new Publisher();
        callback1 = jest.fn();
        callback2 = jest.fn();
    });

    it("should allow subscribing to notifications", () => {
        publisher.subscribe(callback1);
        expect(publisher.subscribers).toContain(callback1);
    });

    it("should notify all subscribers", () => {
        publisher.subscribe(callback1);
        publisher.subscribe(callback2);

        publisher.notifySubscribers();

        expect(callback1).toHaveBeenCalled();
        expect(callback2).toHaveBeenCalled();
    });

    it("should not notify unsubscribed subscribers", () => {
        publisher.subscribe(callback1);
        publisher.subscribe(callback2);

        publisher.unsubscribe(callback1);
        publisher.notifySubscribers();

        expect(callback1).not.toHaveBeenCalled();
        expect(callback2).toHaveBeenCalled();
    });

    it("should handle multiple subscribers", () => {
        const callback3 = jest.fn();
        publisher.subscribe(callback1);
        publisher.subscribe(callback2);
        publisher.subscribe(callback3);

        publisher.notifySubscribers();

        expect(callback1).toHaveBeenCalled();
        expect(callback2).toHaveBeenCalled();
        expect(callback3).toHaveBeenCalled();
    });

    it("should allow unsubscribing a subscriber", () => {
        publisher.subscribe(callback1);
        publisher.unsubscribe(callback1);

        expect(publisher.subscribers).not.toContain(callback1);
    });

    it("should not throw an error when unsubscribing a non-existing subscriber", () => {
        expect(() => publisher.unsubscribe(callback1)).not.toThrow();
    });
});
