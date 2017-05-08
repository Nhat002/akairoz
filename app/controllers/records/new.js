import Ember from 'ember';

export default Ember.Controller.extend({
  // email: null,
  // password: null,
  // rememberMe: false,
  // validations: {
  //   email: {
  //     presence: true,
  //     format: {
  //       with: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  //     }
  //   },
  //   password: {
  //     presence: true,
  //     length: { minimum: 6, maximum: 10}
  //   },
  //   comments: {
  //     length: { minimum: 5, maximum: 20}
  //   }
  // },
  benchmarks: [],
  haveBenchmark: Ember.computed.empty("benchmarks"),
  selectedSampleData : "Choose Data",
  sampleData : ["MNIST", "CIPHAR-10"],
  selectedModelType: "Model types",
  selectedInstanceType: "Instance Types",
  typeInputted: Ember.computed('selectedModelType', function(){
    let selectedModelType = this.get('selectedModelType');
    return selectedModelType != "Model types";
  }),
  moneyInputted: Ember.computed.bool('newRecord.money'),
  timeInputted: Ember.computed.bool('newRecord.time'),
  allInputed: Ember.computed.and('typeInputted','moneyInputted', 'timeInputted'),
  benchmarkAlert: Ember.computed.not('allInputed'),
  newRecord: {
    runParams:{},
  },
  instanceTypes: ["t2.micro","t2.small","t2.medium", "t2.large"],
  modelTypes: ["Softmax Regression","Convolutional NN"],
  maxBenchmarkTime: Ember.computed('benchmarks.[]', function(){
    let benchmarks = this.get('benchmarks');
    let maxBenchmarkTime = 0;
    benchmarks.forEach(function(item, index, enumerable){
      if (item.get('time') > maxBenchmarkTime) {
        maxBenchmarkTime = item.get('time');
      }
    });
    return maxBenchmarkTime;
  }),
  maxBenchmarkPrice: Ember.computed('benchmarks.[]', function(){
    let benchmarks = this.get('benchmarks');
    let maxBenchmarkPrice = 0;
    benchmarks.forEach(function(item, index, enumerable){
      if (item.get('price') > maxBenchmarkPrice) {
        maxBenchmarkPrice = item.get('price');
      }
    });
    return maxBenchmarkPrice;
  }),
  actions: {
    submit() {
      let newRecord = this.get("newRecord");
      let data = {
        title: newRecord.title,
        description: newRecord.description,
        datasetLink: newRecord.datasetLink,
        runParams: newRecord.runParams,
        type: newRecord.modelType,
        userId: "1u",
      }
      let controller = this;
      let transitionToRecords = function(){
        controller.replaceRoute("records");
      };
      console.log(data);
      let record = this.store.createRecord('record',data);
      record.save().then(transitionToRecords);
    },
    retrieveBenchmark() {
      let allInputed = this.get('allInputed');
      if (!allInputed) return;
      let newRecord = this.get('newRecord');
      let modelTypes = this.get('modelTypes');
      let sampleData = this.get('sampleData');
      let params = {
        moneyMax: newRecord.money,
        time: newRecord.time,
        algoId: modelTypes.indexOf(newRecord.modelType) + 1,
      };
      let benchmarks = this.store.query('benchmark', params);
      this.set('benchmarks',benchmarks);
      this.set('dataForBenchmark', sampleData[modelTypes.indexOf(newRecord.modelType)]);
    },
    selectInstanceType(instanceType) {
      let newRecord = this.get('newRecord');
      let runParams = newRecord.runParams;
      runParams.instanceType = instanceType;
      this.set('selectedInstanceType', instanceType);
    },
    selectModelType(modelType) {
      let newRecord = this.get('newRecord');
      newRecord.modelType = modelType;
      this.set('benchmarks',[]);
      this.set('selectedModelType', modelType);
    },
    selectSampleData(sampleData) {
      let newRecord = this.get('newRecord');
      if (newRecord.datasetLink == null || newRecord.datasetLink == "") {
        newRecord.datasetLink = sampleData + " sample";
      }
      this.set('selectedSampleData', sampleData);
    },
    willTransition: function(transition){
      this.controller.set('newRecord').clear();
      this.controller.set('selectedInstanceType').clear();
      this.controller.set('selectedModelType').clear();
      this.controller.set('selectedSampleData').clear();
    },
  }
});
