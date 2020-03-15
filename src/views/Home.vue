<template>
<el-container class="home-container">
  <el-aside :width="isCollapse?'68px':'200px'">
    <el-menu
      default-active="1"
      class="el-menu-vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :collapse-transition="false"
      router>
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>列表管理</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item index="2-1">
          <template>
            <i class="el-icon-menu"></i>
            <span>列表</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">节点管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">添加题目</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">标签管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>
      <div class="el-header-left">
        <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="toggleCollapse"></i>
          <span>后台管理系统</span>
      </div>
      <div class="el-header-right">
        <!-- <img src="../assets/background.jpg"> -->
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <i class="el-icon-caret-bottom"></i>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      isCollapse:false
    }
  },
  methods: {
    toggleCollapse(){
      this.isCollapse=!this.isCollapse
    }
  },
}
</script>
<style lang="less" scoped>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    display: flex;
    justify-content:space-between;
    align-items: center;
    .el-header-right,.el-header-left{
      display: flex;
      align-items: center;
      img{
        width: 50px;
      }
    }
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .home-container{
    height: 100vh;
  }
  .el-menu-vertical{
    height: 100vh;
  }
</style>
