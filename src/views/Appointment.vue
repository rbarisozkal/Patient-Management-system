<template>
  <div class="appointment">
      <h1>Get an Appointment</h1>
      
    <form>
         <div class="inputHolder">
        <label> Personal ID : </label>
        <input v-model="id" type="text" />
      </div>
      <div class="inputHolder">
        <label> Name : </label>
        <input v-model="name" type="text" />
      </div>
      <div class="inputHolder">
        <label> Surname : </label>
        <input v-model="surName" type="text" />
      </div>
      
      <div class="inputHolder">
        <label> Which hospital do you want to go ? </label>
        <select>
          <option>Liv Hospital - Kizilay</option>
          <option>Medical Park - Batikent</option>
          <option>Bilgi Hospital - Batikent</option>
          <option>Ankara Central Hospital - Sihhiye</option>
          <option>Yildirim Beyazit Hospital - Yenimahalle</option>
        </select>
      </div>
      <div class="date">
        <label> Date : </label>
        <input class="date-style" v-model="date" type="date" />
        <label> Time : </label>
        <input class="date-style" v-model="date" type="time" />
      </div>
    </form>
  </div>
  <PatientList></PatientList>

</template>

<script>
import PatientList from '../components/PatientList.vue';
export default {
    
    data(){
      return{
          
      }
    },
    components:PatientList
    
};

</script>

<style scoped>

form {
  width: 60%;
  display: flex;
  flex-wrap: nowrap;
}
* {
  
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: flex-start;
}
.inputHolder {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.inputHolder input {
  width: 100%;
  height: 20px;
  border-radius: 4px;
  border: 1px solid lightsalmon;

  
} .date-style{
    height: 20px;
    width: 250px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    
}


</style>
