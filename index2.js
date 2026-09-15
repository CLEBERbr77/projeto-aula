const express = require("express");
const server = express();

// Adicione as duas linhas abaixo para garantir a leitura do JSON
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


let customers = [
    {id: 1, name: "Google", site: "http://google.com"},
    {id: 2, name: "UOL", site: "http://uol.com.br"},
    {id: 3, name: "Microsoft", site: "http://microsoft.com"},
    {id: 4, name: "Facebook", site: "http://facebook.com"},
];


server.get("/customers", (req, res) => {
    console.log("GET :: /customers", customers);


    return res.json(customers);
});
//show
server.get("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find(item => item.id === id);
  const status = customer ? 200 : 404;

  console.debug("GET :: /customers/:id", customer, JSON.stringify(customer));

  return res.status(status).json(customer);
});


server.post("/customers", (req, res) => {
    // Se o corpo vier vazio, avisa o Insomnia em vez de quebrar o Node
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "O corpo da requisição está vazio ou mal formatado!" });
    }

    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;
    const newCustomer = { id, name, site };
    customers.push(newCustomer);
    
    return res.status(201).json(newCustomer);
});

server.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers[index] = { id: parseInt(id), name, site };
    }

    return res.status(status).json(customers[index]);
});

server.delete("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers.splice(index, 1);
    }

    return res.status(status).json(index >= 0 ? { message: "Customer deleted successfully" } : { error: "Customer not found" });
});

server.listen(3002);