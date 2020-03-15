<template>
    <div>
        <el-button type="primary" @click="handleAdd">添加标签</el-button>
        <el-table
        style="width: 100%"
        :data="tableData">
            <el-table-column
                label="标签名称"
                align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作"  align="center">
                <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">修改标签</el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除标签</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 添加标签弹框 -->
        <el-dialog title="添加标签" :visible.sync="dialogAddFormVisible">
            <el-form :model="form">
                <el-form-item label="标签名称" >
                   <el-input  autocomplete="off" v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogAddFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogAddFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 修改标签弹框 -->
        <el-dialog title="修改标签" :visible.sync="dialogEditFormVisible">
            <el-form :model="form">
                <el-form-item label="标签名称" >
                   <el-input  autocomplete="off" v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogEditFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogEditFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { MessageBox } from 'element-ui'
export default {
    name:'Tagmange',
    data() {
        return {
            dialogEditFormVisible: false,
            dialogAddFormVisible:false,
            form:{
                name:''
            },
            tableData: [{
                id:1,
                name: 'JAVA基础'
                }, {
                id:2,
                name: 'JAVA基础2'
                }, {
                id:3,
                name: 'JAVA基础3'
            }]
        }
    },
    methods: {
        handleAdd(){
            this.dialogAddFormVisible=true
            this.tableData.unshift({id:this.tableData.length,name:this.form.name})
        },
        handleEdit(index, row) {
            this.dialogEditFormVisible = true
            this.form.name=row.name
           console.log(index, row.name);
      },
      handleDelete(index, row) {
          MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
          console.log(index, row);
      }
    },
}
</script>
<style lang="less" scoped>
.el-table{
    margin-top: 10px;
}
</style>