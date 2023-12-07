<!-- <router title="电费收取" /> -->
<template>
  <d-form :data="formModel">
    <d-row :gutter="{xs: 10, sm: 40}">
      <d-col :span="24" class="col-gutter">
        <d-form-item field="rangeDatePickerPro" label="收费日期">
          <d-range-date-picker-pro
            format="YYYY/MM/DD"
            v-model="formModel.rangeDatePickerPro"
          ></d-range-date-picker-pro>
        </d-form-item>
      </d-col>
    </d-row>
    <h3>上次表数 {{ filterTime(formModel.rangeDatePickerPro[0]) }}</h3>
    <br />
    <d-row :gutter="{xs: 10, sm: 40}">
      <d-col :span="6" class="col-gutter">
        <d-form-item field="syzdb" label="上次总电表">
          <d-input
            width="200px"
            v-model="formModel.syzdb"
            placeholder="请输入"
          ></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="sygld" label="上次阁楼电">
          <d-input
            width="200px"
            v-model="formModel.sygld"
            placeholder="请输入"
          ></d-input>
        </d-form-item>
      </d-col>
      <!-- <d-col :span="6" class="col-gutter">
        <d-form-item field="syzsb" label="上次总水表">
          <d-input width="200px" v-model="formModel.syzsb" placeholder="请输入"></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="sygls" label="上次阁楼水">
          <d-input width="200px" v-model="formModel.sygls" placeholder="请输入"></d-input>
        </d-form-item>
      </d-col> -->
    </d-row>

    <h3>本次表数 {{ filterTime(formModel.rangeDatePickerPro[1]) }}</h3>
    <br />

    <d-row :gutter="{xs: 10, sm: 40}">
      <d-col :span="6" class="col-gutter">
        <d-form-item field="byzdb" label="本次总电表">
          <d-input
            width="200px"
            v-model="formModel.byzdb"
            placeholder="请输入"
          ></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="bygld" label="本次阁楼电">
          <d-input
            width="200px"
            v-model="formModel.bygld"
            placeholder="请输入"
          ></d-input>
        </d-form-item>
      </d-col>
    </d-row>

    <h3>用电情况</h3>
    <br />

    <d-row :gutter="{xs: 10, sm: 40}">
      <d-col :span="6" class="col-gutter">
        <d-form-item field="fiveyd" label="408总用电">
          <d-input
            width="200px"
            v-model="formModel.fiveyd"
            placeholder="请输入"
            disabled
          ></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="glyd" label="阁楼总用电">
          <d-input
            width="200px"
            v-model="formModel.glyd"
            placeholder="请输入"
            disabled
          ></d-input>
        </d-form-item>
      </d-col>

      <d-col :span="6" class="col-gutter">
        <d-form-item field="byylzd" label="本次总用电">
          <d-input
            width="200px"
            v-model="formModel.byylzd"
            placeholder="请输入"
            disabled
          ></d-input>
        </d-form-item>
      </d-col>
    </d-row>
    <h3>收取电费</h3>
    <br />
    <d-row :gutter="{xs: 10, sm: 40}">
      <d-col :span="6" class="col-gutter">
        <d-form-item field="fivedf" label="408电费">
          <d-input
            width="200px"
            v-model="formModel.fivedf"
            placeholder="请输入"
            disabled
          ></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="gldf" label="阁楼电费">
          <d-input
            width="200px"
            v-model="formModel.gldf"
            placeholder="请输入"
            disabled
          ></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="zdf" label="总电费">
          <d-input
            width="200px"
            v-model="formModel.zdf"
            placeholder="请输入"
            disabled
          ></d-input>
        </d-form-item>
      </d-col>
      <d-col :span="6" class="col-gutter">
        <d-form-item field="sjzdf" label="实际总电费">
          <d-input
            width="200px"
            v-model="formModel.sjzdf"
            placeholder="请输入"
            disabled
          ></d-input>
        </d-form-item>
      </d-col>
    </d-row>
    <d-row :gutter="{xs: 10, sm: 40}">
      <d-col :span="6" class="col-gutter">
        <d-form-item field="threeAvg" label="408平均电费">
          <d-input
            width="200px"
            v-model="formModel.threeAvg"
            disabled
          ></d-input>
        </d-form-item>
      </d-col>
    </d-row>
    <d-form-operation class="form-demo-form-operation">
      <d-button variant="solid" @click="count">计算</d-button>
    </d-form-operation>
  </d-form>
</template>

<script lang="ts" scoped>
import {defineComponent, reactive} from "vue"
import {date, n} from "cat-kit"

export default defineComponent({
  setup() {
    let formModel = reactive({
      /**上次总电表 */
      syzdb: 46043,
      /**上次阁楼电 */
      sygld: 17169,
      /**本次总电表 */
      byzdb: 47971,
      /**本次阁楼电 */
      bygld: 18205,

      /**408+阁楼总用电 */
      byylzd: 0,
      /**阁楼总用电 */
      glyd: 0,
      /**408总用电 */
      fiveyd: 0,

      /**阁楼电费 */
      gldf: 0,
      /**408电费 */
      fivedf: 0,
      /**收取总电费 */
      zdf: 1507,
      /**实际总电费 */
      sjzdf: 0,
      rangeDatePickerPro: ["2023/10/07", date().format("yyyy-MM-dd")],
      threeAvg: 0,
    })

    return {
      formModel,
    }
  },
  methods: {
    count() {
      // 408+阁楼总用电  = 本次总电表 - 上次总电表
      this.formModel.byylzd = n.minus(
        this.formModel.byzdb,
        this.formModel.syzdb
      )

      // 阁楼总用电 = 本次阁楼电-上次阁楼电
      this.formModel.glyd = n.minus(this.formModel.bygld, this.formModel.sygld)

      // 408用电 = 408+阁楼总用电 - 阁楼总用电
      this.formModel.fiveyd = n.minus(
        this.formModel.byylzd,
        this.formModel.glyd
      )

      /**平均电费 */
      let avg = n.div(this.formModel.zdf, this.formModel.byylzd)
      // 阁楼电费
      this.formModel.gldf = n.mul(this.formModel.glyd, avg)

      // 408电费
      this.formModel.fivedf = n.mul(this.formModel.fiveyd, avg)

      this.formModel.sjzdf = n.plus(this.formModel.gldf, this.formModel.fivedf)

      this.formModel.threeAvg = n.div(this.formModel.fivedf, 3)
    },
    filterTime(val: any) {
      return val ? date(val).format("yyyy-MM-dd") : ""
    },
  },
})
</script>

<style lang="scss" scoped>
.form-demo-set-form-size {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.form-demo-form-operation > * {
  margin-right: 8px;
}
::v-deep .devui-form__label {
  align-self: center;
}
::v-deep .devui-input--disabled {
  background-color: #fff;
  color: var(--devui-text, #252b3a) !important;
  .devui-input__inner {
    color: var(--devui-text, #252b3a);
  }
}
</style>
