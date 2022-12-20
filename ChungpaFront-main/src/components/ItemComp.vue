<template>
  <article class="list-item">
    <img
      src="../assets/res/no-item-image.png"
      width="240"
      height="170"
      alt=""
    />
    <div class="item-content">
      <div class="item-info">
        <h1>Name</h1>
        <div>FREE</div>
      </div>
      <p>
        Please add your content here. Keep it short and simple. And smile :)
      </p>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style>
.list-item {
  width: 20%;
  margin: 30px 2.5%;
}

.list-item .item-content {
  width: 240px;
}

.list-item .item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-content p {
  margin: 14px 0;
}
</style>
