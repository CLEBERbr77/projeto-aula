import Customer from "../models/customer";

class CustomersController {
  // Listar todos os clientes
  async index(req, res) {
    try {
      const data = await Customer.findAll({ limit: 1000 });
      return res.json(data);
    } catch (err) {
      console.error("Erro no banco (index):", err.message);
      return res.status(500).json({ 
        error: "Erro ao buscar registros no banco de dados.",
        detail: err.message 
      });
    }
  }

  // Buscar apenas um cliente pelo ID
  async show(req, res) {
    try {
      const { id } = req.params;
      const customer = await Customer.findByPk(id);

      if (!customer) {
        return res.status(404).json({ error: "Cliente não encontrado." });
      }

      return res.json(customer);
    } catch (err) {
      console.error("Erro no banco (show):", err.message);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  // Criar um novo cliente no banco
  async create(req, res) {
    try {
      const { name, site, email, status } = req.body;

      if (!name) {
        return res.status(400).json({ error: "O campo 'name' é obrigatório." });
      }

      const newCustomer = await Customer.create({ name, site, email, status });
      return res.status(201).json(newCustomer);
    } catch (err) {
      console.error("Erro no banco (create):", err.message);
      return res.status(500).json({ error: "Erro ao salvar cliente no banco de dados." });
    }
  }

  // Atualizar dados de um cliente existente
  async update(req, res) {
    try {
      const { id } = req.params;
      const customer = await Customer.findByPk(id);

      if (!customer) {
        return res.status(404).json({ error: "Cliente não encontrado." });
      }

      await customer.update(req.body);
      return res.json(customer);
    } catch (err) {
      console.error("Erro no banco (update):", err.message);
      return res.status(500).json({ error: "Erro ao atualizar cliente." });
    }
  }

  // Remover cliente do banco
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const customer = await Customer.findByPk(id);

      if (!customer) {
        return res.status(404).json({ error: "Cliente não encontrado." });
      }

      await customer.destroy();
      return res.status(200).json({ message: "Cliente deletado com sucesso." });
    } catch (err) {
      console.error("Erro no banco (destroy):", err.message);
      return res.status(500).json({ error: "Erro ao remover cliente." });
    }
  }
}

export default new CustomersController();