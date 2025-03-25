async function GetProductos() {
    try {
        const response = await fetch('http://localhost:3001/Productos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Productos');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching Productos:', error);
        throw error;
    }
}

async function PostProductos(nombre, prd) {
    try {
        const userData = { 
            nombre, 
            prd,
            categoria:"media"
        };

        const response = await fetch("http://localhost:3001/Productos", {
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

async function UpdateProductos(nombre,tarea,estado,id) {
    try {
        const userData = {nombre, prd, categoria };

        const response = await fetch(`http://localhost:3001/Productos/${id}`, {
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
        const response = await fetch(`http://localhost:3001/Productos/${id}`, {
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
