<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<template>
  <el-row>
    <el-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        >
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">
              Operating
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.time {
  color: #999;
  font-size: 12px;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
  line-height: 12px;
}

.button {
  min-height: auto;
  padding: 0;
}

.image {
  display: block;
  width: 100%;
}
</style>
