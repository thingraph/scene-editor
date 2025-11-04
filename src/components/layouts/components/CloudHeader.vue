<template>
  <a-layout-header class="cloud-header">
    <div class="header-container">
      <a-row>
        <a-col :span="18">
          <div class="platform-info">
            <div class="info-container" @click="goPlatformIndex">
              <img
                class="logo"
                :src="logo"
                alt="logo"
              />
              <h1 class="titles">Scene Editor</h1>
            </div>
          </div>
        </a-col>
        <!-- <a-col :span="6">
          <ul class="menu">
            <li>
              <a-dropdown :trigger="['hover']">
                <a class="ant-dropdown-link" @click.prevent>
                  <UserOutlined style="margin-right: 5px" />{{ user }}
                </a>
                <template #overlay>
                  <ul class="submenu">
                    <li>
                      <PoweroffOutlined style="margin-right: 5px" />
                      <a href="/_auth/logout">Logout</a>
                    </li>
                  </ul>
                </template>
              </a-dropdown>
            </li>
          </ul>
        </a-col> -->
      </a-row>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
// import { PoweroffOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/stores/modules/user'
// import { UserOutlined } from '@ant-design/icons-vue'
import logo from '@/assets/logo.svg'

const router = useRouter()
const userStore = useUserStore()
const user = userStore.userInfo.name

const goPlatformIndex = () => {
  router.push('/')
}
</script>
<style scoped lang="less">
.cloud-header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #001529;
  .header-container {
    width: 100%;
    height: 60px;
    .platform-info {
      height: 60px;
      // overflow: auto;
      .info-container {
        cursor: pointer;
      }
    }
    .logo {
      width: 60px;
      height: 60px;
      float: left;
    }
    .titles {
      float: left;
      cursor: pointer;
      font-size: 22px;
      height: 60px;
      color: #fff;
      margin: 0 0 0 5px;
      font-family:
        Avenir,
        Helvetica Neue,
        Arial,
        Helvetica,
        sans-serif;
      font-weight: 500;
      vertical-align: middle;
    }
  }
}
.ant-layout .ant-layout-header {
  padding: 0 15px !important;
}

.menu {
  float: right;
  li {
    margin: 0;
    padding: 0;
    float: left;
    list-style-type: none;
    margin-left: 20px;
    line-height: 60px;
    color: #c1c6c8;
    font-size: 16px;
    font-size: 14px;
    cursor: pointer;
    a {
      color: #c1c6c8;
    }
    &:hover {
      color: #1890ff;
    }
  }
}
.submenu {
  background-color: #fff;
  width: 120px;
  margin: 0;
  padding: 5px 0;
  border-radius: 3px;
  border: #eef0f3 solid 1px;
  overflow: hidden;
  li {
    margin: 0;
    padding: 0;
    padding-left: 20px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    list-style-type: none;
    float: none;
    text-align: left;
    cursor: pointer;
    &:hover {
      background: #e3f5fe;
    }

    a {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #595959;
    }
  }
}
</style>
