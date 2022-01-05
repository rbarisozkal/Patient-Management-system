<template>
  <div class="hello">
    <h2 class="headerMessage">{{ msg }}</h2>
   <p>Before making an appointment with the hospital, you can browse this page to get information about diseases.</p>

    
      <div class="card-wrapper">
      <h4>DDDD</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quas mollitia ipsum reprehenderit delectus, expedita odio aliquam dignissimos consectetur dolore consequuntur cum vel laudantium nulla!</p>
        
      
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Diseases",
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="scss">
.hello {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
h4{
  margin-top: 5px;
  margin-bottom: 5px;
}
.headerMessage{
  margin-top:50px;
  margin-bottom: 0px;
}
p{
  font-size: 12px;
  font-weight: bold;
  text-align: left;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.card-wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 4px solid #4ad6c3;
  //border-radius: 50px 0 50px 0;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
a {
  color: #42b983;
}
</style>
