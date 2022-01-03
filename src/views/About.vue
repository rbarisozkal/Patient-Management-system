<template>
  <div class="about">
    <h1>Login Page</h1>
    <form>
      <div class="inputHolder">
      <label>ID: </label>
      <input type="text">
      </div>
      <div class="inputHolder">
        <label>Password: </label>
      <input type="password">
      </div>
      
    </form>
  </div>
</template>


<style scoped>
.about{
  height: 900px;
}
form{
  width: 60%;
  @media screen and (max-width:600px)  {
    form{
      width:100%;
    }
  }
}
*{
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: flex-start;
}
.inputHolder{
  width: 60%;
  display: flex;
  flex-direction: column;
}
.inputHolder input{
  width: 100%;
  height: 20px;
  border-radius: 4px;
  border: 1px solid lightsalmon;
}

</style>




