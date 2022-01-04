<template>
  <div class="appointment">
    <h1>Get an Appointment</h1>
    <NewPatient @add-new="submitAppointment"></NewPatient>
  </div>
  <ul>
    <PatientList
      :id="patient.id"
      :name="patient.name"
      :sur-name="patient.surName"
      :chosen-date="patient.date"
      :chosen-time="patient.time"
      :key="patient"
      :chosen-doctor="patient.enteredDoctor"
      :chosen-hospital="patient.enteredHospital"
      v-for="patient in patients"
    >{{patient.name}}</PatientList>
  </ul>
</template>

<script>
import PatientList from "../components/PatientList.vue";
import NewPatient from "../components/NewPatient.vue";
export default {
  data() {
    return {
      enteredID: "",
      enteredName: "",

      enteredDate: "",
      enteredTime: "",
      enteredHospital: "",
      enteredDoctor: "",
      patients: [
        {
          id: "12345",
          name: "Baris",
          surName: "Ozkal",
          chosenDate: "12.12.2020",
          chosenTime:'12:24',
          chosenDoctor:'ASDDD',
          chosenHospital:'Liv Hospital'
        },
      ],
    };
  },
  components: {
    PatientList,
    NewPatient,
  },
  emits: ["add-new"],
  methods: {
    submitAppointment(id, name, surName, date, time, hospitalName, doctor) {
      const newPatientData = {
        id: id,
        name: name,
        surName: surName,
        chosenDate: date,
        chosenTime: time,
        chosenDoctor: doctor,
        chosenHospital: hospitalName,
      };
      this.patients.push(newPatientData);
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
