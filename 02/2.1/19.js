/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 使用了虚拟头结点的技巧，也是为了防止出现空指针的情况，见备注
    let dummy = new ListNode(-1);

    // 第一步，使用双指针 先找到 倒数第 n 个节点
    let p1 = head;
    let p2 = dummy;
    p2.next = head;

    // p1 先走 n 步
    for (let i = 0; i < n; i++) {
        p1 = p1.next;
    }
    // p1 和 p2 同时走 k 步
    while (p1 != null) {
        p2 = p2.next;
        p1 = p1.next;
    }

    // 第二步：找到需要删掉倒数第 n 个节点后，即p2 ，改变一下指针即可
    p2.next = p2.next.next;

    return dummy.next;
};