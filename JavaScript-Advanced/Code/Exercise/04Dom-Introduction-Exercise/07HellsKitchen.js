function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs>textarea');
   const bestRestaurantsP = document.querySelector('#bestRestaurant>p');
   const workersP = document.querySelector('#outputs #workers p');

   function onClick() {
      let arr = JSON.parse(input.value);
      let restaurants = {};

      arr.forEach(line => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = [];

         for (const worker of workersArr) {
            let workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workers.push({ name: workerTokens[0], salary })
         }

         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary,
         };
      });

      let bestRestaurantsSalary = 0;
      let best = undefined;
      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantsSalary) {
            bestRestaurantsSalary = restaurants[name].averageSalary;
            best = { name, ...restaurants[name] };
         }
      }
      bestRestaurantsP.textContent = `Name: ${best.name
         } Average Salary: ${best.averageSalary.toFixed(
            2
         )} Best Salary: ${best.bestSalary.toFixed(2)}`;

      let workersResult = [];
      best.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });

      workersP.innerText = workersResult.join(' ');
   }
}