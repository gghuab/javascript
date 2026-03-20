class treeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;
    }
}
class BSTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new treeNode(value);
        if (!this.root) {
            //树为空
            this.root = newNode;
        }
        else {
            //树不为空
            this.inserNode(this.root, newNode);
        }
    }
    inserNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                //旧节点的左侧为空
                node.left = newNode;
                // newNode.parent = node //设置父节点
            }
            else {
                //不为空
                this.inserNode(node.left, newNode);
            }
        }
        else {
            if (!node.right) {
                //旧节点的右侧为空
                node.right = newNode;
                // newNode.parent = node //设置父节点
            }
            else {
                //不为空
                this.inserNode(node.right, newNode);
            }
        }
    }
    preOrderTraverse(node) {
        this.preOrderTraverseNode(node);
    }
    preOrderTraverseNode(root) {
        if (root) {
            console.log(root.value);
            this.preOrderTraverseNode(root.left);
            this.preOrderTraverseNode(root.right);
        }
    }
    leverlOrderTraverse(node) {
        if (!node) {
            return;
        }
        let queue = [];
        queue.push(node);
        while (queue.length) {
            const current = queue.shift();
            console.log(current.value);
            if (current.left)
                queue.push(current.left);
            if (current.right)
                queue.push(current.right);
        }
    }
    getMax(node) {
        if (!node) {
            return null;
        }
        while (node.right) {
            node = node.right;
        }
        return node.value;
    }
    getMin(node) {
        if (!node) {
            return null;
        }
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }
    search(value) {
        let current = this.root;
        let parent = null;
        while (current) {
            if (current.value === value) {
                return current;
            }
            parent = current;
            if (value < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
            if (current)
                current.parent = parent;
        }
        return null;
    }
    successor(node) {
        let current = node.right;
        while (current.left) {
            current = current.left;
        }
        return current;
    }
    remove(value) {
        let current = this.search(value);
        if (!current) {
            return false;
        }
        //删除一个叶子节点
        if (current?.left === null && current?.right === null) {
            if (this.root === current) {
                this.root = null;
            }
            else if (current.parent?.left === current) {
                current.parent.left = null;
            }
            else {
                current.parent.right = null;
            }
        }
        //删除只有一个子节点的节点
        else if (current.right === null) {
            //只有左子节点
            if (current === this.root) {
                this.root = current.left;
            }
            else if (current.parent.left === current) {
                current.parent.left = current.left;
            }
            else {
                current.parent.right = current.left;
            }
        }
        else if (current.left === null) {
            //只有右子节点
            if (current === this.root) {
                this.root = current.right;
            }
            else if (current.parent.left === current) {
                current.parent.left = current.right;
            }
            else {
                current.parent.right = current.right;
            }
        }
        //删除有两个子节点的节点
        else {
            //找到后继结点---当前节点的右子树的最小节点
            let successor = this.successor(current);
            successor = this.search(successor.value); //添加搜索，获取successor的parent属性
            // 1.替换 current
            if (current === this.root) {
                this.root = successor;
            }
            else {
                if (current.parent.left === current) {
                    current.parent.left = successor;
                }
                else {
                    current.parent.right = successor;
                }
            }
            //2.处理successor的左右节点
            successor.left = current.left;
            if (successor !== current.right) {
                successor.parent.left = successor.right;
                successor.right = current.right;
            }
        }
    }
    print() {
        this.printTree(this.root);
    }
    printTree(node) {
        if (!node)
            return;
        // 1. 计算坐标
        // x: 中序遍历的索引 (保证左<根<右)
        // y: 深度
        const pos = new Map();
        let x = 0;
        const inorder = (n, depth) => {
            if (!n)
                return;
            inorder(n.left, depth + 1);
            pos.set(n, { x: x++, y: depth });
            inorder(n.right, depth + 1);
        };
        inorder(node, 0);
        // 2. 准备画布
        const maxDepth = Math.max(...Array.from(pos.values()).map((p) => p.y));
        const width = x;
        // 纵向：每个节点占 3 行 (节点本身, 连接线, 空行)
        // 横向：每个单位宽 4 字符
        const rows = maxDepth * 3 + 1;
        const cols = width * 4;
        const canvas = Array.from({ length: rows }, () => Array(cols).fill(' '));
        // 3. 绘制
        pos.forEach((p, n) => {
            const r = p.y * 3;
            const c = p.x * 4 + 2;
            // 绘制节点值
            const valStr = String(n.value);
            const start = Math.floor(c - valStr.length / 2);
            for (let i = 0; i < valStr.length; i++) {
                if (start + i < cols && start + i >= 0)
                    canvas[r][start + i] = valStr[i];
            }
            // 绘制与父节点的连线
            if (n.parent && pos.has(n.parent)) {
                const parentP = pos.get(n.parent);
                const pr = parentP.y * 3;
                const pc = parentP.x * 4 + 2;
                if (n === n.parent.left) {
                    // 左孩子：在父子中间画 /
                    const midR = pr + 1;
                    const midC = Math.floor((pc + c) / 2);
                    if (midC >= 0 && midC < cols)
                        canvas[midR][midC] = '/';
                }
                else {
                    // 右孩子：在父子中间画 \
                    const midR = pr + 1;
                    const midC = Math.floor((pc + c) / 2);
                    if (midC >= 0 && midC < cols)
                        canvas[midR][midC] = '\\';
                }
            }
        });
        // 4. 输出
        canvas.forEach((row) => console.log(row.join('').trimEnd()));
    }
}
const bst = new BSTree();
bst.insert(20);
bst.insert(30);
bst.insert(18);
bst.insert(25);
bst.insert(15);
bst.insert(16);
bst.insert(22);
bst.insert(27);
bst.insert(23);
// bst.preOrderTraverse(bst.root)
// console.log(bst)
bst.print();
// bst.leverlOrderTraverse(bst.root!)
bst.remove(20);
bst.print();
export default BSTree;
