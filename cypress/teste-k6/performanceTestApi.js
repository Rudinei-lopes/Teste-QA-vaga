import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 100, 
  duration: '30s', 
};

export default function () {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const res = http.get(url); 

  check(res, {
    'status é 200': (r) => r.status === 200, 
    'tempo de resposta < 500ms': (r) => r.timings.duration < 500, 
  });

  sleep(1); 
}