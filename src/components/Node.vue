<template>
    <div>
        <el-tree
        :data="data"
        node-key="id"
        default-expand-all
        accordion
        :expand-on-click-node="false">
        <span class="tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
                <el-button
                    type="text"
                    size="mini"
                    @click="() => append(data)">
                    添加节点
                </el-button>
                <el-button
                    type="text"
                    size="mini"
                    @click="() => remove(node, data)">
                    删除节点
                </el-button>
                <el-button
                    type="text"
                    size="mini"
                    @click="() => edit(node,data)">
                    修改节点
                </el-button>
            </span>
        </span>
        </el-tree>
    </div>
</template>
<script>
export default {
    name:'Node',
    data() {
        return {
            data:[{
                id:1,
                label: '一级 3',
                children: [{
                    id:2,
                    label: '二级 3-1',
                    children: [{
                        id:4,
                        label: '三级 3-1-1'
                    }]
                }, {
                    id:3,
                    label: '二级 3-2',
                }]
            }]

        }
    },
    methods: {
        append(data) {
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
            this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },
        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
        edit(node,data){
            console.log(node,data)
        }
    }
}
</script>
<style lang="less" scoped>
.tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>