import categoriasModel from "../models/categorias.model.js";

const categoriasController = {
    selectTodos: async (req, res) => {
        try {
            const resultado = await categoriasModel.selectALL();

            if (resultado.length === 0) {
                return res.status(200).json({ message: "A consulta não retornou resultados" });
            }
            return res.status(200).json({ data: resultado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocurreu um erro no servidor', errorMessage: error.message });
        }
    },
    selectById: async (req, res) => {
        try {
            const { idCategoria } = req.query;
            const resultado = await categoriasModel.selectCategoria(idCategoria);
            if (resultado === 0) {
                return res.status(200).json({ messa: 'A consulta não retornou resultados' });
            }
            res.status(200).json({ data: resultado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocurreu um erro no servidor', errorMessage: error.message });
        }
    },
    incluiCategorias: async (req, res) => {
        try {
            const { descricaoCategoria } = req.query
            const resultado = await categoriasModel.insert(descricaoCategoria);

            if (resultado.insertId === 0) {
                throw new Error('Ocorreu um erro ao incluir categoria');
            }

            res.status(201).json({ message: 'Registro incluido com sucesso', data: resultado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocurreu um erro no servidor', errorMessage: error.message });
        }
    },
    deletarCategoria: async (req, res) => {
        try {
            const { idCategoria } = req.query;
            const resultado = await categoriasModel.delete(idCategoria);
            if (resultado.affectedRows === 0) {
                return res.status(200).json({ message: "Ocorreu um erro ao excluir o produto" });
            }
            res.status(200).json({ message: "Produto excluído com sucesso!" });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocurreu um erro no servidor', errorMessage: error.message });
        }

    }
}

export default categoriasController;