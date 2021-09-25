<template>

  <div class="bg-gray-600 w-1/2 max-w-xl mx-auto shadow-xl rounded-lg p-5 ">
    <h3 class="text-white text-center mb-5 font-semibold">Calculate product nutrition</h3>

    <div class=" ">

      <el-input-number class="mb-5" v-model="num" :min="0" :max="20"></el-input-number>
    </div>

    <div class="flex flex-col mb-5">
      <el-select class="mb-5" v-model="valueSize" placeholder="Select">
        <el-option
          v-for="item in optionsSize"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>


      <el-select class="mb-5" v-model="valueProduct" placeholder="Select">
        <el-option
          v-for="item in optionsProduct"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>


    </div>
    <div class="flex justify-center">
      <el-button type="primary" @click="getNutrition">Calculate</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "CalculateNutrition",
    data() {
      return {
        num: null,
        fullscreenLoading: false,

        optionsSize: [{
          value: 'kg',
          label: 'kg'
        }, {
          value: 'l',
          label: 'l'
        }, {
          value: 'g',
          label: 'g'
        }, {
          value: 'mg',
          label: 'mg'
        }, {
          value: 'cup',
          label: 'cup'
        }],
        valueSize: '',
        optionsProduct: [{
          value: 'sugar',
          label: 'sugar'
        }, {
          value: 'rice',
          label: 'rice'
        }, {
          value: 'potato',
          label: 'potato'
        }, {
          value: 'cabbage',
          label: 'cabbage'
        }, {
          value: 'spaghetti',
          label: 'spaghetti'
        }, {
          value: 'salt',
          label: 'salt'
        }, {
          value: 'milk',
          label: 'milk'
        }],
        valueProduct: '',
      };
    },
    methods: {
      getNutrition() {

        if (this.num !== 0 && typeof this.valueSize !== undefined && typeof this.valueProduct !== undefined) {
          this.$store.dispatch("cooking/fetch", {
            product: `${this.num} ${this.valueSize} ${this.valueProduct}`
          });
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();
          }, 2000);
        }
        else {
          this.$message({
            showClose: true,
            message: 'Fill in all the fields.',
            type: 'error'
          });
        }
      },

    },
  }
</script>

<style scoped>

</style>
