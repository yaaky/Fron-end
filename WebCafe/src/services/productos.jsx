async function GetProductos() {
    try {
        const response = await fetch('http://localhost:3000/productos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching productos');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching productos:', error);
        throw error;
    }
}

async function PostProductos(nombre, producto, categoria) {
    try {
        const userData = { 
            nombre, 
            producto,
            categoria
        };

        const response = await fetch("http://localhost:3000/productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error posting products');
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting products:', error);
        throw error;
    }
}
async function UpdateProductos(nombre,producto,estado,categoria,id) {
    try {
        const userData = {nombre,producto,estado,categoria };

        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Error updating products with id ${id}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating products:', error);
        throw error;
    }
}

async function DeleteProductos(id) {
    try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting products with id ${id}`);
        }

        return { message: `products with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting products:', error);
        throw error;
    }
}


export default { GetProductos, PostProductos, UpdateProductos, DeleteProductos };
