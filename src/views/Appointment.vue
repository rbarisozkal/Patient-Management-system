<template>
  <div class="appointment">
    <h1>Get an Appointment</h1>

    <form @submit.prevent="submitAppointment">
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
        <select class="demo">
          <option
            :value="hospital"
            v-for="hospital in hospitals"
            :key="hospital"
          >
            {{ hospital }}
          </option>
        </select>
      </div>
      <div class="date">
        <label> Date : </label>
        <input class="date-style" v-model="date" type="date" />
        <label> Time : </label>
        <input class="date-style" v-model="time" type="time" />
      </div>
      <div>
        <button>Add Appointment</button>
      </div>
    </form>
  </div>
  <PatientList> </PatientList>
</template>

<script>
import PatientList from "../components/PatientList.vue";
export default {
  data() {
    return {
      hospitals: ["Liv Hospital - Kizilay", "Medical Park - Batikent"],
      enteredID: "",
      enteredName: "",
      enteredSurName: "",
      enteredDate: "",
      enteredTime: "",
      enteredHospital: "",
      enteredDoctor: "",
      patients: [],
    };
  },
  components: {
    PatientList,
  },
  emits: ["add-new"],
  methods: {
    submitAppointment() {
      this.$emit(
        "add-new",
        this.enteredID,
        this.enteredName,
        this.enteredSurName,
        this.enteredHospital,
        this.enteredDate,
        this.enteredTime,
        this.enteredDoctor
      );
      this.enteredID = "";
      this.enteredName = "";
      this.enteredSurName = "";
      this.enteredHospital = "";
      this.enteredDate = "";
      this.enteredTime = "";
      this.enteredDoctor = "";
    },
  },
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
  
  border: 1px solid lightsalmon;
}
.date-style {
  height: 20px;
  width: 250px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
}
</style>
