import React, { useState } from 'react'
import * as Styled from './styles'
import ProductForm from '../../components/ProductForm'
import ProductList from '../../components/ProductList'
import { Product } from '../../interfaces/product'

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [showForm, setShowForm] = useState(false)

    const handleAddProduct = (product: Product) => {
        setProducts([...products, product])
        setShowForm(false)
    }

    return (
        <Styled.Container>
            {showForm ? (
                <ProductForm onAddProduct={handleAddProduct} />
            ) : (
                <>
                    <Styled.Button onClick={() => setShowForm(true)}>
                        Cadastrar Produto
                    </Styled.Button>
                    <ProductList products={products} />
                </>
            )}
        </Styled.Container>
    )
}

export default App
