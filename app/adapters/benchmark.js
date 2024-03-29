import DS from 'ember-data';
import ENV from 'fyp-app/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.BenchmarkAPI,
  namespace: "performance",
  urlForQuery(query, modelName) {
    let host = this.get('host');
    return host +`/performance/benchmark/`;
  },
  // query(store, type, query) {
  //   return JSON.parse(`{"result": [{"time": 165.81, "ps_cluster_name": "aws.t2.micro", "worker_cluster_name": "aws.t2.micro", "number_ps": 1, "accuracy": 57.99, "number_worker": 2, "price": 664.0, "algo_name": "softmax_regression"}, {"time": 174.67, "ps_cluster_name": "aws.t2.micro", "worker_cluster_name": "aws.t2.micro", "number_ps": 1, "accuracy": 64.8, "number_worker": 3, "price": 700.0, "algo_name": "softmax_regression"}, {"time": 247.96, "ps_cluster_name": "aws.t2.micro", "worker_cluster_name": "aws.t2.micro", "number_ps": 1, "accuracy": 68.8, "number_worker": 4, "price": 992.0, "algo_name": "softmax_regression"}]}`);
  // }
});
