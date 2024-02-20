
const app = Vue.createApp({
  data() {
    return {
        planetImage: 'planet-mercury.svg',
        planetName: 'Mercury',
        planetSummary: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun\'s planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.',
        rotation: '58.6 Days',
        revolution: '87.97 Days',
        radius: '2,439.7 KM',
        temperature: '430°C',
        btnASelected: true,
        btnBSelected: false,
        btnCSelected: false,
        test: 'hey'
    };
  },
  methods: {
    btnSelected(btn) {
      if (btn === 'A') {
        this.btnASelected = true;
        this.btnBSelected = false;
        this.btnCSelected = false;
      } else if (btn === 'B') {
        this.btnBSelected = true;
        this.btnASelected = false;
        this.btnCSelected = false;
        planetImage = 'geology-mercury.svg'
      } else if (btn === 'C') {
        this.btnCSelected = true;
        this.btnASelected = false;
        this.btnBSelected = false;
      }
    }
  },
  computed: {

  }
});

app.mount("#planet-info");
