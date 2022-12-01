
const order = {
  customer: {
     address: {
      city: "Pavia"}
  }
}
;

if (!order?.customer?.address?.city) {
console.log('City is required');
}