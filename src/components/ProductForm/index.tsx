import React, { useState } from 'react'
import * as Styled from './styles'
import { Product } from '../../interfaces/product'

interface ProductFormProps {
    onAddProduct: (product: Product) => void
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [available, setAvailable] = useState('yes')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newProduct = {
            name,
            description,
            price: parseFloat(price),
            available: available === 'yes',
        }
        onAddProduct(newProduct)
    }

    return (
        <Styled.Form onSubmit={handleSubmit}>
            <Styled.Label>
                Nome do produto:
                <Styled.Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Styled.Label>
            <Styled.Label>
                Descrição do produto:
                <Styled.Input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </Styled.Label>
            <Styled.Label>
                Valor do produto:
                <Styled.Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </Styled.Label>
            <Styled.Label>
                Disponível para venda:
                <Styled.Select
                    value={available}
                    onChange={(e) => setAvailable(e.target.value)}
                    required
                >
                    <option value="yes">Sim</option>
                    <option value="no">Não</option>
                </Styled.Select>
            </Styled.Label>
            <Styled.Button type="submit">Cadastrar</Styled.Button>
        </Styled.Form>
    )
}

export default ProductForm
