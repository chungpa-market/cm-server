<template>
  <div id="wish">
    <header class="body-header">
      <img src="../assets/res/찜하기.png" alt="" width="60px" height="60px" />찜
      목록
    </header>
    <div class="delete-btn"><button>delete</button></div>
    <section>
      <ItemComp></ItemComp>
      <ItemComp></ItemComp>
      <ItemComp></ItemComp>
      <ItemComp></ItemComp>
      <ItemComp></ItemComp>
    </section>
  </div>
</template>

<script>
import ItemComp from '@/components/ItemComp.vue';

export default {
  name: 'wishList',
  components: {
    ItemComp,
  },
};
</script>

<style>
.body-header {
  width: 182px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0 0 28px;
  font-weight: 800;
  font-size: 33px;
}

.delete-btn {
  display: flex;
  justify-content: flex-end;
  margin: 10px 12px 0 0;
}

.delete-btn button {
  width: 75px;
  height: 33px;
  background: #ff4f4f;
  border-radius: 14px;
  color: white;
  border-color: #ff4f4f;
  font-weight: 400;
  font-size: 17px;
}

section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
