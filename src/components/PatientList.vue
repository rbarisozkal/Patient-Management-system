<template>
  <li>{{ name }} {{ surName }}</li>
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
      type: Number,
    },
    chosenDate: {
      type: Date,
    },
    chosenTime: {
      type: Date(),
    },
  },
  methods: {
    submitAppointment(id, name, surName, date, time, hospitalName) {
      const newPatientData = {
        id: id,
        name: name,
        surName: surName,
        date: date,
        time: time,
        hospital: hospitalName,
      };
      this.patients.push(newPatientData);
    },
  },
};
</script>
