function tickets(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketsArr = [];

    for (const item of arr) {
        let [destination, price, status] = item.split('|');
        price = Number(price);
        const ticket = new Ticket(destination, price, status);
        ticketsArr.push(ticket);
    }

    return ticketsArr.sort((a, b) => {
        if (criteria === 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (criteria === 'price') {
            return a.price - b.price;
        } else if (criteria === 'status') {
            return a.status.localeCompare(b.status);
        }
    });
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');