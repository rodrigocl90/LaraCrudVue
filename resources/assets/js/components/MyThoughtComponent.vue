<template>

  <hot-table :settings="hotSettings"></hot-table>
</template>

<script>
  import Vue from 'vue';
  import { HotTable } from '@handsontable/vue';
  import Handsontable from 'handsontable';
  
  new Vue({
    el: '#example1',
    data: function() {
      return {
        hotSettings: {
          data: Handsontable.helper.createSpreadsheetData(6, 10),
          colHeaders: true
        }
      }
    },
    components: {
      HotTable
    }
  });
</script>
