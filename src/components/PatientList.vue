<template>
  <ul>
    <li v-for="patient in patients" :key="patient">{{ patient }}</li>
  </ul>
</template>

<script>

export default {
  name: "PatientList",
  data() {
    return { };
  },
  methods:{
      submitAppointment(id, name, surName, date, time, hospitalName) {
      const newPatientData = {
        id: new Date().toISOString(),
        name: name,
        surName: surName,
        date: date,
        time: time,
        hospital: hospitalName,
      };
      this.patients.push(newPatientData);
    },
  }
};
</script>
