type QNode<T> = {
    value: T;
    prev?: QNode<T>;
};
export default class Stack<T> {
    public length: number = 0;
    private head?: QNode<T>;

    constructor() {}

    push(item: T): void {
        ++this.length;

        if (!this.head) {
            this.head = this.createNode(item);
            return;
        }
        const head = this.head;
        this.head = this.createNode(item);
        this.head.prev = head;
    }
    pop(): T | undefined {
        if (!this.head) return undefined;
        --this.length;

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head.value;
        }
        const head = this.head;
        this.head = this.head.prev;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
    private createNode(item: T): QNode<T> {
        return { value: item };
    }
}
