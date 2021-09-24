<!-- Please remove this file from your project -->
<template>
  <div class="p-5">
    <h3 class="text-center mb-5 font-semibold">Enter a product to search for a recipe</h3>
    <div class="flex mb-3">
      <el-input placeholder="Enter product" class="mr-3" v-model="product"></el-input>
      <el-button type="primary" @click="getNutrition" icon="el-icon-search">Search</el-button>
    </div>
    <div class="dietLabels mb-2">
      <template v-if="dietLabels.length">
        <el-tag v-for="(item,idx) in dietLabels" :key="`${idx}-tagLabel`" type="success" class="mr-1 mb-1">{{item}}</el-tag>
      </template>
    </div>
    <div class="tag">
      <template v-if="healthLabels.length">
        <el-tag v-for="(item,idx) in healthLabels" :key="`${idx}-tag`" type="info" class="mr-1 mb-1">{{item}}</el-tag>
      </template>
    </div>

    <div class="nutrients">
      {{nutrientsKcal}}
<!--            <el-table-->
<!--              :data="nutrientsKcal"-->
<!--              style="width: 100%">-->
<!--              <el-table-column-->
<!--                v-for="(item,idx) in nutrientsKcal" :key="`${idx}-tr`"-->
<!--                :prop="item.label"-->
<!--                label="Label"-->
<!--                width="180">-->
<!--              </el-table-column>-->

<!--            </el-table>-->
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
