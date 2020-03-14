<template>
    <div>
        <el-button type="primary">主要按钮</el-button>
        <el-table
            style="width: 100%">
            <el-table-column
                label="Date"
                prop="date"
                align="center">
            </el-table-column>
            <el-table-column
                label="Name"
                prop="name"
                align="center">
            </el-table-column>
            <el-table-column
                align="center">
                <template slot-scope="scope">
                <el-button
                    size="mini"
                    >Edit</el-button>
                <el-button
                    size="mini"
                    type="danger"
                    >Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name:'Tagmange'
}
</script>
<style lang="less" scoped>
.el-table{
    margin-top: 10px;
}
</style>