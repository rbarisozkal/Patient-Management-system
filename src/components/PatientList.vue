<template>
  <li>{{ name }}  {{date}} {{time}}</li>
</template>
<script>
export default {
  name: "PatientList",
  data() {
    return {};
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surName: {
      type: String,
      
    },
    chosenDoctor: {
      type: String,
    },
    chosenHospital: {
      type: String,
    },
    chosenDate: {
      type: Date,
    },
    chosenTime: {
      type: String,
    },
  },
  methods: {
    submitAppointment(id, name, surName, date, time, hospitalName) {
      const newPatientData = {
        id: id,
        name: name,
        surName: surName,
        chosenDate: date,
        chosenTime: time,
        chosenHospital: hospitalName,
      };
      this.patients.push(newPatientData);
    },
  },
};
</script>
