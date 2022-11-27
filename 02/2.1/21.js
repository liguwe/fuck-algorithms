
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // ::::注意： 这里是定义4个变量
    // 虚拟头结点
    let dummy = new ListNode(-1); // 用户后面返回 dummy.next
    // 缩写，方便吧
    let p = list;  // 这里是引用类型，所以指针操作并不会影响list
    let p1 = list1;
    let p2 = list2;

    // while (p1 && p2) {
    // 下面这种while会开快一些，不涉及到自动转化
    while (p1 != null && p2 != null) {
        if (p1.val <= p2.val) {
            p.next = p1;
            p1 = p1.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        // ::::这一步真正理解吗？
        p = p.next;
    }

    // 剩余的直接放在尾部即可
    if (p1 !== null) {
        p.next = p1;
    }
    if (p2 !== null) {
        p.next = p2;
    }

    // 返回，这样就不包含值为 -1 的节点了
    return dummy.next;
};