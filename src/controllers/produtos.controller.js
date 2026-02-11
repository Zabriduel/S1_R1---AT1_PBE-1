import produtosModels from "../models/produtos.models.js";

const produtosController = {
    selectTodos: async (req, res) => {
        try {
            const resultado = await produtosModels.selectALL();

            if (resultado.length === 0) {
                return res.status(200).json({ message: "A consulta não retornou resultados" });
            }
            return res.status(200).json({ data: resultado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocurreu um erro no servidor', errorMessage: error.message });
        }
    },
    selectByID: async (req, res) => {
        try {
            const { idProduto } = req.query;
            const resultado = await produtosModels.selectProduto(idProduto);
            if (resultado === 0) {
                return res.status(200).json({ message: "A consulta não retornou resultados" });
            }
            res.status(200).json({data: resultado})
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocurreu um erro no servidor', errorMessage: error.message });
        }
    },

    incluiProdutos: async (req, res) => {
        try {
            const { idCategoria, nomeProduto, valorProduto } = req.body
            console.log(idCategoria);

            if (!req.file) {
                return res.status(400).json({ message: 'Arquivo não enviado' });
            }
            const image = req.file.filename;

            const resultado = await produtosModels.insert(idCategoria, nomeProduto, valorProduto, image);

            if (resultado.insertId === 0) {
                throw new Error('Ocorreu um erro ao incluir categoria');
            }

            res.status(201).json({ message: 'Registro incluido com sucesso', data: resultado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocurreu um erro no servidor', errorMessage: error.message });
        }
    },
    deletarProduto: async (req, res) => {
        try {
            const { idProduto } = req.query;
            const resultado = await produtosModels.delete(idProduto);

            if (resultado.affectedRows === 0) {
                return res.status(200).json({ message: 'Ocorreu um erro ao excluir o item' });
            }

            res.status(200).json({message:"Produto excluído com sucesso"})
        } catch (error) {
            console.error(error);
            res.status(500).json({ messge: 'Ocorreu um erro no servidor', errorMessage })
        }
    }
}

export default produtosController;