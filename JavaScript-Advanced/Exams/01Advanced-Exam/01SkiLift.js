window.addEventListener('load', solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const peopleCountInput = document.getElementById('people-count');
  const fromDateInput = document.getElementById('from-date');
  const daysCountInput = document.getElementById('days-count');

  const ticketInfoList = document.querySelector('.ticket-info-list');

  const nextButton = document.getElementById('next-btn');

  nextButton.addEventListener('click', (event) => {
    event.preventDefault();

    savedValues = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      peopleCount: peopleCountInput.value,
      fromDate: fromDateInput.value,
      daysCount: daysCountInput.value
    };

    if (!firstNameInput.value == '' &&
      !lastNameInput.value == '' &&
      !peopleCountInput.value == '' &&
      !fromDateInput.value == '' &&
      !daysCountInput.value == '') {

      nextButton.disabled = true;

      const ticketItem = document.createElement('li');
      ticketItem.classList.add('ticket');

      const article = document.createElement('article');

      const nameHeading = document.createElement('h3');
      nameHeading.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

      const fromDateParagraph = document.createElement('p');
      fromDateParagraph.textContent = `From date: ${fromDateInput.value}`;

      const daysCountParagraph = document.createElement('p');
      daysCountParagraph.textContent = `For ${daysCountInput.value} days`;

      const peopleCountParagraph = document.createElement('p');
      peopleCountParagraph.textContent = `For ${peopleCountInput.value} people`;

      const editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      editButton.textContent = 'Edit';

      const cancelButton = document.createElement('button');
      cancelButton.classList.add('cancel-btn');
      cancelButton.textContent = 'Cancel';

      const continueButton = document.createElement('button');
      continueButton.classList.add('continue-btn');
      continueButton.textContent = 'Continue';

      article.appendChild(nameHeading);
      article.appendChild(fromDateParagraph);
      article.appendChild(daysCountParagraph);
      article.appendChild(peopleCountParagraph);
      ticketItem.appendChild(article);
      ticketItem.appendChild(editButton);
      ticketItem.appendChild(continueButton);
      ticketInfoList.appendChild(ticketItem);
      //EDIT BUTTON//
      //EDIT BUTTON//
      //EDIT BUTTON//
      editButton.addEventListener('click', (event) => {
        event.preventDefault();
        firstNameInput.value = savedValues.firstName;
        lastNameInput.value = savedValues.lastName;
        peopleCountInput.value = savedValues.peopleCount;
        fromDateInput.value = savedValues.fromDate;
        daysCountInput.value = savedValues.daysCount;

        event.target.parentNode.remove();
        nextButton.disabled = false;
      });

      firstNameInput.value = '';
      lastNameInput.value = '';
      peopleCountInput.value = '';
      fromDateInput.value = '';
      daysCountInput.value = '';
      //CONTINUE BUTTON//
      //CONTINUE BUTTON//
      //CONTINUE BUTTON//
      continueButton.addEventListener('click', () => {
        const ticketItem = ticketInfoList.lastElementChild;

        ticketItem.removeChild(editButton);
        ticketItem.removeChild(continueButton);

        const confirmButton = document.createElement('button');
        confirmButton.classList.add('confirm-btn');
        confirmButton.textContent = 'Confirm';

        ticketItem.appendChild(confirmButton);
        ticketItem.appendChild(cancelButton);

        const confirmTicketList = document.querySelector('.confirm-ticket');
        confirmTicketList.appendChild(ticketItem);

        nextButton.disabled = false;

        confirmButton.addEventListener('click', (event) => {
          event.preventDefault();
          const mainDiv = document.getElementById('main');
          const thankYouHeading = document.createElement('h1');
          thankYouHeading.id = 'thank-you';
          thankYouHeading.textContent = 'Thank you, have a nice day!';

          const backButton = document.createElement('button');
          backButton.id = 'back-btn';
          backButton.textContent = 'Back';
          backButton.addEventListener('click', (event) => {
            event.preventDefault();
            thankYouHeading.remove();
            backButton.remove();
            mainDiv.style.display = 'block';
            location.reload();
          });

          mainDiv.style.display = 'none';
          document.body.appendChild(thankYouHeading);
          document.body.appendChild(backButton);
        });
        //CANCEL BUTTON//
        //CANCEL BUTTON//
        //CANCEL BUTTON//
        cancelButton.addEventListener('click', () => {
          ticketItem.remove();
          nextButton.disabled = false;
        });
      });
    }
  });
}