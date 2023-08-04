<template>
  <d-form :data="formModel">
    <d-row :gutter="{ xs: 10, sm: 40 }">
      <d-col :span="24" class="col-gutter">
        <d-form-item field="rangeDatePickerPro" label="收费日期">
          <d-range-date-picker-pro format="YYYY/MM/DD" v-model="formModel.rangeDatePickerPro"></d-range-date-picker-pro>
        </d-form-item>
      </d-col>
    </d-row>
    <h3>上次表数 {{ filterTime(formModel.rangeDatePickerPro[0]) }}</h3>
    <br />
    <d-row :gutter="{ xs: 10, sm: 40 }">
      <d-col :span="6" class="col-gutter">
        <d-form-item field="syzsb" label="上次总水表">
          <d-input width="200px" v-model="formModel.syzsb" placeholder="请输入"></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="sygls" label="上次阁楼水">
          <d-input width="200px" v-model="formModel.sygls" placeholder="请输入"></d-input>
        </d-form-item>
      </d-col>
    </d-row>

    <h3>本次表数 {{ filterTime(formModel.rangeDatePickerPro[1]) }}</h3>
    <br />

    <d-row :gutter="{ xs: 10, sm: 40 }">
      <d-col :span="6" class="col-gutter">
        <d-form-item field="byzsb" label="本次总水表">
          <d-input width="200px" v-model="formModel.byzsb" placeholder="请输入"></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="bygls" label="本次阁楼水">
          <d-input width="200px" v-model="formModel.bygls" placeholder="请输入"></d-input>
        </d-form-item>
      </d-col>
    </d-row>

    <h3>水水情况</h3>
    <br />

    <d-row :gutter="{ xs: 10, sm: 40 }">
      <d-col :span="6" class="col-gutter">
        <d-form-item field="glys" label="阁楼总水">
          <d-input width="200px" v-model="formModel.glys" placeholder="请输入" disabled></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="fiveys" label="408总水">
          <d-input width="200px" v-model="formModel.fiveys" placeholder="请输入" disabled></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="byylzs" label="本次总水">
          <d-input width="200px" v-model="formModel.byylzs" placeholder="请输入" disabled></d-input>
        </d-form-item>
      </d-col>
    </d-row>
    <h3>收取水费</h3>
    <br />
    <d-row :gutter="{ xs: 10, sm: 40 }">
      <d-col :span="6" class="col-gutter">
        <d-form-item field="glsf" label="阁楼水费">
          <d-input width="200px" v-model="formModel.glsf" placeholder="请输入" disabled></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="fivesf" label="408水费">
          <d-input width="200px" v-model="formModel.fivesf" placeholder="请输入" disabled></d-input>
        </d-form-item>
      </d-col>
    </d-row>
    <d-form-operation class="form-demo-form-operation">
      <d-button variant="solid" @click="count">计算</d-button>
    </d-form-operation>
  </d-form>
</template>
  
<script lang="ts" scoped>
import { defineComponent, reactive } from 'vue';
import { date } from 'cat-kit';

export default defineComponent({
  setup() {
    let formModel = reactive({
      syzsb: 0,//上次总水表
      sygls: 0,//上次阁楼水
      byzsb: 0,//本次总水表
      bygls: 0,//本次阁楼水


      byylzs: 0, //408+阁楼总水
      glys: 0, //阁楼总水
      fiveys: 0, //408总水
      
      glsf: 0,//阁楼水费
      fivesf: 0,//408水费,
      rangeDatePickerPro: ['', date().format('yyyy-MM-dd')]
    });

    return {
      formModel,
    };
  },
  methods: {
    count() {
      // 408+阁楼总水  = 本次总水表 - 上次总水表
      this.formModel.byylzs = Number((this.formModel.byzsb - this.formModel.syzsb).toFixed(2))

      // 阁楼总水 = 本次阁楼水-上次阁楼水
      this.formModel.glys = Number((this.formModel.bygls - this.formModel.sygls).toFixed(2))

      // 408水 = 408+阁楼总水 - 阁楼总水
      this.formModel.fiveys = Number(( this.formModel.byylzs - this.formModel.glys).toFixed(2))

      // 阁楼水费
      this.formModel.glsf = Number(( this.formModel.glys * 0.7).toFixed(2))

      // 阁楼水费
      this.formModel.fivesf = Number(( this.formModel.fiveys * 0.5).toFixed(2))
      
    },
    filterTime(val:any){

      return val?date(val).format('yyyy-MM-dd'):''
    }
  },
});
</script>
  
<style lang="scss" scoped>
.form-demo-set-form-size {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.form-demo-form-operation>* {
  margin-right: 8px;
}
::v-deep .devui-form__label {
    align-self: center;
}
::v-deep .devui-input--disabled{
  background-color: #fff;
  color: var(--devui-text, #252b3a) !important;
  .devui-input__inner{
  color: var(--devui-text, #252b3a);

  }
}
</style>
  