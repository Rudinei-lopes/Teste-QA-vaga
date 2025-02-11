import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 2,
  duration: "5s",
};

export default function () {
  const url = "https://jsonplaceholder.typicode.com/users";

  const payload = JSON.stringify({
    name: "new user here",
    username: "newuser01",
    email: "newuser@hotmail.com",
    phone: "123-456-7890",
    website: "newusercompany.com",
  });

  const headers = {
    headers: {
      "content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, headers);

  console.log("res", res.body);
  

  check(res, {
    "status é 201": (r) => r.status === 201,
  });

  sleep(1);
}
