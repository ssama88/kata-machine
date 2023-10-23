type QNode<T> = {
    value: T;
    next?: QNode<T>;
};
export default class Queue<T> {
    public length: number = 0;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = { value: item } as QNode<T>;
        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }
    deque(): T | undefined {
        if (!this.head) return undefined;
        const tempHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = undefined;
        return tempHead?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
