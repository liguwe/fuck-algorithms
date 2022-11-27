/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 分析:
 * 1、关键是 优先级队列的 入队函数的实现
 * 2、优先级队列的权重就是单链表Node节点的val值
 *
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null
    }
    // 虚拟头结点
    let dummy = new ListNode(-1);
    // 指针指向p, p指针用于移动
    let p = dummy;

    // 优先级队列，值最小的先入队，
    let q = [];
    // 优先队列的入队函数，值最小的入队列
    let enqueue = (node) => {
        if (q.length === 0) {
            q.push(node);
        } else {
            // 是否插入了
            let added = false;
            for (let i = 0; i < q.length; i++) {
                if (node.val < q[i].val) {
                    q.splice(i, 0, node)
                    added = true;
                    break;
                }
            }
            // 没找到合适的插入位置，则添加到末尾
            if (!added) {
                q.push(node);
            }
        }
    }

    // 遍历lists , 入队链表数组的每个元素
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            enqueue(lists[i])
        }
    }

    while (q.length !== 0) {
        // 取出 优先级队列里的第一个
        let node = q.shift();
        // p指针指向 把取出的节点
        p.next = node;
        // 检测node.next 否则，重新入队
        if (node.next !== null) {
            // ::::关键
            enqueue(node.next);
        }
        // p 指针不断前进
        p = p.next;
    }

    return dummy.next;
};
