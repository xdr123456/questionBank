<template>
    <div>
        <el-form  ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="类型"  required>
                <el-select v-model="valueType">
                    <el-option label="选择题" value="1"></el-option>
                    <el-option label="区域二" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="题目节点"  required>
                <el-select v-model="valueNode">
                    <el-option label="Java1" value="1"></el-option>
                    <el-option label="Java2" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="题目"  required style="height:350px">
                <quill-editor ref="myTextEditor"
                    v-model="content"
                    :options="editorOption"
                    >
                </quill-editor>
            </el-form-item>
            <el-form-item label="A" prop="name"  required >
                <el-input placeholder="请输入A答案"  size="small" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="B" prop="name"  required >
                <el-input placeholder="请输入B答案"  size="small" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="C" prop="name"  required >
                <el-input placeholder="请输入C答案"  size="small" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="D" prop="name"  required >
                <el-input placeholder="请输入D答案"  size="small" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="选择题答案"  required >
                <el-radio-group v-model="radio">
                    <el-radio :label="'A'"></el-radio>
                    <el-radio :label="'B'"></el-radio>
                    <el-radio :label="'C'"></el-radio>
                    <el-radio :label="'D'"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="答案解析"  required style="height:350px">
                <quill-editor ref="myTextEditor"
                    v-model="content"
                    :options="editorOption"
                    >
                </quill-editor>
            </el-form-item>
            <el-form-item label="状态"  required>
                <el-select v-model="valueStatus" placeholder="请选择">
                    <el-option
                        v-for="item in optionsStatus"
                        :key="item.id"
                        :label="item.label"
                        :value="item.label">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标签" >
                <el-select v-model="valueLabel" placeholder="请选择">
                    <el-option
                        v-for="item in optionsLabel"
                        :key="item.id"
                        :label="item.label"
                        :value="item.label">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="序号" required>
                <el-input-number v-model="num"  :min="1" ></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">添加</el-button>
                <el-button>返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
    name:'Add',
    components: {
     quillEditor
  },
  data() {
      return {
            valueType:'',
            valueNode:'',
            content: '',
            radio:'A',
            optionsStatus:[{
                id: 1,
                label: '草稿'
            },
            {
                id: 2,
                label: '下线'
            },
            {
                id: 3,
                label: '正常'
            }],
            valueStatus:'',
            optionsLabel:[{
                id: 1,
                label: 'Java基础'
            }],
            valueLabel:'',
            num:1,
            editorOption: {
            modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
                        ['blockquote', 'code-block'],     //引用，代码块
                        [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
                        [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
                        [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
                        [{ 'direction': 'rtl' }],             // 文本方向
                        // [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
                        // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
                        [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
                        // [{ 'font': [] }],     //字体
                        [{ 'align': [] }],    //对齐方式
                        ['clean'],    //清除字体样式
                    ]
                }
            }
      }
  },
}
</script>
<style lang="less" scoped>
.quill-editor{
         height:250px;
     }
</style>