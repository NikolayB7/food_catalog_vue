<!-- Please remove this file from your project -->
<template>
  <div class="p-5">
    <h3 class="text-center mb-5 font-semibold">Enter a product to search</h3>
    <div class="flex mb-3">
      <el-input placeholder="1 cup rice,10 oz chickpeas" class="mr-3" v-model="product"></el-input>
      <el-button type="primary" @click="getNutrition" icon="el-icon-search">Search</el-button>
    </div>
    <div class="dietLabels mb-2">
      <template v-if="dietLabels.length">
        <el-tag v-for="(item,idx) in dietLabels" :key="`${idx}-tagLabel`" type="success" class="mr-1 mb-1">{{item}}
        </el-tag>
      </template>
    </div>
    <div class="tag">
      <template v-if="healthLabels.length">
        <el-tag v-for="(item,idx) in healthLabels" :key="`${idx}-tag`" type="info" class="mr-1 mb-1">{{item}}</el-tag>
      </template>
    </div>

    <div class="nutrients"  >
      <table class="w-full" v-if="" >
        <thead >
        <tr
          class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
          <th class="px-4 py-3">Label</th>
          <th class="px-4 py-3">Quantity</th>
          <th class="px-4 py-3">Unit</th>
        </tr>
        </thead>
        <tbody class="bg-white">
        <tr class="text-gray-700" v-for="(item,idx) in nutrientsKcal" :key="`${idx}-table`">
          <td class="px-4 py-3 border">
            {{item.label}}
          </td>
          <td class="px-4 py-3 text-ms font-semibold border">
            {{item.quantity}}
          </td>
          <td class="px-4 py-3 text-xs border">
            {{item.unit}}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        api: process.env.BASE_URL,
        product: '',
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      };
    },
    methods: {
      getNutrition() {
        this.$store.dispatch("cooking/fetch", {
          product: this.product
        });
      }
    },
    computed: {
      nutrientsKcal() {
        return this.$store.getters["cooking/getNutrientsKcal"];
      },
      healthLabels() {
        return this.$store.getters["cooking/getHealthLabels"];
      },
      dietLabels() {
        return this.$store.getters["cooking/getDietLabels"];
      }
    }
  };
</script>
