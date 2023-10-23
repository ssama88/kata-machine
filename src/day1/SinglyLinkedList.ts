type QNode<T> = {
    value: T;
    next?: QNode<T>;
};
export default class SinglyLinkedList<T> {
    public length: number = 0;
    private head: QNode<T>;
    private tail: QNode<T>;

    constructor() {}

    prepend(item: T): void {
        ++this.length;
        const node = { value: item } as QNode<T>;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        const head = this.head;
        this.head = node;
        this.head.next = head;
    }
    insertAt(item: T, idx: number): void {
        ++this.length;
        let currNode = this.head;
        for (let i = 0; i < idx; ++i) {
            if (currNode?.next) {
                currNode = currNode?.next;
            } else break;
        }
        const node = { value: item } as QNode<T>;
        const nextNode = currNode?.next;
        currNode.next = node;
        currNode.next.next = nextNode;
    }
    append(item: T): void {
        ++this.length;
        const node = { value: item } as QNode<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        if (this.length === 0) return undefined;
        --this.length;

        let currNode = this.head;
        if (this.head.value === item) {
            const node = this.head;
            this.head = node.next as QNode<T>;
            return node.value;
        }
        while (currNode?.next) {
            if (currNode.next.value === item) {
                const node = currNode?.next;
                if (!node?.next) {
                    this.tail = currNode;
                } else {
                    currNode.next = node.next;
                }
                return node.value;
            }
            currNode = currNode?.next;
        }
        this.length++;
        return undefined;
    }
    get(idx: number): T | undefined {
        if (!this.head) return undefined;
        let currNode = this.head;
        for (let i = 0; i < idx; i++) {
            if (!currNode?.next) return undefined;
            currNode = currNode.next;
        }
        return currNode?.value;
    }
    removeAt(idx: number): T | undefined {
        if (!this.head) return undefined;

        this.length--;
        if (idx === 0) {
            const node = this.head;
            this.head = this.head?.next as QNode<T>;
            return node.value;
        }
        let currNode = this.head;
        for (let i = 0; i < idx - 1; i++) {
            if (!currNode?.next) return undefined;
            currNode = currNode.next;
        }
        const rmvNode = currNode?.next;
        if (idx === this.length) {
            this.tail = currNode;
            currNode.next = undefined;
        } else {
            currNode.next = rmvNode?.next;
        }

        return rmvNode?.value;
    }
}
