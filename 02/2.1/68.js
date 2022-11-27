/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function (head, x) {
    // 存放小于 x 的链表的虚拟头结点
    let dummy1 = new ListNode(-1);
    // 存放大于等于 x 的链表的虚拟头结点
    let dummy2 = new ListNode(-1);

    // p1, p2 指针负责生成结果链表
    let p1 = dummy1;
    let p2 = dummy2;

    // p 负责遍历原链表，类似 合并两个有序链表的逻辑
    // 这里是将一个链表分解成两个链表
    let p = head;
    while (p !== null) {
        if (p.val >= x) {
            p2.next = new ListNode(p.val);
            p2 = p2.next;
        } else {
            p1.next = new ListNode(p.val);
            p1 = p1.next;
        }
        p = p.next;
    }

    // 连接两个链表,即 连接 新生成的两个列表
    p1.next = dummy2.next;

    // 返回虚拟头结点的 next
    return dummy1.next;
};