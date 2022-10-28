function cinema(input) {
  let index = 0;
  let command = input[index];
  index++;

  let studentCount = 0;
  let standardCount = 0;
  let kidCount = 0;

  let totalTicket = 0;

  while (command !== "Finish") {
    let name = command;
    let space = Number(input[index]);
    index++;
    let soldTicket = 0;

    let tempCommand = input[index];
    index++;

    while (tempCommand !== "End") {
      let ticket = tempCommand;
      soldTicket++;

      switch (ticket) {
        case "student":
          studentCount++;
          break;
        case "standard":
          standardCount++;
          break;
        case "kid":
          kidCount++;
          break;
      }
      if (space === soldTicket) {
        break;
      }
      tempCommand = input[index];
      index++;
    }

    totalTicket += soldTicket;
    let percent = soldTicket / space * 100;
    console.log(`${name} - ${percent.toFixed(2)}% full.`);



    command = input[index];
    index++;
  }
  console.log(`Total tickets: ${totalTicket}`);

  let studentTicketPercent = studentCount / totalTicket * 100;
  let standardTicketPercent = standardCount / totalTicket * 100;
  let kidTicketPercent = kidCount / totalTicket * 100;

  console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardTicketPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidTicketPercent.toFixed(2)}% kids tickets.`);
}

cinema(["The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish"]);